---
layout: default
title: Geral | IV - Comunidade
main_class: main-content
---

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%; border-top: 8px solid #CE1126;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <img src="{{ '/assets/img/4_companheiros.png' | relative_url }}" alt="Companheiros" style="height: 60px;">
            <h1 style="margin: 0; color: #CE1126;">IV - Comunidade</h1>
        </div>
        
        <p>Bem-vindo à Comunidade do Agrupamento 929 - Belém! A nossa secção é formada por jovens dos 18 aos 22 anos, os Companheiros, cuja divisa é <strong>"Servir"</strong>.</p>

        <!-- EQUIPA DE ANIMAÇÃO -->
        <div style="margin-top: 30px;">
            <h3 class="section-title" style="color: #CE1126;">🏕️ A nossa Equipa de Animação</h3>
            <div style="background: rgba(206, 17, 38, 0.1); border-left: 5px solid #CE1126; border-radius: 6px; padding: 15px; display: flex; align-items: center; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <div style="background: white; border: 1px solid #ddd; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; background-color: #f0f0f0; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <img src="{{ '/assets/img/ricardo-isaias.jpg' | relative_url }}" alt="Ricardo Isaías" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; color: #666; text-transform: uppercase;">Chefe de Unidade</div>
                            <div style="font-weight: bold; color: var(--azul-marinho);">Ricardo Isaías</div>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid #ddd; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; background-color: #f0f0f0; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <img src="{{ '/assets/img/ruben-rodrigues.jpg' | relative_url }}" alt="Ruben Rodrigues" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; color: #666; text-transform: uppercase;">Dirigente</div>
                            <div style="font-weight: bold; color: var(--azul-marinho);">Ruben Rodrigues</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- O QUE É SER COMPANHEIRO -->
        <div style="margin-top: 40px;">
            <h3 class="section-title" style="color: #CE1126;">🔥 O que é ser Companheiro?</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">Na IV secção, o escuteiro é desafiado a assumir o seu papel na sociedade, desenvolvendo projetos e vivendo a vocação do Serviço. A nossa mística baseia-se na vida de São Paulo e o nosso patrono convida-nos a ser construtores de um mundo novo.</p>
            <p style="font-size: 0.95rem; line-height: 1.6;"><strong>Saber mais:</strong> <a href="https://escutismo.pt/caminheiros-18-aos-22-anos/" target="_blank" style="color: #CE1126; font-weight: bold; text-decoration: underline;">Página Oficial dos Companheiros no CNE</a></p>
        </div>

        <!-- SELETOR DE PROVAS E PROGRESSO -->
        <div style="margin-top: 40px;">
            <h3 class="section-title" style="color: #CE1126;">📖 Provas e Progresso</h3>
            
            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 25px; flex-wrap: wrap;">
                <button onclick="mostrarBloco('provas')" class="btn" style="background-color: var(--azul-marinho);">Preparação para a Promessa</button>
                <button onclick="mostrarBloco('progresso')" class="btn" style="background-color: #CE1126;">Progresso e Objetivos</button>
            </div>

            <!-- Contentor Dinâmico (Começa oculto) -->
            <div id="contentor-dinamico" style="display: none; background: #fcfcfc; border: 1px solid #ddd; border-radius: 8px; padding: 25px; min-height: 300px;">
                
                <!-- A) JOGO DE PROVAS -->
                <div id="provas-app" style="display: none;">
                    <h3 style="color: var(--azul-marinho); margin-bottom: 20px;">Estudo Interativo</h3>
                    <div id="provas-options">
                        <button onclick="iniciarEstudo('movimento')" class="btn" style="background-color: var(--azul-marinho); margin: 5px;">Adesão ao Movimento</button>
                        <button onclick="iniciarEstudo('seccao')" class="btn" style="background-color: #CE1126; margin: 5px;">Adesão à Secção</button>
                    </div>
                    <div id="provas-flashcard" style="display: none; text-align: left;">
                        <div id="flashcard-progresso" style="font-size: 0.8rem; color: #888; font-weight: bold; margin-bottom: 10px;"></div>
                        <h2 id="flashcard-pergunta" style="color: var(--azul-marinho); font-size: 1.2rem; margin-bottom: 15px;"></h2>
                        <div id="flashcard-resposta" style="line-height: 1.6; font-size: 0.95rem; color: #444;"></div>
                        <div style="margin-top: 25px; display: flex; justify-content: space-between;">
                            <button onclick="cartaoAnterior()" class="btn" style="background: #888; padding: 8px 15px;">⬅️ Anterior</button>
                            <button onclick="cartaoSeguinte()" class="btn" style="padding: 8px 15px;">Continuar ➡️</button>
                        </div>
                    </div>
                    <div id="provas-end" style="display: none;">
                        <h3>Estudo Concluído!</h3>
                        <a href="{{ '/em-construcao.html' | relative_url }}" class="btn" style="background: #28a745; padding: 15px 30px;">FAZER TESTE FINAL</a>
                    </div>
                </div>

                <!-- B) PROGRESSO (Conteúdo Marítimo) -->
                <div id="progresso-app" style="display: none; text-align: left;">
                    <h3 style="color: #CE1126; margin-bottom: 20px; text-align: center;">O Sistema de Progresso</h3>
                    <p style="margin-bottom: 20px; font-size: 0.95rem; line-height: 1.6;">A progressão do Companheiro mede-se pelo seu grau de maturação enquanto indivíduo se transforma no <strong>Homem Novo</strong>, capaz de servir a sua comunidade. O Sistema de Progresso da IV Secção (Companhia) consiste em 4 etapas:</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div style="background: #fff; border-left: 4px solid #aaa; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <h4 style="margin: 0 0 5px 0;">1. Etapa da Adesão (Tempo de Caminhar)</h4>
                            <p style="font-size: 0.85rem; color: #555;">A tua adesão à Comunidade começa quando buscas o Caminho. De vara em punho e rumo a um horizonte por ti definido. É aqui que inicias o teu Projeto Pessoal de Vida (PPV).</p>
                        </div>
                        <div style="background: #fff; border-left: 4px solid #cd7f32; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <h4 style="margin: 0 0 5px 0;">2. Etapa do Caminho</h4>
                            <p style="font-size: 0.85rem; color: #555;">Quando o Caminho estiver claro, estarás pronto para a Promessa e vinculação à Comunidade (Companhia). A união e o companheirismo vivenciados são a tua maior força.</p>
                        </div>
                        <div style="background: #fff; border-left: 4px solid #c0c0c0; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <h4 style="margin: 0 0 5px 0;">3. Etapa da Comunidade</h4>
                            <p style="font-size: 0.85rem; color: #555;">Em busca do Homem Novo assumirás a missão de Serviço. O lema é "Servir". O desapego e a vontade de ajudar o próximo são marcas da tua identidade.</p>
                        </div>
                        <div style="background: #fff; border-left: 4px solid #ffd700; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <h4 style="margin: 0 0 5px 0;">4. Etapa do Serviço (Partida)</h4>
                            <p style="font-size: 0.85rem; color: #555;">Fim de um percurso, início de outro. Prestas um serviço de 3 a 6 meses. Estás preparado para a vida adulta e para o papel na Sociedade, validado pela tua Comunidade.</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center;">
                        <h4 style="margin-bottom: 15px;">🎯 Objetivos Educativos</h4>
                        <p style="font-size: 0.9rem; margin-bottom: 15px;">Consulta o guia detalhado dos objetivos educativos para o teu percurso:</p>
                        <a href="{{ '/assets/docs/PostersFaceis_IV.pdf' | relative_url }}" target="_blank" class="btn" style="background-color: #28a745;">📥 Download: Guia de Objetivos Educativos</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</div>

