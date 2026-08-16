---
layout: default
title: Geral | IV - Comunidade
main_class: pagina-com-hero
seccao_slug: comunidade
seccao_nome: IV - Comunidade
seccao_cor: '#CE1126'
---

<style>
    .icone-hero-caixa { position: absolute; top: 50%; left: 50%; width: 176px; height: 132px; transform: translate(-50%, -50%) rotate(-4deg); display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 18px; opacity: .28; }
    .pagina-cabecalho .icone-hero-seccao { position: relative; z-index: 0; width: auto; height: 92px; object-fit: contain; }
    .pagina-cabecalho h1, .pagina-cabecalho p { position: relative; z-index: 1; }
    .geral-grelha { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; margin-top: 40px; }
    .geral-grelha > div { min-width: 0; margin-top: 0 !important; }
    .insignia-equipa { width: 34px; height: 34px; object-fit: contain; flex-shrink: 0; }
    @media (max-width: 760px) { .geral-grelha { grid-template-columns: 1fr; } }
</style>

<section class="hero-generico hero-comunidade" id="hero">
    <div class="pagina-cabecalho">
        <span class="icone-hero-caixa" aria-hidden="true"><img class="icone-hero-seccao" src="{{ '/assets/img/seccoes/4_companheiros.png' | relative_url }}" alt=""></span>
        <h1>IV - Comunidade</h1>
        <p>Companheiros dos 18 aos 22 anos, com a divisa "Servir".</p>
    </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina">
    {% include seccao-nav.html %}
    <section class="card card-sem-caixa">
        <div class="seccao-equipa-bloco comunidade-equipa-bloco" style="--cor-seccao: #CE1126;">
            <h2 class="section-title vermelho">🏕️ A nossa Equipa de Animação</h2>
            <p class="seccao-geral-intro">A equipa que acompanha a Comunidade e ajuda cada Companheiro a escolher o seu rumo e a viver a vocação do Serviço.</p>
            <div class="equipa-seccao-grelha">
                <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_unidade.png' | relative_url }}" alt="Insígnia de Chefe de Unidade"><img src="{{ '/assets/img/equipa/ricardo-isaias_equipa.jpg' | relative_url }}" alt="Ricardo Isaías"><div><small>Chefe de Unidade</small><strong>Ricardo Isaías (Axolote)</strong></div></div>
                <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/instrutor.png' | relative_url }}" alt="Insígnia de Dirigente"><img src="{{ '/assets/img/equipa/ruben-rodrigues_equipa.jpg' | relative_url }}" alt="Ruben Rodrigues"><div><small>Dirigente</small><strong>Ruben Rodrigues (Tubarão Empenhado)</strong></div></div>
            </div>
            <a class="seccao-equipa-link" href="{{ '/agrupamento/equipa.html' | relative_url }}">Ver a equipa completa do Agrupamento →</a>
        </div>

        <div class="geral-grelha">
        <!-- TEMA 2: INFORMAÇÃO DA PÁGINA GERAL ESCUTISTA -->
        <div>
            <h3 class="section-title vermelho">🌐 A IV Secção no CNE</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">Para além do que aqui partilhamos sobre a nossa Comunidade marítima, o Corpo Nacional de Escutas tem uma página nacional dedicada à IV Secção (Caminheiros/Companheiros), com mais informação sobre o método, o percurso e o Sistema de Progresso.</p>
            <a href="https://escutismo.pt/caminheiros-18-aos-22-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card" style="max-width: 100%;">
                <span class="quick-link-icon">🧭</span>
                <h3>Página Oficial da IV Secção — CNE</h3>
                <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">escutismo.pt ↗️️</span>
            </a>
        </div>

        <!-- TEMA 3: UNIFORME -->
        <div>
            <h3 class="section-title vermelho">👕 O nosso Uniforme e Insígnias</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">Clica nos cartões abaixo para consultares os documentos oficiais detalhados em formato PDF.</p>

            <div class="quick-links-grid" style="margin-top: 20px;">
                <a href="{{ '/assets/docs/uniforme-maritimo_v2024-4.pdf' | relative_url }}" target="_blank" class="quick-link-card">
                    <span class="quick-link-icon">👔</span>
                    <h3>Uniforme Marítimo</h3>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
                <a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" class="quick-link-card">
                    <span class="quick-link-icon">⚓</span>
                    <h3>Insígnia Marítima</h3>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
            </div>
        </div>
        </div>

    </section>
</div>