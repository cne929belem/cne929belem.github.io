---
layout: default
title: Área Pessoal | Agrupamento 929 - Belém
published: true
main_class: pagina-com-hero
robots: "noindex, nofollow"
sitemap: false
---
<style>
  .pagina-cabecalho { position: relative; z-index: 2; max-width: 1200px; height: 100%; margin: 0 auto; padding: 78px 28px 22px; color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  .pagina-cabecalho h1 { color: #fff; margin: 0 0 10px; }
  .pagina-cabecalho p { color: #fff; font-family: 'Geologica', sans-serif; font-weight: 300; font-size: 20px; line-height: 1.5; margin: 0; }
  #hero .pagina-cabecalho h1 { font-size: 28px; line-height: 1.15; }
  #hero .pagina-cabecalho p { font-size: 14px; line-height: 1.4; }

  .percurso-pagina { position: relative; z-index: 5; max-width: 1200px; margin: 0 auto; padding: 12px 28px 24px; background: #fff; }
  .area-pessoal-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 auto 22px; padding-bottom: 14px; border-bottom: 2px solid #e6eef3; }
  .area-pessoal-tabs[hidden], #painel-percurso[hidden], #painel-dados[hidden] { display: none !important; }
  .area-pessoal-tabs button { flex: 1 1 220px; min-height: 42px; padding: 9px 14px; border: 0; border-radius: 999px; background: #eef6fa; color: var(--azul-marinho); font: inherit; font-size: 14px; font-weight: 800; cursor: pointer; }
  .area-pessoal-tabs button[aria-selected="true"] { background: var(--azul-marinho); color: #fff; }
  .area-pessoal-tabs button:focus-visible { outline: 3px solid #e7b708; outline-offset: 2px; }
  .area-pessoal-sessao { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px; margin: 0 0 12px; color: #52616a; font-size: 13px; line-height: 1.4; }
  .area-pessoal-sessao p { flex: 1 1 240px; margin: 0; }
  .area-pessoal-sessao form { display: grid; grid-template-columns: minmax(180px, 280px) auto; align-items: end; gap: 8px; }
  .area-pessoal-sessao label { display: grid; gap: 4px; color: var(--azul-marinho); font-weight: 700; }
  .area-pessoal-sessao input { min-height: 36px; padding: 6px 9px; border: 1px solid #aebbc3; border-radius: 4px; font: inherit; }
  .area-pessoal-sessao button { min-height: 36px; padding: 6px 10px; border: 0; border-radius: 4px; background: var(--azul-marinho); color: #fff; font: inherit; font-weight: 700; cursor: pointer; }
  .area-pessoal-sessao button:disabled { opacity: .65; cursor: wait; }
  .area-pessoal-sessao [data-terminar-sessao] { background: #eaf0f3; color: var(--azul-marinho); }
  .data-atualizacao-perfil { max-width: 760px; margin: 0 auto 10px; color: #657781; font-size: 12px; line-height: 1.4; text-align: right; }
  .area-pessoal-mensagem { position: relative; z-index: 5; margin: 0 auto 12px; padding: 8px 12px; border-left: 3px solid #e7c66a; background: #fffaf0; font-size: 13px; line-height: 1.4; }
  .area-pessoal-mensagem p { margin: 0; font-size: 13px; line-height: 1.4; }
  .area-pessoal-mensagem a { color: var(--azul-marinho); font-weight: 800; white-space: nowrap; }
  .dados-percurso { display: grid; gap: 30px; }
  .percurso-identidade { padding: 16px 18px; border-radius: 6px; background: var(--azul-marinho); color: #fff; }
  .percurso-identidade p { margin: 0 0 6px; }
  .percurso-identidade [data-campo-perfil="nome"] { font-size: 18px; font-weight: 700; }
  .percurso-principal { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(280px, .7fr); gap: 36px; align-items: start; }
  .percurso-principal h2, .progresso-seccoes h2 { margin: 0 0 18px; color: var(--azul-marinho); font-size: 20px; }
  .percurso-anos { display: grid; gap: 8px; }
  .percurso-ano { border: 1px solid #dce4e9; border-radius: 5px; }
  .percurso-ano summary { padding: 11px 14px; color: var(--azul-marinho); font-weight: 800; cursor: pointer; }
  .percurso-ano summary::marker { color: var(--cne-verde); }
  .percurso-timeline { position: relative; display: grid; gap: 0; margin: 0 14px; padding: 8px 0 0; list-style: none; }
  .percurso-timeline::before { position: absolute; top: 8px; bottom: 16px; left: 7px; width: 2px; background: #c9d7df; content: ""; }
  .percurso-timeline li { position: relative; min-height: 48px; padding: 0 0 22px 30px; color: #495861; }
  .percurso-timeline li::before { position: absolute; top: 3px; left: 0; width: 12px; height: 12px; border: 2px solid #fff; border-radius: 50%; background: var(--azul-marinho); box-shadow: 0 0 0 1px var(--azul-marinho); content: ""; }
  .percurso-timeline time { display: block; margin-bottom: 3px; color: #657781; font-size: 12px; font-weight: 700; }
  .percurso-timeline strong { display: block; color: var(--azul-marinho); }
  .percurso-timeline span { display: block; font-size: 13px; }
  .percurso-indicadores { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .percurso-indicador { min-width: 0; padding: 11px; border: 1px solid #dce4e9; border-radius: 6px; background: #f6f8f9; }
  .percurso-indicador h3 { margin: 0 0 6px; color: var(--azul-marinho); font-size: 13px; }
  .percurso-indicador p { margin: 0; color: #495861; font-size: 21px; font-weight: 800; }
  .progresso-seccoes { padding-top: 22px; }
  .progresso-seccoes h2 { margin-bottom: 10px; font-size: 17px; }
  .progresso-grelha { display: grid; gap: 12px; }
  .progresso-seccao { min-width: 0; padding: 0 0 10px; border-bottom: 1px solid #dce4e9; }
  .progresso-seccao h3 { margin: 0 0 5px; color: var(--azul-marinho); font-size: 13px; }
  .etapas-legenda { display: grid; gap: 3px; margin: 0; padding: 0; color: #657781; font-size: 12px; list-style: none; }
  .etapas-legenda li { display: flex; justify-content: space-between; gap: 8px; }
  .etapa-data { color: var(--azul-marinho); font-weight: 700; white-space: nowrap; }
  .progresso-distincao { padding-top: 8px; }
  .progresso-distincao table { width: 100%; border-collapse: collapse; color: #495861; font-size: 13px; }
  .progresso-distincao th, .progresso-distincao td { padding: 9px 12px; border-bottom: 1px solid #dce4e9; text-align: left; }
  .progresso-distincao th { color: var(--azul-marinho); font-size: 12px; }
  .dados-pessoais-conteudo { display: grid; gap: 22px; }
  .dados-pessoais-grupo h3 { margin: 0 0 12px; color: var(--azul-marinho); font-size: 17px; }
  .dados-pessoais-grelha { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 0; }
  .dados-encarregados-scroll { overflow-x: auto; }
  .dados-encarregados-grelha { grid-template-columns: minmax(165px, 1.4fr) minmax(110px, .9fr) minmax(105px, .8fr) minmax(180px, 1.3fr); min-width: 640px; gap: 4px; }
  .dados-encarregados-grelha .dados-pessoais-campo { padding: 8px 6px; }
  .dados-encarregados-grelha .dados-pessoais-campo dt { margin-bottom: 2px; font-size: 10px; }
  .dados-encarregados-grelha .dados-pessoais-campo dd { font-size: 12px; }
  .dados-pessoais-campo { min-width: 0; padding: 12px; border-bottom: 1px solid #dce4e9; }
  .dados-pessoais-campo dt { margin-bottom: 4px; color: #657781; font-size: 12px; }
  .dados-pessoais-campo dd { min-height: 1.4em; margin: 0; color: var(--azul-marinho); font-size: 14px; font-weight: 700; overflow-wrap: anywhere; }
  .dados-saude { border-top: 1px solid #dce4e9; padding-top: 18px; }
  .dados-saude summary { color: var(--azul-marinho); font-weight: 800; cursor: pointer; }
  .dados-saude .dados-pessoais-grelha { margin-top: 12px; }
  .dados-pessoais-form { display: grid; gap: 10px; max-width: 760px; }
  .dados-pessoais-form fieldset { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 0; padding: 12px; border: 1px solid #dce4e9; border-radius: 6px; }
  .dados-pessoais-form legend { grid-column: 1 / -1; padding: 0 6px; color: var(--azul-marinho); font-size: 14px; font-weight: 800; }
  .dados-pessoais-form label { display: grid; gap: 4px; color: var(--azul-marinho); font-size: 12px; font-weight: 700; }
  .dados-pessoais-form input, .dados-pessoais-form textarea { width: 100%; min-height: 36px; padding: 7px 9px; border: 1px solid #aebbc3; border-radius: 4px; background: #fff; color: #253b48; font: inherit; font-size: 13px; }
  .dados-pessoais-form textarea { min-height: 64px; resize: vertical; }
  .dados-pessoais-form label[for="outros-dados"] { grid-column: 1 / -1; }
  .dados-pessoais-form button { justify-self: start; min-height: 36px; padding: 7px 12px; border: 0; border-radius: 4px; background: var(--azul-marinho); color: #fff; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; }
  .dados-pessoais-form button:disabled { opacity: .65; cursor: wait; }
  .dados-pessoais-nota { max-width: 760px; color: #52616a; font-size: 13px; line-height: 1.55; }
  @media (max-width: 600px) {
    #hero .pagina-cabecalho h1 { font-size: 24px; }
    #hero .pagina-cabecalho p { font-size: 13px; }
    .percurso-pagina { padding: 12px 18px 24px; }
    .area-pessoal-tabs button { flex-basis: calc(50% - 4px); font-size: 12px; }
    .percurso-principal { grid-template-columns: 1fr; gap: 22px; }
    .progresso-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px 12px; }
    .dados-pessoais-grelha { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .area-pessoal-sessao form { grid-template-columns: 1fr; width: 100%; }
    .dados-pessoais-form fieldset { grid-template-columns: 1fr; }
    .dados-pessoais-form legend, .dados-pessoais-form label[for="outros-dados"] { grid-column: auto; }
  }
</style>

<section class="hero-generico" id="hero">
  <div class="pagina-cabecalho">
    <h1>Área Pessoal</h1>
    <p>O teu percurso escutista, num só sítio.</p>
  </div>
</section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="percurso-pagina">
  <div class="area-pessoal-mensagem" id="aviso-perfil-privado">
    <p><strong>Dados pessoais</strong> O perfil só é carregado depois de confirmar o login e a autorização no servidor. <a href="{{ '/escuteiro/acesso.html' | relative_url }}">Pedir link de acesso</a></p>
  </div>

  <section class="area-pessoal-sessao" id="estado-sessao-area-pessoal" aria-live="polite" hidden>
    <p data-mensagem-sessao>Inicia sessão para consultar o teu perfil.</p>
    <form id="form-completar-magic-link" hidden>
      <label for="email-completar-link">Email que recebeu o link
        <input id="email-completar-link" name="email" type="email" autocomplete="email" required>
      </label>
      <button type="submit">Confirmar link</button>
    </form>
    <button type="button" data-terminar-sessao hidden>Terminar sessão</button>
  </section>

  <p class="data-atualizacao-perfil" id="data-atualizacao-perfil" hidden>Dados atualizados em <time datetime="2026-10-01">1 de outubro de 2026</time>.</p>

  <nav class="area-pessoal-tabs" role="tablist" aria-label="Área pessoal" hidden>
    <button type="button" id="separador-percurso" role="tab" aria-controls="painel-percurso" aria-selected="true">Percurso escutista</button>
    <button type="button" id="separador-dados" role="tab" aria-controls="painel-dados" aria-selected="false" tabindex="-1">Dados pessoais</button>
  </nav>

  <section id="painel-percurso" role="tabpanel" aria-labelledby="separador-percurso" hidden>
    <div class="dados-percurso" id="dados-percurso-autenticado">
      <div class="percurso-principal">
        <section aria-labelledby="titulo-timeline">
          <h2 id="titulo-timeline">Atividades</h2>
          <div class="percurso-anos" data-lista-atividades><p class="percurso-vazio">As atividades aparecerão depois do login.</p></div>
        </section>
        <aside class="percurso-lateral" aria-label="Resumo do percurso e etapas">
          <div class="percurso-indicadores">
            <article class="percurso-indicador">
              <h3><span aria-hidden="true">⛺</span> Noites de Campo</h3>
              <p><span data-campo-perfil="noites-campo">—</span></p>
            </article>
            <article class="percurso-indicador">
              <h3><span aria-hidden="true">⛵</span> Horas de Mar</h3>
              <p><span data-campo-perfil="horas-mar">—</span></p>
            </article>
          </div>
          <section class="progresso-seccoes" aria-labelledby="titulo-etapas">
            <h2 id="titulo-etapas">Etapas por secção</h2>
            <div class="progresso-grelha">
              <article class="progresso-seccao" style="--etapa-cor: #d8a900;" data-seccao-etapas="alcateia">
                <h3>I · Alcateia</h3>
                <ol class="etapas-legenda"><li data-etapa="1" data-etapa-nome="Etapa 1">Etapa 1</li><li data-etapa="2" data-etapa-nome="Etapa 2">Etapa 2</li><li data-etapa="3" data-etapa-nome="Etapa 3">Etapa 3</li><li data-etapa="4" data-etapa-nome="Etapa 4">Etapa 4</li></ol>
              </article>
              <article class="progresso-seccao" style="--etapa-cor: #238b57;" data-seccao-etapas="flotilha">
                <h3>II · Flotilha</h3>
                <ol class="etapas-legenda"><li data-etapa="1" data-etapa-nome="Etapa 1">Etapa 1</li><li data-etapa="2" data-etapa-nome="Etapa 2">Etapa 2</li><li data-etapa="3" data-etapa-nome="Etapa 3">Etapa 3</li><li data-etapa="4" data-etapa-nome="Etapa 4">Etapa 4</li></ol>
              </article>
              <article class="progresso-seccao" style="--etapa-cor: #315c8b;" data-seccao-etapas="frota">
                <h3>III · Frota</h3>
                <ol class="etapas-legenda"><li data-etapa="1" data-etapa-nome="Etapa 1">Etapa 1</li><li data-etapa="2" data-etapa-nome="Etapa 2">Etapa 2</li><li data-etapa="3" data-etapa-nome="Etapa 3">Etapa 3</li><li data-etapa="4" data-etapa-nome="Etapa 4">Etapa 4</li></ol>
              </article>
              <article class="progresso-seccao" style="--etapa-cor: #bd242c;" data-seccao-etapas="comunidade">
                <h3>IV · Comunidade</h3>
                <ol class="etapas-legenda"><li data-etapa="1" data-etapa-nome="A Rota / O Caminho">A Rota / O Caminho</li><li data-etapa="2" data-etapa-nome="A Tripulação / A Comunidade">A Tripulação / A Comunidade</li><li data-etapa="3" data-etapa-nome="O Serviço">O Serviço</li><li data-etapa="4" data-etapa-nome="A Partida">A Partida</li></ol>
              </article>
            </div>
          </section>
        </aside>
      </div>
      <section class="progresso-distincao" aria-labelledby="titulo-distincao">
        <h2 id="titulo-distincao">Distinções</h2>
        <table>
          <thead><tr><th scope="col">Distinção</th><th scope="col">OSA</th><th scope="col">Data</th></tr></thead>
          <tbody data-lista-distincoes><tr><td colspan="3">Sem distinções registadas.</td></tr></tbody>
        </table>
      </section>
    </div>
  </section>

  <section id="painel-dados" role="tabpanel" aria-labelledby="separador-dados" hidden>
    <div class="dados-pessoais-conteudo" id="dados-pessoais-autenticados">
      <section class="dados-pessoais-grupo" aria-labelledby="titulo-identificacao">
        <h3 id="titulo-identificacao">Identificação e percurso no CNE</h3>
        <dl class="dados-pessoais-grelha">
          <div class="dados-pessoais-campo"><dt>Nome</dt><dd data-dado="Nome"></dd></div>
          <div class="dados-pessoais-campo"><dt>Tótem</dt><dd data-dado="Totem"></dd></div>
          <div class="dados-pessoais-campo"><dt>NIN</dt><dd data-dado="NIN"></dd></div>
          <div class="dados-pessoais-campo"><dt>NIF</dt><dd data-dado="NIF"></dd></div>
          <div class="dados-pessoais-campo"><dt>Cartão de Cidadão</dt><dd data-dado="Cartão de Cidadão"></dd></div>
          <div class="dados-pessoais-campo"><dt>Data de nascimento</dt><dd data-dado="Dt. Nasc."></dd></div>
          <div class="dados-pessoais-campo"><dt>Idade</dt><dd data-dado="Idade"></dd></div>
          <div class="dados-pessoais-campo"><dt>Naturalidade</dt><dd data-dado="Naturalidade"></dd></div>
          <div class="dados-pessoais-campo"><dt>Sexo</dt><dd data-dado="Sexo"></dd></div>
          <div class="dados-pessoais-campo"><dt>Situação</dt><dd data-dado="Situação"></dd></div>
          <div class="dados-pessoais-campo"><dt>Categoria</dt><dd data-dado="Categoria"></dd></div>
          <div class="dados-pessoais-campo"><dt>Secção</dt><dd data-dado="Secção"></dd></div>
          <div class="dados-pessoais-campo"><dt>Agrupamento</dt><dd data-dado="Agrupamento"></dd></div>
          <div class="dados-pessoais-campo"><dt>Núcleo</dt><dd data-dado="Núcleo"></dd></div>
          <div class="dados-pessoais-campo"><dt>Região</dt><dd data-dado="Região"></dd></div>
          <div class="dados-pessoais-campo"><dt>Data de admissão</dt><dd data-dado="Dt. Admissão"></dd></div>
          <div class="dados-pessoais-campo"><dt>Data de promessa</dt><dd data-dado="Dt. Promessa"></dd></div>
          <div class="dados-pessoais-campo"><dt>Flor de Lís</dt><dd data-dado="Flor de Lís"></dd></div>
        </dl>
      </section>
      <section class="dados-pessoais-grupo" aria-labelledby="titulo-contactos">
        <h3 id="titulo-contactos">Contactos e morada</h3>
        <dl class="dados-pessoais-grelha">
          <div class="dados-pessoais-campo"><dt>E-mail</dt><dd data-dado="E-mail"></dd></div>
          <div class="dados-pessoais-campo"><dt>Telemóvel</dt><dd data-dado="Telemovel"></dd></div>
          <div class="dados-pessoais-campo"><dt>Morada</dt><dd data-dado="Morada"></dd></div>
          <div class="dados-pessoais-campo"><dt>Localidade</dt><dd data-dado="Localidade"></dd></div>
          <div class="dados-pessoais-campo"><dt>Código postal</dt><dd><span data-dado="C.P. 4"></span>-<span data-dado="C.P. 3"></span></dd></div>
        </dl>
      </section>
      <section class="dados-pessoais-grupo" aria-labelledby="titulo-encarregados">
        <h3 id="titulo-encarregados">Pais e encarregados de educação</h3>
        <div class="dados-encarregados-scroll">
          <dl class="dados-pessoais-grelha dados-encarregados-grelha">
            <div class="dados-pessoais-campo"><dt>Encarregado/a 1</dt><dd data-dado="encarregado1_nome"></dd></div>
            <div class="dados-pessoais-campo"><dt>Relação</dt><dd data-dado="encarregado1_relacao"></dd></div>
            <div class="dados-pessoais-campo"><dt>Telemóvel</dt><dd data-dado="encarregado1_telemovel"></dd></div>
            <div class="dados-pessoais-campo"><dt>E-mail</dt><dd data-dado="encarregado1_email"></dd></div>
            <div class="dados-pessoais-campo"><dt>Encarregado/a 2</dt><dd data-dado="encarregado2_nome"></dd></div>
            <div class="dados-pessoais-campo"><dt>Relação</dt><dd data-dado="encarregado2_relacao"></dd></div>
            <div class="dados-pessoais-campo"><dt>Telemóvel</dt><dd data-dado="encarregado2_telemovel"></dd></div>
            <div class="dados-pessoais-campo"><dt>E-mail</dt><dd data-dado="encarregado2_email"></dd></div>
          </dl>
        </div>
      </section>
      <details class="dados-pessoais-grupo dados-saude">
        <summary>Dados de saúde e restrições</summary>
        <dl class="dados-pessoais-grelha">
          <div class="dados-pessoais-campo"><dt>Número de utente</dt><dd data-dado="número de utente"></dd></div>
          <div class="dados-pessoais-campo"><dt>Asma</dt><dd data-dado="asma"></dd></div>
          <div class="dados-pessoais-campo"><dt>Epilepsia</dt><dd data-dado="epilepsia"></dd></div>
          <div class="dados-pessoais-campo"><dt>Diabetes</dt><dd data-dado="diabetes"></dd></div>
          <div class="dados-pessoais-campo"><dt>Alergias</dt><dd data-dado="alergias"></dd></div>
          <div class="dados-pessoais-campo"><dt>Descrição de alergias</dt><dd data-dado="descalergias"></dd></div>
          <div class="dados-pessoais-campo"><dt>Outros problemas</dt><dd data-dado="outroprob"></dd></div>
          <div class="dados-pessoais-campo"><dt>Medicação</dt><dd data-dado="medicacao"></dd></div>
          <div class="dados-pessoais-campo"><dt>Restrições</dt><dd data-dado="restricoes"></dd></div>
          <div class="dados-pessoais-campo"><dt>Descrição de restrições</dt><dd data-dado="descrestricoes"></dd></div>
        </dl>
      </details>
      <section class="dados-pessoais-grupo" aria-labelledby="titulo-consentimentos">
        <h3 id="titulo-consentimentos">Autorizações</h3>
        <dl class="dados-pessoais-grelha">
          <div class="dados-pessoais-campo"><dt>Utilização de voz</dt><dd data-dado="consentimento_voz"></dd></div>
          <div class="dados-pessoais-campo"><dt>Utilização de imagem</dt><dd data-dado="consentimento_imagem"></dd></div>
        </dl>
      </section>
    </div>
    <form class="dados-pessoais-form" id="form-pedido-alteracao-dados" aria-label="Pedido de atualização de dados">
      <fieldset>
        <legend>Dados a atualizar</legend>
        <label for="novo-email">Novo email
          <input id="novo-email" name="novo-email" type="email" autocomplete="email">
        </label>
        <label for="novo-telemovel">Novo telemóvel
          <input id="novo-telemovel" name="novo-telemovel" type="tel" autocomplete="tel">
        </label>
        <label for="outros-dados">Outro dado a corrigir
        <textarea id="outros-dados" name="outros-dados"></textarea>
        </label>
        <button type="submit">Pedir alteração</button>
      </fieldset>
    </form>
    <p class="dados-pessoais-nota" id="estado-pedido-alteracao" role="status" aria-live="polite">O pedido será preparado no teu programa de email. Revê a mensagem e envia-a para concluir.</p>
  </section>
</div>

<script type="module" src="{{ '/assets/js/area-pessoal-firebase.js' | relative_url }}"></script>

<script>
  const separadoresAreaPessoal = Array.from(document.querySelectorAll('.area-pessoal-tabs [role="tab"]'));

  function ativarSeparadorAreaPessoal(separador, moverFoco = false) {
    separadoresAreaPessoal.forEach((item) => {
      const selecionado = item === separador;
      item.setAttribute('aria-selected', String(selecionado));
      item.tabIndex = selecionado ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selecionado;
    });
    if (moverFoco) separador.focus();
  }

  separadoresAreaPessoal.forEach((separador, indice) => {
    separador.addEventListener('click', () => ativarSeparadorAreaPessoal(separador));
    separador.addEventListener('keydown', (evento) => {
      let proximoIndice;
      if (evento.key === 'ArrowRight') proximoIndice = (indice + 1) % separadoresAreaPessoal.length;
      else if (evento.key === 'ArrowLeft') proximoIndice = (indice - 1 + separadoresAreaPessoal.length) % separadoresAreaPessoal.length;
      else if (evento.key === 'Home') proximoIndice = 0;
      else if (evento.key === 'End') proximoIndice = separadoresAreaPessoal.length - 1;
      else return;
      evento.preventDefault();
      ativarSeparadorAreaPessoal(separadoresAreaPessoal[proximoIndice], true);
    });
  });
</script>
