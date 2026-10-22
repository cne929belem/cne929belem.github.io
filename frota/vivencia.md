---
layout: default
title: Vivência | III - Frota 98
main_class: pagina-com-hero
ultima_atualizacao: 22/10/2026
seccao_slug: frota
seccao_nome: III - Frota 98
seccao_cor: '#39374C'
---
<!--
  Página "Vivência" da III Secção — Frota 98. Estrutura e componentes iguais à
  Vivência da Comunidade 88; conteúdo adaptado do documento "Rumos" (Escutismo
  Marítimo) e do quadro comparativo das secções marítimas, sempre reescrito.

  VALIDAR ANTES DE PUBLICAR:
  - Teste das Promessas: perguntas e chaves aprovadas pela Equipa de Animação na Sheet (ver apps-script/teste-promessas/LEIA-ME.md).
  - Tema «Progresso» (13/10/2026): ver as notas no topo de _data/progresso.yml.
  - «Contramestre» passou a seguir a grafia do Regulamento Geral (art. 57.º).
  - Significado dos 4 símbolos: o Rumos só os enumera (Ícthus, Machada, Gota de
    Água, Rosa-dos-ventos); as frases dos cartões são interpretação a confirmar.
  - Idade: 14–17 anos no Rumos, 14–18 no quadro comparativo e no resto do site.
  - Elementos por Equipagem: 5 a 7 no Rumos, 4 a 8 no quadro comparativo.
-->

<style>
    /* Caixas expansíveis (acordeão) — iguais às da Vivência da Comunidade.
       A cor da secção vem do front matter (seccao_cor) via --cor-vivencia,
       como na Alcateia e na Flotilha. */
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

