---
layout: default
title: Vivência | IV - Comunidade 88
main_class: pagina-com-hero
ultima_atualizacao: 10/10/2026
seccao_slug: comunidade
seccao_nome: IV - Comunidade 88
seccao_cor: '#39374C'
---
<!--
  Página "Vivência" da IV Secção — Comunidade 88. Reestruturada a pedido do
  Chefe de Agrupamento a partir de conteúdo de referência de outros
  Agrupamentos/Regiões do CNE.
-->

<style>
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

    .vivencia-topo { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
    .vivencia-topo-icone { font-size: 2.5rem; }
    .vivencia-topo h2 { margin: 0; color: var(--azul-marinho); }
    .vivencia-intro { margin-bottom: 30px; line-height: 1.6; }
    .vivencia-lista { margin-top: 40px; text-align: left; }
    .vivencia-texto { line-height: 1.6; }
    .vivencia-texto-fim { margin-bottom: 0; line-height: 1.6; }
    .vivencia-link { color: var(--cor-vivencia); font-weight: bold; text-decoration: underline; }

    .simbolos-grelha { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 14px; margin-top: 15px; }
    .simbolo-card { padding: 15px; border: 1px solid #eee; border-radius: 6px; background: var(--cinza-fundo); text-align: center; }
    .simbolo-card strong { display: block; color: var(--azul-marinho); font-size: 1.1rem; }
    .simbolo-card p { margin: 8px 0 0; font-size: 0.85rem; }

    .abas-botoes { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 25px; }
    .progresso-conteudo { text-align: left; }
    .progresso-titulo { margin: 0 0 15px; color: var(--azul-marinho); text-align: center; }
    .progresso-intro { margin-bottom: 20px; line-height: 1.6; }
    .progresso-etapas-lista, .ppv-lista { display: grid; gap: 15px; }
    .progresso-etapa, .ppv-passo { padding: 15px; border: 1px solid #eee; border-left: 4px solid var(--passo-cor); border-radius: 6px; background: var(--cinza-fundo); }
    .progresso-etapa-cabecalho { display: flex; align-items: center; gap: 15px; margin-bottom: 10px; }
    .progresso-etapa-cabecalho img { width: 45px; height: 45px; object-fit: contain; }
    .progresso-etapa-cabecalho h4, .ppv-passo h4 { margin: 0; color: var(--azul-marinho); }
    .progresso-etapa p, .ppv-passo p { margin: 0; color: #555; font-size: 0.85rem; }
    .progresso-objetivos { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center; }
    .progresso-objetivos h4 { margin: 0 0 15px; }
    .ppv-lista { gap: 12px; margin: 20px 0; }
    .ppv-passo h4 { margin-bottom: 6px; }
    .ppv-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 20px; }
    .ppv-links .btn { flex: 1 1 220px; min-width: 0; }
    .treino-centro { text-align: center; }
    .treino-intro { margin-bottom: 20px; }
    .treino-botoes { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; }
    .treino-botoes .btn { padding: 12px 25px; }
    #estudo-flashcard { display: none; margin-top: 15px; padding: 25px; border: 1px solid #ddd; border-radius: 8px; background: var(--cinza-fundo); text-align: left; }
    #flashcard-contador { margin-bottom: 10px; color: #888; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; }
    #flashcard-pergunta { margin: 0 0 15px; padding-bottom: 10px; border-bottom: 2px solid #eee; color: var(--azul-marinho); font-size: 1.2rem; }
    #flashcard-resposta { color: #444; font-size: 0.95rem; line-height: 1.6; }
    .flashcard-nav { display: flex; align-items: center; justify-content: space-between; margin-top: 25px; }
    .flashcard-nav .btn { padding: 8px 15px; }
    #estudo-fim { display: none; padding: 20px; text-align: center; }
    #estudo-fim h2 { color: #28a745; }
    .documento-legenda { display: block; margin-top: 5px; color: #888; font-size: 0.75rem; }
    .oracao-conteudo { max-width: 500px; margin: 0 auto; color: #444; font-size: 1.05rem; font-style: italic; line-height: 1.8; text-align: center; }
    .documentos-grelha { margin-top: 15px; }
    @media (max-width: 600px) {
        .acordeao-content { padding: 16px; }
        .ppv-links .btn { flex-basis: 100%; }
        #estudo-flashcard { padding: 18px; }
    }
</style>

<section class="hero-generico hero-comunidade" id="hero" aria-hidden="true"></section>
<div class="espaco-hero-generico" aria-hidden="true"></div>

<div class="comunidade-pagina pagina-seccao">
    <header class="seccao-cabecalho">
        <h1>Vivência</h1>
        <p>A nossa mística, os nossos símbolos e o rumo da Comunidade 88.</p>
    </header>
    {% include seccao-nav.html %}
    <section class="card" style="--cor-vivencia: {{ page.seccao_cor }};">
        <div class="vivencia-topo">
            <span class="vivencia-topo-icone">📄</span>
            <h2>Vivência</h2>
        </div>

        <p class="vivencia-intro">O que significa ser Companheiro, a nossa mística, os nossos símbolos, e o caminho (ou melhor, o rumo) que se percorre na Comunidade 88.</p>

        <div class="vivencia-lista">

            <!-- TEMA 1: IMAGINÁRIO -->
            <details class="acordeao">
                <summary>🌊 Imaginário</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">A vivência da IV Secção não é uma aventura com enredo fechado, como acontece nas secções mais novas — é a própria vida a tornar-se aventura. O Companheiro é chamado a viver em plenitude aquilo que é, em todas as dimensões do seu ser, tal como um marinheiro que já conhece o seu barco e se atreve a singrar mar alto.</p>
                    <p class="vivencia-texto-fim">Se nas secções anteriores se navegava perto da costa, acompanhado de perto, na Comunidade 88 é o momento de assumir o leme: escolher o rumo, enfrentar as tempestades que surgirem, e comprometer-se com a travessia até ao fim.</p>
                </div>
            </details>

            <!-- TEMA 2: O QUE É SER COMPANHEIRO -->
            <details class="acordeao">
                <summary>🔥 O que é ser Companheiro?</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Na IV Secção, o jovem é desafiado a assumir o seu papel na sociedade, desenvolvendo projetos próprios e vivendo a vocação do Serviço. Ainda a caminho da autonomia plena, o Companheiro já possui liberdade em várias áreas da sua vida — e é dessa liberdade, bem vivida, que depende todo o proveito que o escutismo lhe pode dar.</p>
                    <p class="vivencia-texto">A nossa mística inspira-se na vida de São Paulo: um homem de ofício manual (tecelão de tendas), que arriscou tudo por uma convicção, e que transformou uma travessia decisiva — o caminho para Damasco — no ponto de partida de uma vida de anúncio e de ação. Paulo não ficou pelas palavras: foi um exemplo de compromisso levado à prática. É esse espírito de partida, coragem e ação que o nosso patrono nos convida a viver.</p>
                    <p class="vivencia-texto-fim"><strong>Saber mais:</strong> <a class="vivencia-link" href="https://escutismo.pt/caminheiros-18-aos-22-anos/" target="_blank" rel="noopener noreferrer">Página Oficial da IV Secção no CNE</a></p>
                </div>
            </details>

            <!-- TEMA 3: SIMBOLOGIA -->
            <details class="acordeao">
                <summary>⚜️ Simbologia</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">Tal como nas restantes secções, também a Comunidade 88 tem os seus próprios símbolos — adaptados, na versão marítima, à linguagem do mar:</p>

                    <div class="simbolos-grelha">
                        <div class="simbolo-card">
                            <strong>Leme</strong>
                            <p>O compromisso de escolher e corrigir o próprio rumo.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Barca</strong>
                            <p>Só o essencial a bordo — sinal de desprendimento.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Vento / Vela</strong>
                            <p>A força que nos põe em marcha — sinal da presença de Deus.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Rede</strong>
                            <p>Lançada em partilha e comunhão com os outros.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Pão</strong>
                            <p>Alimento do corpo, dado e partilhado com a Tripulação.</p>
                        </div>
                        <div class="simbolo-card">
                            <strong>Evangelho</strong>
                            <p>O anúncio da Boa Nova que guia toda a travessia.</p>
                        </div>
                    </div>
                </div>
            </details>

            <!-- TEMA 4: PROGRESSO -->
            <details class="acordeao azul">
                <summary>📖 Progresso e PPV</summary>
                <div class="acordeao-content">
                            <div class="abas-botoes">
                                <button onclick="mostrarProgresso('etapas')" class="btn" style="background-color: var(--cor-vivencia);">Etapas e Objetivos</button>
                        <button onclick="mostrarProgresso('ppv')" class="btn" style="background-color: var(--azul-marinho);">Preparar o PPV</button>
                    </div>

                    <!-- Etapas e Objetivos -->
                            <div id="progresso-etapas" class="progresso-conteudo">
                                <h3 class="progresso-titulo">O Sistema de Progresso</h3>
                                <p class="progresso-intro">A progressão do Companheiro mede-se pelo grau de maturação enquanto se transforma no <strong>Homem Novo</strong>, capaz de servir a sua comunidade. O Sistema de Progresso e as Dimensões do Companheirismo fundem-se num percurso de 4 etapas:</p>

                                <div class="progresso-etapas-lista">
                                    <div class="progresso-etapa" style="--passo-cor: #aaa;">
                                        <div class="progresso-etapa-cabecalho">
                                            <img src="{{ '/assets/img/seccoes/caminho.png' | relative_url }}" alt="">
                                            <h4>1. A Rota / O Caminho (Adesão)</h4>
                                </div>
                                        <p>A tua adesão à Comunidade começa quando buscas a Rota. É aqui que inicias o teu Projeto Pessoal de Vida (PPV). Ser Companheiro é traçar a sua própria rota: ter a largueza de vistas para aceitar a mudança, o desapego para viver só do essencial, e a perseverança para não abandonar o rumo aos primeiros ventos contrários.</p>
                            </div>
                            
                                    <div class="progresso-etapa" style="--passo-cor: #cd7f32;">
                                        <div class="progresso-etapa-cabecalho">
                                            <img src="{{ '/assets/img/seccoes/comunidade.png' | relative_url }}" alt="">
                                            <h4>2. A Tripulação / A Comunidade</h4>
                                </div>
                                        <p>Quando a Rota estiver clara, estarás pronto para a Promessa e vinculação à Comunidade (Companhia). Nenhuma travessia se faz sozinho. Navegar ao lado dos outros é aprender a acolher, a ajudar e a deixar-se ajudar — a partilhar tanto a bonança como o mau tempo. A união vivenciada é a tua maior força.</p>
                            </div>
                            
                                    <div class="progresso-etapa" style="--passo-cor: #c0c0c0;">
                                        <div class="progresso-etapa-cabecalho">
                                            <img src="{{ '/assets/img/seccoes/servico.png' | relative_url }}" alt="">
                                            <h4>3. O Serviço</h4>
                                </div>
                                        <p>Em busca do Homem Novo assumirás a missão de Serviço. O Serviço não é um gesto pontual, mas um compromisso vivido em cada instante — nem sempre um ato físico, por vezes só um apoio ou uma partilha. É gratuito, mas quem o presta sai sempre a ganhar. Servir é preparar-se para a missão.</p>
                            </div>
                            
                                    <div class="progresso-etapa" style="--passo-cor: #ffd700;">
                                        <div class="progresso-etapa-cabecalho">
                                            <img src="{{ '/assets/img/seccoes/partida.png' | relative_url }}" alt="">
                                            <h4>4. A Partida</h4>
                                </div>
                                        <p>Fim de um percurso, início de outro. Estás preparado para a vida adulta e para o teu papel na Sociedade. Chegar a porto não é o mais importante — o que conta é a travessia. A Partida simboliza isso mesmo: zarpar não é desistir do escutismo, é levá-lo para novos mares.</p>
                            </div>
                        </div>

                                <div class="progresso-objetivos">
                                    <h4>🎯 Objetivos Educativos</h4>
                                    <p>Os objetivos educativos da IV Secção organizam-se em 6 dimensões — Física, Afetiva, Carácter, Espiritual, Social e Intelectual. Consulta o guia detalhado para o teu percurso:</p>
                            <a href="{{ '/assets/docs/PostersFaceis_IV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn" style="background-color: #28a745;">📥 Download: Guia de Objetivos Educativos</a>
                        </div>
                    </div>

                    <!-- Preparar o PPV -->
                            <div id="progresso-ppv" class="progresso-conteudo" style="display: none;">
                                <h3 class="progresso-titulo">Projeto Pessoal de Vida (PPV)</h3>
                                <p class="vivencia-texto">O PPV é a tua verdadeira "Bússola". Não se trata apenas de preencher um papel, mas sim de fazeres uma reflexão profunda sobre o Homem ou a Mulher que queres ser na sociedade, traçando metas claras para a tua Campanha. Deve estar pronto <strong>antes da tua Promessa de Companheiro</strong>. Eis o que precisas de fazer:</p>

                        <div class="ppv-lista">
                            <div class="ppv-passo" style="--passo-cor: var(--azul-claro);">
                                <h4>1. Escreve a parte aberta</h4>
                                <p>Define os teus objetivos educativos e as ações concretas para os cumprires. Esta parte é para partilhar — com o Chefe de Comunidade e com a restante Comunidade. Pode haver objetivos em comum com outros Companheiros na mesma fase da Campanha; o conjunto destas partes abertas é o que dá corpo à Carta de Comunidade.</p>
                            </div>
                            <div class="ppv-passo" style="--passo-cor: #6f42c1;">
                                <h4>2. Escreve a parte fechada</h4>
                                <p>Aqui ficam os teus objetivos mais íntimos — não são para toda a gente. Partilha-os de preferência só com o Chefe de Comunidade, ou com outro adulto de confiança, que te vá acompanhando e sirva de "fiel da balança" para os objetivos que traçaste.</p>
                            </div>
                            <div class="ppv-passo" style="--passo-cor: #28a745;">
                                <h4>3. Tem em conta estes 7 pontos</h4>
                                <p>A Mística e os valores do Companheirismo · os fins do Companheirismo · o progresso que já fizeste · e o desenvolvimento das tuas qualidades <strong>técnicas, físicas, morais, sociais, intelectuais, profissionais e espirituais</strong>.</p>
                            </div>
                            <div class="ppv-passo" style="--passo-cor: var(--amarelo);">
                                <h4>4. Entrega-o a quem te acompanha</h4>
                                <p>O PPV fica guardado pelo Chefe de Comunidade (ou pelo Chefe de Agrupamento, se ainda não houver Chefe de Comunidade) e por ti próprio.</p>
                            </div>
                            <div class="ppv-passo" style="--passo-cor: var(--cor-vivencia);">
                                <h4>5. Revê-o quando fizer sentido</h4>
                                <p>Podes rever o teu PPV no fim de uma Campanha, de uma Etapa de Progresso, ou noutro momento que faça sentido para ti — a iniciativa de o rever é sempre tua.</p>
                            </div>
                        </div>

                        <div class="ppv-links">
                            <a href="{{ '/assets/docs/PostersFaceis_IV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn" style="background-color: #28a745;">📥 Guia de Objetivos</a>
                            <a href="{{ '/assets/docs/Ficha_Modelo_PPV.docx' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn" style="background-color: #6f42c1;">📄 Ficha Modelo do PPV</a>
                        </div>
                    </div>
                </div>
            </details>

            <!-- TEMA 5: ORAÇÃO -->
            <details class="acordeao verde">
                <summary>🙏 Oração do Companheiro</summary>
                <div class="acordeao-content">
                    <div class="oracao-conteudo">
                        <p>Senhor Jesus,<br>
                        Que Vos apresentastes aos homens<br>
                        Como um caminho vivo,<br>
                        Irradiando a claridade que vem do alto,<br>
                        Dignai-Vos ser o meu Guia e Companheiro,<br>
                        Nos caminhos da vida,<br>
                        Como um dia o Fostes no caminho de Emaús;</p>

                        <p>Iluminai-me com o Vosso Espírito,<br>
                        A fim de saber descobrir<br>
                        O caminho do Vosso melhor serviço;</p>

                        <p>E que, alimentado com a Eucaristia,<br>
                        Verdadeiro Pão de todos os Caminheiros,<br>
                        Apesar das fadigas e das contradições da jornada,<br>
                        Eu possa caminhar alegremente convosco,<br>
                        Em direcção ao Pai e aos irmãos.</p>

                        <p><strong>Ámen.</strong></p>
                    </div>
                </div>
            </details>

            <!-- TEMA 6: PROMESSAS (JOGO) -->
            <details class="acordeao">
                <summary>🏆 Treino para as Promessas</summary>
                <div class="acordeao-content treino-centro">
                    <p class="treino-intro">Testa os teus conhecimentos e prepara-te para a Promessa! Escolhe a secção que queres estudar.</p>
                    
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
                        <p>Concluíste a revisão desta secção de perguntas.</p>
                        <a href="{{ '/em-construcao.html' | relative_url }}" class="btn" style="background-color: var(--azul-marinho);">Faz o Teste 📝</a>
                    </div>
                </div>
            </details>

            <!-- TEMA 7: CELEBRAÇÕES -->
            <details class="acordeao">
                <summary>📜 Celebrações e Cerimoniais</summary>
                <div class="acordeao-content">
                    <p class="vivencia-texto">O guião litúrgico e formal para as grandes celebrações de passagem de etapa e compromissos na Comunidade 88.</p>

                    <div class="quick-links-grid documentos-grelha">
                        <a href="{{ '/assets/docs/promessa_Companheiro.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
                            <span class="quick-link-icon">⚜️</span>
                            <h3>Promessa de Companheiro</h3>
                            <span class="documento-legenda">Abrir PDF 📄</span>
                        </a>
                        <a href="{{ '/assets/docs/investidura_arrais.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
                            <span class="quick-link-icon">⚓</span>
                            <h3>Investidura de Arrais</h3>
                            <span class="documento-legenda">Abrir PDF 📄</span>
                        </a>
                        <a href="{{ '/assets/docs/partida_breve.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
                            <span class="quick-link-icon">🌅</span>
                            <h3>Partida (Versão Curta)</h3>
                            <span class="documento-legenda">Abrir PDF 📄</span>
                        </a>
                        <a href="{{ '/assets/docs/partida_longa.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="quick-link-card">
                            <span class="quick-link-icon">🌅</span>
                            <h3>Partida (Versão Longa)</h3>
                            <span class="documento-legenda">Abrir PDF 📄</span>
                        </a>
                    </div>
                </div>
            </details>

        </div>

    </section>
</div>

<script>
    // Alternar abas do Progresso e PPV
    function mostrarProgresso(aba) {
        if(aba === 'etapas') {
            document.getElementById('progresso-etapas').style.display = 'block';
            document.getElementById('progresso-ppv').style.display = 'none';
        } else {
            document.getElementById('progresso-etapas').style.display = 'none';
            document.getElementById('progresso-ppv').style.display = 'block';
        }
    }

    // Base de dados das perguntas
    const perguntasMovimento = [
        { 
            pergunta: "1. Sabes quando e como surgiu o Escutismo e o CNE?", 
            resposta: "<strong>O nascimento do Escutismo:</strong> Em 1907, Robert Baden-Powell organizou o primeiro acampamento na ilha de Brownsea, Inglaterra. Em 1908 publicou 'Scouting for Boys', lançando o Movimento.<br><br><strong>A chegada a Portugal:</strong> O CNE (Corpo Nacional de Escutas) foi fundado a 27 de maio de 1923 por D. António Mendes Belo. É a maior associação juvenil portuguesa.<br><br><strong>Princípios fundamentais:</strong> Serviço ao próximo, vida ao ar livre, sistema de patrulhas e a Promessa." 
        },
        { 
            pergunta: "2. Sabes como se organiza o teu Agrupamento? E o CNE?", 
            resposta: "<strong>No Agrupamento:</strong> É a unidade base, composta por 4 secções (Lobitos, Exploradores/Moços, Pioneiros/Marinheiros, Caminheiros/Companheiros). É gerido pela Direção de Agrupamento (Chefe, Adjunto, Secretário, Tesoureiro, Assistente).<br><br><strong>Nacionalmente:</strong> Juntas Regionais (distritos), Núcleos (zonas locais) e a Junta Central (órgão máximo)." 
        },
        { 
            pergunta: "3. Conheces a vida de Baden-Powell?", 
            resposta: "Nasceu a 22 de fevereiro de 1857 em Londres. Teve uma carreira militar brilhante (ex: defesa de Mafeking). Em 1907 fundou o Escutismo. Casou com Olave Baden-Powell (Chefe-Guia Mundial). Faleceu a 8 de janeiro de 1941 no Quénia, deixando o sinal de 'Missão Cumprida' e a mensagem: 'Deixem o mundo um pouco melhor do que o encontraram'." 
        },
        { 
            pergunta: "4. Conheces a Lei, os Princípios e a Promessa?", 
            resposta: "<strong>Os 3 Princípios:</strong> Dever para com Deus, para com os outros e para consigo próprio.<br><strong>A Promessa:</strong> O compromisso pessoal e voluntário.<br><strong>A Lei:</strong> 10 artigos (1. A honra inspira confiança; 2. É leal; 3. É útil e pratica a boa ação; 4. É amigo e irmão; 5. É cortês; 6. Protege plantas e animais; 7. É obediente; 8. Tem sempre boa disposição; 9. É económico e trabalhador; 10. É puro)." 
        },
        { 
            pergunta: "5. Já sabes rezar a oração do Escuta?", 
            resposta: "Atribuída a Santo Inácio de Loyola, reflete o serviço desinteressado:<br><em>'Senhor, ensinai-me a ser generoso, a servir-Vos como mereceis, a dar sem conta, a combater sem medo de ser ferido, a trabalhar sem descanso e a não buscar outra recompensa senão a de saber que faço a Vossa santa vontade. Ámen.'</em>" 
        },
        { 
            pergunta: "6. Conheces o livro 'Escutismo para Rapazes'?", 
            resposta: "Escrito por B.P. em 1908. É o guia fundador do Escutismo, baseado na prática, observação e vida na natureza. Lançou o método 'aprender fazendo'." 
        },
        { 
            pergunta: "7. Conheces o uniforme e os distintivos de função dos dirigentes?", 
            resposta: "O uniforme promove igualdade e fraternidade. Os dirigentes usam triângulos nas mangas que os identificam: Verde com Flor de Lis (Chefe de Agrupamento), e triângulos nas cores das secções para os respetivos Chefes de Secção." 
        },
        { 
            pergunta: "8. Conheces a saudação e sabes o que ela significa?", 
            resposta: "Mão direita à altura do ombro. Os 3 dedos estendidos lembram os três deveres da Promessa (Deus, Pátria/Outros, Próprio). O polegar sobre o mindinho significa que o mais forte protege o mais fraco. O aperto de mão é feito com a mão esquerda (mão do coração)." 
        },
        { 
            pergunta: "9. Conheces a fórmula da Promessa e o que significa?", 
            resposta: "<em>'Prometo, pela minha honra e com a graça de Deus, fazer todo o possível por: cumprir os meus deveres para com Deus e para com a minha Pátria; auxiliar o meu próximo em todas as circunstâncias; obedecer à Lei do Escuta.'</em> É o momento mais importante e marca a adesão voluntária aos valores do movimento." 
        },
        { 
            pergunta: "10. Conheces e sabes aplicar os nós e ligações base?", 
            resposta: "Essenciais para segurança e pioneirismo.<br><strong>Nós:</strong> Direito, Escota/Tecelão, Correr, Cabeça de Cotovia, Barqueiro e Pedreiro.<br><strong>Ligações (Amarrações):</strong> Botão em cruz (ângulo reto) e Botão em esquadria (ângulo oblíquo)." 
        },
        { 
            pergunta: "11. Conheces as regras base de campismo, segurança e vivência em campo?", 
            resposta: "Saber montar e conservar uma tenda. Ter regras de segurança estritas com ferramentas de corte (machado, navalha). A prova final da Adesão é participar ativamente num acampamento de fim de semana, colaborando com a equipa em total espírito escutista." 
        }
    ];

    const perguntasSeccao = [
        { pergunta: "1. Organização da IV Secção?", resposta: "A IV Secção do Agrupamento 929 é a Comunidade 88, composta por Companheiros (18-22 anos). É o último passo formativo do CNE." },
        { pergunta: "2. Mística e Simbologia da Secção?", resposta: "Mística: 'Homem Novo' (conversão de São Paulo). Simbologia marítima: Leme (rumo), Barca (desprendimento), Vento/Vela (presença de Deus), Rede (partilha), Pão (comunhão), Evangelho (Boa Nova)." },
        { pergunta: "3. Vivência em Equipa?", resposta: "Integração na Tripulação e na Comunidade 88 há pelo menos 3 meses, com assiduidade e serviço." },
        { pergunta: "4. As quatro etapas do Companheirismo?", resposta: "A Rota / O Caminho (Adesão), A Tripulação / A Comunidade, O Serviço e a Partida." },
        { pergunta: "5. Atividade típica?", resposta: "O Empreendimento: projeto idealizado, preparado e executado inteiramente pelos Companheiros." },
        { pergunta: "6. Conversão de São Paulo?", resposta: "O Patrono: Saulo tornou-se Paulo no caminho de Damasco. Simboliza a mudança radical de vida ao serviço de um ideal." },
        { pergunta: "7. Oração e Cerimonial?", resposta: "A Oração do Companheiro e o compromisso da Promessa são momentos de interioridade e entrega madura ao serviço." },
        { pergunta: "8. Projeto Pessoal de Vida (PPV)?", resposta: "A 'Bússola' do Companheiro: definição de objetivos e metas para a vida profissional, familiar, social e espiritual." }
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