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

  let fechar = function (viaHistorico) {
    aFechar = true;
    dialogo.close();
    document.documentElement.classList.remove('dg-aberto');
    if (!viaHistorico && window.history.state && window.history.state.diagnosticoPista) window.history.back();
    if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
    window.setTimeout(() => { aFechar = false; }, 0);
  };

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
  // A tabela tem a MESMA estrutura da parte 1 da Ficha de Pista (PDF):
  // áreas pela mesma ordem, 3 trilhos cada, nota, completado e sugerido.

  const rotulos = (() => { try { return JSON.parse(raiz.dataset.rotulos || '[]'); } catch (e) { return []; } })();
  const animais = (() => { try { return JSON.parse(raiz.dataset.animais || '{}'); } catch (e) { return {}; } })();
  let resultadoVisto = false;

  function textoNota(nota) {
    if (nota === null) return '—';
    return maximo === 3 ? (rotulos[nota - 1] || String(nota)) : String(nota);
  }

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
    linhas.replaceChildren();
    const sugeridos = [];
    raiz.querySelectorAll('[data-dg-area]').forEach((fieldsetArea) => {
      const lista = Array.from(fieldsetArea.querySelectorAll('[data-dg-trilho]')).map(estadoTrilho);
      const abertos = lista.filter((e) => !e.feito);
      const menor = abertos.length ? Math.min.apply(null, abertos.map((e) => e.nota)) : null;
      const empate = abertos.filter((e) => e.nota === menor).length > 1;

      const grupo = document.createElement('tr');
      grupo.className = 'dg-grupo';
      const th = document.createElement('th');
      th.colSpan = 4;
      th.scope = 'rowgroup';
      const animal = animais[fieldsetArea.dataset.dgAreaId];
      th.textContent = (animal ? animal + ' · ' : '') + fieldsetArea.dataset.dgArea + (abertos.length ? '' : ' — área concluída ✔');
      grupo.append(th);
      linhas.append(grupo);

      lista.forEach((e) => {
        const sugerido = !e.feito && e.nota === menor;
        if (sugerido) sugeridos.push(e.nome);
        const tr = document.createElement('tr');
        if (sugerido) tr.className = 'dg-sugerido';
        tr.append(
          celula(e.nome),
          celula(e.feito ? '—' : textoNota(e.nota)),
          celula(e.feito ? '✓' : '—'),
          celula(sugerido ? '★' : '—', sugerido && empate ? 'empate' : '')
        );
        linhas.append(tr);
      });
    });
    resumo.textContent = sugeridos.length
      ? 'Os trilhos com nota mais baixa são os teus maiores desafios. Sugestão (★): ' + sugeridos.join(' · ') + '. Num empate, escolhe um deles com quem te acompanha.'
      : 'Já completaste todos os trilhos. Parabéns! Fala com ' + raiz.dataset.quemAjuda + '.';
    form.hidden = true;
    caixa.hidden = false;
    resultadoVisto = true;
    subtitulo.textContent = 'O meu resultado · passa-o para a tua Ficha de Pista';
    corpo.scrollTop = 0;
    caixa.querySelector('h3').focus({ preventScroll: true });
  }

  function haRespostas() {
    return trilhos.some((t) => t.querySelector('input:checked'));
  }

  // Ao fechar depois de ver o resultado: lembrar de o passar para a ficha.
  const fecharOriginal = fechar;
  fechar = function (viaHistorico) {
    if (resultadoVisto && !caixa.hidden &&
        !window.confirm('Já passaste o resultado para a tua Ficha de Pista? Enquanto não recarregares a página, podes voltar a abri-lo.')) {
      if (viaHistorico) window.history.pushState({ diagnosticoPista: true }, '');
      return;
    }
    fecharOriginal(viaHistorico);
  };

  // Recarregar ou sair da página apaga as respostas: avisar.
  window.addEventListener('beforeunload', (evento) => {
    if (haRespostas()) {
      evento.preventDefault();
      evento.returnValue = '';
    }
  });

  form.addEventListener('change', atualizar);
  form.addEventListener('reset', () => window.setTimeout(() => { atualizar(); resultadoVisto = false; corpo.scrollTop = 0; }, 0));
  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!botaoVer.disabled) mostrarResultado();
  });
  raiz.querySelector('[data-dg-voltar]').addEventListener('click', () => mostrarFormulario(true));
  atualizar();
})();
