/*
 * Diagnóstico de Pista — ecrã inteiro, corre só no navegador.
 * Não envia nem guarda nada (sem pedidos à rede, sem localStorage/cookies).
 * Em cada área sugere o trilho com a nota mais baixa, ignorando os já completados.
 */
(function () {
  'use strict';
  const dialogo = document.getElementById('dg-dialogo');
  if (!dialogo) return;
  const raiz = dialogo.querySelector('[data-diagnostico]');
  const form = raiz.querySelector('[data-dg-form]');
  const trilhos = Array.from(raiz.querySelectorAll('[data-dg-trilho]'));
  const contador = raiz.querySelector('[data-dg-contador]');
  const botaoVer = raiz.querySelector('[data-dg-ver]');
  const caixa = raiz.querySelector('[data-dg-resultado]');
  const linhas = raiz.querySelector('[data-dg-linhas]');
  const resumo = raiz.querySelector('[data-dg-resumo]');
  const subtitulo = dialogo.querySelector('[data-dg-subtitulo]');
  const corpo = dialogo.querySelector('.dg-corpo');
  const maximo = Number(raiz.dataset.escalaMax) || 5;
  let ultimoFoco = null;
  let aFechar = false;

  /* ------------------------------ Abrir / fechar ------------------------------ */

  function abrir() {
    if (dialogo.open) return;
    ultimoFoco = document.activeElement;
    document.documentElement.classList.add('dg-aberto');
    dialogo.showModal();
    // O botão «voltar» do telemóvel fecha o diagnóstico em vez de sair da página.
    window.history.pushState({ diagnosticoPista: true }, '');
    mostrarFormulario(false);
  }

  function fechar(viaHistorico) {
    aFechar = true;
    dialogo.close();
    document.documentElement.classList.remove('dg-aberto');
    if (!viaHistorico && window.history.state && window.history.state.diagnosticoPista) window.history.back();
    if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
    window.setTimeout(() => { aFechar = false; }, 0);
  }

  document.querySelectorAll('[data-abrir-diagnostico]').forEach((b) => b.addEventListener('click', abrir));
  dialogo.querySelectorAll('[data-dg-fechar]').forEach((b) => b.addEventListener('click', () => fechar(false)));
  dialogo.addEventListener('cancel', (evento) => { evento.preventDefault(); fechar(false); });
  window.addEventListener('popstate', () => { if (dialogo.open && !aFechar) fechar(true); });

  /* ------------------------------- Formulário ------------------------------- */

  function estadoTrilho(t) {
    const marcada = t.querySelector('input[type="radio"]:checked');
    return { area: t.dataset.area, nome: t.dataset.nome, feito: t.querySelector('[data-dg-feito]').checked, nota: marcada ? Number(marcada.value) : null };
  }

  function atualizar() {
    let respondidos = 0;
    trilhos.forEach((t) => {
      const feito = t.querySelector('[data-dg-feito]').checked;
      t.querySelectorAll('input[type="radio"]').forEach((r) => {
        r.disabled = feito;
        if (feito) r.checked = false;
      });
      const e = estadoTrilho(t);
      if (e.feito || e.nota !== null) respondidos += 1;
    });
    contador.textContent = respondidos + ' de ' + trilhos.length + ' respondidos';
    botaoVer.disabled = respondidos !== trilhos.length;
  }

  function mostrarFormulario(focarTopo) {
    caixa.hidden = true;
    form.hidden = false;
    subtitulo.textContent = 'A minha bússola · responde às ' + trilhos.length + ' frases';
    if (focarTopo !== false) corpo.scrollTop = 0;
    form.querySelector('[data-dg-titulo-form]').focus({ preventScroll: true });
  }

  /* -------------------------------- Resultado -------------------------------- */

  function celula(texto, pequeno) {
    const td = document.createElement('td');
    td.textContent = texto;
    if (pequeno) {
      const s = document.createElement('small');
      s.textContent = pequeno;
      td.append(s);
    }
    return td;
  }

  function mostrarResultado() {
    const porArea = new Map();
    trilhos.map(estadoTrilho).forEach((e) => {
      if (!porArea.has(e.area)) porArea.set(e.area, []);
      porArea.get(e.area).push(e);
    });
    linhas.replaceChildren();
    const sugeridos = [];
    porArea.forEach((lista, area) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.scope = 'row';
      th.textContent = area;
      tr.append(th);
      const abertos = lista.filter((e) => !e.feito);
      if (!abertos.length) {
        tr.append(celula('Área concluída ✔'), celula('—'));
      } else {
        const menor = Math.min.apply(null, abertos.map((e) => e.nota));
        const empatados = abertos.filter((e) => e.nota === menor);
        const nomes = empatados.map((e) => e.nome).join(' ou ');
        sugeridos.push(nomes);
        tr.append(celula(nomes + ' (' + menor + '/' + maximo + ')', empatados.length > 1 ? 'Empate: escolhe um deles com quem te acompanha.' : ''));
        const outros = lista.filter((e) => empatados.indexOf(e) === -1)
          .map((e) => e.nome + (e.feito ? ' — completado' : ' — ' + e.nota + '/' + maximo));
        tr.append(celula(outros.length ? outros.join('; ') : '—'));
      }
      linhas.append(tr);
    });
    resumo.textContent = sugeridos.length
      ? 'Os trilhos com nota mais baixa são os teus maiores desafios. Sugestão para a próxima etapa: ' + sugeridos.join(' · ') + '.'
      : 'Já completaste todos os trilhos. Parabéns! Fala com ' + raiz.dataset.quemAjuda + '.';
    form.hidden = true;
    caixa.hidden = false;
    subtitulo.textContent = 'O meu resultado · copia-o para a tua ficha';
    corpo.scrollTop = 0;
    caixa.querySelector('h3').focus({ preventScroll: true });
  }

  form.addEventListener('change', atualizar);
  form.addEventListener('reset', () => window.setTimeout(() => { atualizar(); corpo.scrollTop = 0; }, 0));
  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!botaoVer.disabled) mostrarResultado();
  });
  raiz.querySelector('[data-dg-voltar]').addEventListener('click', () => mostrarFormulario(true));
  atualizar();
})();
