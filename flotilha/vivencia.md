---
layout: default
title: Vivência | II - Flotilha
main_class: pagina-com-hero
ultima_atualizacao: 13/10/2026
seccao_slug: flotilha
seccao_nome: II - Flotilha
seccao_cor: '#6678A6'
---
<!--
  Página "Vivência" da II Secção — Flotilha. Estrutura e componentes iguais à
  Vivência da Comunidade 88 e da Frota 98; conteúdo adaptado do documento
  "Rumos" (Escutismo Marítimo), do quadro comparativo das secções marítimas e
  do Regulamento Geral do CNE (designações marítimas), sempre reescrito.

  VALIDAR ANTES DE PUBLICAR:
  - Teste das Promessas: perguntas e chaves aprovadas pela Equipa de Animação na Sheet (ver apps-script/teste-promessas/LEIA-ME.md).
  - Tema «Progresso» (13/10/2026): ver as notas no topo de _data/progresso.yml.
  - Elementos por Tripulação: 5 a 8 no Rumos, 4 a 8 no quadro comparativo.
  - Nomes dos conselhos: o Rumos descreve-os sem os nomear; "Conselho de
    Timoneiros" vem do Regulamento Geral e "Conselho de Flotilha" é citado no
    próprio Rumos. A atribuição de cada descrição ao seu nome é dedução.
  - Mística "A Descoberta da Terra Prometida": os documentos só a enunciam,
    sem a explicar; a página não lhe atribui nenhum significado.
-->

