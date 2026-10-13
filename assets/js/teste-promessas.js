/*
 * Teste das Promessas — lógica no navegador.
 *
 * O navegador só mostra e recolhe: não tem a chave de respostas, não corrige,
 * não conta tentativas e não gera códigos. Tudo isso é feito pelo servidor
 * (Apps Script, apps-script/teste-promessas/). Nada é guardado em localStorage.
 */
(function () {
  'use strict';

  const dialogo = document.getElementById('tp-dialogo');
  const dadosElemento = document.getElementById('tp-dados');
  if (!dialogo || !dadosElemento) return;

  const dados = JSON.parse(dadosElemento.textContent);
  const endpoint = (dialogo.dataset.endpoint || '').trim();
  const PASSOS = ['inicio', 'identificacao', 'percurso', 'teste', 'resultado'];
  const NOMES_PASSOS = ['Antes de começar', 'Identificação', 'Percurso', 'Teste', 'Resultado'];

  const MENSAGENS = {
    rede: 'Não foi possível contactar o servidor. Verifica a ligação à Internet e tenta novamente.',
    interno: 'Ocorreu um erro no servidor. Tenta novamente dentro de alguns minutos.',
    ocupado: 'O servidor está ocupado. Tenta novamente dentro de alguns segundos.',
    configuracao: 'O teste ainda não está configurado. Fala com o teu Chefe de Unidade.',
    totem_invalido: 'Esse Totem não está disponível. Escolhe outro ou fala com o teu Chefe de Unidade.',
    email_incorreto: 'O email não corresponde ao registo do Agrupamento. Corrige-o e tenta novamente.',
    identificacao_bloqueada: 'Não foi possível confirmar a tua identidade. Fala com o teu Chefe de Unidade para confirmar o email registado.',
    percurso_indisponivel: 'Este percurso ainda não tem perguntas aprovadas pela Equipa de Animação.',
    dados_desatualizados: 'O site ainda não tem a versão mais recente das perguntas. Não gastaste nenhuma tentativa — tenta novamente mais tarde.',
    ja_aprovado: 'Já foste aprovado neste ano escutista. Não precisas de fazer o teste outra vez.',
    sessao_ativa: 'Já tens um teste aberto noutra janela ou dispositivo.',
    limite_tentativas: 'Já usaste as 2 tentativas deste ano escutista nesta secção. Fala com o teu Chefe de Unidade.',
    percurso_fixo: 'As duas tentativas têm de ser no mesmo percurso.',
    sessao_invalida: 'Esta sessão de teste já não é válida.',
    sessao_expirada: 'O tempo para entregar o teste terminou. A tentativa contou como não concluída.',
    chave_alterada: 'As perguntas foram atualizadas pela Equipa de Animação durante o teu teste. Esta tentativa foi anulada e não conta — podes começar de novo.',
    respostas_incompletas: 'Responde a todas as perguntas antes de entregar.',
    respostas_invalidas: 'As respostas enviadas não são válidas. Recarrega a página e tenta novamente.',
    pedido_invalido: 'O pedido não é válido. Recarrega a página e tenta novamente.'
  };

  const estado = { passo: 'inicio', membroId: '', email: '', info: null, percurso: '', token: '', perguntas: [], aFechar: false };
  const $ = (seletor, raiz) => (raiz || dialogo).querySelector(seletor);
  const $$ = (seletor, raiz) => Array.from((raiz || dialogo).querySelectorAll(seletor));
  let ultimoFoco = null;

  /* ------------------------------- Servidor ------------------------------- */

  async function api(acao, corpo) {
    if (!endpoint) return { ok: false, erro: 'configuracao' };
    const controlador = new AbortController();
    const temporizador = window.setTimeout(() => controlador.abort(), 25000);
    try {
      const resposta = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(Object.assign({ acao: acao }, corpo)),
        redirect: 'follow',
        signal: controlador.signal
      });
      const json = await resposta.json();
      return json && typeof json === 'object' ? json : { ok: false, erro: 'interno' };
    } catch (erro) {
      return { ok: false, erro: 'rede' };
    } finally {
      window.clearTimeout(temporizador);
    }
  }

  function mensagemErro(r) {
    let texto = MENSAGENS[r.erro] || MENSAGENS.interno;
    if (r.erro === 'email_incorreto' && r.tentativasRestantes !== undefined) {
      texto += r.tentativasRestantes === 1
        ? ' Resta-te 1 tentativa antes de teres de falar com o teu Chefe de Unidade.'
        : ' Restam-te ' + r.tentativasRestantes + ' tentativas.';
    }
    if (r.erro === 'identificacao_bloqueada' && r.minutos) texto += ' (Bloqueado durante ' + r.minutos + ' minutos.)';
    if (r.erro === 'sessao_ativa' && r.minutosRestantes) texto += ' Termina-o, ou espera ' + r.minutosRestantes + ' minutos: depois disso conta como não concluído.';
    return texto;
  }

  function mostrarMensagem(elemento, texto, tipo) {
    elemento.className = 'tp-mensagem ' + (tipo || 'erro');
    elemento.textContent = texto || '';
  }

  /* ------------------------------- Navegação ------------------------------- */

  function irPara(passo) {
    estado.passo = passo;
    const indice = PASSOS.indexOf(passo);
    $$('[data-tp-painel]').forEach((painel) => { painel.hidden = painel.dataset.tpPainel !== passo; });
    $('[data-tp-passo-texto]').textContent = 'Passo ' + (indice + 1) + ' de ' + PASSOS.length + ' · ' + NOMES_PASSOS[indice];
    $('[data-tp-passo-barra]').value = indice + 1;
    $('.tp-corpo').scrollTop = 0;
    const titulo = $('[data-tp-painel="' + passo + '"] h3');
    if (titulo) titulo.focus();
  }

  function abrir() {
    if (dialogo.open) return;
    ultimoFoco = document.activeElement;
    reiniciar();
    document.documentElement.classList.add('tp-aberto');
    dialogo.showModal();
    // Entrada no histórico: o botão «voltar» passa a pedir confirmação em vez de mostrar a página de estudo.
    window.history.pushState({ testePromessas: true }, '');
    $('[data-tp-indisponivel]').hidden = Boolean(endpoint);
    $('[data-tp-ir="identificacao"]').disabled = !endpoint;
    irPara('inicio');
  }

  function podeSair() {
    if (estado.passo !== 'teste') return true;
    return window.confirm('Se saíres agora, esta tentativa conta como não concluída. Queres mesmo sair?');
  }

  function fechar(viaHistorico) {
    estado.aFechar = true;
    dialogo.close();
    document.documentElement.classList.remove('tp-aberto');
    if (!viaHistorico && window.history.state && window.history.state.testePromessas) window.history.back();
    reiniciar();
    if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
    window.setTimeout(() => { estado.aFechar = false; }, 0);
  }

  function pedirFecho() {
    if (podeSair()) fechar(false);
  }

  function reiniciar() {
    Object.assign(estado, { passo: 'inicio', membroId: '', email: '', info: null, percurso: '', token: '', perguntas: [] });
    $('[data-tp-form-identificacao]').reset();
    $('#tp-nin').value = '';
    $('[data-tp-grelha]').replaceChildren();
    $$('.tp-mensagem').forEach((m) => { if (!m.hasAttribute('data-tp-indisponivel')) m.textContent = ''; });
  }

  /* ----------------------------- 2. Identificação ----------------------------- */

  let totens = [];

  async function carregarTotens() {
    const seletor = $('#tp-totem');
    const mensagem = $('[data-tp-mensagem-identificacao]');
    seletor.disabled = true;
    seletor.replaceChildren(new Option('A carregar…', ''));
    const r = await api('totens', { seccao: dados.seccao });
    seletor.replaceChildren(new Option('Escolhe o teu Totem', ''));
    if (!r.ok) {
      mostrarMensagem(mensagem, mensagemErro(r));
      return;
    }
    totens = r.totens || [];
    totens.forEach((t) => seletor.append(new Option(t.totem, t.id)));
    seletor.disabled = false;
    if (!totens.length) mostrarMensagem(mensagem, 'Ainda não há Totens registados para esta secção. Fala com o teu Chefe de Unidade.');
  }

  $('#tp-totem').addEventListener('change', (evento) => {
    const escolhido = totens.filter((t) => t.id === evento.target.value)[0];
    $('#tp-nin').value = escolhido ? escolhido.ninMascarado : '';
  });

  $('[data-tp-form-identificacao]').addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const mensagem = $('[data-tp-mensagem-identificacao]');
    const membroId = $('#tp-totem').value;
    const email = $('#tp-email').value.replace(/\s+/g, '').toLowerCase();
    if (!membroId) { mostrarMensagem(mensagem, 'Escolhe o teu Totem.'); $('#tp-totem').focus(); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { mostrarMensagem(mensagem, 'Escreve um email válido.'); $('#tp-email').focus(); return; }

    const botao = formulario.querySelector('[type="submit"]');
    botao.disabled = true;
    mostrarMensagem(mensagem, 'A confirmar…', 'info');
    const r = await api('identificar', { seccao: dados.seccao, membroId: membroId, email: email });
    botao.disabled = false;
    if (!r.ok) {
      mostrarMensagem(mensagem, mensagemErro(r));
      $(r.erro === 'email_incorreto' ? '#tp-email' : '#tp-totem').focus();
      return;
    }
    mostrarMensagem(mensagem, '');
    Object.assign(estado, { membroId: membroId, email: email, info: r });
    prepararPercursos();
    irPara('percurso');
  });

  /* ------------------------------- 3. Percurso ------------------------------- */

  function prepararPercursos() {
    const info = estado.info;
    const mensagem = $('[data-tp-mensagem-percurso]');
    $('[data-tp-info-tentativas]').textContent = 'Olá, ' + info.totem + '! Ano escutista ' + info.anoEscutista + ': já usaste ' +
      info.tentativasUsadas + ' de ' + info.maxTentativas + ' tentativas nesta secção.';
    let bloqueio = '';
    if (info.aprovado) bloqueio = MENSAGENS.ja_aprovado;
    else if (info.sessaoAtiva) bloqueio = mensagemErro({ erro: 'sessao_ativa', minutosRestantes: info.sessaoAtiva.minutosRestantes });
    else if (info.tentativasUsadas >= info.maxTentativas) bloqueio = MENSAGENS.limite_tentativas;
    mostrarMensagem(mensagem, bloqueio);

    $$('input[name="tp-percurso"]').forEach((radio) => {
      const chave = radio.value;
      const nota = $('[data-tp-nota-percurso="' + chave + '"]');
      const configurado = radio.dataset.disponivel !== 'false';
      const aprovadas = (info.perguntasAprovadas || {})[chave] || 0;
      const locais = dados.perguntas.filter((p) => p.percurso === chave).length;
      let motivo = '';
      if (!configurado) motivo = (dados.percursos[chave] && dados.percursos[chave].nota) || 'Percurso em preparação.';
      else if (!aprovadas) motivo = 'Ainda sem perguntas aprovadas pela Equipa de Animação.';
      else if (info.percursoFixo && info.percursoFixo !== chave) motivo = 'A tua tentativa anterior foi noutro percurso.';
      else motivo = aprovadas + ' perguntas' + (aprovadas < locais ? ' (as restantes aguardam aprovação)' : '') + '.';
      nota.textContent = motivo;
      radio.disabled = Boolean(bloqueio) || !configurado || !aprovadas || (info.percursoFixo && info.percursoFixo !== chave);
      radio.checked = !radio.disabled && info.percursoFixo === chave;
    });
    atualizarBotaoComecar();
  }

  function atualizarBotaoComecar() {
    $('[data-tp-comecar]').disabled = !$('input[name="tp-percurso"]:checked:not(:disabled)');
  }

  $$('input[name="tp-percurso"]').forEach((radio) => radio.addEventListener('change', atualizarBotaoComecar));

  $('[data-tp-comecar]').addEventListener('click', async (evento) => {
    const escolhido = $('input[name="tp-percurso"]:checked:not(:disabled)');
    if (!escolhido) return;
    const botao = evento.currentTarget;
    const mensagem = $('[data-tp-mensagem-percurso]');
    botao.disabled = true;
    mostrarMensagem(mensagem, 'A preparar o teste…', 'info');
    const r = await api('iniciar', {
      seccao: dados.seccao, membroId: estado.membroId, email: estado.email, percurso: escolhido.value,
      conhecidas: dados.perguntas.filter((p) => p.percurso === escolhido.value).map((p) => p.id)
    });
    if (!r.ok) {
      mostrarMensagem(mensagem, mensagemErro(r));
      botao.disabled = false;
      return;
    }
    mostrarMensagem(mensagem, '');
    Object.assign(estado, { percurso: escolhido.value, token: r.token, perguntas: r.perguntas });
    construirTeste(r);
    irPara('teste');
  });

  /* --------------------------------- 4. Teste --------------------------------- */

  function baralhar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i -= 1) {
      const aleatorio = new Uint32Array(1);
      window.crypto.getRandomValues(aleatorio);
      const j = aleatorio[0] % (i + 1);
      const temp = copia[i]; copia[i] = copia[j]; copia[j] = temp;
    }
    return copia;
  }

  function construirTeste(r) {
    const porId = {};
    dados.perguntas.forEach((p) => { porId[p.id] = p; });
    const grelha = $('[data-tp-grelha]');
    grelha.replaceChildren();
    $('[data-tp-titulo-teste]').textContent = (dados.percursos[estado.percurso] || {}).titulo || dados.titulosPercursos[estado.percurso];
    const prazo = new Date(r.expiraEm);
    $('[data-tp-prazo]').textContent = 'Tentativa ' + r.tentativa + ' de ' + r.maxTentativas + '. Entrega até às ' +
      prazo.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) + '.';

    baralhar(r.perguntas).forEach((id, indice) => {
      const pergunta = porId[id];
      const fieldset = document.createElement('fieldset');
      fieldset.className = 'tp-pergunta';
      const legenda = document.createElement('legend');
      legenda.textContent = (indice + 1) + '. ' + pergunta.pergunta;
      fieldset.append(legenda);
      baralhar(pergunta.opcoes).forEach((opcao) => {
        const rotulo = document.createElement('label');
        rotulo.className = 'tp-opcao';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'tp-q-' + pergunta.id;
        radio.value = opcao.id;
        radio.required = true;
        const texto = document.createElement('span');
        texto.textContent = opcao.texto;
        rotulo.append(radio, texto);
        fieldset.append(rotulo);
      });
      grelha.append(fieldset);
    });
    atualizarContador();
  }

  function respostasAtuais() {
    const respostas = {};
    estado.perguntas.forEach((id) => {
      const marcada = $('input[name="tp-q-' + id + '"]:checked');
      if (marcada) respostas[id] = marcada.value;
    });
    return respostas;
  }

  function atualizarContador() {
    const total = estado.perguntas.length;
    const feitas = Object.keys(respostasAtuais()).length;
    $('[data-tp-contador]').textContent = feitas + ' de ' + total + ' respondidas';
    $('[data-tp-barra-teste]').max = Math.max(total, 1);
    $('[data-tp-barra-teste]').value = feitas;
    $('[data-tp-entregar]').disabled = feitas !== total;
  }

  $('[data-tp-form-teste]').addEventListener('change', atualizarContador);

  $('[data-tp-form-teste]').addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const respostas = respostasAtuais();
    const mensagem = $('[data-tp-mensagem-teste]');
    if (Object.keys(respostas).length !== estado.perguntas.length) {
      mostrarMensagem(mensagem, MENSAGENS.respostas_incompletas);
      return;
    }
    if (!window.confirm('Entregar o teste? Depois de entregue não podes alterar as respostas.')) return;
    const botao = $('[data-tp-entregar]');
    botao.disabled = true;
    mostrarMensagem(mensagem, 'A entregar e a corrigir…', 'info');
    const r = await api('submeter', { token: estado.token, email: estado.email, respostas: respostas });
    if (!r.ok) {
      mostrarMensagem(mensagem, mensagemErro(r));
      if (r.erro === 'respostas_incompletas' || r.erro === 'rede' || r.erro === 'ocupado' || r.erro === 'interno') botao.disabled = false;
      else estado.passo = 'fim'; // a sessão terminou: já pode sair sem aviso
      return;
    }
    mostrarResultado(r);
  });

  /* ------------------------------- 5. Resultado ------------------------------- */

  function mostrarResultado(r) {
    const aprovado = r.resultado === 'APROVADO';
    $('[data-tp-caixa-resultado]').className = 'tp-resultado ' + (aprovado ? 'aprovado' : 'nao-aprovado');
    $('[data-tp-resultado-titulo]').textContent = aprovado ? 'Aprovado! 🎉' : 'Ainda não foi desta.';
    $('[data-tp-resultado-detalhe]').textContent = r.acertos + ' de ' + r.total + ' respostas certas · tentativa ' +
      r.tentativa + ' de ' + r.maxTentativas + ' · ' + r.dataHora;
    $('[data-tp-codigo]').textContent = r.codigo;
    $('[data-tp-resultado-seguinte]').textContent = aprovado
      ? 'A Equipa de Animação já recebeu o resultado. O código de validação também fica na tua Área Pessoal.'
      : (r.tentativasRestantes > 0
        ? 'Para seres aprovado tens de acertar em todas. Volta a estudar com o Treino para as Promessas: tens mais ' + r.tentativasRestantes + ' tentativa neste ano escutista.'
        : 'Já usaste as tentativas deste ano escutista. Fala com o teu Chefe de Unidade.');
    if (!r.emailEnviado) {
      $('[data-tp-resultado-seguinte]').textContent += ' (O email para a secção não seguiu: mostra este código ao teu Chefe de Unidade.)';
    }
    irPara('resultado');
  }

  /* ------------------------------- Ligações ------------------------------- */

  document.querySelectorAll('[data-abrir-teste-promessas]').forEach((botao) => botao.addEventListener('click', abrir));
  $$('[data-tp-fechar]').forEach((botao) => botao.addEventListener('click', pedirFecho));
  $$('[data-tp-ir]').forEach((botao) => botao.addEventListener('click', () => {
    const destino = botao.dataset.tpIr;
    if (destino === 'identificacao') carregarTotens();
    irPara(destino);
  }));

  // Esc: pede confirmação durante o teste, em vez de fechar logo.
  dialogo.addEventListener('cancel', (evento) => {
    evento.preventDefault();
    pedirFecho();
  });

  // Botão «voltar» do navegador/telemóvel.
  window.addEventListener('popstate', () => {
    if (!dialogo.open || estado.aFechar) return;
    if (podeSair()) fechar(true);
    else window.history.pushState({ testePromessas: true }, '');
  });

  // Recarregar ou sair da página durante o teste.
  window.addEventListener('beforeunload', (evento) => {
    if (dialogo.open && estado.passo === 'teste') {
      evento.preventDefault();
      evento.returnValue = '';
    }
  });
})();
