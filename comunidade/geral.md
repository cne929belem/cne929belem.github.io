---
layout: default
title: Geral | IV - Comunidade
main_class: main-content
---

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%; border-top: 8px solid #CE1126;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
            <img src="{{ '/assets/img/seccoes/4_companheiros.png' | relative_url }}" alt="Companheiros" style="height: 60px;">
            <h1 style="margin: 0; color: #CE1126;">IV - Comunidade</h1>
        </div>

        <p>Bem-vindo à Comunidade do Agrupamento 929 - Belém! A nossa secção é formada por jovens dos 18 aos 22 anos, os Companheiros, cuja divisa é <strong>"Servir"</strong>.</p>

        <!-- TEMA 1: EQUIPA DE ANIMAÇÃO -->
        <div style="margin-top: 30px;">
            <h3 class="section-title vermelho">🏕️ A nossa Equipa de Animação</h3>
            <div style="background: rgba(206, 17, 38, 0.1); border-left: 5px solid #CE1126; border-radius: 6px; padding: 15px; display: flex; align-items: center; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <div style="background: white; border: 1px solid #ddd; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; background-color: #f0f0f0; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <img src="{{ '/assets/img/equipa/ricardo-isaias.jpg' | relative_url }}" alt="Ricardo Isaías" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; color: #666; text-transform: uppercase;">Chefe de Unidade</div>
                            <div style="font-weight: bold; color: var(--azul-marinho);">Ricardo Isaías</div>
                        </div>
                    </div>
                    <div style="background: white; border: 1px solid #ddd; border-radius: 6px; padding: 10px 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; background-color: #f0f0f0; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <img src="{{ '/assets/img/equipa/ruben-rodrigues.jpg' | relative_url }}" alt="Ruben Rodrigues" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div>
                            <div style="font-size: 0.75rem; color: #666; text-transform: uppercase;">Dirigente</div>
                            <div style="font-weight: bold; color: var(--azul-marinho);">Ruben Rodrigues</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TEMA 2: INFORMAÇÃO DA PÁGINA GERAL ESCUTISTA -->
        <div style="margin-top: 40px;">
            <h3 class="section-title vermelho">🌐 A IV Secção no CNE</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">Para além do que aqui partilhamos sobre a nossa Comunidade marítima, o Corpo Nacional de Escutas tem uma página nacional dedicada à IV Secção (Caminheiros/Companheiros), com mais informação sobre o método, o percurso e o Sistema de Progresso.</p>
            <a href="https://escutismo.pt/caminheiros-18-aos-22-anos/" target="_blank" rel="noopener noreferrer" class="quick-link-card" style="max-width: 100%;">
                <span class="quick-link-icon">🧭</span>
                <h3>Página Oficial da IV Secção — CNE</h3>
                <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">escutismo.pt ↗️️</span>
            </a>
        </div>

        <!-- TEMA 3: UNIFORME -->
        <div style="margin-top: 40px;">
            <h3 class="section-title vermelho">👕 O nosso Uniforme e Insígnias</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">Clica nos cartões abaixo para consultares os documentos oficiais detalhados em formato PDF.</p>

            <div class="quick-links-grid" style="margin-top: 20px;">
                <a href="{{ '/assets/docs/uniforme-maritimo_v2024-4.pdf' | relative_url }}" target="_blank" class="quick-link-card">
                    <span class="quick-link-icon">👔</span>
                    <h3>Uniforme Marítimo</h3>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
                <a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" class="quick-link-card">
                    <span class="quick-link-icon">⚓</span>
                    <h3>Insígnia Marítima</h3>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
            </div>
        </div>

