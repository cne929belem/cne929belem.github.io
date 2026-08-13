---
layout: default
title: Documentos | Agrupamento 929 - Belém
main_class: main-content
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

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%;">
        <span style="font-size: 3rem; display: block; margin-bottom: 10px;">📄</span>
        <h1>Documentos do Agrupamento</h1>
        <p>Aqui podes consultar e descarregar a documentação importante do Agrupamento 929 - Belém.</p>

        <nav class="jump-nav">
            <strong>Ir diretamente para:</strong>
            <div class="jump-nav-links">
                <a href="#ano-geral">📌 Documentos Gerais</a>{% for grupo in docs_por_ano %}<a href="#ano-{{ grupo.name }}">🗓️ {{ grupo.name }}</a>{% endfor %}
            </div>
        </nav>

        <div style="margin-top: 10px; text-align: left;" id="ano-geral">
            <h2 class="section-title"><span>📌</span> Documentos Gerais</h2>
            {% for doc in docs_gerais %}
                {% include doc-link.html doc=doc %}
            {% endfor %}
        </div>

        {% for grupo in docs_por_ano %}
        <div style="margin-top: 30px; text-align: left; scroll-margin-top: 85px;" id="ano-{{ grupo.name }}">
            <h2 class="section-title"><span>🗓️</span> Ano Escutista {{ grupo.name }}</h2>
            {% assign docs_do_ano = grupo.items | sort: "ordem" %}
            {% for doc in docs_do_ano %}
                {% include doc-link.html doc=doc %}
            {% endfor %}
        </div>
        {% endfor %}

    </section>
</div>