<style>
    /* Caixas expansíveis (acordeão) — iguais às da Vivência da Comunidade.
       A cor da secção vem do front matter (seccao_cor) via --cor-vivencia. */
    .acordeao {
        background: var(--cinza-fundo);
        border-left: 5px solid var(--cor-vivencia);
        border-radius: 6px;
        margin-bottom: 15px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        overflow: hidden;
    }
    .acordeao summary {
        padding: 18px 20px;
        font-weight: 800;
        font-size: 1.1rem;
        color: var(--azul-marinho);
        cursor: pointer;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        outline: none;
    }
    .acordeao summary::after { content: '+'; font-size: 1.2rem; }
    .acordeao[open] summary::after { content: '−'; }
    .acordeao[open] summary { border-bottom: 1px solid #e0e0e0; }
    .acordeao-content { padding: 20px; background: #fff; }
    .acordeao.azul { border-left-color: var(--azul-claro); }
    .acordeao.verde { border-left-color: #28a745; }

    /* Componentes desta página (em classes, não em estilos inline) */
    .vivencia-topo { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
    .vivencia-topo-icone { font-size: 2.5rem; }
    .vivencia-topo h2 { margin: 0; color: var(--cor-vivencia); }
    .vivencia-intro { line-height: 1.6; margin-bottom: 30px; }
    .vivencia-lista { margin-top: 40px; text-align: left; }
    .vivencia-texto { line-height: 1.6; }
    .vivencia-texto-fim { line-height: 1.6; margin-bottom: 0; }
    .vivencia-link { color: var(--cor-vivencia); font-weight: bold; text-decoration: underline; }

    .simbolos-grelha { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 14px; margin-top: 15px; }
    .simbolo-card { background: var(--cinza-fundo); border: 1px solid #eee; border-radius: 6px; padding: 15px; text-align: center; }
    .simbolo-card strong { display: block; color: var(--azul-marinho); font-size: 1.1rem; }
    .simbolo-card p { font-size: 0.85rem; margin: 8px 0 0; }

    .abas-botoes { display: flex; gap: 15px; justify-content: center; margin-bottom: 25px; flex-wrap: wrap; }
    .aba-vida { text-align: left; }
    .aba-vida h3 { color: var(--cor-vivencia); margin-bottom: 15px; text-align: center; }
    .passos-lista { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
    .passo-card { background: var(--cinza-fundo); border: 1px solid #eee; border-left: 4px solid var(--passo-cor, var(--cor-vivencia)); padding: 15px; border-radius: 6px; }
    .passo-card h4 { margin: 0 0 6px; color: var(--azul-marinho); }
    .passo-card p { font-size: 0.85rem; color: #555; margin: 0; }
    .passo-card ul { margin: 6px 0 0 18px; font-size: 0.85rem; color: #555; line-height: 1.6; }

    .treino-centro { text-align: center; }
    .treino-botoes { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
    .treino-botoes .btn { padding: 12px 25px; }
    #estudo-flashcard { display: none; text-align: left; background: var(--cinza-fundo); border: 1px solid #ddd; padding: 25px; border-radius: 8px; margin-top: 15px; }
    #flashcard-contador { font-size: 0.85rem; color: #888; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; }
    #flashcard-pergunta { color: var(--azul-marinho); font-size: 1.2rem; margin-bottom: 15px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
    #flashcard-resposta { line-height: 1.6; font-size: 0.95rem; color: #444; }
    .flashcard-nav { margin-top: 25px; display: flex; justify-content: space-between; align-items: center; }
    .flashcard-nav .btn { padding: 8px 15px; }
    #estudo-fim { display: none; text-align: center; padding: 20px; }
    #estudo-fim h2 { color: #28a745; }
</style>

<section class="hero-generico hero-seccao hero-flotilha" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho">
        <h1>Vivência</h1>
        <p>A nossa mística, os nossos símbolos e o rumo da Flotilha.</p>
    </header>
    {% include seccao-nav.html %}
    <section class="card" style="--cor-vivencia: {{ page.seccao_cor }};">
        <div class="vivencia-topo">
            <span class="vivencia-topo-icone">📄</span>
            <h2>Vivência</h2>
        </div>

        <p class="vivencia-intro">O que significa ser Moço, a nossa mística, os nossos símbolos e o rumo (ou melhor, a Expedição) que se percorre na Flotilha.</p>

        <div class="vivencia-lista">

            <!-- TEMA 1: IMAGINÁRIO -->
            <details class="acordeao">
                <summary>🌊 Imaginário</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">As viagens dos Descobrimentos, as grandes expedições marítimas, os corsários, a aprendizagem da vela e do remo, a exploração de novas terras: é neste mundo que a Flotilha navega. Embarcar para descobrir o mundo — e descobrir-se a si próprio.</p>
                    <p class="vivencia-texto-fim">A Flotilha inspira-se em Gil Eanes, Gonçalves Zarco, Diogo Cão, Bartolomeu Dias, Vasco da Gama, Pedro Álvares Cabral e Fernão de Magalhães: homens irreverentes e simbólicos, que são um modelo para os Moços. Guia-os o desejo de explorar, de conhecer o mundo, o meio marítimo, as tradições e as novas técnicas, para testarem as suas capacidades.</p>
                </div>
            </details>

            <!-- TEMA 2: O QUE É SER MOÇO -->
            <details class="acordeao">
                <summary>🔥 O que é ser Moço?</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Os Moços sabem viver com a natureza e respeitá-la: procuram conhecê-la, compreender os seus elementos e aproveitá-los da melhor maneira. Sabem cozinhar, montar a sua tenda e instalar um campo; conhecem as árvores, as conchas e os peixes, pescam sem destruir e sabem que formas de poluição ameaçam a vida nos oceanos e nas marés.</p>
                    <p class="vivencia-texto">Gostam de usar as mãos e de aprender a ser hábeis: colaboram na conservação das embarcações e da palamenta, partilham o que sabem e vão conhecendo a arte de marinheiro. Conhecem o seu corpo e exercitam-no, com uma alimentação equilibrada, regras de higiene e a prática da vela, do remo e da natação. E, pela vivência de cada atividade, estão atentos a Cristo e à Sua Palavra e descobrem Deus todos os dias na natureza, obra magnífica.</p>
                    <p class="vivencia-texto">A nossa mística é <strong>«A Descoberta da Terra Prometida»</strong> e o nosso patrono é <strong>São Tiago</strong>, um dos apóstolos que acompanhou Jesus. Guiado pela fé, Tiago partiu à aventura levando consigo a vara, o chapéu e o cantil, e guiado por uma estrela que mantinha a sua fé bem cintilante para não se desviar do caminho. Ficou conhecido pelas suas viagens e pela sua perseverança — por isso é, para os Moços, um exemplo de quem partiu à aventura sem perder o rumo. Como escuteiros marítimos, vamos sempre «mais além» e desejamos «boa pesca».</p>
                    <p class="vivencia-texto-fim"><strong>Saber mais:</strong> <a class="vivencia-link" href="https://escutismo.pt/exploradores-10-aos-14-anos/" target="_blank" rel="noopener noreferrer">Página Oficial da II Secção no CNE</a></p>
                </div>
            </details>

            <!-- TEMA 3: SIMBOLOGIA -->
            <details class="acordeao">
                <summary>⚜️ Simbologia</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Além da flor-de-lis, os Moços identificam-se com dois símbolos da sua vivência marítima — a vela latina e a canoa — e com os símbolos de São Tiago.</p>

                    <div class="simbolos-grelha">
                        <div class="simbolo-card">
                            <strong>Vela latina</strong>
                            <p>A vela triangular dos Descobrimentos: a partida para a aventura e a vontade de conhecer novos mares. Nas caravelas, permitia bolinar e aproveitar o vento contrário — e fazer de uma adversidade algo útil.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Canoa</strong>
                            <p>A imagem que B.-P. escolheu para o ideal do escuteiro: o símbolo de uma boa navegação, em que cada um conduz a sua própria viagem.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Vara, chapéu e cantil</strong>
                            <p>O que São Tiago levou consigo para o auxiliar na caminhada.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Estrela</strong>
                            <p>A luz que guiava Tiago e mantinha a sua fé bem cintilante, para que não se desviasse do caminho.</p>
                        </div>
                    </div>

                    <p class="vivencia-texto" style="margin-top: 20px;">B.-P. deixou aos escuteiros um convite que a canoa resume bem: impelir a nossa própria canoa, sem esperar que outros remem por nós, e seguir do ribeiro da infância, pelo rio da adolescência, rumo ao oceano da vida adulta — com pilotagem atenta, navegação franca e persistência jovial.</p>
                </div>
            </details>

            <!-- TEMA 4: A VIDA DA FLOTILHA -->
            <details class="acordeao azul">
                <summary>⚓ A Flotilha, as Tripulações e a Expedição</summary>
                <div class="acordeao-content">
                    <div class="abas-botoes">
                        <button onclick="mostrarVida('tripulacao')" class="btn" style="background-color: var(--cor-vivencia);">Tripulação e Cargos</button>
                        <button onclick="mostrarVida('expedicao')" class="btn" style="background-color: var(--azul-marinho);">A Expedição</button>
                    </div>

                    <!-- Tripulação e Cargos -->
                    <div id="vida-tripulacao" class="aba-vida" style="display: block;">
                        <h3>Como se organiza a Flotilha</h3>
                        <p class="vivencia-texto">A Flotilha reúne os Moços — escuteiros marítimos dos 10 aos 14 anos — e organiza-se em <strong>2 a 5 Tripulações</strong>, cada uma com 5 a 8 Moços. A Tripulação é uma célula com vida própria e um canto íntimo onde guarda os seus troféus e materiais.</p>

                        <div class="passos-lista">
                            <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                                <h4>🐬 O Totem e o lema</h4>
                                <p>Cada Tripulação tem o nome de um animal marinho — o Totem — e assume as virtudes ou características que o animal tem de mais forte. Escolhe também um lema, ligado a uma qualidade desse animal.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                                <h4>🏳️ A bandeirola</h4>
                                <p>A bandeirola da Tripulação é debruada a branco sobre fundo azul celeste, com a silhueta do animal a preto no centro.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: #6f42c1;">
                                <h4>🧭 Timoneiro</h4>
                                <p>É escolhido pelos elementos da Tripulação e ratificado pelo Chefe de Flotilha. Dirige e anima a Tripulação, transporta a bandeirola, distribui as tarefas, representa a Tripulação no Conselho de Timoneiros e nomeia o Sota-Timoneiro, depois de ouvir a Tripulação.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: #28a745;">
                                <h4>⚓ Sota-Timoneiro</h4>
                                <p>Substitui o Timoneiro na sua ausência, e pode acumular outra responsabilidade.</p>
                            </div>
                        </div>

                        <p class="vivencia-texto">Cada Moço assume também um cargo na Tripulação:</p>
                        <div class="simbolos-grelha">
                            <div class="simbolo-card"><strong>Escrivão</strong><p>Escreve o Livro de Bordo, onde fica registada toda a história da Tripulação.</p></div>
                            <div class="simbolo-card"><strong>do Detalhe</strong><p>Trata da parte financeira: quotas, compras e respetivos registos.</p></div>
                            <div class="simbolo-card"><strong>do Paiol</strong><p>Cuida da palamenta da Tripulação e da sua embarcação.</p></div>
                            <div class="simbolo-card"><strong>do Baú</strong><p>Responsável pelo material de campo.</p></div>
                            <div class="simbolo-card"><strong>da Botica</strong><p>Responsável pela farmácia e pelo material de segurança.</p></div>
                            <div class="simbolo-card"><strong>da Taifa</strong><p>Responsável pela cozinha.</p></div>
                            <div class="simbolo-card"><strong>Animador</strong><p>Responsável pelos momentos de animação da Tripulação.</p></div>
                        </div>

                        <p class="vivencia-texto" style="margin-top: 20px;">A vida da Flotilha organiza-se e decide-se em três conselhos. O <strong>Conselho de Timoneiros</strong> é o órgão permanente que, sob a coordenação do Chefe de Flotilha, orienta a vida da unidade — cada Timoneiro representa aí a sua Tripulação, e é neste conselho que se escolhe o Timoneiro de Flotilha, o «Timoneiro dos Timoneiros». O <strong>Conselho de Flotilha</strong> junta toda a unidade para eleger a Expedição e, no fim, avaliá-la. E, depois de aprovada cada Expedição, reúne-se um terceiro conselho para a pôr em prática.</p>
                    </div>

                    <!-- A Expedição -->
                    <div id="vida-expedicao" class="aba-vida" style="display: none;">
                        <h3>A Expedição</h3>
                        <p class="vivencia-texto">A Expedição é o projeto dos Moços: a grande aventura que a Flotilha escolhe, vive e avalia em conjunto.</p>

                        <div class="passos-lista">
                            <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                                <h4>1. Escolher</h4>
                                <p>Reunida em Conselho de Flotilha, a unidade tem como objetivo eleger uma Expedição. Cada Tripulação — através do seu representante, ou em conjunto — apresenta o seu anteprojeto e faz campanha pela sua Expedição, tentando obter a aprovação da Flotilha, sem atacar as restantes.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                                <h4>2. Concretizar</h4>
                                <p>Depois de aprovada a Expedição, reúne-se o conselho que a leva à prática, concretizando o projeto votado em Conselho de Flotilha.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--amarelo);">
                                <h4>3. Avaliar</h4>
                                <p>No fim, a Flotilha reúne-se para avaliar a Expedição: o que correu bem, o que aprendemos e o que faremos diferente.</p>
                            </div>
                        </div>

                        <p class="vivencia-texto-fim">As atividades de uma Expedição não se limitam aos temas marítimos — a vela, o remo e a natação são caminhos para aprender, não limites. O que conta é descobrir o mundo, e descobrir-se a si próprio, em Tripulação.</p>
                    </div>
                </div>
            </details>

            <!-- TEMA 4B: PROGRESSO — componente partilhado (_includes/vivencia-progresso.html,
                 dados em _data/progresso.yml), com a mesma estrutura do "Progresso e PPV"
                 da Comunidade 88. -->
            {% include vivencia-progresso.html %}

            <!-- TEMA 5: ORAÇÃO DO ESCUTA -->
            <details class="acordeao verde">
                <summary>🙏 Oração do Escuta</summary>
                <div class="acordeao-content" style="text-align: center;">
                    <div style="max-width: 500px; margin: 0 auto; font-style: italic; color: #444; line-height: 1.8; font-size: 1.05rem;">
                        <p>Senhor Jesus,<br>
                        Ensinai-me a ser generoso,<br>
                        A servir-Vos como mereceis,<br>
                        A dar sem conta,<br>
                        A combater sem cuidar das feridas,<br>
                        A trabalhar sem procurar descanso,<br>
                        A gastar-me sem esperar outra recompensa,<br>
                        Senão saber que faço a Vossa vontade santa.</p>

                        <p><strong>Ámen.</strong></p>
                    </div>
                </div>
            </details>

            <!-- TEMA 6: TREINO PARA AS PROMESSAS (JOGO) -->
            <details class="acordeao">
                <summary>🏆 Treino para as Promessas</summary>
                <div class="acordeao-content treino-centro">
                    <p style="margin-bottom: 20px;">Testa os teus conhecimentos e prepara-te para a Promessa! Escolhe o que queres estudar.</p>

                    <div id="estudo-intro" class="treino-botoes">
                        <button onclick="iniciarEstudoPromessas('movimento')" class="btn" style="background-color: var(--azul-marinho);">Adesão ao Movimento</button>
                        <button onclick="iniciarEstudoPromessas('seccao')" class="btn" style="background-color: var(--cor-vivencia);">Adesão à Secção</button>
                    </div>

                    <div id="estudo-flashcard">
                        <div id="flashcard-contador"></div>
                        <h2 id="flashcard-pergunta"></h2>
                        <div id="flashcard-resposta"></div>

                        <div class="flashcard-nav">
                            <button onclick="cartaoAnterior()" class="btn" style="background: #6c757d;">⬅️ Anterior</button>
                            <button onclick="cartaoSeguinte()" class="btn" style="background: #28a745;" id="btn-seguinte">Próxima →</button>
                        </div>
                    </div>

                    <div id="estudo-fim">
                        <h2>Muitos Parabéns! 🎉</h2>
                        <p>Concluíste a revisão desta secção de perguntas. Podes agora abrir o separador «Teste das Promessas».</p>
                    </div>
                </div>
            </details>

            <details class="acordeao">
                <summary>📝 Teste das Promessas</summary>
                <div class="acordeao-content">
                    {% include teste-promessas.html %}
                </div>
            </details>

            <!-- TEMA 7: EM BREVE (conteúdo ainda sem fonte nos documentos do projeto) -->
            <details class="acordeao">
                <summary>🚧 Em breve nesta página</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Estamos a preparar mais conteúdo para a Flotilha. Em breve vais encontrar aqui:</p>
                    <ul class="vivencia-texto">
                        <li>os guiões das Celebrações e Cerimoniais da Flotilha.</li>
                    </ul>
                </div>
            </details>

        </div>
    </section>
</div>

<script>
    // Alternar abas da Tripulação e da Expedição
    function mostrarVida(aba) {
        document.getElementById('vida-tripulacao').style.display = (aba === 'tripulacao') ? 'block' : 'none';
        document.getElementById('vida-expedicao').style.display = (aba === 'expedicao') ? 'block' : 'none';
    }

    // Lista partilhada "Adesão ao Movimento": fonte única em _data/adesao.yml
    // (corrigida em 13/10/2026 — ver AUDITORIA.md). Não voltar a copiá-la para aqui.
    const perguntasMovimento = {{ site.data.adesao.movimento | jsonify }};
    const perguntasSeccao = [
        { pergunta: "1. Organização da II Secção?", resposta: "A II Secção do Agrupamento 929 é a Flotilha, composta por Moços (10-14 anos) organizados em Tripulações. Uma Flotilha tem entre 2 e 5 Tripulações." },
        { pergunta: "2. Mística e Patrono da Secção?", resposta: "A Mística é 'A Descoberta da Terra Prometida'. O Patrono é São Tiago, o apóstolo que partiu à aventura, guiado pela fé e por uma estrela, sem perder o rumo." },
        { pergunta: "3. Os símbolos da Flotilha?", resposta: "Além da flor-de-lis, a vela latina e a canoa, e ainda os símbolos de São Tiago: a vara, o chapéu, o cantil e a estrela." },
        { pergunta: "4. Como se organiza uma Tripulação?", resposta: "Tem entre 5 e 8 Moços, com um Timoneiro (escolhido pela Tripulação e ratificado pelo Chefe de Flotilha) e um Sota-Timoneiro, que o substitui. Cada Moço assume um cargo: Escrivão, do Detalhe, do Paiol, do Baú, da Botica, da Taifa ou Animador." },
        { pergunta: "5. Totem e bandeirola?", resposta: "Cada Tripulação tem o nome de um animal marinho, o Totem, e um lema ligado a uma qualidade desse animal. A bandeirola é debruada a branco sobre fundo azul celeste, com a silhueta do animal a preto." },
        { pergunta: "6. Atividade típica?", resposta: "A Expedição: o projeto escolhido pela Flotilha em Conselho de Flotilha, concretizado e avaliado em conjunto." },
        { pergunta: "7. Cor da secção e local de reunião?", resposta: "A cor da secção é o azul claro debruado a branco — a cor das águas transparentes. A Tripulação reúne-se na Base." },
        { pergunta: "8. Saudação e divisa marítimas?", resposta: "O escuteiro marítimo vai sempre 'mais além' e deseja 'boa pesca'." },
        { pergunta: "9. Quais são as etapas do teu progresso?", resposta: "Apelo, Aliança, Rumo e Descoberta — a viagem de quem ouve o chamamento do mar até chegar a novas terras. O progresso é orientado no Conselho de Timoneiros. Vê o tema «📖 Progresso» desta página." }
    ];

    let listaAtual = [];
    let tituloAtual = "";
    let indiceCard = 0;

    function iniciarEstudoPromessas(tema) {
        if (tema === 'movimento') {
            listaAtual = perguntasMovimento;
            tituloAtual = "Adesão ao Movimento";
        } else {
            listaAtual = perguntasSeccao;
            tituloAtual = "Adesão à Secção";
        }

        indiceCard = 0;
        document.getElementById('estudo-intro').style.display = 'none';
        document.getElementById('estudo-fim').style.display = 'none';
        document.getElementById('estudo-flashcard').style.display = 'block';
        atualizarCartaoPromessa();
    }

    function atualizarCartaoPromessa() {
        const p = listaAtual[indiceCard];
        document.getElementById('flashcard-contador').innerText = `${tituloAtual} (${indiceCard + 1} / ${listaAtual.length})`;
        document.getElementById('flashcard-pergunta').innerText = p.pergunta;
        document.getElementById('flashcard-resposta').innerHTML = p.resposta;

        // Alterar texto do botão seguinte se for a última pergunta
        if (indiceCard === listaAtual.length - 1) {
            document.getElementById('btn-seguinte').innerText = "Terminar ✓";
        } else {
            document.getElementById('btn-seguinte').innerText = "Próxima →";
        }
    }

    function cartaoSeguinte() {
        if (indiceCard < listaAtual.length - 1) {
            indiceCard++;
            atualizarCartaoPromessa();
        } else {
            // Fim do estudo
            document.getElementById('estudo-flashcard').style.display = 'none';
            document.getElementById('estudo-fim').style.display = 'block';
        }
    }

    function cartaoAnterior() {
        if (indiceCard > 0) {
            indiceCard--;
            atualizarCartaoPromessa();
        }
    }
</script>
