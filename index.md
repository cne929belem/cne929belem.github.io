---
layout: default
title: 929 - Belém | Corpo Nacional de Escutas
main_class: pagina-com-hero
ultima_atualizacao: 25/09/2026
---
{% assign noticias_recentes = site.noticias | sort: "date" | reverse %}
{% assign noticia_destaque = noticias_recentes | where: "prioridade", 1 | first %}
{% unless noticia_destaque %}{% assign noticia_destaque = noticias_recentes | first %}{% endunless %}
{% assign meses = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro" | split: "," %}
{% assign total_noticias = site.noticias | size %}
{% assign total_noticias_laterais = total_noticias | minus: 1 %}

<h1 class="visualmente-oculto">929 - Belém, Corpo Nacional de Escutas</h1>

<section class="hero" id="hero">
  <div class="hero-slide ativo"></div>
  <div class="hero-slide"></div>
  <div class="hero-slide"></div>
  <div class="hero-slide"></div>

  <button class="seta-carrossel seta-esquerda" aria-label="Imagem anterior" onclick="mudarSlide(-1)">‹</button>
  <button class="seta-carrossel seta-direita" aria-label="Imagem seguinte" onclick="mudarSlide(1)">›</button>

  <div class="pontos-carrossel">
    <button class="ponto ativo" aria-label="Imagem 1" onclick="irParaSlide(0)"></button>
    <button class="ponto" aria-label="Imagem 2" onclick="irParaSlide(1)"></button>
    <button class="ponto" aria-label="Imagem 3" onclick="irParaSlide(2)"></button>
    <button class="ponto" aria-label="Imagem 4" onclick="irParaSlide(3)"></button>
  </div>
</section>

<div class="espaco-hero" aria-hidden="true"></div>

<div class="feed">
  {% if noticia_destaque %}
  <article class="destaque">
    <a class="cartao-link" href="{{ noticia_destaque.link_externo | relative_url }}">
      {% if noticia_destaque.imagem %}
        <img class="foto-destaque" src="{{ noticia_destaque.imagem | relative_url }}" alt="">
      {% else %}
        <div class="foto-destaque placeholder-foto-feed"></div>
      {% endif %}
      <h2>{{ noticia_destaque.title }}</h2>
      {% assign mes_destaque = noticia_destaque.date | date: "%-m" | minus: 1 %}
      <p class="assinatura">{{ noticia_destaque.date | date: "%-d" }} de {{ meses[mes_destaque] }} de {{ noticia_destaque.date | date: "%Y" }}{% if noticia_destaque.autor %} · {{ noticia_destaque.autor }}{% if noticia_destaque.funcao %} ({{ noticia_destaque.funcao }}){% endif %}{% endif %}</p>
      <p>{{ noticia_destaque.resumo }}</p>
    </a>
  </article>
  {% endif %}

  <div class="lista-noticias" id="listaNoticias" aria-live="polite">
    {% assign indice_noticia_lateral = 0 %}
    {% for noticia in noticias_recentes %}
    {% unless noticia == noticia_destaque %}
    {% assign pagina_noticia_lateral = indice_noticia_lateral | divided_by: 5 %}
    <a class="noticia-item" data-pagina="{{ pagina_noticia_lateral }}"{% if pagina_noticia_lateral > 0 %} hidden{% endif %} href="{{ noticia.link_externo | relative_url }}">
      {% if noticia.imagem %}
        <img class="foto-noticia" src="{{ noticia.imagem | relative_url }}" alt="">
      {% else %}
        <div class="foto-noticia placeholder-foto-feed"></div>
      {% endif %}
      <div>
        <h3>{{ noticia.title }}</h3>
        {% assign mes_noticia = noticia.date | date: "%-m" | minus: 1 %}
        <p class="assinatura">{{ noticia.date | date: "%-d" }} de {{ meses[mes_noticia] }} de {{ noticia.date | date: "%Y" }}{% if noticia.autor %} · {{ noticia.autor }}{% if noticia.funcao %} ({{ noticia.funcao }}){% endif %}{% endif %}</p>
      </div>
    </a>
    {% assign indice_noticia_lateral = indice_noticia_lateral | plus: 1 %}
    {% endunless %}
    {% endfor %}
    {% if total_noticias_laterais > 5 %}
    <button class="btn ver-mais-noticias" id="verMaisNoticias" type="button" aria-controls="listaNoticias">Ver mais notícias</button>
    {% endif %}
  </div>
</div>

<script>
  // ---------- Carrossel de fundo ----------
  let slideAtual = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const pontos = document.querySelectorAll('.ponto');
  const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let temporizador;

  function mostrarSlide(indice) {
    slides[slideAtual].classList.remove('ativo');
    pontos[slideAtual].classList.remove('ativo');
    slideAtual = indice;
    slides[slideAtual].classList.add('ativo');
    pontos[slideAtual].classList.add('ativo');
  }

  function avancar(direcao) {
    mostrarSlide((slideAtual + direcao + slides.length) % slides.length);
  }

  function mudarSlide(direcao) { avancar(direcao); reiniciarAutoplay(); }
  function irParaSlide(indice) { mostrarSlide(indice); reiniciarAutoplay(); }

  function iniciarAutoplay() { temporizador = setInterval(() => avancar(1), 6000); }
  function reiniciarAutoplay() { clearInterval(temporizador); if (!semMovimento) iniciarAutoplay(); }
  if (!semMovimento) iniciarAutoplay();

  const listaNoticias = document.getElementById('listaNoticias');
  const botaoMaisNoticias = document.getElementById('verMaisNoticias');
  if (listaNoticias && botaoMaisNoticias) {
    const noticiasLaterais = Array.from(listaNoticias.querySelectorAll('.noticia-item'));
    const paginasNoticias = [...new Set(noticiasLaterais.map(noticia => Number(noticia.dataset.pagina)))];
    let paginaAtual = 0;
    const duracaoTransicao = semMovimento ? 0 : 200;

    botaoMaisNoticias.addEventListener('click', () => {
      const proximaPagina = (paginaAtual + 1) % paginasNoticias.length;
      botaoMaisNoticias.disabled = true;
      listaNoticias.classList.add('a-sair');

      window.setTimeout(() => {
        noticiasLaterais.forEach(noticia => {
          noticia.hidden = Number(noticia.dataset.pagina) !== proximaPagina;
        });
        listaNoticias.classList.remove('a-sair');
        listaNoticias.classList.add('a-entrar');
        paginaAtual = proximaPagina;
        botaoMaisNoticias.textContent = paginaAtual === paginasNoticias.length - 1
          ? 'Ver notícias recentes'
          : 'Ver mais notícias';

        window.setTimeout(() => {
          listaNoticias.classList.remove('a-entrar');
          botaoMaisNoticias.disabled = false;
        }, duracaoTransicao);
      }, duracaoTransicao);
    });
  }
</script>
