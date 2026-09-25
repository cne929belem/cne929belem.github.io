---
layout: default
title: Diário de Bordo | I - Alcateia
main_class: pagina-com-hero
ultima_atualizacao: 25/09/2026
seccao_slug: alcateia
seccao_nome: I - Alcateia
seccao_cor: '#ffc107'
---
<section class="hero-generico hero-seccao hero-alcateia" id="hero"><div class="pagina-cabecalho"><span class="icone-hero-caixa" aria-hidden="true"><img class="icone-hero-seccao" src="{{ '/assets/img/seccoes/1_lobitos.png' | relative_url }}" alt=""></span><h1>Diário de Bordo</h1><p>As memórias das navegações da Alcateia.</p></div></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>
<div class="comunidade-pagina">
	{% include seccao-nav.html %}
	<section class="card">
		<div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
			<span style="font-size: 2.5rem;">📄</span>
			<h2 style="margin: 0; color: var(--azul-marinho); border-left: 5px solid {{ page.seccao_cor }}; padding-left: 12px;">Diário de Bordo</h2>
		</div>
		<p style="line-height: 1.6; margin-bottom: 30px;">O arquivo vivo da nossa Alcateia, onde reunimos memórias, relatórios e imagens das atividades.</p>
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
</div>
