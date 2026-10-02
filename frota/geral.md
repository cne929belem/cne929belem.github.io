---
layout: default
title: III - Frota 98 | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 25/09/2026
seccao_slug: frota
seccao_nome: III - Frota 98
seccao_cor: '#39374C'
---
<style>
    .frota-equipa-bloco .seccao-geral-intro { margin-bottom: 16px; }
    .frota-equipa-bloco .frota-cargos-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 8px; }
    .frota-equipa-contactos { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 20px; margin: 16px 0 8px; }
    .frota-equipa-contactos a { color: var(--azul-claro); font-size: 0.85rem; font-weight: 800; }
</style>

<section class="hero-generico hero-seccao hero-frota" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho"><h1>III - Frota 98</h1><p>A secção dos Marinheiros, dos 14 aos 18 anos.</p></header>
    {% include seccao-nav.html %}
    <section class="seccao-geral-conteudo" style="--cor-seccao: {{ page.seccao_cor }};">
        <div class="seccao-equipa-bloco frota-equipa-bloco">
            <h2 class="section-title">⛵ A equipa da Frota 98</h2>
            <p class="seccao-geral-intro">A Equipa de Animação acompanha o percurso dos Marinheiros; o Mestre e o Contramestre, eleitos pelos Marinheiros no início das atividades, apoiam a organização e a coordenação da vida da Frota 98.</p>
            <h3 class="section-title" style="color: var(--cor-seccao);">Equipa de Animação</h3>
            <div class="equipa-seccao-grelha">
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_unidade.png' | relative_url }}" alt="Insígnia de Chefe de Unidade"><img src="{{ '/assets/img/equipa/ricardo-isaias_equipa.jpg' | relative_url }}" alt="Ricardo Isaías"><div><small>Chefe de Unidade</small><strong>Ricardo Isaías (Axolote)</strong></div></div>
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/candidato_dirigente.png' | relative_url }}" alt="Insígnia de Noviço a Dirigente"><img src="{{ '/assets/img/equipa/simao-pereira_equipa.jpg' | relative_url }}" alt="Simão Pereira"><div><small>Noviço a Dirigente</small><strong>Simão Pereira (Sapo)</strong></div></div>
            </div>
            <h3 class="section-title" style="color: var(--cor-seccao); margin-top: 18px;">Mestre e Contramestre</h3>
            <div class="equipa-seccao-grelha frota-cargos-grelha">
                <div class="pessoa-seccao"><span class="pessoa-seccao-foto cargo-foto-placeholder" aria-hidden="true">👤</span><div><small>Mestre</small><strong>A eleger</strong></div></div>
                <div class="pessoa-seccao"><span class="pessoa-seccao-foto cargo-foto-placeholder" aria-hidden="true">👤</span><div><small>Contramestre</small><strong>A eleger</strong></div></div>
            </div>
            <div class="frota-equipa-contactos">
                <a href="{{ '/agrupamento/equipa.html' | relative_url }}">Ver as equipas do Agrupamento</a>
                <a href="mailto:marinheiros.929@escutismo.pt">✉️ Enviar email à Frota 98</a>
            </div>
        </div>
        <div class="geral-grelha">
            <div><h3 class="section-title" style="color: var(--cor-seccao);">🌐 A Frota no CNE</h3><p class="seccao-geral-texto">Para além do que partilhamos aqui sobre a nossa Frota marítima, o Corpo Nacional de Escutas tem informação nacional dedicada à III Secção (Marinheiros) com mais informação sobre o método, o percurso e o Sistema de Progresso.</p><a href="https://escutismo.pt/pioneiros-14-aos-18-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">🧭</span><h3>Página Oficial da Frota — CNE</h3><span class="seccao-link-legenda">escutismo.pt ↗</span></a></div>
            <div><h3 class="section-title" style="color: var(--cor-seccao);">👕 O nosso Uniforme e Insígnias</h3><p class="seccao-geral-texto">Clica nos cartões abaixo para consultares os documentos oficiais e recursos detalhados da secção.</p><div class="quick-links-grid"><a href="{{ '/assets/docs/uniforme-maritimo_v2024-3.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">👔</span><h3>Uniforme de Marinheiros</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a><a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">⚓</span><h3>Insígnias da Frota</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a></div></div>
        </div>
    </section>
</div>