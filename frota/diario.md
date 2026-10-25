---
layout: default
title: Diário de Bordo | III - Frota 98
main_class: pagina-com-hero
ultima_atualizacao: 10/10/2026
seccao_slug: frota
seccao_nome: III - Frota 98
seccao_cor: '#39374C'
---
<style>
	.frota-diario-equipagens { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 0 0 28px; }
	.frota-diario-equipagem { min-width: 0; color: var(--azul-marinho); text-align: center; text-decoration: none; }
	.frota-diario-equipagem img { display: block; width: 100%; height: 155px; margin-bottom: 5px; border-radius: 7px; object-fit: contain; }
	.frota-diario-equipagem span { display: block; font-size: .8rem; font-weight: 800; line-height: 1.25; }
	.frota-diario-equipagem:hover span { text-decoration: underline; }
	@media (max-width: 420px) {
		.frota-diario-equipagens { gap: 8px; }
		.frota-diario-equipagem img { height: 88px; }
		.frota-diario-equipagem span { font-size: .72rem; }
	}
</style>
<section class="hero-generico hero-seccao hero-frota" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>
<div class="comunidade-pagina">
	<header class="seccao-cabecalho"><h1>Diário de Bordo</h1><p>As memórias das navegações da Frota 98.</p></header>
	{% include seccao-nav.html %}
	<section class="card">
		<div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
			<span style="font-size: 2.5rem;">📄</span>
			<h2 style="margin: 0; color: var(--azul-marinho); border-left: 5px solid {{ page.seccao_cor }}; padding-left: 12px;">Diário de Bordo</h2>
		</div>
		<p style="line-height: 1.6; margin-bottom: 30px;">O arquivo vivo da Frota 98, onde reunimos memórias, relatórios e imagens das atividades.</p>
		<h3 class="section-title" style="color: var(--cor-seccao);">As Equipagens</h3>
		<div class="frota-diario-equipagens" aria-label="Equipagens da Frota 98">
			<a class="frota-diario-equipagem seccao-grupo-trigger" href="#modal-equipagem-bartolomeu-dias" aria-haspopup="dialog" aria-label="Abrir elementos da Equipagem Bartolomeu Dias">
				<img src="{{ '/assets/img/seccoes/26BartolomeuDias.jpg' | relative_url }}" alt="Equipagem Bartolomeu Dias">
				<span>Bartolomeu Dias</span>
			</a>
			<a class="frota-diario-equipagem seccao-grupo-trigger" href="#modal-equipagem-diogo-cao" aria-haspopup="dialog" aria-label="Abrir elementos da Equipagem Diogo Cão">
				<img src="{{ '/assets/img/seccoes/26DiogoCao.jpg' | relative_url }}" alt="Equipagem Diogo Cão">
				<span>Diogo Cão</span>
			</a>
			<a class="frota-diario-equipagem seccao-grupo-trigger" href="#modal-equipagem-luis-camoes" aria-haspopup="dialog" aria-label="Abrir elementos da Equipagem Luís de Camões">
				<img src="{{ '/assets/img/seccoes/26LuisCamoes.jpg' | relative_url }}" alt="Equipagem Luís de Camões">
				<span>Luís de Camões</span>
			</a>
		</div>
		<div style="margin-top: 40px; text-align: left;">
			<div class="doc-link pendente">
				<div>
					<h3>Arquivo de Documentos</h3>
					<small>Relatórios, diários escritos e planeamentos de empreendimentos.</small>
				</div>
				<span class="doc-icon" title="Brevemente disponível">⏳</span>
			</div>
		</div>
		<div style="margin-top: 24px; text-align: left;">
			<div class="doc-link pendente">
				<div>
					<h3>Galeria de Bordo</h3>
					<small>Registos fotográficos das nossas atividades e vivência em campo e no mar.</small>
				</div>
				<span class="doc-icon" title="Brevemente disponível">⏳</span>
			</div>
		</div>
	</section>
	{% include frota-equipagens.html modais_only=true %}
</div>
