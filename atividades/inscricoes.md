---
layout: default
title: Inscrições | Atividades
main_class: main-content
atividade_nome: "Atividade"
form_url: "https://docs.google.com/forms/d/e/1FAIpQLSe_EXEMPLO_AQUI/viewform"
---

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%; border-top: 8px solid var(--azul-marinho);">
        <span style="font-size: 3rem; display: block; margin-bottom: 10px;">📄</span>
        <h1 style="color: var(--azul-marinho);">Inscrições Abertas</h1>
        <h3 style="color: #666; margin-top: -10px; margin-bottom: 20px;">{{ page.atividade_nome }}</h3>
        
        <p>Preenche o formulário abaixo para garantir a tua presença na nossa próxima atividade. Lê com atenção todas as informações pedidas.</p>

        <!-- Botão de abertura em nova janela (útil para telemóveis) -->
        <div style="margin-top: 30px; text-align: center;">
            <a href="{{ page.form_url }}" target="_blank" class="btn" style="background-color: #28a745; font-size: 1.1rem; padding: 15px 30px;">
                📝 Abrir Formulário noutra janela
            </a>
        </div>

        <hr style="border: 0; border-top: 1px dashed #ddd; margin: 30px 0;">

        <!-- Formulário embutido diretamente na página -->
        <div style="margin-top: 20px; width: 100%; overflow: hidden;">
            <iframe src="{{ page.form_url }}?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0" style="border-radius: 8px; border: 1px solid #ddd; background: #fcfcfc;">A carregar o formulário...</iframe>
        </div>

                <p style="text-align: right; font-size: 0.7rem; color: #888; margin-top: 15px; font-style: italic;">
                    Última atualização em 13/08/2026
                </p>
    </section>
</div>