<script>
    function mostrarBloco(id) {
        document.getElementById('contentor-dinamico').style.display = 'block';
        if(id === 'provas') {
            document.getElementById('provas-app').style.display = 'block';
            document.getElementById('progresso-app').style.display = 'none';
        } else {
            document.getElementById('provas-app').style.display = 'none';
            document.getElementById('progresso-app').style.display = 'block';
        }
    }

    // --- Lógica do jogo (Flashcards) ---
    const dadosProvas = {
        movimento: [
            { pergunta: "1. Conheces a vida de B.P. e do movimento Escutista?", resposta: "<strong>Nascimento:</strong> 1907, Brownsea (Inglaterra). <strong>Baden-Powell:</strong> Nascido em 1857, carreira militar brilhante (Mafeking). <strong>O Fundador:</strong> Adaptou os seus manuais militares para jovens, publicando 'Scouting for Boys' em 1908. Legado de 'Missão Cumprida' após falecimento no Quénia em 1941." },
            { pergunta: "2. História e Organização do CNE?", resposta: "Fundado em Portugal em 1923, por D. António Mendes Belo. Organiza-se em Juntas Regionais, Núcleos e Junta Central (órgão máximo). Filiado na OMME e CICE." },
            { pergunta: "3. Organização e história do Agrupamento?", resposta: "Unidade base do CNE com 4 secções. A Direção de Agrupamento (Chefe, Adjunto, Secretário, Tesoureiro, Assistente) gere todo o Agrupamento." },
            { pergunta: "4. Simbologia: B.A., Saudações, Divisa, Flor de Lis e Uniforme?", resposta: "Uniforme (igualdade), Flor de Lis (símbolo mundial), Saudação (3 dedos: deveres; mão esquerda: coração/irmandade)." },
            { pergunta: "5. Sinais comuns da vida Cristã?", resposta: "A Oração do Escuta (atribuída a Santo Inácio de Loyola): um momento de entrega ao serviço desinteressado a Deus." },
            { pergunta: "6. Lei, Promessa e Princípios?", resposta: "Lei: 10 artigos de conduta. Princípios: Dever para com Deus, para com os outros e para consigo próprio. Promessa: Compromisso pessoal e voluntário." },
            { pergunta: "7. Nós e Ligações?", resposta: "Dominar: Direito, Barqueiro, Pedreiro, Correr, Botão em Cruz e Esquadria. Essencial para o pioneirismo e construção em campo." },
            { pergunta: "8. Técnica de Campismo?", resposta: "Montagem de tendas, conservação de material, segurança no uso de machado, faca e navalha e participação obrigatória em acampamento." },
            { pergunta: "9. Mensagem 'Escutismo para Rapazes'?", resposta: "Manual de 1908, um dos livros mais vendidos do séc. XX. Baseado na observação, primeiros socorros e civismo. Base do método 'aprender fazendo'." },
            { pergunta: "10. Distintivos?", resposta: "Uso correto do número do Agrupamento, Flor de Lis, progressão e distintivos de função (triângulos)." }
        ],
        seccao: [
            { pergunta: "1. Organização da IV Secção?", resposta: "A IV Secção é a 'Companhia', composta por Companheiros (17-22 anos) divididos em Tripulações. É o último passo formativo do CNE." },
            { pergunta: "2. Mística e Simbologia da Secção?", resposta: "Mística: 'Homem Novo' (conversão de São Paulo). Simbologia: Cor branca, Rosa dos Ventos (orientação), Leme (comando da própria vida), Barca e Rede (evangelização)." },
            { pergunta: "3. Vivência em Equipa?", resposta: "Integração na Tripulação e na Comunidade há pelo menos 3 meses, com assiduidade e serviço." },
            { pergunta: "4. 'A Caminho do Triunfo'?", resposta: "Livro de B-P para Companheiros. Ensina a navegar a vida evitando os 5 'escolhos' (Jogo, Bebida, Relações desregradas, Charlatães e Irreligião)." },
            { pergunta: "5. Atividade típica?", resposta: "O Empreendimento: projeto idealizado, preparado e executado inteiramente pelos Companheiros." },
            { pergunta: "6. Conversão de São Paulo?", resposta: "O Patrono: Saulo tornou-se Paulo no caminho de Damasco. Simboliza a mudança radical de vida ao serviço de um ideal." },
            { pergunta: "7. Oração e Cerimonial?", resposta: "A Oração do Companheiro e o compromisso da Promessa são momentos de interioridade e entrega madura ao serviço." },
            { pergunta: "8. Projeto Pessoal de Vida (PPV)?", resposta: "A 'Bússola' do Companheiro: definição de objetivos e metas para a vida profissional, familiar, social e espiritual." }
        ]
    };

    let listaAtual = [], indiceAtual = 0, temaAtualNome = "";

    function iniciarEstudo(tema) {
        listaAtual = dadosProvas[tema]; indiceAtual = 0;
        temaAtualNome = (tema === 'movimento') ? "Adesão ao Movimento" : "Adesão à Secção";
        document.getElementById('provas-options').style.display = 'none';
        document.getElementById('provas-flashcard').style.display = 'block';
        atualizarCartao();
    }

    function atualizarCartao() {
        const prova = listaAtual[indiceAtual];
        document.getElementById('flashcard-progresso').innerText = temaAtualNome + " (" + (indiceAtual + 1) + "/" + listaAtual.length + ")";
        document.getElementById('flashcard-pergunta').innerText = prova.pergunta;
        document.getElementById('flashcard-resposta').innerHTML = prova.resposta;
    }

    function cartaoSeguinte() {
        if(indiceAtual < listaAtual.length - 1) { indiceAtual++; atualizarCartao(); }
        else { document.getElementById('provas-flashcard').style.display = 'none'; document.getElementById('provas-end').style.display = 'block'; }
    }
    function cartaoAnterior() { if(indiceAtual > 0) { indiceAtual--; atualizarCartao(); } }
</script>