<!-- TEMA 4: REGISTO DE NOITES E HORAS DE MAR -->
        <div style="margin-top: 40px;">
            <h3 class="section-title vermelho">🏕️⛵ Registo de Noites e Horas de Mar</h3>
            <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px;">
                <p style="font-size: 0.9rem; color: #666;">Insere o teu número de telemóvel para consultares as tuas noites de campo e horas de mar validadas pela Chefia.</p>

                <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
                    <input type="text" id="phoneInput" placeholder="Ex: 912345678" style="padding: 10px 15px; border: 1px solid #ccc; border-radius: 6px; flex: 1; min-width: 200px; font-size: 1rem;">
                    <button onclick="procurarNoites()" style="background-color: #CE1126; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem;">Pesquisar</button>
                </div>

                <!-- Espaço onde o resultado vai aparecer -->
                <div id="resultadoNoites"></div>

                <p style="text-align: right; font-size: 0.7rem; color: #999; margin-top: 15px; font-style: italic;">
                    Última atualização em 13/08/2026
                </p>
            </div>
        </div>

    </section>
</div>

<!-- LÓGICA DO MOTOR DE PESQUISA -->
<script>
    // O Jekyll injeta a base de dados gerida pelo Decap CMS automaticamente aqui:
    const listaElementos = {{ site.data.registos.elementos | jsonify }} || [];
    
    // Transformar a lista num dicionário para facilitar a pesquisa pelo número
    const baseDeDados = {};
    listaElementos.forEach(el => {
        baseDeDados[el.telefone] = el;
    });

    function procurarNoites() {
        const input = document.getElementById("phoneInput").value.trim();
        const resultadoDiv = document.getElementById("resultadoNoites");

        if (baseDeDados[input]) {
            const dados = baseDeDados[input];
            
            // Lógica das Insígnias de Campo
            let msgNoites = "";
            if (dados.noites >= 100) msgNoites = "<br><small style='color: #28a745; font-weight: bold;'>🏅 Atingiste as 100 noites! Pede já a tua insígnia ao teu Chefe de Unidade.</small>";
            else if (dados.noites >= 50) msgNoites = "<br><small style='color: #28a745; font-weight: bold;'>🏅 Atingiste as 50 noites! Pede já a tua insígnia ao teu Chefe de Unidade.</small>";
            else if (dados.noites >= 25) msgNoites = "<br><small style='color: #28a745; font-weight: bold;'>🏅 Atingiste as 25 noites! Pede já a tua insígnia ao teu Chefe de Unidade.</small>";

            // Lógica das Insígnias de Mar
            let msgHoras = "";
            if (dados.horas >= 500) msgHoras = "<br><small style='color: #0056b3; font-weight: bold;'>🏅 Atingiste as 500 horas! Pede já a tua insígnia ao teu Chefe de Unidade.</small>";
            else if (dados.horas >= 250) msgHoras = "<br><small style='color: #0056b3; font-weight: bold;'>🏅 Atingiste as 250 horas! Pede já a tua insígnia ao teu Chefe de Unidade.</small>";
            else if (dados.horas >= 100) msgHoras = "<br><small style='color: #0056b3; font-weight: bold;'>🏅 Atingiste as 100 horas! Pede já a tua insígnia ao teu Chefe de Unidade.</small>";

            resultadoDiv.innerHTML = `
                <div style="background: white; padding: 20px; border-radius: 8px; border-left: 5px solid #CE1126; margin-top: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 15px 0; color: var(--azul-marinho); font-size: 1.2rem;">Olá ${dados.seccao} ${dados.toten}, tens:</h4>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="font-size: 1.05rem; background: #fdfdfd; padding: 12px; border-radius: 6px; border: 1px solid #eee;">
                            🏕️ <strong>${dados.noites} noites de campo</strong>
                            ${msgNoites}
                        </div>
                        <div style="font-size: 1.05rem; background: #fdfdfd; padding: 12px; border-radius: 6px; border: 1px solid #eee;">
                            ⛵ <strong>${dados.horas} horas de mar</strong>
                            ${msgHoras}
                        </div>
                    </div>
                </div>
            `;
        } else if (input === "") {
            resultadoDiv.innerHTML = `<div style="color: #856404; background: #fff3cd; padding: 10px; border-radius: 6px; margin-top: 15px;">Por favor, escreve o teu número de telemóvel.</div>`;
        } else {
            resultadoDiv.innerHTML = `<div style="color: #721c24; background: #f8d7da; padding: 10px; border-radius: 6px; margin-top: 15px;">Número não encontrado na nossa base de dados. Fala com a tua Equipa de Animação.</div>`;
        }
    }
</script>