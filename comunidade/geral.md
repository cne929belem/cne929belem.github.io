---
layout: default
title: Geral | IV - Comunidade
main_class: pagina-com-hero
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
    {% include comunidade-nav.html %}
    <section class="card" style="max-width: 800px; width: 100%;">
        <p>Conhece a nossa Equipa de Animação, a IV Secção no CNE e os recursos que acompanham a vivência dos Companheiros.</p>

        <!-- TEMA 1: EQUIPA DE ANIMAÇÃO -->
        <div style="margin-top: 30px;">
            <h3 class="section-title vermelho">🏕️ A nossa Equipa de Animação</h3>
            <div style="background: rgba(206, 17, 38, 0.1); border-left: 5px solid #CE1126; border-radius: 6px; padding: 15px; display: flex; align-items: center; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <div style="background: white; border: 1px solid #ddd; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px;">
                        <img class="insignia-equipa" src="{{ '/assets/img/equipa/chefe_unidade.jpg' | relative_url }}" alt="Insígnia de Chefe de Unidade">
                        <div style="width: 40px; height: 40px; background-color: var(--cinza-fundo); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <img src="{{ '/assets/img/equipa/ricardo-isaias_equipa.jpg' | relative_url }}" alt="Ricardo Isaías" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; color: #666; text-transform: uppercase;">Chefe de Unidade</div>
                            <div style="font-weight: bold; color: var(--azul-marinho);">Ricardo Isaías (Axolote)</div>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid #ddd; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px;">
                        <img class="insignia-equipa" src="{{ '/assets/img/equipa/instrutor.jpg' | relative_url }}" alt="Insígnia de Dirigente">
                        <div style="width: 40px; height: 40px; background-color: var(--cinza-fundo); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <img src="{{ '/assets/img/equipa/ruben-rodrigues_equipa.jpg' | relative_url }}" alt="Ruben Rodrigues" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; color: #666; text-transform: uppercase;">Dirigente</div>
                            <div style="font-weight: bold; color: var(--azul-marinho);">Ruben Rodrigues (Tubarão Empenhado)</div>
                        </div>
                    </div>
                </div>
            </div>
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