<section class="hero-generico hero-seccao hero-frota" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho">
        <h1>Vivência</h1>
        <p>A nossa mística, os nossos símbolos e o rumo da Frota 98.</p>
    </header>
    {% include seccao-nav.html %}
    <section class="card" style="--cor-vivencia: {{ page.seccao_cor }};">
        <div class="vivencia-topo">
            <span class="vivencia-topo-icone">📄</span>
            <h2>Vivência</h2>
        </div>

        <p class="vivencia-intro">O que significa ser Marinheiro, a nossa mística, os nossos símbolos e o rumo (ou melhor, o Cruzeiro) que se percorre na Frota 98.</p>

        <div class="vivencia-lista">

            <!-- TEMA 1: IMAGINÁRIO -->
            <details class="acordeao">
                <summary>🌊 Imaginário</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">A vida da Frota é uma viagem partilhada. As grandes regatas à vela, os cruzeiros científicos, as descobertas, as viagens comerciais e a pesca do bacalhau são o pano de fundo que inspira os Marinheiros a sonhar com aventuras aos quatro cantos do mundo.</p>
                    <p class="vivencia-texto-fim">Na Frota, o jovem experimenta vários papéis — o oficial de marinha, o navegador, o pescador, o ecologista marítimo — e é desafiado a explorar o que ainda ninguém explorou. Cada Equipagem é uma tripulação com leme próprio, e a viagem de todos chama-se Cruzeiro.</p>
                </div>
            </details>

            <!-- TEMA 2: O QUE É SER MARINHEIRO -->
            <details class="acordeao">
                <summary>🔥 O que é ser Marinheiro?</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Na III Secção, o jovem entre os 14 e os 18 anos aprende a ser ator da sua própria vida, e não espectador: ama a vida, desenvolve todas as suas capacidades, cuida do seu corpo e respeita o dos outros, inventa e cria.</p>
                    <p class="vivencia-texto">Um Marinheiro não age só para si. Rejeita a injustiça, trata todos de igual modo, e é pelos seus atos que o conhecem; sabe escolher e ir até ao fim. Na procura de Deus, partilha as suas convicções, encontra nas dúvidas razões para acreditar e reza com quem crê em Jesus Cristo.</p>
                    <p class="vivencia-texto">A nossa mística é <strong>«A Igreja em construção»</strong> e o nosso patrono é <strong>São Pedro</strong>: a rocha sobre a qual a Igreja começou a erguer-se e, sobretudo, um construtor de comunidade. É esse espírito — construir em conjunto, pedra a pedra, com os outros — que a Frota convida cada Marinheiro a viver. Como escuteiros marítimos, vamos sempre «mais além» e desejamos «boa pesca».</p>
                    <p class="vivencia-texto-fim"><strong>Saber mais:</strong> <a class="vivencia-link" href="https://escutismo.pt/pioneiros-14-aos-18-anos/" target="_blank" rel="noopener noreferrer">Página Oficial da III Secção no CNE</a></p>
                </div>
            </details>

            <!-- TEMA 3: SIMBOLOGIA -->
            <details class="acordeao">
                <summary>⚜️ Simbologia</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Tal como nas restantes secções, também a Frota tem os seus próprios símbolos. São quatro:</p>

                    <!-- VALIDAR: o Rumos só enumera os símbolos; as frases abaixo são interpretação. -->
                    <div class="simbolos-grelha">
                        <div class="simbolo-card">
                            <strong>Ícthus</strong>
                            <p>O peixe, sinal dos primeiros cristãos — recorda que Pedro era pescador antes de ser pedra da Igreja.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Machada</strong>
                            <p>A ferramenta de quem constrói: a Igreja está em construção e pede mãos à obra.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Gota de Água</strong>
                            <p>Cada Marinheiro é uma gota — pequena, mas sem ela o mar não é o mesmo.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Rosa-dos-ventos</strong>
                            <p>A orientação: saber onde estamos e escolher o rumo, em Equipagem.</p>
                        </div>
                    </div>
                </div>
            </details>

            <!-- TEMA 4: A VIDA DA FROTA -->
            <details class="acordeao azul">
                <summary>⚓ A Frota, as Equipagens e o Cruzeiro</summary>
                <div class="acordeao-content">
                    <div class="abas-botoes">
                        <button onclick="mostrarVida('equipagem')" class="btn" style="background-color: var(--cor-vivencia);">Equipagem e Cargos</button>
                        <button onclick="mostrarVida('cruzeiro')" class="btn" style="background-color: var(--azul-marinho);">O Cruzeiro</button>
                    </div>

                    <!-- Equipagem e Cargos -->
                    <div id="vida-equipagem" class="aba-vida" style="display: block;">
                        <h3>Como se organiza a Frota</h3>
                        <p class="vivencia-texto">A Frota reúne os Marinheiros e organiza-se em <strong>2 a 5 Equipagens</strong>. Cada Equipagem tem entre 5 e 7 elementos, pode ser mista, e é designada pelo nome de um navegador ou de uma personagem ligada ao mar — descobertas, pesca, investigação, aventuras e proezas náuticas.</p>

                        <div class="passos-lista">
                            <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                                <h4>🏳️ A bandeirola e o distintivo</h4>
                                <p>A bandeirola da Equipagem é azul-escura, debruada a branco, com a silhueta do navegador no centro. O distintivo é triangular, de fundo azul e letras brancas.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                                <h4>🧭 Mestre de Equipagem</h4>
                                <p>É escolhido pelos elementos da Equipagem e ratificado pelo Chefe de Frota. Dirige a Equipagem, coordena as atividades, orienta as reuniões, zela pela ordem e disciplina, representa a Equipagem nos conselhos e perante a Chefia, avalia o progresso dos elementos e nomeia o Contramestre.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: #6f42c1;">
                                <h4>⚓ Contramestre</h4>
                                <p>Substitui o Mestre na sua ausência, e pode acumular outra responsabilidade.</p>
                            </div>
                        </div>

                        <p class="vivencia-texto">Além do Mestre e do Contramestre, cada Marinheiro assume um cargo na Equipagem:</p>
                        <div class="simbolos-grelha">
                            <div class="simbolo-card"><strong>Escrivã/o</strong><p>Escreve o Diário de Bordo da Equipagem e o da embarcação.</p></div>
                            <div class="simbolo-card"><strong>Tesoureiro</strong><p>Cuida das finanças da Equipagem.</p></div>
                            <div class="simbolo-card"><strong>do Paiol</strong><p>Guarda o material náutico e da embarcação.</p></div>
                            <div class="simbolo-card"><strong>do Baú</strong><p>Responsável pelo material de campo.</p></div>
                            <div class="simbolo-card"><strong>da Taifa</strong><p>Responsável pela cozinha.</p></div>
                            <div class="simbolo-card"><strong>da Botica</strong><p>Cuida do material de socorrismo e de segurança.</p></div>
                            <div class="simbolo-card"><strong>Animador</strong><p>Anima a Equipagem: o lado espiritual, o lúdico e tudo o que une.</p></div>
                        </div>

                        <h3 class="section-title" style="margin-top: 20px;">Mestres e Contramestres das Equipagens</h3>
                        {% include frota-equipagens.html %}

                        <p class="vivencia-texto" style="margin-top: 20px;">A vida da Frota decide-se em conselhos. Um deles reúne a Equipa de Animação, os Mestres e Contramestres e o Assistente, e trata da gestão, da disciplina, da formação e da organização dos Cruzeiros. Outro, com todos os Marinheiros e a Equipa de Animação, é onde se tomam as grandes decisões — como escolher o Cruzeiro — e onde se faz a avaliação.</p>
                    </div>

                    <!-- O Cruzeiro -->
                    <div id="vida-cruzeiro" class="aba-vida" style="display: none;">
                        <h3>O Cruzeiro</h3>
                        <p class="vivencia-texto">O Cruzeiro é o projeto dos Marinheiros: a grande aventura que a Frota escolhe, prepara, vive e avalia em conjunto. Reunidas todos os meses (ou sempre que for preciso), as Equipagens vão dando forma ao Cruzeiro escolhido.</p>

                        <div class="passos-lista">
                            <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                                <h4>1. Escolher</h4>
                                <p>A Frota reúne-se e cada Equipagem apresenta o seu anteprojeto, fazendo campanha pelo seu Cruzeiro — sem atacar os restantes. A Frota decide qual avança.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                                <h4>2. Preparar</h4>
                                <p>As Equipagens reúnem-se para planear o Cruzeiro aprovado e distribuir tarefas e responsabilidades.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: #28a745;">
                                <h4>3. Navegar, explorar e servir</h4>
                                <p>A par com a navegação, o Cruzeiro inclui sempre exploração ou serviço, para descobrir a realidade social. Por exemplo:</p>
                                <ul>
                                    <li>uma conversa com um pescador ou com a família de um pescador;</li>
                                    <li>trabalho com a pesca artesanal;</li>
                                    <li>limpeza de praias;</li>
                                    <li>estudo sobre a vida dos antigos pescadores;</li>
                                    <li>vigilância de uma praia.</li>
                                </ul>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--amarelo);">
                                <h4>4. Avaliar</h4>
                                <p>No fim, a Frota reúne-se para avaliar o Cruzeiro: o que correu bem, o que aprendemos e o que faremos diferente.</p>
                            </div>
                        </div>

                        <p class="vivencia-texto-fim">Os Marinheiros são também encorajados a escolher atividades muito variadas — construções, proezas desportivas, atividades científicas, serviços sociais, exposições, encontros internacionais. As atividades marítimas são uma abertura suplementar, não uma limitação.</p>
                    </div>
                </div>
            </details>

            <!-- TEMA 4B: PROGRESSO — componente partilhado (_includes/vivencia-progresso.html,
                 dados em _data/progresso.yml), com a mesma estrutura do "Progresso e PPV"
                 da Comunidade 88. -->
            {% include vivencia-progresso.html %}

            <!-- DIAGNÓSTICO DE PISTA — ecrã inteiro aberto pelo botão do tema «📖 Progresso»
                 (_includes/vivencia-diagnostico.html, dados em _data/diagnostico.yml). Nada é guardado nem enviado. -->
            {% include vivencia-diagnostico.html %}

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
                    <p class="vivencia-texto">Estamos a preparar mais conteúdo para a Frota 98. Em breve vais encontrar aqui:</p>
                    <ul class="vivencia-texto">
                        <li>os guiões das Celebrações e Cerimoniais da Frota.</li>
                    </ul>
                </div>
            </details>

        </div>
    </section>
