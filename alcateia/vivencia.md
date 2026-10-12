---
layout: default
title: Vivência | I - Alcateia
main_class: pagina-com-hero
ultima_atualizacao: 12/10/2026
seccao_slug: alcateia
seccao_nome: I - Alcateia
seccao_cor: '#E9B708'
seccao_cor_texto: '#17202A'
---
<!--
  Página "Vivência" da I Secção — Alcateia. Estrutura e componentes iguais à
  Vivência da Comunidade 88, da Frota 98 e da Flotilha; conteúdo adaptado do
  documento "Rumos" (Escutismo Marítimo), do quadro comparativo das secções
  marítimas e do Regulamento Geral do CNE (Lei, Máximas, Divisa, art. 4.º e
  64.º), sempre reescrito.

  VALIDAR ANTES DE PUBLICAR:
  - Elementos por Bando: 4 a 7 no Regulamento Geral (art. 64.º, n.º 4, usado
    aqui), 6 a 8 no Rumos, 5 a 7 no quadro comparativo.
  - Divisa: os Lobitos têm divisa própria no Regulamento Geral ("Da melhor
    vontade"). A divisa marítima («mais além» / «boa pesca») NÃO foi incluída;
    confirmar se os Lobitos marítimos a usam também.
  - O Rumos fala em "Tripulação" ao descrever o Conselho de Guias da Alcateia
    (provável gralha de adaptação); a página usa "Bando".
  - O terceiro conselho (o que concretiza a Caçada aprovada) não tem nome nos
    documentos; a página não lho atribui.
  - Cor da secção: amarelo. O texto sobre fundo amarelo usa seccao_cor_texto;
    títulos e ligações usam azul para terem contraste.
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

    /* Componentes desta página (em classes, não em estilos inline).
       Amarelo só em elementos decorativos; texto e ligações em azul. */
    .vivencia-topo { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
    .vivencia-topo-icone { font-size: 2.5rem; }
    .vivencia-topo h2 { margin: 0; color: var(--azul-marinho); }
    .vivencia-intro { line-height: 1.6; margin-bottom: 30px; }
    .vivencia-lista { margin-top: 40px; text-align: left; }
    .vivencia-texto { line-height: 1.6; }
    .vivencia-texto-fim { line-height: 1.6; margin-bottom: 0; }
    .vivencia-link { color: var(--azul-claro); font-weight: bold; text-decoration: underline; }

    /* Botões na cor da secção: o .btn do site força texto branco (!important),
       por isso o texto escuro sobre amarelo tem de ser forçado também. */
    .vivencia-card .btn-seccao { background-color: var(--cor-vivencia); color: var(--cor-vivencia-texto) !important; }
    .vivencia-card .btn-seccao:hover { background-color: var(--azul-marinho); color: #fff !important; }

    .simbolos-grelha { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 14px; margin-top: 15px; }
    .simbolo-card { background: var(--cinza-fundo); border: 1px solid #eee; border-radius: 6px; padding: 15px; text-align: center; }
    .simbolo-card strong { display: block; color: var(--azul-marinho); font-size: 1.1rem; }
    .simbolo-card p { font-size: 0.85rem; margin: 8px 0 0; }

    .abas-botoes { display: flex; gap: 15px; justify-content: center; margin-bottom: 25px; flex-wrap: wrap; }
    .aba-vida { text-align: left; }
    .aba-vida h3 { color: var(--azul-marinho); margin-bottom: 15px; text-align: center; }
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

<section class="hero-generico hero-seccao hero-alcateia" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho">
        <h1>Vivência</h1>
        <p>A nossa mística, os nossos símbolos e o rumo da Alcateia.</p>
    </header>
    {% include seccao-nav.html %}
    <section class="card vivencia-card" style="--cor-vivencia: {{ page.seccao_cor }}; --cor-vivencia-texto: {{ page.seccao_cor_texto | default: '#fff' }};">
        <div class="vivencia-topo">
            <span class="vivencia-topo-icone">📄</span>
            <h2>Vivência</h2>
        </div>

        <p class="vivencia-intro">O que significa ser Lobito, a nossa mística, os nossos símbolos e a Caçada que se vive na Alcateia.</p>

        <div class="vivencia-lista">

            <!-- TEMA 1: IMAGINÁRIO -->
            <details class="acordeao">
                <summary>🌊 Imaginário</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">O imaginário da Alcateia vem do <strong>Livro da Selva</strong>. Os Chefes contam aos Lobitos a história de Maugli e relacionam os animais da selva com as personagens da vida real. Essa história vive-se na Alcateia através de caçadas, jogos, danças da selva e representações. O Chefe de Alcateia é «Àquêlà», e os restantes membros da Equipa de Animação adotam o nome de personagens do Livro da Selva.</p>
                    <p class="vivencia-texto-fim">Na Alcateia marítima, há um capítulo com um lugar especial: o IV, «A Foca Branca». Cótique, tal como os Lobitos, faz a sua aprendizagem náutica e explora o meio aquático. A vontade de aprender e conhecer, a grande curiosidade por «mundos desconhecidos», o espírito observador e o ouvir com atenção os mais velhos fazem dele um bom exemplo para os Lobitos — que, como ele, aprendem a arte de navegar em segurança e ganham o gosto pela navegação.</p>
                </div>
            </details>

            <!-- TEMA 2: O QUE É SER LOBITO -->
            <details class="acordeao">
                <summary>🔥 O que é ser Lobito?</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">O Lobito vive em Bando, e é em Bando que aprende a viver a Lei, as Máximas e a Divisa da secção:</p>

                    <div class="passos-lista">
                        <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                            <h4>📜 A Lei</h4>
                            <p>O Lobito escuta Àquêlà; o Lobito não se escuta a si próprio.</p>
                        </div>
                        <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                            <h4>⭐ As Máximas</h4>
                            <ul>
                                <li>O Lobito pensa primeiro no seu semelhante;</li>
                                <li>O Lobito sabe ver e ouvir;</li>
                                <li>O Lobito é asseado;</li>
                                <li>O Lobito é verdadeiro;</li>
                                <li>O Lobito é alegre.</li>
                            </ul>
                        </div>
                        <div class="passo-card" style="--passo-cor: #28a745;">
                            <h4>🐾 A Divisa</h4>
                            <p>Da melhor vontade.</p>
                        </div>
                    </div>

                    <p class="vivencia-texto">A nossa mística é <strong>«O Louvor ao Criador»</strong> e o nosso patrono é <strong>São Francisco de Assis</strong>. Com ele, os Lobitos aprendem a louvar o Criador, a amar a Natureza e a ver em Deus Pai a origem de tudo o que existe. Pelo exemplo e pela vida de São Francisco, deixam-se encantar pela beleza da obra criada e veem no Menino Jesus o maior dom de Deus à Humanidade, aprendendo a viver como Ele e para Ele.</p>
                    <p class="vivencia-texto-fim"><strong>Saber mais:</strong> <a class="vivencia-link" href="https://escutismo.pt/lobitos-6-aos-10-anos/" target="_blank" rel="noopener noreferrer">Página Oficial da I Secção no CNE</a></p>
                </div>
            </details>

            <!-- TEMA 3: SIMBOLOGIA -->
            <details class="acordeao">
                <summary>⚜️ Simbologia</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">A Alcateia tem símbolos que os Lobitos aprendem a valorizar e a cuidar:</p>

                    <div class="simbolos-grelha">
                        <div class="simbolo-card">
                            <strong>Mastro de Honra</strong>
                            <p>Também chamado Vara Totem, tem no alto a cabeça de um lobo. Nele inscrevem-se sinais dos progressos dos Lobitos e das atividades mais importantes da Alcateia.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Totem da Alcateia</strong>
                            <p>Tem um lugar de destaque no Covil, o local de reunião da Alcateia.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Bandeirola do Bando</strong>
                            <p>A primeira marca do Bando a que cada Lobito pertence: tecido azul celeste, debruado a amarelo, com a cabeça de lobo desenhada na cor do Bando.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>As cores dos Bandos</strong>
                            <p>Branco, cinzento, preto, castanho e ruivo: cada Bando tem a sua cor.</p>
                        </div>
                    </div>
                </div>
            </details>

            <!-- TEMA 4: A VIDA DA ALCATEIA -->
            <details class="acordeao azul">
                <summary>🐺 A Alcateia, os Bandos e a Caçada</summary>
                <div class="acordeao-content">
                    <div class="abas-botoes">
                        <button onclick="mostrarVida('bando')" class="btn btn-seccao">Bando e Cargos</button>
                        <button onclick="mostrarVida('cacada')" class="btn">Caçada e Cerimoniais</button>
                    </div>

                    <!-- Bando e Cargos -->
                    <div id="vida-bando" class="aba-vida" style="display: block;">
                        <h3>Como se organiza a Alcateia</h3>
                        <p class="vivencia-texto">A Alcateia reúne os Lobitos — dos 6 aos 10 anos — e organiza-se em <strong>2 a 5 Bandos</strong>, cada um com 4 a 7 Lobitos. Ao formar os Bandos, tem-se em conta o género, a idade e a experiência náutica de cada Lobito. Cada Bando tem um canto próprio onde guarda os seus tesouros e materiais.</p>

                        <div class="passos-lista">
                            <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                                <h4>🐺 Guia de Bando</h4>
                                <p>É escolhido pelos elementos do Bando e ratificado pelo Chefe de Alcateia. Dirige e anima o Bando, ajuda-o a progredir, transporta a bandeirola, representa o Bando no Conselho de Guias e no Conselho de Alcateia, distribui tarefas e cargos e nomeia o Sub-Guia, depois de ouvir o Bando e os dirigentes.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                                <h4>🐾 Sub-Guia</h4>
                                <p>Auxilia o Guia e substitui-o na sua ausência.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: #6f42c1;">
                                <h4>🌟 Guia de Alcateia</h4>
                                <p>Entre os Guias de Bando é escolhido o Guia de Alcateia — o «Guia dos Guias» —, um exemplo a seguir por todos os Lobitos.</p>
                            </div>
                        </div>

                        <p class="vivencia-texto">Cada Lobito assume também um cargo no Bando:</p>
                        <div class="simbolos-grelha">
                            <div class="simbolo-card"><strong>Escrivão</strong><p>Faz o registo das atividades e arquiva os documentos do Bando.</p></div>
                            <div class="simbolo-card"><strong>de Detalhe</strong><p>Trata da parte financeira do Bando.</p></div>
                            <div class="simbolo-card"><strong>de Baú</strong><p>Cuida do material do Bando, no Covil e em campo.</p></div>
                            <div class="simbolo-card"><strong>de Paiol</strong><p>Mantém o material náutico usado pelo Bando.</p></div>
                            <div class="simbolo-card"><strong>Botica</strong><p>Cuida do material de farmácia e zela pela saúde e bem-estar do Bando.</p></div>
                            <div class="simbolo-card"><strong>Taifa</strong><p>Responsável pela área alimentar: ajuda a planear, confecionar e distribuir as refeições.</p></div>
                            <div class="simbolo-card"><strong>Animador</strong><p>Ajuda o Bando em todos os momentos de animação.</p></div>
                        </div>

                        <p class="vivencia-texto" style="margin-top: 20px;">A vida da Alcateia organiza-se e decide-se em três conselhos. O <strong>Conselho de Guias</strong> é o órgão permanente que, sob a coordenação do Chefe de Alcateia, orienta a vida da unidade — cada Guia representa aí o seu Bando, e é neste conselho que se escolhe o Guia de Alcateia. O <strong>Conselho de Alcateia</strong> junta todos os Lobitos e a Equipa de Animação para tomar as grandes decisões, como eleger a Caçada e aprovar o plano de atividades. E, depois de aprovada cada Caçada, reúne-se um terceiro conselho para a pôr em prática.</p>
                    </div>

                    <!-- Caçada e Cerimoniais -->
                    <div id="vida-cacada" class="aba-vida" style="display: none;">
                        <h3>A Caçada</h3>
                        <p class="vivencia-texto">A Caçada é o projeto dos Lobitos: a aventura que toda a Alcateia escolhe, vive e avalia em conjunto.</p>

                        <div class="passos-lista">
                            <div class="passo-card" style="--passo-cor: var(--cor-vivencia);">
                                <h4>1. Escolher</h4>
                                <p>Reunida em Conselho de Alcateia, toda a unidade tem como objetivo eleger uma Caçada. Cada Bando — através do seu representante, ou em conjunto — apresenta o seu anteprojeto e faz campanha pela sua Caçada, tentando obter a aprovação da Alcateia, sem atacar os restantes.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: var(--azul-claro);">
                                <h4>2. Concretizar</h4>
                                <p>Depois de aprovada a Caçada, reúne-se o conselho que a leva à prática, concretizando o projeto votado em Conselho de Alcateia.</p>
                            </div>
                            <div class="passo-card" style="--passo-cor: #28a745;">
                                <h4>3. Avaliar</h4>
                                <p>No fim, a Alcateia reúne-se também para avaliar a Caçada: o que correu bem e o que se pode melhorar.</p>
                            </div>
                        </div>

                        <h3 style="margin-top: 30px;">Os cerimoniais</h3>
                        <p class="vivencia-texto">A mística e o imaginário da Alcateia estão presentes em todas as atividades, mas ganham forma concreta nos cerimoniais:</p>
                        <div class="simbolos-grelha">
                            <div class="simbolo-card"><strong>Grande Uivo</strong><p>A saudação coletiva dos Lobitos aos seus Chefes ou visitantes.</p></div>
                            <div class="simbolo-card"><strong>Círculo do Conselho</strong><p>O círculo que os Lobitos formam para receber instruções e ouvir histórias.</p></div>
                            <div class="simbolo-card"><strong>Círculo de Parada</strong><p>Onde se fazem as danças da selva, os jogos e as cerimónias.</p></div>
                        </div>
                        <p class="vivencia-texto-fim" style="margin-top: 20px;">Entre os cerimoniais contam-se ainda as Danças da Selva, a Abertura e Bênção da Flor Vermelha (o Fogo de Conselho), a Vigília de Oração, a Promessa, a Investidura de Guias e Cargos e a Entrega de insígnias.</p>
                    </div>
                </div>
            </details>

            <!-- TEMA 5: ORAÇÃO DO LOBITO -->
            <details class="acordeao verde">
                <summary>🙏 Oração do Lobito</summary>
                <div class="acordeao-content" style="text-align: center;">
                    <div style="max-width: 500px; margin: 0 auto; font-style: italic; color: #444; line-height: 1.8; font-size: 1.05rem;">
                        <p>Divino Menino Jesus,<br>
                        nós Vos oferecemos inteiramente o nosso coração.<br>
                        Enchei-o das Vossas virtudes e ensinai-nos a imitar-Vos.<br>
                        Nós queremos seguir o Vosso exemplo, com toda a nossa boa vontade,<br>
                        para assim, com a ajuda de Maria, nossa doce Mãe,<br>
                        crescermos em graça e em idade.</p>

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
                        <button onclick="iniciarEstudoPromessas('lei')" class="btn">A Lei e as Máximas</button>
                        <button onclick="iniciarEstudoPromessas('alcateia')" class="btn btn-seccao">A Alcateia</button>
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
                        <p>Concluíste a revisão desta secção de perguntas.</p>
                        <a href="{{ '/em-construcao.html' | relative_url }}" class="btn" style="margin-top: 15px; display: inline-block;">Faz o Teste 📝</a>
                    </div>
                </div>
            </details>

            <!-- TEMA 7: EM BREVE (conteúdo ainda sem fonte nos documentos do projeto) -->
            <details class="acordeao">
                <summary>🚧 Em breve nesta página</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Estamos a preparar mais conteúdo para a Alcateia. Em breve vais encontrar aqui:</p>
                    <ul class="vivencia-texto">
                        <li>o Sistema de Progresso do Lobito;</li>
                        <li>a fórmula da Promessa e os guiões dos Cerimoniais da Alcateia.</li>
                    </ul>
                </div>
            </details>

        </div>
    </section>
</div>

<script>
    // Alternar abas do Bando e da Caçada
    function mostrarVida(aba) {
        document.getElementById('vida-bando').style.display = (aba === 'bando') ? 'block' : 'none';
        document.getElementById('vida-cacada').style.display = (aba === 'cacada') ? 'block' : 'none';
    }

    // Base de dados das perguntas. Para os Lobitos (6-10 anos) não se usa a lista
    // genérica "Adesão ao Movimento" das outras secções: as perguntas partem da
    // Lei, Máximas e Divisa do Lobito (Regulamento Geral, art. 4.º) e do Rumos.
    const perguntasLei = [
        { pergunta: "1. Qual é a Lei do Lobito?", resposta: "O Lobito escuta Àquêlà; o Lobito não se escuta a si próprio." },
        { pergunta: "2. Quais são as Máximas do Lobito?", resposta: "O Lobito pensa primeiro no seu semelhante; sabe ver e ouvir; é asseado; é verdadeiro; é alegre." },
        { pergunta: "3. Qual é a Divisa do Lobito?", resposta: "Da melhor vontade." },
        { pergunta: "4. Quem é Àquêlà?", resposta: "É o Chefe de Alcateia. Os restantes membros da Equipa de Animação adotam nomes de personagens do Livro da Selva." },
        { pergunta: "5. O que é o Grande Uivo?", resposta: "A saudação coletiva dos Lobitos aos seus Chefes ou visitantes." },
        { pergunta: "6. Quem é o patrono da Alcateia?", resposta: "São Francisco de Assis, com quem os Lobitos aprendem a louvar o Criador e a amar a Natureza." }
    ];

    const perguntasAlcateia = [
        { pergunta: "1. Organização da I Secção?", resposta: "A I Secção do Agrupamento 929 é a Alcateia, composta por Lobitos (6-10 anos) organizados em Bandos. Uma Alcateia tem entre 2 e 5 Bandos." },
        { pergunta: "2. Mística e Patrono da Secção?", resposta: "A Mística é 'O Louvor ao Criador'. O Patrono é São Francisco de Assis." },
        { pergunta: "3. As cores dos Bandos?", resposta: "Branco, cinzento, preto, castanho e ruivo." },
        { pergunta: "4. Quem dirige o Bando?", resposta: "O Guia de Bando, escolhido pelos elementos do Bando e ratificado pelo Chefe de Alcateia. O Sub-Guia auxilia-o e substitui-o na sua ausência." },
        { pergunta: "5. A bandeirola do Bando?", resposta: "É de tecido azul celeste, debruada a amarelo, com a cabeça de lobo desenhada na cor do Bando." },
        { pergunta: "6. O imaginário da Alcateia?", resposta: "O Livro da Selva e a história de Maugli. Na Alcateia marítima, o capítulo 'A Foca Branca' e o Cótique, que aprende a navegar, são um bom exemplo para os Lobitos." },
        { pergunta: "7. Cor da secção, local de reunião e atividade típica?", resposta: "A cor da secção é o azul debruado a amarelo, a Alcateia reúne-se no Covil e a atividade típica é a Caçada: o projeto escolhido por toda a Alcateia." }
    ];

    let listaAtual = [];
    let tituloAtual = "";
    let indiceCard = 0;

    function iniciarEstudoPromessas(tema) {
        if (tema === 'lei') {
            listaAtual = perguntasLei;
            tituloAtual = "A Lei e as Máximas";
        } else {
            listaAtual = perguntasAlcateia;
            tituloAtual = "A Alcateia";
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
