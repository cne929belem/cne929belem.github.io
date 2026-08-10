---
layout: default
title: Inscrições em Atividades | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 22/08/2026
---
{% comment %}
  Lista todas as inscrições com "ativo: true", da coleção _inscricoes/.
  Para abrir uma inscrição nova: painel /admin/ → "Inscrições" → "Novo
  Inscricoes", preenche o link do Google Forms e marca "Ativo". Quando a
  atividade terminar, desmarca "Ativo" (ou apaga a entrada) — desaparece
  sozinha desta página, não precisas de tocar em mais nada.
{% endcomment %}
{% assign inscricoes_ativas = site.inscricoes | where: "ativo", true %}

<section class="hero-generico" id="hero">
    <div class="pagina-cabecalho">
        <h1>Inscrições em Atividades</h1>
        <p>Participa nas próximas atividades do Agrupamento 929 - Belém.</p>
    </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="pagina-conteudo">
    {% include atividades-nav.html %}
    <div class="atividades-painel">
        <section class="atividades-coluna">
            <h2 class="section-title">📋 Inscrições atuais</h2>
            <p class="atividades-intro">Todas as inscrições abertas neste momento.</p>
            {% for inscricao in inscricoes_ativas %}
                {% include inscricao-card.html inscricao=inscricao %}
            {% else %}
                <div class="info-block atividades-vazio">
                    <p>Não há nenhuma inscrição aberta neste momento.</p>
                    <p>Consulta esta página mais tarde para veres as próximas atividades.</p>
                </div>
            {% endfor %}
        </section>

        <section class="atividades-coluna">
            <h2 class="section-title">🌊 Atividades passadas</h2>
            <p class="atividades-intro">Um registo das atividades já vividas pelo Agrupamento.</p>
            <div class="atividades-timeline">
                <a class="timeline-item" href="{{ '/atividades/acagrup-2026.html' | relative_url }}">
                    <time datetime="2026-08-05">05 ago 2026</time>
                    <h3>ACAGRUP 2026 - Ilha dos Cavalos</h3>
                    <p>O Segredo da Ilha Perdida</p>
                </a>
                <a class="timeline-item" href="{{ '/atividades/promessas26.html' | relative_url }}">
                    <time datetime="2026-06-20">20 jun 2026</time>
                    <h3>Promessas 2026</h3>
                    <p>Fotografias e memórias da cerimónia</p>
                </a>
            </div>
        </section>
    </div>
</div>
