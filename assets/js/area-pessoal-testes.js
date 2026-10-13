/*
 * Área Pessoal — tentativas do Teste das Promessas.
 *
 * Fluxo de confiança: o navegador envia o ID token do Firebase (sessão por
 * magic link) ao Apps Script; o servidor valida o token junto da Google e só
 * devolve as tentativas associadas ao email autenticado no registo do
 * Agrupamento. O Firestore e as suas regras não são alterados.
 */
const ESTADOS = {
  APROVADO: "Aprovado",
  NAO_APROVADO: "Não aprovado",
  NAO_CONCLUIDA: "Não concluída"
};

function elementos() {
  const seccao = document.querySelector("[data-testes-promessas]");
  if (!seccao) return null;
  return {
    seccao,
    endpoint: (seccao.dataset.endpoint || "").trim(),
    estado: seccao.querySelector("[data-testes-estado]"),
    tabela: seccao.querySelector("[data-testes-tabela]"),
    lista: seccao.querySelector("[data-lista-testes]")
  };
}

export function limparTestesPromessas() {
  const e = elementos();
  if (!e) return;
  e.lista.replaceChildren();
  e.tabela.hidden = true;
  e.estado.hidden = false;
  e.estado.textContent = "Os testes aparecerão depois do login.";
}

export async function carregarTestesPromessas(utilizador) {
  const e = elementos();
  if (!e) return;
  limparTestesPromessas();
  if (!e.endpoint) {
    e.estado.textContent = "Os resultados dos testes ainda não estão disponíveis.";
    return;
  }
  e.estado.textContent = "A carregar os testes…";
  const controlador = new AbortController();
  const temporizador = window.setTimeout(() => controlador.abort(), 25000);
  try {
    const idToken = await utilizador.getIdToken();
    const resposta = await fetch(e.endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ acao: "minhasTentativas", idToken }),
      redirect: "follow",
      signal: controlador.signal
    });
    const dados = await resposta.json();
    if (!dados?.ok) {
      console.error("Testes das Promessas:", dados?.erro || "resposta inválida");
      e.estado.textContent = "Não foi possível carregar os testes. Fala com o teu chefe de unidade e indica o código CNE-TESTE-01.";
      return;
    }
    const tentativas = Array.isArray(dados.tentativas) ? dados.tentativas : [];
    if (!tentativas.length) {
      e.estado.textContent = "Ainda não há testes registados.";
      return;
    }
    tentativas.forEach((t) => {
      const linha = document.createElement("tr");
      const valores = [
        `${t.seccao} · ${t.totem}`,
        t.anoEscutista,
        t.percurso,
        `${t.tentativa}.ª`,
        t.dataHora,
        `${ESTADOS[t.resultado] || t.resultado}${t.acertos !== null && t.acertos !== undefined ? ` (${t.acertos}/${t.total})` : ""}`,
        t.codigo || "—"
      ];
      valores.forEach((valor, indice) => {
        const celula = document.createElement("td");
        celula.textContent = String(valor ?? "—");
        if (indice === 6) celula.className = "testes-codigo";
        linha.append(celula);
      });
      e.lista.append(linha);
    });
    e.estado.hidden = true;
    e.tabela.hidden = false;
  } catch (erro) {
    console.error("Testes das Promessas:", erro?.name || "erro");
    e.estado.textContent = "Não foi possível carregar os testes. Tenta novamente mais tarde (código CNE-TESTE-02).";
  } finally {
    window.clearTimeout(temporizador);
  }
}
