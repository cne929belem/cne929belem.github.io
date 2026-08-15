---
layout: default
title: Registos | Escuteiro
main_class: main-content
---
<!--
  Página "Registos" — o espaço pessoal do escuteiro para consultar o seu
  percurso no Agrupamento. Começa com o Registo de Noites de Campo e
  Horas de Mar, mas está pensada para crescer — mais registos vão ser
  acrescentados aqui no futuro, cada um como o seu próprio bloco.

  Pesquisa por NIN ou Tótem (um só campo, aceita qualquer um dos dois).
-->
<div class="content-wrapper" style="justify-content: center; align-items: center; flex-direction: column;">
    <section class="card" style="max-width: 800px; width: 100%;">
        <span style="font-size: 3rem; display: block; margin-bottom: 10px;">🗂️</span>
        <h1>Os Teus Registos</h1>
        <p>Este é o teu espaço pessoal para consultares o teu percurso no Agrupamento — os dados aqui são validados pela Chefia, e vão crescendo ao longo da tua caminhada escutista.</p>

        <!-- REGISTO DE NOITES DE CAMPO E HORAS DE MAR -->
        <div style="margin-top: 30px;">
            <h3 class="section-title">🏕️⛵ Registo de Noites de Campo e Horas de Mar</h3>
            <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px;">
                <p style="font-size: 0.9rem; color: #666;">Insere o teu NIN ou o teu Tótem para consultares as tuas noites de campo e horas de mar validadas pela Chefia.</p>

                <form onsubmit="event.preventDefault(); procurarNoites(); return false;" style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
                    <input type="text" id="buscaInput" placeholder="O teu NIN ou o teu Tótem" style="padding: 10px 15px; border: 1px solid #ccc; border-radius: 6px; flex: 1 1 250px; min-width: 0; font-size: 1rem;">
                    <button type="submit" style="background-color: var(--azul-marinho); color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 1rem;">Pesquisar</button>
                </form>

                <!-- Espaço onde o resultado vai aparecer -->
                <div id="resultadoNoites"></div>

                <p style="text-align: right; font-size: 0.7rem; color: #999; margin-top: 15px; font-style: italic;">
                    Última atualização em 15/08/2026
                </p>
            </div>
        </div>

        <!-- ESPAÇO PARA FUTUROS REGISTOS -->
        <div style="margin-top: 30px;">
            <div class="info-block" style="text-align: center; color: #888;">
                <p style="margin: 0;">🔜 Mais registos pessoais vão ser acrescentados aqui — como o teu percurso de progresso, provas e outras conquistas.</p>
            </div>
        </div>

    </section>
</div>

<!-- LÓGICA DO MOTOR DE PESQUISA -->
<script>
    // O Jekyll injeta a base de dados gerida pelo Decap CMS automaticamente aqui:
    const listaElementos = {{ site.data.registos.elementos | jsonify }} || [];

    function procurarNoites() {
        const busca = document.getElementById("buscaInput").value.trim();
        const resultadoDiv = document.getElementById("resultadoNoites");

        if (busca === "") {
            resultadoDiv.innerHTML = `<div style="color: #856404; background: #fff3cd; padding: 10px; border-radius: 6px; margin-top: 15px;">Por favor, insere o teu NIN ou o teu Tótem.</div>`;
            return;
        }

        // Aceita tanto o NIN como o Tótem — o que for escrito
        const buscaMinuscula = busca.toLowerCase();
        const dados = listaElementos.find(el =>
            el.nin === busca || (el.toten && el.toten.trim().toLowerCase() === buscaMinuscula)
        );

        if (dados) {
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
                <div style="background: white; padding: 20px; border-radius: 8px; border-left: 5px solid var(--azul-marinho); margin-top: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 4px 0; color: var(--azul-marinho); font-size: 1.2rem;">Olá, ${dados.toten}!</h4>
                    <p style="margin: 0 0 15px 0; font-size: 0.85rem; color: #666;">${dados.categoria} · ${dados.seccao}</p>
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
        } else {
            resultadoDiv.innerHTML = `<div style="color: #721c24; background: #f8d7da; padding: 10px; border-radius: 6px; margin-top: 15px;">NIN ou Tótem não encontrados. Fala com a tua Equipa de Animação.</div>`;
        }
    }
</script>
