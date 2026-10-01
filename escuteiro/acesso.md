---
layout: default
title: Acesso à Área Pessoal | Agrupamento 929 - Belém
main_class: pagina-com-hero
robots: "noindex, nofollow"
sitemap: false
---
<style>
  .acesso-cabecalho { position: relative; z-index: 2; max-width: 1200px; height: 100%; margin: 0 auto; padding: 78px 28px 22px; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .acesso-cabecalho h1 { color: #fff; margin: 0 0 10px; }
  .acesso-cabecalho p { color: #fff; font-family: 'Geologica', sans-serif; font-weight: 300; font-size: 20px; line-height: 1.5; margin: 0; }
  #hero .pagina-cabecalho h1 { font-size: 28px; line-height: 1.15; }
  #hero .pagina-cabecalho p { font-size: 14px; line-height: 1.4; }
  .acesso-conteudo { position: relative; z-index: 5; max-width: 760px; margin: 0 auto; padding: 20px 24px 32px; }
  .acesso-conteudo h2 { margin: 0 0 8px; color: var(--azul-marinho); font-size: 22px; }
  .acesso-conteudo > p { margin: 0 0 14px; color: #52616a; font-size: 14px; line-height: 1.5; }
  .acesso-estado { margin: 0; color: #52616a; font-size: 13px; line-height: 1.45; }
  .acesso-formulario { display: grid; gap: 12px; }
  .acesso-formulario label { display: grid; gap: 6px; color: var(--azul-marinho); font-weight: 700; }
  .acesso-formulario input { width: 100%; min-height: 46px; padding: 10px 12px; border: 1px solid #aebbc3; border-radius: 4px; background: #f4f6f7; color: #52616a; font: inherit; }
  .acesso-formulario button { justify-self: start; min-height: 44px; padding: 10px 18px; border: 0; border-radius: 4px; background: var(--azul-marinho); color: #fff; font: inherit; font-weight: 700; cursor: pointer; }
  .acesso-formulario button:disabled { opacity: .65; cursor: wait; }
  .acesso-nota { margin: 0; color: #52616a; font-size: 12px; line-height: 1.45; }
  @media (max-width: 600px) {
    #hero .pagina-cabecalho h1 { font-size: 24px; }
    #hero .pagina-cabecalho p { font-size: 13px; }
    .acesso-conteudo { padding: 28px 18px 48px; }
  }
</style>

<section class="hero-generico" id="hero">
  <div class="acesso-cabecalho">
    <h1>Área Pessoal</h1>
    <p>Pede um link de acesso ao teu percurso escutista.</p>
  </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<section class="acesso-conteudo" aria-labelledby="titulo-pedido-acesso">
  <h2 id="titulo-pedido-acesso">Pedir link de acesso</h2>
  <p>Só perfis autorizados pelo Agrupamento conseguem consultar dados.</p>

  <p class="acesso-estado" id="estado-pedido-magic-link" role="status" aria-live="polite" hidden></p>

  <form class="acesso-formulario" id="form-pedido-magic-link" data-url-continuacao="{{ '/escuteiro/area-pessoal.html' | relative_url }}" aria-label="Pedido de magic link">
    <label for="email-registado">Email associado ao perfil</label>
    <input id="email-registado" name="email" type="email" autocomplete="email" placeholder="nome@exemplo.pt" required>
    <p class="acesso-nota">O link é pessoal e de utilização única. Se o endereço ainda não tiver um perfil autorizado, a área pessoal não mostrará dados.</p>
    <button type="submit">Enviar link de acesso</button>
  </form>
</section>

<script type="module" src="{{ '/assets/js/area-pessoal-firebase.js' | relative_url }}"></script>