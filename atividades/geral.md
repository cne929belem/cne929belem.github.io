---
layout: default
title: Atividades | 929 - Belém
---
<style>
  .pagina-cabecalho { max-width: 1100px; margin: 0 auto; padding: 40px 28px 6px; }
  .pagina-cabecalho h1 { font-size: 30px; margin: 0 0 8px; }
  .pagina-cabecalho p { color: #555; font-size: 15px; margin: 0; }

  .grelha-atividades {
    max-width: 1100px; margin: 0 auto; padding: 30px 28px 70px;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 22px;
  }
  .cartao-atividade {
    display: flex; flex-direction: column; justify-content: flex-end;
    min-height: 150px; padding: 26px 22px; border-radius: 16px;
    background: linear-gradient(160deg, var(--cne-verde) 0%, var(--cne-verde-escuro) 100%);
    color: #fff; text-decoration: none;
  }
  .cartao-atividade h2 { font-size: 19px; margin: 0 0 8px; }
  .cartao-atividade p { font-size: 13.5px; line-height: 1.5; margin: 0; opacity: .92; }
  .cartao-atividade:hover { outline: 2px solid rgba(255,255,255,0.6); outline-offset: -2px; }
</style>

<div class="pagina-cabecalho">
  <h1>Atividades</h1>
  <p>Tudo o que está a acontecer no Agrupamento 929 - Belém.</p>
</div>

<div class="grelha-atividades">
  <a class="cartao-atividade" href="{{ '/atividades/inscricoes.html' | relative_url }}">
    <h2>Inscrições</h2>
    <p>Consulta e inscreve-te nas atividades abertas do agrupamento.</p>
  </a>
  <a class="cartao-atividade" href="{{ '/atividades/acagrup-2026.html' | relative_url }}">
    <h2>ACAGRUP 2026</h2>
    <p>Reviva a aventura d'O Segredo da Ilha Perdida, na Ilha dos Cavalos.</p>
  </a>
  <a class="cartao-atividade" href="{{ '/atividades/promessas26.html' | relative_url }}">
    <h2>Promessas 2026</h2>
    <p>Revive os momentos em que os nossos elementos deram o seu "Sim" ao Escutismo.</p>
  </a>
</div>
