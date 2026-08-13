---
layout: default
title: Informações | IV - Comunidade
main_class: main-content
---

<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%; border-top: 8px solid #CE1126;">
        <h1 style="color: #CE1126; margin-bottom: 5px;">Informações e Uniforme</h1>
        <p>Dados úteis e registos da IV Secção.</p>

        <!-- MOTOR DE NOITES DE CAMPO E MAR -->
        <div style="margin-top: 30px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px;">
            <h3 style="color: var(--azul-marinho); margin-top: 0; display: flex; align-items: center; gap: 10px;">
                <span>⛺⛵</span> Registo de Noites e Horas de Mar
            </h3>
            <p style="font-size: 0.9rem; color: #666;">Insere o teu número de telemóvel para consultares as tuas noites de campo e horas de mar validadas pela Chefia.</p>
            
            <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
                <input type="text" id="phoneInput" placeholder="Ex: 912345678" style="padding: 10px 15px; border: 1px solid #ccc; border-radius: 6px; flex: 1; min-width: 200px; font-size: 1rem;">
                <button onclick="procurarNoites()" style="background-color: #CE1126; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem;">Pesquisar</button>
            </div>
            
            <!-- Espaço onde o resultado vai aparecer -->
            <div id="resultadoNoites"></div>
            
            <p style="text-align: right; font-size: 0.7rem; color: #999; margin-top: 15px; font-style: italic;">
                Última atualização de dados: 13/08/2026
            </p>
        </div>

        <!-- UNIFORME E INSÍGNIAS -->
        <div style="margin-top: 40px;">
            <h3 style="color: #CE1126; border-bottom: 2px solid #eee; padding-bottom: 8px;">👕 O nosso Uniforme e Insígnias</h3>
            <p style="font-size: 0.95rem; line-height: 1.6;">Clica nos cartões abaixo para consultares os documentos oficiais detalhados em formato PDF.</p>
            
            <div style="display: flex; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
                <!-- Link para o Uniforme -->
                <a href="{{ '/assets/docs/uniforme-maritimo_v2024-4.pdf' | relative_url }}" target="_blank" style="flex: 1; min-width: 250px; background: #fff; padding: 25px 15px; border: 1px solid #eee; border-radius: 8px; text-align: center; text-decoration: none; display: block; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    <span style="font-size: 3rem; display: block; margin-bottom: 10px;">👔</span>
                    <h4 style="margin: 0; color: var(--azul-marinho);">Uniforme Marítimo</h4>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
                
                <!-- Link para a Insígnia -->
                <a href="{{ '/assets/docs/insignia_maritimo-1.pdf' | relative_url }}" target="_blank" style="flex: 1; min-width: 250px; background: #fff; padding: 25px 15px; border: 1px solid #eee; border-radius: 8px; text-align: center; text-decoration: none; display: block; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    <span style="font-size: 3rem; display: block; margin-bottom: 10px;">⚓</span>
                    <h4 style="margin: 0; color: var(--azul-marinho);">Insígnia Marítima</h4>
                    <span style="font-size: 0.75rem; color: #888; margin-top: 5px; display: block;">Abrir PDF 📄</span>
                </a>
            </div>
        </div>

    </section>
</div>

<!-- LÓGICA DO MOTOR DE PESQUISA -->
<script>
    // Esta é a "base de dados" que podes atualizar no CMS ou no código
    const baseDeDados = {
        "912345678": { nome: "João Escuteiro", noitesCampo: 12, horasMar: 15 },
        "960000000": { nome: "Maria Companheira", noitesCampo: 25, horasMar: 40 }
    };

    function procurarNoites() {
        const input = document.getElementById("phoneInput").value.trim();
        const resultadoDiv = document.getElementById("resultadoNoites");
        
        if (baseDeDados[input]) {
            const dados = baseDeDados[input];
            resultadoDiv.innerHTML = `
                <div style="background: white; padding: 20px; border-radius: 8px; border-left: 5px solid #CE1126; margin-top: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: var(--azul-marinho);">Olá, ${dados.nome}!</h4>
                    <div style="display: flex; gap: 20px;">
                        <div style="font-size: 1.1rem;">⛺ <strong>Campo:</strong> ${dados.noitesCampo} noites</div>
                        <div style="font-size: 1.1rem;">⛵ <strong>Mar:</strong> ${dados.horasMar} horas</div>
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