</div>

<script>
    // Alternar abas da Equipagem e do Cruzeiro
    function mostrarVida(aba) {
        document.getElementById('vida-equipagem').style.display = (aba === 'equipagem') ? 'block' : 'none';
        document.getElementById('vida-cruzeiro').style.display = (aba === 'cruzeiro') ? 'block' : 'none';
    }

    // Lista partilhada "Adesão ao Movimento": fonte única em _data/adesao.yml
    // (corrigida em 13/10/2026 — ver AUDITORIA.md). Não voltar a copiá-la para aqui.
    const perguntasMovimento = {{ site.data.adesao.movimento | jsonify }};
    const perguntasSeccao = [
        { pergunta: "1. Organização da III Secção?", resposta: "A III Secção do Agrupamento 929 é a Frota 98, composta por Marinheiros (14-18 anos) organizados em Equipagens. Uma Frota tem entre 2 e 5 Equipagens." },
        { pergunta: "2. Mística e Patrono da Secção?", resposta: "A Mística é 'A Igreja em construção'. O Patrono é São Pedro: a rocha sobre a qual a Igreja começou a erguer-se e, sobretudo, um construtor de comunidade." },
        { pergunta: "3. Os símbolos da Frota?", resposta: "São quatro: o Ícthus, a Machada, a Gota de Água e a Rosa-dos-ventos." },
        { pergunta: "4. Como se organiza uma Equipagem?", resposta: "Tem entre 5 e 7 elementos, com um Mestre (escolhido pela Equipagem e ratificado pelo Chefe de Frota) e um Contramestre, que o substitui. Cada Marinheiro assume um cargo: Cronista, do Detalhe, do Paiol, do Baú, da Taifa, da Botica ou Animador." },
        { pergunta: "5. Atividade típica?", resposta: "O Cruzeiro: o projeto dos Marinheiros, escolhido pela Frota, preparado pelas Equipagens e sempre com uma componente de exploração ou de serviço, além da navegação." },
        { pergunta: "6. Cores e bandeirola?", resposta: "A cor da secção é o azul escuro debruado a branco — a cor do mar profundo. A bandeirola da Equipagem é azul-escura, debruada a branco, com a silhueta do navegador." },
        { pergunta: "7. Como se decide o Cruzeiro?", resposta: "A Frota reúne-se e cada Equipagem apresenta o seu anteprojeto, fazendo campanha pelo seu Cruzeiro sem atacar os restantes. A Frota decide qual avança, e avalia-o no fim." },
        { pergunta: "8. Saudação e divisa marítimas?", resposta: "O escuteiro marítimo vai sempre 'mais além' e deseja 'boa pesca'." },
        { pergunta: "9. Como se distinguem as Equipagens?", resposta: "Cada Equipagem tem um Patrono: um Santo da Igreja, um Benemérito da Humanidade ou um Herói Nacional, dando-se preferência a figuras ligadas ao mar." },
        { pergunta: "10. Quais são as etapas do teu progresso?", resposta: "Começas no Desprendimento, a etapa de adesão (no máximo 7 meses), que termina com a Promessa. Depois vêm 3 etapas de progresso: Conhecimento, Vontade e Construção — o caminho de São Pedro, o pescador que deixou as redes e se tornou construtor de comunidade. O progresso é orientado no Conselho de Mestres." },
        { pergunta: "11. Já conheces as áreas de desenvolvimento e os trilhos?", resposta: "São 6 áreas — Físico, Afetivo, Caráter, Espiritual, Intelectual e Social — com 3 trilhos cada, 18 ao todo. Em cada etapa escolhes um trilho de cada área: no fim da Construção terás feito os 18. O «🧭 Diagnóstico de Pista», no tema «📖 Progresso», ajuda-te a escolher." }
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
