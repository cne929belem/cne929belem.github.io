---
layout: default
title: Notícias | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 30/09/2026
---
{% assign noticias_ordenadas = site.noticias | sort: "date" | reverse %}
{% assign meses = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro" | split: "," %}

<style>
  .noticias-arquivo { position: relative; z-index: 5; max-width: 1100px; margin: 0 auto; padding: 28px; background: #fff; }
  .noticias-arquivo-intro { margin: 0 0 18px; color: #52616a; font-size: 1rem; line-height: 1.5; }
  .noticia-arquivo { display: grid; grid-template-columns: minmax(0, 1fr); gap: 22px; padding: 22px 0; border-top: 1px solid #dce4e9; }
  .noticia-arquivo-com-imagem { grid-template-columns: minmax(180px, 280px) minmax(0, 1fr); }
  .noticia-arquivo-imagem { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 6px; }
  .noticia-arquivo-imagem-padrao { object-fit: contain; background: #fff; padding: 10px; }
  .noticia-arquivo-imagem-conter { object-fit: contain; object-position: center; background: #fff; }
  .noticia-arquivo-imagem-topo { object-position: center top; }
  .noticia-arquivo-conteudo { min-width: 0; }
  .noticia-arquivo-meta { display: flex; flex-wrap: wrap; gap: 4px 10px; margin: 0 0 10px; color: #657781; font-size: 0.875rem; }
  .noticia-arquivo h2 { margin: 0 0 10px; color: var(--azul-marinho); font-size: 1.5rem; line-height: 1.3; }
  .noticia-arquivo-resumo { margin: 0 0 12px; color: #34434b; font-size: 1rem; font-weight: 700; line-height: 1.55; }
  .noticia-arquivo-texto { color: #495861; font-size: 1rem; line-height: 1.7; overflow-wrap: anywhere; }
  .noticia-arquivo-texto > :last-child { margin-bottom: 0; }
  .noticia-arquivo-link { display: inline-block; margin-top: 10px; color: var(--azul-marinho); font-size: 0.9375rem; font-weight: 800; }
  .noticias-arquivo-vazio { padding: 18px 0; border-top: 1px solid #dce4e9; color: #52616a; }
  @media (max-width: 650px) {
    .noticias-arquivo { padding: 20px 18px 30px; }
    .noticia-arquivo, .noticia-arquivo-com-imagem { grid-template-columns: 1fr; gap: 12px; }
    .noticia-arquivo-imagem { max-width: 420px; }
    .noticia-arquivo h2 { font-size: 1.25rem; }
  }
</style>

<section class="hero-generico" id="hero">
  <div class="pagina-cabecalho">
    <h1>Notícias</h1>
    <p>Novidades e histórias do Agrupamento 929 - Belém.</p>
  </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<section class="noticias-arquivo">
  <p class="noticias-arquivo-intro">Notícias do Agrupamento, da mais recente à mais antiga.</p>
  {% for noticia in noticias_ordenadas %}
  {% assign mes_noticia = noticia.date | date: "%-m" | minus: 1 %}
  <article class="noticia-arquivo noticia-arquivo-com-imagem">
    <img class="noticia-arquivo-imagem{% unless noticia.imagem %} noticia-arquivo-imagem-padrao{% endunless %}{% if noticia.imagem_ajuste == 'contain' %} noticia-arquivo-imagem-conter{% endif %}{% if noticia.imagem_posicao == 'top' %} noticia-arquivo-imagem-topo{% endif %}" src="{{ noticia.imagem | default: '/assets/img/marca/Logo929.jpg' | relative_url }}" alt="">
    <div class="noticia-arquivo-conteudo">
      <p class="noticia-arquivo-meta">
        <time datetime="{{ noticia.date | date_to_xmlschema }}">{{ noticia.date | date: "%-d" }} de {{ meses[mes_noticia] }} de {{ noticia.date | date: "%Y" }}</time>
        {% if noticia.autor %}<span>{{ noticia.autor }}{% if noticia.funcao %} · {{ noticia.funcao }}{% endif %}</span>{% endif %}
      </p>
      <h2>{{ noticia.title }}</h2>
      {% if noticia.prioridade == 1 %}<span class="noticia-selo-prioridade">Prioridade</span>{% endif %}
      {% if noticia.resumo %}<p class="noticia-arquivo-resumo">{{ noticia.resumo }}</p>{% endif %}
      <div class="noticia-arquivo-texto">{{ noticia.content | markdownify }}</div>
      {% if noticia.link %}
        {% assign link_noticia = noticia.link %}
        {% assign noticia_externa = false %}
        {% if link_noticia contains "://" %}{% assign noticia_externa = true %}{% else %}{% assign link_noticia = link_noticia | relative_url %}{% endif %}
        <a class="noticia-arquivo-link" href="{{ link_noticia }}"{% if noticia_externa %} target="_blank" rel="noopener noreferrer"{% endif %}>Mais informação relacionada</a>
      {% endif %}
    </div>
  </article>
  {% else %}
  <p class="noticias-arquivo-vazio">Ainda não há notícias publicadas.</p>
  {% endfor %}
</section>