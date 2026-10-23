---
layout: default
title: II - Flotilha 110 | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 10/10/2026
seccao_slug: flotilha
seccao_nome: II - Flotilha 110
seccao_cor: '#6678A6'
---
<style>
    .flotilha-equipa-bloco .seccao-geral-intro { margin-bottom: 16px; }
    .flotilha-tripulacoes-grelha { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 8px; }
    .flotilha-tripulacao { display: block; min-width: 0; padding: 14px; border: 1px solid rgba(0,0,0,.08); border-radius: 8px; background: rgba(255,255,255,.55); color: inherit; }
    .flotilha-tripulacao.seccao-grupo-trigger:hover { border-color: var(--cor-seccao); background: #fff; }
    .flotilha-tripulacao h4 { margin: 0 0 10px; color: var(--azul-marinho); font-size: .95rem; }
    .flotilha-tripulacao .equipa-seccao-grelha { grid-template-columns: 1fr; }
    .flotilha-equipa-contactos { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 20px; margin: 16px 0 8px; }
    .flotilha-equipa-contactos a { color: var(--azul-claro); font-size: 0.85rem; font-weight: 800; }
    @media (max-width: 900px) { .flotilha-tripulacoes-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 600px) { .flotilha-tripulacoes-grelha { grid-template-columns: 1fr; } }
</style>

<section class="hero-generico hero-seccao hero-flotilha" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho"><h1>II - Flotilha 110</h1><p>A secção dos Moços, dos 10 aos 14 anos.</p></header>
    {% include seccao-nav.html %}
    <section class="seccao-geral-conteudo" style="--cor-seccao: {{ page.seccao_cor }};">
        <div class="seccao-equipa-bloco flotilha-equipa-bloco">
            <h2 class="section-title">⚓ A equipa da Flotilha 110</h2>
            <p class="seccao-geral-intro">A Equipa de Animação acompanha os Moços no crescimento em autonomia, amizade e espírito de tripulação; os Timoneiros e Sota-Timoneiros ajudam a organizar a vida das tripulações.</p>
            <h3 class="section-title" style="color: var(--cor-seccao);">Equipa de Animação</h3>
            <div class="equipa-seccao-grelha">
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_unidade.png' | relative_url }}" alt="Insígnia de Chefe de Unidade"><img src="{{ '/assets/img/equipa/carolina-mascarenhas_equipa.jpg' | relative_url }}" alt="Carolina Mascarenhas"><div><small>Chefe de Unidade</small><strong>Carolina Mascarenhas (Koala Pensadora)</strong></div></div>
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/chefe_agrupamento.png' | relative_url }}" alt="Insígnia de Chefe de Agrupamento"><img src="{{ '/assets/img/equipa/eunice-goncalves_equipa.jpg' | relative_url }}" alt="Eunice Gonçalves"><div><small>Chefe Adjunto</small><strong>Eunice Gonçalves (Salamandra)</strong></div></div>
            <div class="pessoa-seccao"><img src="{{ '/assets/img/equipa/candidato_dirigente.png' | relative_url }}" alt="Insígnia de Candidata a Dirigente"><img src="{{ '/assets/img/equipa/maria-rodrigues_equipa.jpg' | relative_url }}" alt="Maria Rodrigues"><div><small>Noviço a Dirigente</small><strong>Maria Rodrigues</strong></div></div>
            </div>
            <h3 class="section-title" style="color: var(--cor-seccao); margin-top: 18px;">As Tripulações</h3>
            <div class="flotilha-tripulacoes-grelha">
                <a class="flotilha-tripulacao seccao-grupo-trigger" href="#modal-elementos-baleia" aria-haspopup="dialog" aria-label="Abrir elementos da Tripulação Baleia">
                    <h4 id="tripulacao-baleia">Baleia</h4>
                    <div class="equipa-seccao-grelha">
                        <div class="pessoa-seccao"><div><small>Timoneira · Timoneira de Flotilha</small><strong>Guppy</strong></div></div>
                        <div class="pessoa-seccao"><div><small>Sota-Timoneiro</small><strong>Narval</strong></div></div>
                    </div>
                </a>
                <a class="flotilha-tripulacao seccao-grupo-trigger" href="#modal-elementos-tubarao" aria-haspopup="dialog" aria-label="Abrir elementos da Tripulação Tubarão">
                    <h4 id="tripulacao-tubarao">Tubarão</h4>
                    <div class="equipa-seccao-grelha">
                        <div class="pessoa-seccao"><div><small>Timoneiro</small><strong>Dragão</strong></div></div>
                        <div class="pessoa-seccao"><div><small>Sota-Timoneiro</small><strong>Salmão</strong></div></div>
                    </div>
                </a>
                <a class="flotilha-tripulacao seccao-grupo-trigger" href="#modal-elementos-castor" aria-haspopup="dialog" aria-label="Abrir elementos da Tripulação Castor">
                    <h4 id="tripulacao-castor">Castor</h4>
                    <div class="equipa-seccao-grelha">
                        <div class="pessoa-seccao"><div><small>Timoneiro</small><strong>Delfim</strong></div></div>
                        <div class="pessoa-seccao"><div><small>Sota-Timoneiro</small><strong>Tartaruga</strong></div></div>
                    </div>
                </a>
            </div>
            {% include seccao-elementos-modal.html id="modal-elementos-baleia" nome="Elementos da Tripulação Baleia" fotos=false %}
            {% include seccao-elementos-modal.html id="modal-elementos-tubarao" nome="Elementos da Tripulação Tubarão" fotos=false %}
            {% include seccao-elementos-modal.html id="modal-elementos-castor" nome="Elementos da Tripulação Castor" fotos=false %}
            <div class="flotilha-equipa-contactos">
                <a href="{{ '/agrupamento/equipa.html' | relative_url }}">Ver as equipas do Agrupamento</a>
                <a href="mailto:mocos.929@escutismo.pt">✉️ Enviar email à Flotilha 110</a>
            </div>
        </div>
        <div class="geral-grelha">
            <div><h3 class="section-title" style="color: var(--cor-seccao);">🌐 A Flotilha no CNE</h3><p class="seccao-geral-texto">Para além do que partilhamos sobre a nossa Flotilha 110 marítima, o Corpo Nacional de Escutas tem informação nacional dedicada à II Secção (Moços), com mais informação sobre o método, o percurso e o Sistema de Progresso.</p><a href="https://escutismo.pt/exploradores-10-aos-14-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">🧭</span><h3>Página Oficial da Flotilha — CNE</h3><span class="seccao-link-legenda">escutismo.pt ↗</span></a></div>
            <div><h3 class="section-title" style="color: var(--cor-seccao);">👕 O nosso Uniforme e Insígnias</h3><p class="seccao-geral-texto">Clica nos cartões abaixo para consultares os documentos oficiais e recursos detalhados da secção.</p><div class="quick-links-grid"><a href="{{ '/assets/docs/uniforme-maritimo_v2024-2.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">👔</span><h3>Uniforme de Moços</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a><a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card"><span class="quick-link-icon">⚓</span><h3>Insígnias da Flotilha</h3><span class="seccao-link-legenda">Abrir PDF 📄</span></a></div></div>
        </div>
    </section>
</div>
