---
layout: default
title: Inscrições em Atividades | Agrupamento 929 - Belém
main_class: main-content
---
{% comment %}
  Lista todas as inscrições com "ativo: true", da coleção _inscricoes/.
  Para abrir uma inscrição nova: painel /admin/ → "Inscrições" → "Novo
  Inscricoes", preenche o link do Google Forms e marca "Ativo". Quando a
  atividade terminar, desmarca "Ativo" (ou apaga a entrada) — desaparece
  sozinha desta página, não precisas de tocar em mais nada.
{% endcomment %}
{% assign inscricoes_ativas = site.inscricoes | where: "ativo", true %}

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%;">
        <span style="font-size: 3rem; display: block; margin-bottom: 10px;">📋</span>
        <h1>Inscrições em Atividades</h1>
        <p>Todas as inscrições abertas neste momento — clica para preencheres o formulário.</p>

        <div style="text-align: left; margin-top: 20px;">
            {% for inscricao in inscricoes_ativas %}
                {% include inscricao-card.html inscricao=inscricao %}
            {% else %}
                <div class="info-block" style="text-align: center;">
                    <p style="margin: 0;">Não há nenhuma inscrição aberta neste momento. Volta a consultar mais tarde, ou acompanha o <a href="{{ '/agrupamento/noticias.html' | relative_url }}" style="color: var(--azul-claro); font-weight: bold;">Diário de Bordo</a> para saberes quando uma nova atividade abrir.</p>
                </div>
            {% endfor %}
        </div>

        <p style="text-align: right; font-size: 0.7rem; color: #888; margin-top: 30px; font-style: italic;">
            Última atualização em 14/08/2026
        </p>
    </section>
</div>
