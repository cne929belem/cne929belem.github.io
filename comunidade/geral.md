---
layout: default
title: Geral | IV - Comunidade 88
main_class: pagina-com-hero
ultima_atualizacao: 25/09/2026
seccao_slug: comunidade
seccao_nome: IV - Comunidade 88
seccao_cor: '#39374C'
---

<style>
    .geral-grelha { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; margin-top: 40px; }
    .geral-grelha > div { min-width: 0; margin-top: 0 !important; }
    .insignia-equipa { width: 34px; height: 34px; object-fit: contain; flex-shrink: 0; }
    .comunidade-equipa-bloco .seccao-geral-intro { margin-bottom: 16px; }
    .comunidade-equipa-bloco .equipa-seccao-grelha { grid-template-columns: 1fr; }
    .comunidade-equipa-bloco .comunidade-arrais-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 8px; }
    .comunidade-equipa-contactos { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 20px; margin: 16px 0 8px; }
    .comunidade-equipa-contactos a { color: var(--azul-claro); font-size: 0.85rem; font-weight: 800; }
    @media (max-width: 760px) { .geral-grelha { grid-template-columns: 1fr; } }
</style>

<section class="hero-generico hero-comunidade" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina">
    <header class="seccao-cabecalho">
        <h1>IV - Comunidade 88</h1>
        <p>Companheiros dos 18 aos 22 anos, com a divisa "Servir".</p>
    </header>
    {% include seccao-nav.html %}
    <section class="card card-sem-caixa">
        <div class="seccao-equipa-bloco comunidade-equipa-bloco" style="--cor-seccao: #39374C;">
            <h2 class="section-title vermelho">🏕️ A equipa da Comunidade 88</h2>
            <p class="seccao-geral-intro">A Equipa de Animação acompanha o percurso dos Companheiros; os Arrais, eleitos pelos Companheiros no início das atividades, apoiam a organização e a coordenação da vida da Comunidade 88.</p>
            <h3 class="section-title vermelho">Equipa de Animação</h3>
            <div class="equipa-seccao-grelha">
                <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_unidade.png' | relative_url }}" alt="Insígnia de Chefe de Unidade"><img src="{{ '/assets/img/equipa/ricardo-isaias_equipa.jpg' | relative_url }}" alt="Ricardo Isaías"><div><small>Chefe de Unidade</small><strong>Ricardo Isaías (Axolote)</strong></div></div>
            </div>
            <h3 class="section-title vermelho" style="margin-top: 18px;">Arrais</h3>
            <div class="equipa-seccao-grelha comunidade-arrais-grelha">
                <div class="pessoa-seccao"><img class="pessoa-seccao-foto" src="{{ '/assets/img/seccoes/arrais.jpg' | relative_url }}" alt="Guilherme Fernandes"><div><small>Arrais</small><strong>Guilherme Fernandes (Lavagante)</strong></div></div>
                <div class="pessoa-seccao"><img class="pessoa-seccao-foto" src="{{ '/assets/img/seccoes/2arrais.jpg' | relative_url }}" alt="Afonso Carpinteiro"><div><small>2.º Arrais</small><strong>Afonso Carpinteiro (Napoleão)</strong></div></div>
            </div>
            <div class="comunidade-equipa-contactos">
                <a href="{{ '/agrupamento/equipa.html' | relative_url }}">Ver as equipas do Agrupamento</a>
                <a href="mailto:companheiros.929@escutismo.pt">✉️ Enviar email à Comunidade 88</a>
            </div>
        </div>

        <div class="geral-grelha">
        <!-- TEMA 2: INFORMAÇÃO DA PÁGINA GERAL ESCUTISTA -->
        <div>
            <h3 class="section-title vermelho">🌐 A IV Secção no CNE</h3>
            <p style="line-height: 1.6;">Para além do que aqui partilhamos sobre a Comunidade 88, o Corpo Nacional de Escutas tem uma página nacional dedicada à IV Secção (Companheiros), com mais informação sobre o método, o percurso e o Sistema de Progresso.</p>
            <a href="https://escutismo.pt/caminheiros-18-aos-22-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card" style="max-width: 100%;">
                <span class="quick-link-icon">🧭</span>
                <h3>Página Oficial da IV Secção — CNE</h3>
                <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">escutismo.pt ↗️️</span>
            </a>
        </div>

        <!-- TEMA 3: UNIFORME -->
        <div>
            <h3 class="section-title vermelho">👕 O nosso Uniforme e Insígnias</h3>
            <p style="line-height: 1.6;">Clica nos cartões abaixo para consultares os documentos oficiais detalhados em formato PDF.</p>

            <div class="quick-links-grid" style="margin-top: 20px;">
                <a href="{{ '/assets/docs/uniforme-maritimo_v2024-4.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
                    <span class="quick-link-icon">👔</span>
                    <h3>Uniforme Marítimo</h3>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
                <a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
                    <span class="quick-link-icon">⚓</span>
                    <h3>Insígnia Marítima</h3>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
            </div>
        </div>
        </div>

    </section>
</div>