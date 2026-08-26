---
layout: default
title: Área Pessoal | Agrupamento 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 25/08/2026
---
<style>
  .pagina-cabecalho { position: relative; z-index: 2; max-width: 1200px; height: 100%; margin: 0 auto; padding: 78px 28px 22px; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .pagina-cabecalho h1 { color: #fff; margin: 0 0 10px; }
  .pagina-cabecalho p { color: #fff; font-family: 'Fustat', sans-serif; font-weight: 300; font-size: 20px; line-height: 1.5; margin: 0; }

  .percurso-pagina {
    position: relative; z-index: 5; background: #fff;
    max-width: 1200px; margin: 0 auto; padding: 30px 28px 60px;
  }

  .aviso-pre-visualizacao {
    background: #fff3cd; color: #664d03; border: 1px solid #ffe69c; border-radius: 8px;
    padding: 14px 18px; font-size: 13.5px; line-height: 1.5; margin-bottom: 26px;
  }

  .percurso-layout { display: grid; grid-template-columns: 280px 1fr; gap: 28px; align-items: start; }
  @media (max-width: 780px) { .percurso-layout { grid-template-columns: 1fr; } }

  .percurso-identidade {
    background: var(--azul-marinho); color: #fff; border-radius: 10px;
    padding: 16px 18px; margin-bottom: 16px;
  }
  .percurso-identidade .totem { font-size: 15px; font-weight: 700; text-transform: uppercase; margin: 0 0 6px; }
  .percurso-identidade .cargo { font-size: 12px; color: #cfe0f5; text-transform: uppercase; letter-spacing: .03em; margin: 0 0 4px; }
  .percurso-identidade .equipagem { font-size: 12px; color: #cfe0f5; margin: 0; }

  .percurso-historico { border: 1px solid #eee; border-radius: 10px; overflow: hidden; }
  .percurso-historico details { border-bottom: 1px solid #eee; }
  .percurso-historico details:last-child { border-bottom: 0; }
  .percurso-historico summary {
    padding: 10px 14px; cursor: pointer; font-weight: 700; color: var(--azul-marinho);
    background: var(--cinza-fundo); list-style: none;
  }
  .percurso-historico summary::-webkit-details-marker { display: none; }
  .percurso-historico summary::marker { display: none; content: ""; }
  .percurso-historico ul { margin: 0; padding: 10px 14px 14px 30px; font-size: 12.5px; line-height: 1.7; color: #444; }

  .percurso-barras { margin-bottom: 30px; }
  .barra-progresso { margin-bottom: 30px; }
  .barra-progresso h2 { font-size: 20px; margin: 0 0 10px; color: var(--azul-marinho); }
  .barra-trilho { position: relative; height: 10px; background: var(--cinza-fundo); border: 1px solid #ddd; border-radius: 6px; }
  .barra-preenchida { position: absolute; left: 0; top: -1px; bottom: -1px; background: var(--azul-claro); border-radius: 6px; }
  .barra-valor { position: absolute; top: -22px; font-size: 12px; font-weight: 700; color: var(--azul-marinho); transform: translateX(-50%); }
  .barra-marcas { display: flex; justify-content: space-between; margin-top: 6px; font-size: 11px; color: #888; }

  .percurso-emblemas { display: flex; flex-direction: column; gap: 18px; align-items: center; }
  .emblema-seccao { width: 76px; height: 76px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
</style>

<section class="hero-generico" id="hero">
  <div class="pagina-cabecalho">
    <h1>Área Pessoal</h1>
    <p>O teu percurso escutista, num só sítio.</p>
  </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="percurso-pagina">
  <div class="aviso-pre-visualizacao">
    🔧 <strong>Pré-visualização.</strong> Esta página ainda não está ligada a nenhuma conta — os dados abaixo são um exemplo, só para mostrar como vai ficar. O login fica para uma fase seguinte.
  </div>

  <div class="percurso-layout">
    <div>
      <div class="percurso-identidade">
        <p class="totem">Sapo Trabalhador</p>
        <p class="cargo">Marinheiro · Contramestre</p>
        <p class="equipagem">Tripulação Jacques Cousteau</p>
      </div>

      <div class="percurso-historico">
        <details>
          <summary>2018</summary>
          <ul>
            <li>03/02 — Promessa de Lobito</li>
            <li>05–09/03 — Acampamento</li>
            <li>22/06 — Banco Alimentar</li>
            <li>01/08 — Acampamento Final</li>
          </ul>
        </details>
        <details><summary>2019</summary><ul><li>Sem registos ainda.</li></ul></details>
        <details><summary>2020</summary><ul><li>Sem registos ainda.</li></ul></details>
        <details><summary>2021</summary><ul><li>Sem registos ainda.</li></ul></details>
        <details open>
          <summary>2022</summary>
          <ul>
            <li>02/05 — Promessa de Timoneiro</li>
            <li>22/06 — Banco Alimentar</li>
            <li>08–13/08 — Acampamento Final</li>
          </ul>
        </details>
        <details><summary>2023</summary><ul><li>Sem registos ainda.</li></ul></details>
        <details><summary>2024</summary><ul><li>Sem registos ainda.</li></ul></details>
        <details><summary>2025</summary><ul><li>Sem registos ainda.</li></ul></details>
        <details><summary>2026</summary><ul><li>Sem registos ainda.</li></ul></details>
      </div>
    </div>

    <div>
      <div class="percurso-barras">
        <div class="barra-progresso">
          <h2>Horas de Mar</h2>
          <div class="barra-trilho">
            <span class="barra-valor" style="left: 28%;">28</span>
            <div class="barra-preenchida" style="width: 28%;"></div>
          </div>
          <div class="barra-marcas"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
        </div>
        <div class="barra-progresso">
          <h2>Noites de Campo</h2>
          <div class="barra-trilho">
            <span class="barra-valor" style="left: 45%;">45</span>
            <div class="barra-preenchida" style="width: 45%;"></div>
          </div>
          <div class="barra-marcas"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
        </div>
      </div>
    </div>

    <div class="percurso-emblemas">
      <div class="emblema-seccao" style="background: conic-gradient(#ffc107 0 90deg, #ffe08a 90deg 360deg);" title="Alcateia"></div>
      <div class="emblema-seccao" style="background: conic-gradient(#28a745 0 180deg, #8fd6a6 180deg 360deg);" title="Flotilha"></div>
      <div class="emblema-seccao" style="background: conic-gradient(#003366 0 360deg);" title="Frota"></div>
      <div class="emblema-seccao" style="background: conic-gradient(#BD242C 0 90deg, #e39397 90deg 360deg);" title="Comunidade"></div>
    </div>
  </div>
</div>
