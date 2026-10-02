---
layout: default
title: I - Alcateia | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 25/09/2026
seccao_slug: alcateia
seccao_nome: I - Alcateia
seccao_cor: '#E9B708'
seccao_cor_texto: '#17202A'
---
<style>
    .alcateia-equipa-bloco .seccao-geral-intro { margin-bottom: 16px; }
    .alcateia-equipa-bloco .alcateia-cargos-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 8px; }
    .alcateia-equipa-contactos { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 20px; margin: 16px 0 8px; }
    .alcateia-equipa-contactos a { color: var(--azul-claro); font-size: 0.85rem; font-weight: 800; }
</style>

<section class="hero-generico hero-seccao hero-alcateia" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho"><h1>I - Alcateia</h1><p>A secção dos Lobitos, dos 6 aos 10 anos.</p></header>
    {% include seccao-nav.html %}
    <section class="seccao-geral-conteudo" style="--cor-seccao: {{ page.seccao_cor }};">
        <div class="seccao-equipa-bloco alcateia-equipa-bloco">
            <h2 class="section-title">🐺 A equipa da Alcateia</h2>
            <p class="seccao-geral-intro">A Equipa de Animação acompanha os Lobitos na descoberta, no jogo e na vida em bando; o Guia e o Sub-Guia, escolhidos pelos Lobitos, ajudam a organizar o seu bando.</p>
            <h3 class="section-title" style="color: var(--cor-seccao);">Equipa de Animação</h3>
            <div class="equipa-seccao-grelha">
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_unidade.png' | relative_url }}" alt="Insígnia de Chefe de Unidade"><img src="{{ '/assets/img/equipa/paulo-duarte_equipa.jpg' | relative_url }}" alt="Paulo Duarte"><div><small>Chefe de Unidade</small><strong>Paulo Duarte (Roaz Criativo)</strong></div></div>
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/candidato_dirigente.png' | relative_url }}" alt="Insígnia de Candidato a Dirigente"><img src="{{ '/assets/img/equipa/madalena-catita_equipa.jpg' | relative_url }}" alt="Madalena Catita"><div><small>Aspirante a Dirigente</small><strong>Madalena Catita (Raposa Exigente)</strong></div></div>
            </div>
            <h3 class="section-title" style="color: var(--cor-seccao); margin-top: 18px;">Guia e Sub-Guia de Bando</h3>
            <div class="equipa-seccao-grelha alcateia-cargos-grelha">
                <div class="pessoa-seccao"><span class="pessoa-seccao-foto cargo-foto-placeholder" aria-hidden="true">👤</span><div><small>Guia de Bando</small><strong>A eleger</strong></div></div>
                <div class="pessoa-seccao"><span class="pessoa-seccao-foto cargo-foto-placeholder" aria-hidden="true">👤</span><div><small>Sub-Guia de Bando</small><strong>A eleger</strong></div></div>
            </div>
            <div class="alcateia-equipa-contactos">
                <a href="{{ '/agrupamento/equipa.html' | relative_url }}">Ver as equipas do Agrupamento</a>
                <a href="mailto:lobitos.929@escutismo.pt">✉️ Enviar email à Alcateia</a>
            </div>
        </div>
        <div class="geral-grelha">
            <div><h3 class="section-title" style="color: var(--cor-seccao);">🌐 A Alcateia no CNE</h3><p class="seccao-geral-texto">Para além do que partilhamos aqui sobre a nossa Alcateia marítima, o Corpo Nacional de Escutas tem informação nacional dedicada à I Secção (Lobitos), com mais informação sobre o método, o percurso e o Sistema de Progresso.</p><a href="https://escutismo.pt/lobitos-6-aos-10-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">🧭</span><h3>Página Oficial da Alcateia — CNE</h3><span class="seccao-link-legenda">escutismo.pt ↗</span></a></div>
            <div><h3 class="section-title" style="color: var(--cor-seccao);">👕 O nosso Uniforme e Insígnias</h3><p class="seccao-geral-texto">Clica nos cartões abaixo para consultares os documentos oficiais e recursos detalhados da secção.</p><div class="quick-links-grid"><a href="{{ '/assets/docs/uniforme-maritimo_v2024-1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">👔</span><h3>Uniforme de Lobitos</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a><a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">⚓</span><h3>Insígnias da Alcateia</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a></div></div>
        </div>
    </section>
</div>
