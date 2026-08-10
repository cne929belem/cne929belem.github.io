---
title: Documentos | Agrupamento 929 - Belém
main_class: pagina-com-hero
layout: default
pasta_anos_anteriores: "1vM1rY41dj4YzSqs93DNRp_qybFrHgjAz"
---
{% comment %}
  Esta página lê os documentos da coleção _documentos/ (um ficheiro .md
  por documento) e organiza-os sozinha por ano. Para acrescentar um
  documento novo: pelo painel /admin/ (mais fácil), ou cria um ficheiro
  novo em _documentos/, copiando a estrutura de um já existente.
  "ano" pode ser "Geral" (aparece sempre no topo) ou um ano concreto.
  "estado" pode ser "disponivel" ou "brevemente".
{% endcomment %}

{% assign docs_gerais = site.documentos | where: "ano", "Geral" | sort: "ordem" %}
{% assign docs_por_ano = site.documentos | where_exp: "d", "d.ano != 'Geral'" | group_by: "ano" | sort: "name" | reverse %}
{% assign ano_atual = site.time | date: "%Y" %}
{% assign docs_ano_atual = docs_por_ano | where: "name", ano_atual %}
{% assign docs_outros_anos = docs_por_ano | where_exp: "grupo", "grupo.name != ano_atual" %}

<style>
    .pagina-cabecalho { position: relative; z-index: 2; max-width: 1200px; height: 100%; margin: 0 auto; padding: 78px 28px 22px; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
    .pagina-cabecalho h1 { color: #fff; font-size: 30px; margin: 0 0 10px; }
    .pagina-cabecalho p { color: #fff; font-size: 15px; line-height: 1.6; margin: 0; }
    .documentos-pagina { position: relative; z-index: 5; max-width: 1200px; margin: 0 auto; padding: 28px; background: #fff; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
    .documentos-bloco { min-width: 0; }
    .documentos-bloco .section-title { margin: 0 0 15px; font-size: 21px; }
    .documentos-bloco.restantes { grid-column: 1 / -1; }
    .documentos-bloco .jump-nav { margin: 0 0 18px; }
    .arquivo-drive { width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .arquivo-drive iframe { display: block; width: 100%; height: 400px; border: 0; }
    @media (max-width: 760px) {
        .documentos-pagina { grid-template-columns: 1fr; padding: 24px 20px 48px; }
        .documentos-bloco.restantes { grid-column: auto; }
    }
</style>

<section class="hero-generico" id="hero">
    <div class="pagina-cabecalho">
        <h1>Documentos do Agrupamento</h1>
        <p>Aqui podes consultar e descarregar a documentação importante do Agrupamento 929 - Belém.</p>
    </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="documentos-pagina">
    <section class="documentos-bloco">
        <h2 class="section-title"><span>📌</span> Documentos Gerais</h2>
        <div id="ano-geral">
            {% for doc in docs_gerais %}
                {% include doc-link.html doc=doc %}
            {% endfor %}
        </div>
    </section>

    <section class="documentos-bloco">
        <h2 class="section-title"><span>🗓️</span> Ano Escutista {{ ano_atual }}</h2>
        <div id="ano-{{ ano_atual }}">
            {% for grupo in docs_ano_atual %}
            {% assign docs_do_ano = grupo.items | sort: "ordem" %}
            {% for doc in docs_do_ano %}
                {% include doc-link.html doc=doc %}
            {% endfor %}
            {% endfor %}
        </div>
    </section>

    <section class="documentos-bloco restantes" id="anos-anteriores">
        <h2 class="section-title"><span>🗄️</span> Anos escutistas anteriores</h2>
        {% for grupo in docs_outros_anos %}
        <div style="margin-top: 24px; text-align: left; scroll-margin-top: 85px;" id="ano-{{ grupo.name }}">
            <h3 class="section-title"><span>🗓️</span> Ano Escutista {{ grupo.name }}</h3>
            {% assign docs_do_ano = grupo.items | sort: "ordem" %}
            {% for doc in docs_do_ano %}
                {% include doc-link.html doc=doc %}
            {% endfor %}
        </div>
        {% endfor %}
        <p style="font-size: 0.85rem; color: #666; margin: 24px 0 15px;">Consulta o nosso arquivo histórico de documentos referentes a anos escutistas passados diretamente na nossa drive.</p>

        <div class="arquivo-drive">
            <iframe src="https://drive.google.com/embeddedfolderview?id=104yq0vy3hEryOi9k4dfd1n-PSu-xlhZ5#list" title="Arquivo de documentos no Google Drive" loading="lazy"></iframe>
        </div>
    </section>
</div>