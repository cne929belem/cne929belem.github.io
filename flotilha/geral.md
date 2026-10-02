---
layout: default
title: II - Flotilha | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 25/09/2026
seccao_slug: flotilha
seccao_nome: II - Flotilha
seccao_cor: '#6678A6'
---
<style>
    .flotilha-equipa-bloco .seccao-geral-intro { margin-bottom: 16px; }
    .flotilha-equipa-bloco .flotilha-cargos-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 8px; }
    .flotilha-equipa-contactos { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 20px; margin: 16px 0 8px; }
    .flotilha-equipa-contactos a { color: var(--azul-claro); font-size: 0.85rem; font-weight: 800; }
</style>

<section class="hero-generico hero-seccao hero-flotilha" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho"><h1>II - Flotilha</h1><p>A secção dos Moços, dos 10 aos 14 anos.</p></header>
    {% include seccao-nav.html %}
    <section class="seccao-geral-conteudo" style="--cor-seccao: {{ page.seccao_cor }};">
        <div class="seccao-equipa-bloco flotilha-equipa-bloco">
            <h2 class="section-title">⚓ A equipa da Flotilha</h2>
            <p class="seccao-geral-intro">A Equipa de Animação acompanha os Moços no crescimento em autonomia, amizade e espírito de tripulação; o Timoneiro e o Sota-Timoneiro ajudam a organizar a vida da tripulação.</p>
            <h3 class="section-title" style="color: var(--cor-seccao);">Equipa de Animação</h3>
            <div class="equipa-seccao-grelha">
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_unidade.png' | relative_url }}" alt="Insígnia de Chefe de Unidade"><img src="{{ '/assets/img/equipa/carolina-mascarenhas_equipa.jpg' | relative_url }}" alt="Carolina Mascarenhas"><div><small>Chefe de Unidade</small><strong>Carolina Mascarenhas (Koala Pensadora)</strong></div></div>
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_agrupamento.png' | relative_url }}" alt="Insígnia de Chefe de Agrupamento"><img src="{{ '/assets/img/equipa/eunice-goncalves_equipa.jpg' | relative_url }}" alt="Eunice Gonçalves"><div><small>Chefe Adjunto</small><strong>Eunice Gonçalves (Salamandra)</strong></div></div>
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/candidato_dirigente.png' | relative_url }}" alt="Insígnia de Candidata a Dirigente"><img src="{{ '/assets/img/equipa/maria-rodrigues_equipa.jpg' | relative_url }}" alt="Maria Rodrigues"><div><small>Noviço a Dirigente</small><strong>Maria Rodrigues</strong></div></div>
            </div>
            <h3 class="section-title" style="color: var(--cor-seccao); margin-top: 18px;">Timoneiro e Sota-Timoneiro</h3>
            <div class="equipa-seccao-grelha flotilha-cargos-grelha">
                <div class="pessoa-seccao"><span class="pessoa-seccao-foto cargo-foto-placeholder" aria-hidden="true">👤</span><div><small>Timoneiro</small><strong>A eleger</strong></div></div>
                <div class="pessoa-seccao"><span class="pessoa-seccao-foto cargo-foto-placeholder" aria-hidden="true">👤</span><div><small>Sota-Timoneiro</small><strong>A eleger</strong></div></div>
            </div>
            <div class="flotilha-equipa-contactos">
                <a href="{{ '/agrupamento/equipa.html' | relative_url }}">Ver as equipas do Agrupamento</a>
                <a href="mailto:mocos.929@escutismo.pt">✉️ Enviar email à Flotilha</a>
            </div>
        </div>
        <div class="geral-grelha">
            <div><h3 class="section-title" style="color: var(--cor-seccao);">🌐 A Flotilha no CNE</h3><p class="seccao-geral-texto">Para além do que partilhamos sobre a nossa Flotilha marítima, o Corpo Nacional de Escutas tem informação nacional dedicada à II Secção (Moços), com mais informação sobre o método, o percurso e o Sistema de Progresso.</p><a href="https://escutismo.pt/exploradores-10-aos-14-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">🧭</span><h3>Página Oficial da Flotilha — CNE</h3><span class="seccao-link-legenda">escutismo.pt ↗</span></a></div>
            <div><h3 class="section-title" style="color: var(--cor-seccao);">👕 O nosso Uniforme e Insígnias</h3><p class="seccao-geral-texto">Clica nos cartões abaixo para consultares os documentos oficiais e recursos detalhados da secção.</p><div class="quick-links-grid"><a href="{{ '/assets/docs/uniforme-maritimo_v2024-2.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">👔</span><h3>Uniforme de Moços</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a><a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">⚓</span><h3>Insígnias da Flotilha</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a></div></div>
        </div>
    </section>
</div>
