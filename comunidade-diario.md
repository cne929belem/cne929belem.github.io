---
layout: default
title: Diário de Bordo | IV - Comunidade
main_class: main-content
pasta_documentos: "COLA_AQUI_O_ID_DA_PASTA_DE_DOCUMENTOS"
pasta_imagens: "COLA_AQUI_O_ID_DA_PASTA_DE_IMAGENS"
---

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 900px; width: 100%; border-top: 8px solid #CE1126;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <span style="font-size: 2.5rem;">📓</span>
            <h1 style="margin: 0; color: #CE1126;">Diário de Bordo</h1>
        </div>

        <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 30px;">O arquivo vivo da nossa Comunidade. Aqui guardamos as memórias das nossas navegações, os relatórios de atividade e as imagens que marcam a nossa rota.</p>

        <!-- CAIXA DOS DOCUMENTOS (Apresentação em Lista) -->
        <div style="margin-top: 40px; text-align: left;">
            <h3 style="color: var(--azul-marinho); border-bottom: 2px solid #eee; padding-bottom: 8px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <span>📄</span> Arquivo de Documentos
            </h3>
            <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Relatórios, diários escritos e planeamentos de empreendimentos.</p>
            
            <div style="width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <!-- O parâmetro #list força o Google Drive a mostrar em formato de lista (ideal para PDFs e Word) -->
                <iframe src="https://drive.google.com/embeddedfolderview?id=1dbzKTvBdIoigtzF5DascO4hJfjrT1dQb#list" width="100%" height="400" frameborder="0" style="display: block;"></iframe>
            </div>
        </div>

        <!-- CAIXA DAS IMAGENS (Apresentação em Grelha) -->
        <div style="margin-top: 50px; text-align: left;">
            <h3 style="color: var(--azul-marinho); border-bottom: 2px solid #eee; padding-bottom: 8px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <span>📸</span> Galeria de Bordo
            </h3>
            <p style="font-size: 0.85rem; color: #666; margin-bottom: 15px;">Registos fotográficos das nossas atividades e vivência em campo e no mar.</p>
            
            <div style="width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <!-- O parâmetro #grid força o Google Drive a mostrar as miniaturas das fotos -->
                <iframe src="https://drive.google.com/embeddedfolderview?id=1SuqsdzNBkOm3D762mdcsWlr2txQ-sj0z#grid" width="100%" height="600" frameborder="0" style="display: block;"></iframe>
            </div>
        </div>
    </section>
</div>