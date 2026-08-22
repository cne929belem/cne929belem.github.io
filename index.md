---
layout: default
title: 929 - Belém | Corpo Nacional de Escutas
main_class: pagina-com-hero
---
{% assign noticias_recentes = site.noticias | sort: "date" | reverse | limit: 5 %}
{% assign noticia_destaque = noticias_recentes | where: "prioridade", 1 | first %}
{% unless noticia_destaque %}{% assign noticia_destaque = noticias_recentes | first %}{% endunless %}
{% assign meses = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro" | split: "," %}
{% assign meses = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro" | split: "," %}

<h1 class="visualmente-oculto">929 - Belém, Corpo Nacional de Escutas</h1>

<section class="hero" id="hero">
  <div class="hero-slide ativo"></div>
  <div class="hero-slide"></div>

  <button class="seta-carrossel seta-esquerda" aria-label="Imagem anterior" onclick="mudarSlide(-1)">‹</button>
  <button class="seta-carrossel seta-direita" aria-label="Imagem seguinte" onclick="mudarSlide(1)">›</button>

  <div class="pontos-carrossel">
    <button class="ponto ativo" aria-label="Imagem 1" onclick="irParaSlide(0)"></button>
    <button class="ponto" aria-label="Imagem 2" onclick="irParaSlide(1)"></button>
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
      <p class="assinatura">{{ noticia_destaque.date | date: "%-d" }} de {{ meses[mes_destaque] }} de {{ noticia_destaque.date | date: "%Y" }} · {{ noticia_destaque.autor }} ({{ noticia_destaque.funcao }})</p>
      <p>{{ noticia_destaque.resumo }}</p>
    </a>
  </article>
  {% endif %}

  <div class="lista-noticias">
    {% for noticia in noticias_recentes %}
    {% unless noticia == noticia_destaque %}
    <a class="noticia-item" href="{{ noticia.link_externo | relative_url }}">
      {% if noticia.imagem %}
        <img class="foto-noticia" src="{{ noticia.imagem | relative_url }}" alt="">
      {% else %}
        <div class="foto-noticia placeholder-foto-feed"></div>
      {% endif %}
      <div>
        <h3>{{ noticia.title }}</h3>
        {% assign mes_noticia = noticia.date | date: "%-m" | minus: 1 %}
        <p class="assinatura">{{ noticia.date | date: "%-d" }} de {{ meses[mes_noticia] }} de {{ noticia.date | date: "%Y" }} · {{ noticia.autor }} ({{ noticia.funcao }})</p>
      </div>
    </a>
    {% endunless %}
    {% endfor %}
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
</script>
