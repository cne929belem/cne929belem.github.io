---
layout: default
title: Equipa | Agrupamento 929 - Belém
---
<style>
  .pagina-cabecalho { max-width: 900px; margin: 0 auto; padding: 40px 28px 6px; }
  .pagina-cabecalho h1 { font-size: 30px; margin: 0 0 10px; }
  .pagina-cabecalho > p { color: #555; font-size: 15px; line-height: 1.6; margin: 0; }

  .secao-equipa { max-width: 900px; margin: 0 auto; padding: 34px 28px 0; }
  .secao-equipa h2 {
    display: flex; align-items: center; gap: 10px;
    font-size: 21px; margin: 0 0 14px; color: var(--cne-verde-escuro);
  }
  .texto-intro p { font-size: 14.5px; line-height: 1.65; color: #333; margin: 0 0 10px; }
  .texto-intro .referencia { font-size: 12.5px; color: #888; font-style: italic; }

  .grelha-direcao { display: flex; flex-direction: column; gap: 14px; margin: 22px 0; }
  .pessoa-cartao-grande {
    display: flex; align-items: center; gap: 18px; text-align: left;
    background: linear-gradient(160deg, var(--cne-verde-escuro) 0%, var(--mar-noturno) 100%);
    color: #fff; border-radius: 16px; padding: 18px 22px;
  }
  .pessoa-cartao-grande img, .pessoa-cartao-grande .placeholder-foto {
    width: 84px; height: 84px; border-radius: 50%; object-fit: cover;
    margin: 0; display: block; flex-shrink: 0; border: 3px solid rgba(255,255,255,0.25);
  }
  .pessoa-cartao-grande .cargo { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; opacity: .75; margin: 0 0 4px; }
  .pessoa-cartao-grande .nome { font-size: 15px; font-weight: 700; margin: 0; }

  .aviso-mandato {
    background: #fff8e1; border: 1px solid #ffe28a; border-radius: 10px;
    padding: 14px 16px; margin-top: 18px; font-size: 13.5px; color: #6b5300;
    display: flex; gap: 10px; align-items: flex-start;
  }

  .grupo-seccao {
    border-radius: 14px; padding: 18px 20px; margin-bottom: 14px;
    border-left: 5px solid var(--cor-seccao, var(--cne-verde));
    background: #f7f7f5;
    background: color-mix(in srgb, var(--cor-seccao, var(--cne-verde)) 10%, white);
  }
  .grupo-seccao h3 { margin: 0 0 12px; font-size: 15px; color: #2a2a2a; }
  .lista-pessoas { display: flex; flex-direction: column; gap: 10px; }
  .pessoa-cartao {
    display: flex; align-items: center; gap: 12px;
    background: #fff; border-radius: 12px; padding: 10px 14px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  }
  .pessoa-cartao img, .pessoa-cartao .placeholder-foto { width: 64px; height: 64px; }
  .placeholder-foto {
    border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(160deg, var(--cne-verde) 0%, var(--cne-verde-escuro) 100%);
    color: #fff; font-weight: 700; font-size: 20px;
  }
  .pessoa-cartao img { border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .pessoa-cartao .funcao { font-size: 11px; text-transform: uppercase; color: #888; margin: 0 0 2px; }
  .pessoa-cartao .nome { font-size: 14px; font-weight: 700; color: #222; margin: 0; }

  .ultima-atualizacao { text-align: right; font-size: 12px; color: #999; font-style: italic; margin-top: 14px; }
  .conselho-texto { padding-bottom: 50px; }
</style>

<div class="pagina-cabecalho">
  <h1>A Nossa Equipa</h1>
  <p>Conhece quem dá vida ao 929 — a tripulação de adultos que torna cada aventura possível.</p>
</div>

<section class="secao-equipa">
  <h2>🧭 Direção do Aquário</h2>
  <div class="texto-intro">
    <p>O órgão executivo do Agrupamento é a Direção do Agrupamento (Direção do Aquário).</p>
    <p>A Direção de Agrupamento é composta pelo Chefe de Agrupamento, Chefe de Agrupamento adjunto, Assistente de Agrupamento, Secretário de Agrupamento, Tesoureiro de Agrupamento, pelo Chefe de cada Unidade e convidados pelo Chefe de Agrupamento.</p>
    <p>A Direção de Agrupamento reúne, em princípio, no mínimo, uma vez por mês e sempre que convocada pelo Chefe de Agrupamento.</p>
    <p class="referencia">Artigo 60.º do Regulamento Geral do CNE</p>
  </div>

  <div class="grelha-direcao">
    <div class="pessoa-cartao-grande">
      <img src="{{ '/assets/img/equipa/jose-ferreira_equipa.jpg' | relative_url }}" alt="Cón. José Manuel Ferreira">
      <p class="cargo">Assistente</p>
      <p class="nome">Cón. José Manuel Ferreira</p>
    </div>
    <div class="pessoa-cartao-grande">
      <img src="{{ '/assets/img/equipa/eunice-goncalves_equipa.jpg' | relative_url }}" alt="Eunice Gonçalves">
      <p class="cargo">Chefe de Agrupamento</p>
      <p class="nome">Eunice Gonçalves (Salamandra)</p>
    </div>
    <div class="pessoa-cartao-grande">
      <img src="{{ '/assets/img/equipa/carolina-mascarenhas_equipa.jpg' | relative_url }}" alt="Carolina Mascarenhas">
      <p class="cargo">Secretário</p>
      <p class="nome">Carolina Mascarenhas (Koala Pensadora)</p>
    </div>
    <div class="pessoa-cartao-grande">
      <img src="{{ '/assets/img/equipa/ricardo-isaias_equipa.jpg' | relative_url }}" alt="Ricardo Isaías">
      <p class="cargo">Tesoureiro</p>
      <p class="nome">Ricardo Isaías (Axolote)</p>
    </div>
  </div>

  <div class="aviso-mandato">
    <span aria-hidden="true">🗳️</span>
    <div>
      <strong>Mandato em Exercício: 2023 — 2026</strong><br>
      Aviso Eleitoral: Ocorrerão eleições para a nova Chefia de Agrupamento em 2026. <a href="#">Consultar Informação sobre eleições para Chefe de Agrupamento</a>.
    </div>
  </div>
  <p class="ultima-atualizacao">Última atualização em 13/08/2026</p>
</section>

<section class="secao-equipa">
  <h2>🏕️ Equipas de Animação</h2>
  <div class="texto-intro">
    <p>A ação educativa direta junto das secções é assegurada pelas Equipas de Animação.</p>
    <p>Os <strong>Dirigentes</strong> (Chefes de Unidade e Chefes de Unidade Adjuntos) são adultos que concluíram com sucesso o respetivo percurso formativo, realizaram a sua Promessa de Dirigente e receberam a Insígnia de Madeira. São os principais responsáveis por guiar as crianças e os jovens na aplicação do método escutista.</p>
    <p>Os <strong>Candidatos a Dirigente</strong> são adultos voluntários que se encontram a realizar o seu percurso de formação inicial. Auxiliam ativamente as Equipas de Animação na preparação e execução das atividades, garantindo o acompanhamento adequado e o cumprimento dos rácios de segurança exigidos.</p>
    <p class="referencia">Nos termos do Regulamento Geral e do Sistema de Formação de Adultos do CNE</p>
  </div>

  <div class="grupo-seccao" style="--cor-seccao:#ffc107">
    <h3>Alcateia (Lobitos)</h3>
    <div class="lista-pessoas">
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/paulo-duarte_equipa.jpg' | relative_url }}" alt="Paulo Duarte">
        <div><p class="funcao">Chefe de Unidade</p><p class="nome">Paulo Duarte (Roaz Criativo)</p></div>
      </div>
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/madalena-catita_equipa.jpg' | relative_url }}" alt="Madalena Catita">
        <div><p class="funcao">Candidato a Dirigente</p><p class="nome">Madalena Catita (Raposa Exigente)</p></div>
      </div>
    </div>
  </div>

  <div class="grupo-seccao" style="--cor-seccao:#28a745">
    <h3>Flotilha (Moços)</h3>
    <div class="lista-pessoas">
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/carolina-mascarenhas_equipa.jpg' | relative_url }}" alt="Carolina Mascarenhas">
        <div><p class="funcao">Chefe de Unidade</p><p class="nome">Carolina Mascarenhas (Koala Pensadora)</p></div>
      </div>
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/maria-rodrigues_equipa.jpg' | relative_url }}" alt="Maria Rodrigues">
        <div><p class="funcao">Candidato a Dirigente</p><p class="nome">Maria Rodrigues</p></div>
      </div>
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/jose-batalha_equipa.jpg' | relative_url }}" alt="José Batalha">
        <div><p class="funcao">Candidato a Dirigente</p><p class="nome">José Batalha</p></div>
      </div>
    </div>
  </div>

  <div class="grupo-seccao" style="--cor-seccao:#0056b3">
    <h3>Frota (Marinheiros)</h3>
    <div class="lista-pessoas">
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/paulo-duarte_equipa.jpg' | relative_url }}" alt="Paulo Duarte">
        <div><p class="funcao">Chefe de Unidade</p><p class="nome">Paulo Duarte (Roaz Criativo)</p></div>
      </div>
      <div class="pessoa-cartao">
        <span class="placeholder-foto" aria-hidden="true">JD</span>
        <div><p class="funcao">Candidato a Dirigente</p><p class="nome">João Dragovic (Espadarte)</p></div>
      </div>
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/simao-pereira_equipa.jpg' | relative_url }}" alt="Simão Pereira">
        <div><p class="funcao">Candidato a Dirigente</p><p class="nome">Simão Pereira (Sapo)</p></div>
      </div>
    </div>
  </div>

  <div class="grupo-seccao" style="--cor-seccao:#BD242C">
    <h3>Comunidade (Companheiros)</h3>
    <div class="lista-pessoas">
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/ricardo-isaias_equipa.jpg' | relative_url }}" alt="Ricardo Isaías">
        <div><p class="funcao">Chefe de Unidade</p><p class="nome">Ricardo Isaías (Axolote)</p></div>
      </div>
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/ruben-rodrigues_equipa.jpg' | relative_url }}" alt="Ruben Rodrigues">
        <div><p class="funcao">Dirigente</p><p class="nome">Ruben Rodrigues (Tubarão Empenhado)</p></div>
      </div>
    </div>
  </div>

  <div class="grupo-seccao" style="--cor-seccao:#6c757d">
    <h3>Agrupamento</h3>
    <div class="lista-pessoas">
      <div class="pessoa-cartao">
        <img src="{{ '/assets/img/equipa/eunice-goncalves_equipa.jpg' | relative_url }}" alt="Eunice Gonçalves">
        <div><p class="funcao">Dirigente</p><p class="nome">Eunice Gonçalves (Salamandra)</p></div>
      </div>
    </div>
  </div>

  <p class="ultima-atualizacao">Última atualização em 13/08/2026</p>
</section>

<section class="secao-equipa conselho-texto">
  <h2>📜 Conselho de Agrupamento</h2>
  <div class="texto-intro">
    <p>O órgão deliberativo do Agrupamento é o Conselho de Agrupamento.</p>
    <p>O Conselho de Agrupamento é composto por todos os Dirigentes nele investidos e pelos Candidatos a Dirigente com funções no Agrupamento, bem como pelos representantes dos Companheiros (dois por cada Equipagem).</p>
    <p>Este órgão reúne ordinariamente para aprovar os Planos e Relatórios de Atividades e de Contas, e extraordinariamente sempre que convocado para debater e deliberar sobre as grandes linhas de orientação educativa, pedagógica e organizativa da nossa estrutura local.</p>
    <p class="referencia">Artigo 59.º do Regulamento Geral do CNE</p>
  </div>
</section>
