---
layout: default
title: Em Construção | 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 12/08/2026
---
<style>
  .pagina-cabecalho { position: relative; z-index: 2; max-width: 1200px; height: 100%; margin: 0 auto; padding: 78px 28px 22px; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .pagina-cabecalho h1 { color: #fff; font-size: 30px; margin: 0 0 10px; }
  .pagina-cabecalho p { color: #fff; font-size: 15px; margin: 0; }

  .em-construcao {
    position: relative; z-index: 5; background: #fff;
    max-width: 560px; margin: 0 auto;
    padding: 40px 28px 90px;
    text-align: center;
  }
  .em-construcao .icone { font-size: 52px; display: block; margin-bottom: 18px; }
  .em-construcao p { font-size: 15px; line-height: 1.6; color: #444; margin: 0 0 26px; }
  .em-construcao .botao-voltar {
    display: inline-block;
    background: linear-gradient(160deg, var(--cne-verde) 0%, var(--cne-verde-escuro) 100%);
    color: #fff; font-weight: 700; text-decoration: none;
    padding: 13px 28px; border-radius: 999px; font-size: 14px;
  }
  .em-construcao .botao-voltar:hover { opacity: .9; }
</style>

<section class="hero-generico" id="hero">
  <div class="pagina-cabecalho">
    <h1>Em construção</h1>
    <p>Esta secção está a ganhar forma nos estaleiros do Agrupamento.</p>
  </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="em-construcao">
  <span class="icone" aria-hidden="true">⚓🛠️</span>
  <p>Novidades em breve!</p>
  <a href="{{ '/index.html' | relative_url }}" class="botao-voltar">Voltar à página inicial</a>
</div>
