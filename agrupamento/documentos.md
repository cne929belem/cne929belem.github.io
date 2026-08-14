---
title: Documentos | Agrupamento 929 - Belém
main_class: main-content
layout: default
pasta_anos_anteriores: COLA_AQUI_O_ID_DA_PASTA
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
        <h1>Documentos do Agrupamento - -teste</h1>
        <p>Aqui podes consultar e descarregar a documentação importante do Agrupamento 929 - Belém.</p>

```
    <nav class="jump-nav">
        <strong>Ir diretamente para:</strong>
        <div class="jump-nav-links">
            <a href="#ano-geral">📌 Documentos Gerais</a>{% for grupo in docs_por_ano %}<a href="#ano-{{ grupo.name }}">🗓️ {{ grupo.name }}</a>{% endfor %}<a href="#anos-anteriores">🗄️ Anos Anteriores</a>
        </div>
    </nav>

    <div style="margin-top: 10px; text-align: left; scroll-margin-top: 85px;" id="ano-geral">
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

    <!-- NOVO BLOCO: ANOS ESCUTISTAS ANTERIORES -->
    <div style="margin-top: 40px; text-align: left; scroll-margin-top: 85px;" id="anos-anteriores">
        <h2 class="section-title"><span>🗄️</span> Anos escutistas anteriores</h2>
        <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Consulta o nosso arquivo histórico de documentos referentes a anos escutistas passados diretamente na nossa drive.</p>
        
        <div style="width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <!-- O parâmetro #list força o Google Drive a mostrar em formato de lista -->
            <iframe src="https://drive.google.com/embeddedfolderview?id=1vM1rY41dj4YzSqs93DNRp_qybFrHgjAz#list" width="100%" height="400" frameborder="0" style="display: block;"></iframe>
        </div>
    </div>
</section>
```

</div>
