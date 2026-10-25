---
layout: default
title: Atividades | 929 - Belém
main_class: pagina-com-hero
ultima_atualizacao: 10/10/2026
---
<style>
  .pagina-cabecalho { position: relative; z-index: 2; max-width: 1200px; height: 100%; margin: 0 auto; padding: 78px 28px 22px; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .pagina-cabecalho h1 { color: #fff; margin: 0 0 10px; }
  .pagina-cabecalho p { color: #fff; font-family: 'Geologica', sans-serif; font-weight: 300; font-size: 20px; line-height: 1.5; margin: 0; }

  .grelha-atividades {
    position: relative; z-index: 5; background: #fff;
    max-width: 1100px; margin: 0 auto; padding: 30px 28px 70px;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 22px;
  }
  .cartao-atividade {
    display: flex; flex-direction: column; justify-content: flex-start;
    min-height: 150px; padding: 8px 22px 18px; border-radius: 16px;
    background: linear-gradient(160deg, var(--cne-verde) 0%, var(--cne-verde-escuro) 100%);
    color: #fff; text-decoration: none;
  }
  .cartao-atividade h2 { color: #fff; font-size: 19px; margin: 0 0 8px; }
  .cartao-atividade p { font-size: 13.5px; line-height: 1.5; margin: 0; opacity: .92; }
  .cartao-atividade:hover { outline: 2px solid rgba(255,255,255,0.6); outline-offset: -2px; }
  .linha-tempo-atividades {
    position: relative; z-index: 5; max-width: 1100px; margin: 0 auto;
    padding: 0 28px 56px; background: #fff;
  }
  .linha-tempo-atividades h2 { margin: 0 0 26px; color: var(--azul-marinho); font-size: 1.35rem; }
  .linha-tempo-scroll { overflow-x: auto; padding: 8px 2px 18px; scrollbar-color: #9ab7c8 #eef3f6; }
  .linha-tempo {
    position: relative; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 14px; min-width: 1260px; margin: 0; padding: 0; list-style: none;
  }
  .linha-tempo::before {
    content: ""; position: absolute; top: 13px; left: 9%; right: 9%; height: 4px;
    border-radius: 4px; background: linear-gradient(90deg, #8ca99c 0%, #8ca99c 71%, #78a9c2 71%, #78a9c2 100%);
  }
  .linha-tempo-item { position: relative; min-width: 0; padding-top: 34px; }
  .linha-tempo-boia {
    position: absolute; top: 3px; left: 12px; width: 24px; height: 24px;
    border: 4px solid #fff; border-radius: 50%; background: #55836b;
    box-shadow: 0 0 0 2px #55836b;
  }
  .linha-tempo-futuro .linha-tempo-boia { background: #3980a1; box-shadow: 0 0 0 2px #3980a1; }
  .linha-tempo-cartao {
    display: block; height: 100%; padding: 12px; border: 1px solid #dce4e9;
    border-radius: 10px; color: inherit; text-decoration: none; background: #f8fafb;
  }
  .linha-tempo-cartao:hover { border-color: var(--azul-claro); box-shadow: 0 3px 12px rgba(0,51,102,.1); }
  .linha-tempo-cartao time { display: block; margin-bottom: 7px; color: #47745a; font-size: .75rem; font-weight: 800; text-transform: uppercase; }
  .linha-tempo-futuro .linha-tempo-cartao time { color: #286c8d; }
  .linha-tempo-cartao h3 { margin: 0 0 6px; color: var(--azul-marinho); font-size: .95rem; line-height: 1.3; }
  .linha-tempo-cartao p { margin: 0; color: #58656c; font-size: .8rem; line-height: 1.45; }
  @media (max-width: 600px) {
    .cartao-atividade { justify-content: flex-start; min-height: 0; padding: 8px 18px 18px; }
    .linha-tempo-atividades { padding: 0 18px 42px; }
  }
</style>

<section class="hero-generico" id="hero">
  <div class="pagina-cabecalho">
    <h1>Atividades</h1>
    <p>Tudo o que está a acontecer no Agrupamento 929 - Belém.</p>
  </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="grelha-atividades">
  <a class="cartao-atividade" href="{{ '/atividades/inscricoes.html' | relative_url }}">
    <h2>Inscrições</h2>
    <p>Consulta e inscreve-te nas atividades abertas do agrupamento.</p>
  </a>
  <a class="cartao-atividade" href="{{ '/atividades/acagrup-2026.html' | relative_url }}">
    <h2>ACAGRUP 2026</h2>
    <p>Reviva a aventura d'O Segredo da Ilha Perdida, na Ilha dos Cavalos.</p>
  </a>
  <a class="cartao-atividade" href="{{ '/atividades/promessas26.html' | relative_url }}">
    <h2>Promessas 2026</h2>
    <p>Revive os momentos em que os nossos elementos deram o seu "Sim" ao Escutismo.</p>
  </a>
  <a class="cartao-atividade" href="{{ '/agrupamento/noticias.html#inicio-ano-escutista' | relative_url }}">
    <h2>Início do Ano Escutista</h2>
    <p>10 de outubro · 10h, na Base. Vê a notícia da abertura do novo ano escutista.</p>
  </a>
</div>

<section class="linha-tempo-atividades" aria-labelledby="titulo-linha-tempo">
  <h2 id="titulo-linha-tempo">A nossa rota de atividades</h2>
  <div class="linha-tempo-scroll" tabindex="0" aria-label="Linha do tempo de atividades; desliza horizontalmente para consultar todas as datas">
    <ol class="linha-tempo">
      <li class="linha-tempo-item linha-tempo-passado">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/atividades/promessas26.html' | relative_url }}">
          <time datetime="2026-06-20">20 junho 2026</time>
          <h3>Promessas 2026</h3>
          <p>Fotografias e memórias da cerimónia.</p>
        </a>
      </li>
      <li class="linha-tempo-item linha-tempo-passado">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/atividades/acagrup-2026.html' | relative_url }}">
          <time datetime="2026-08-05">5 agosto 2026</time>
          <h3>ACAGRUP 2026</h3>
          <p>O Segredo da Ilha Perdida.</p>
        </a>
      </li>
      <li class="linha-tempo-item linha-tempo-passado">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/agrupamento/noticias.html#inicio-ano-escutista' | relative_url }}">
          <time datetime="2026-10-10">10 outubro 2026</time>
          <h3>Início do Ano Escutista</h3>
          <p>Às 10h, na Base. Lê a notícia da abertura.</p>
        </a>
      </li>
      <li class="linha-tempo-item linha-tempo-passado">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/agrupamento/noticias.html#conselho-guias-investidura-guias' | relative_url }}">
          <time datetime="2026-10-24">24 outubro 2026</time>
          <h3>Conselho de Guias</h3>
          <p>Encontro de participação, partilha e liderança.</p>
        </a>
      </li>
      <li class="linha-tempo-item linha-tempo-passado">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/agrupamento/noticias.html#conselho-guias-investidura-guias' | relative_url }}">
          <time datetime="2026-10-24">24 outubro 2026</time>
          <h3>Investidura de Guias</h3>
          <p>Compromisso de serviço e responsabilidade para com a patrulha.</p>
        </a>
      </li>
      <li class="linha-tempo-item linha-tempo-futuro">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/assets/docs/Circular 06 CNE.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
          <time datetime="2026-11-21">21 novembro 2026</time>
          <h3>Encontro APLs e Guias de Patrulha Jamboree</h3>
          <p>Atividade exclusiva para participantes do Jamboree.</p>
        </a>
      </li>
      <li class="linha-tempo-item linha-tempo-futuro">
        <span class="linha-tempo-boia" aria-hidden="true"></span>
        <a class="linha-tempo-cartao" href="{{ '/assets/docs/Circular 06 CNE.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
          <time datetime="2027-05-22">22–23 maio 2027</time>
          <h3>Encontro do Contingente Português</h3>
          <p>Atividade exclusiva para participantes do Jamboree.</p>
        </a>
      </li>
    </ol>
  </div>
</section>
