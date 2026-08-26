---
layout: default
title: Diário de Bordo | IV - Comunidade
main_class: pagina-com-hero
ultima_atualizacao: 23/08/2026
seccao_slug: comunidade
seccao_nome: IV - Comunidade
seccao_cor: '#CE1126'
pasta_documentos: "1dbzKTvBdIoigtzF5DascO4hJfjrT1dQb"
pasta_imagens: "1SuqsdzNBkOm3D762mdcsWlr2txQ-sj0z"
---

<section class="hero-generico hero-comunidade" id="hero">
    <div class="pagina-cabecalho">
        <span class="icone-hero-caixa" aria-hidden="true"><img class="icone-hero-seccao" src="{{ '/assets/img/seccoes/4_companheiros.png' | relative_url }}" alt=""></span>
        <h1>Diário de Bordo</h1>
        <p>As memórias, relatórios e imagens das nossas navegações.</p>
    </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina">
    {% include seccao-nav.html %}
    <section class="card">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <span style="font-size: 2.5rem;">📄</span>
            <h2 style="margin: 0; color: #CE1126;">Diário de Bordo</h2>
        </div>

        <p style="line-height: 1.6; margin-bottom: 30px;">O arquivo vivo da nossa Comunidade, onde guardamos as memórias das nossas navegações, os relatórios de atividade e as imagens que nos marcaram.</p>

        <!-- CAIXA DOS DOCUMENTOS (Apresentação em Lista) -->
        <div style="margin-top: 40px; text-align: left;">
            <h3 class="section-title vermelho">📄 Arquivo de Documentos</h3>
            <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Relatórios, diários escritos e planeamentos de empreendimentos.</p>

            <div style="width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <!-- O parâmetro #list força o Google Drive a mostrar em formato de lista (ideal para PDFs e Word) -->
                <iframe src="https://drive.google.com/embeddedfolderview?id={{ page.pasta_documentos }}#list" width="100%" height="400" frameborder="0" loading="lazy" style="display: block;"></iframe>
            </div>
        </div>

        <!-- CAIXA DAS IMAGENS (Apresentação em Grelha) -->
        <div style="margin-top: 50px; text-align: left;">
            <h3 class="section-title vermelho">📸 Galeria de Bordo</h3>
            <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Registos fotográficos das nossas atividades e vivência em campo e no mar.</p>

            <div style="width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <!-- O parâmetro #grid força o Google Drive a mostrar as miniaturas das fotos -->
                <iframe src="https://drive.google.com/embeddedfolderview?id={{ page.pasta_imagens }}#grid" width="100%" height="600" frameborder="0" loading="lazy" style="display: block;"></iframe>
            </div>
        </div>
    </section>
</div>