import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  isSignInWithEmailLink,
  onAuthStateChanged,
  signInWithEmailLink,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const ENDPOINT_LINK_ACESSO = "https://script.google.com/macros/s/AKfycbx0MLn9Oz-_mU5N57n65u4WBHohVdplhjMWYk3z3nVUFx6J2t7hiQi-ReVe1gm0SLf8/exec";

const firebaseConfig = {
  apiKey: "AIzaSyDDSXcn5E1R7839q4gnXhStk1doaBy9YSI",
  authDomain: "cne-929-area-pessoal.firebaseapp.com",
  projectId: "cne-929-area-pessoal",
  storageBucket: "cne-929-area-pessoal.firebasestorage.app",
  messagingSenderId: "994483937350",
  appId: "1:994483937350:web:12d36955acd1a3bb1dea47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const emailStorageKey = "cne929-email-link";

function codigoSuporte(erro, codigos, fallback) {
  return codigos[erro?.code] || fallback;
}

function mensagemSuporte(resumo, codigo) {
  return `${resumo} Fala com o teu chefe de unidade e indica-lhe o código: ${codigo}.`;
}

const formPedido = document.querySelector("#form-pedido-magic-link");
if (formPedido) {
  const campoEmail = formPedido.querySelector("[name='email']");
  const mensagem = document.querySelector("#estado-pedido-magic-link");
  const botao = formPedido.querySelector("button[type='submit']");

  formPedido.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const email = campoEmail.value.trim().toLowerCase();
    const continueUrl = new URL(formPedido.dataset.urlContinuacao, window.location.origin).href;

    if (ENDPOINT_LINK_ACESSO === "COLAR_AQUI_O_URL_DO_APPS_SCRIPT") {
      console.error("O endpoint de acesso não está configurado.");
      mensagem.hidden = false;
      mensagem.textContent = "O serviço de acesso ainda não está configurado.";
      return;
    }

    botao.disabled = true;
    mensagem.hidden = false;
    mensagem.textContent = "A enviar o pedido…";
    const controlador = new AbortController();
    const temporizador = window.setTimeout(() => controlador.abort(), 20000);

    try {
      const respostaHttp = await fetch(ENDPOINT_LINK_ACESSO, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email, continueUrl }),
        redirect: "follow",
        signal: controlador.signal
      });

      let resposta;
      try {
        resposta = await respostaHttp.json();
      } catch (erro) {
        console.error("Resposta inválida do serviço de acesso:", erro);
        throw new Error("Resposta JSON inválida");
      }

      if (!respostaHttp.ok || resposta?.ok !== true) {
        console.error("O serviço de acesso recusou o pedido:", resposta?.erro || respostaHttp.status);
        if (resposta?.erro === "formato") {
          mensagem.textContent = "Confirma o endereço de e-mail e tenta novamente.";
        } else if (resposta?.erro === "limite") {
          mensagem.textContent = "Já foi pedido um link há instantes. Aguarda um minuto e tenta novamente.";
        } else {
          mensagem.textContent = "Não foi possível enviar o link. Tenta novamente dentro de alguns minutos.";
        }
        return;
      }

      window.localStorage.setItem(emailStorageKey, email);
      mensagem.textContent = "Se o endereço puder receber acesso, receberás um link para continuar. Abre-o neste navegador.";
    } catch (erro) {
      console.error("Falha ao pedir o link de acesso:", erro);
      mensagem.textContent = "Não foi possível enviar o link. Tenta novamente dentro de alguns minutos.";
    } finally {
      window.clearTimeout(temporizador);
      botao.disabled = false;
    }
  });
}

const estadoSessao = document.querySelector("#estado-sessao-area-pessoal");
if (estadoSessao) {
  const formularioConclusao = document.querySelector("#form-completar-magic-link");
  const campoConclusaoEmail = formularioConclusao.querySelector("[name='email']");
  const mensagemSessao = estadoSessao.querySelector("[data-mensagem-sessao]");
  const botaoSair = estadoSessao.querySelector("[data-terminar-sessao]");
  const avisoPerfil = document.querySelector("#aviso-perfil-privado");
  const separadores = document.querySelector(".area-pessoal-tabs");
  const painelPercurso = document.querySelector("#painel-percurso");
  const painelDados = document.querySelector("#painel-dados");
  const dataAtualizacao = document.querySelector("#data-atualizacao-perfil");

  function mostrarConteudoAutenticado(visivel) {
    const linkPendente = isSignInWithEmailLink(auth, window.location.href);
    const temSessao = Boolean(auth.currentUser);
    avisoPerfil.hidden = visivel || linkPendente || temSessao;
    dataAtualizacao.hidden = !visivel;
    estadoSessao.hidden = !visivel && !linkPendente && !temSessao;
    separadores.hidden = !visivel;
    const dadosSelecionados = document.querySelector("#separador-dados").getAttribute("aria-selected") === "true";
    painelPercurso.hidden = !visivel || dadosSelecionados;
    painelDados.hidden = !visivel || !dadosSelecionados;
    formularioConclusao.hidden = visivel || !linkPendente;
    botaoSair.hidden = !temSessao;
  }

  function ordenarEncarregados(perfil) {
    const campos = ["nome", "relacao", "telemovel", "email"];
    const encarregados = [1, 2].map((numero, indice) => {
      const dados = Object.fromEntries(campos.map((campo) => [
        campo,
        perfil[`encarregado${numero}_${campo}`]
      ]));
      const relacao = String(dados.relacao || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLocaleLowerCase("pt-PT");
      const prioridade = relacao === "mae" ? 0 : relacao === "pai" ? 1 : 2;
      return { dados, indice, prioridade };
    }).sort((a, b) => a.prioridade - b.prioridade || a.indice - b.indice);

    const perfilOrdenado = { ...perfil };
    encarregados.forEach(({ dados }, indice) => {
      campos.forEach((campo) => {
        perfilOrdenado[`encarregado${indice + 1}_${campo}`] = dados[campo];
      });
    });
    return perfilOrdenado;
  }

  function preencherPerfil(perfil) {
    const perfilOrdenado = ordenarEncarregados(perfil);
    document.querySelectorAll("[data-dado]").forEach((elemento) => {
      const valor = perfilOrdenado[elemento.dataset.dado];
      elemento.textContent = valor === undefined || valor === null || valor === "" ? "—" : String(valor);
    });

    document.querySelectorAll("[data-campo-perfil]").forEach((elemento) => {
      const valor = perfilOrdenado[elemento.dataset.campoPerfil];
      elemento.textContent = valor === undefined || valor === null || valor === "" ? "—" : String(valor);
    });

    const rotuloGrupo = document.querySelector("[data-rotulo-grupo]");
    const valorGrupo = document.querySelector("[data-grupo-elemento]");
    const seccao = String(perfil["Secção"] || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-PT");
    let rotulo = "Grupo / equipa";
    let camposGrupo = ["Grupo", "Equipa"];
    if (seccao.includes("alcateia") || seccao.includes("lobito")) {
      rotulo = "Bando";
      camposGrupo = ["Bando"];
    } else if (seccao.includes("flotilha") || seccao.includes("moco")) {
      rotulo = "Tripulação";
      camposGrupo = ["Tripulação", "Tripulacao"];
    }
    const grupo = camposGrupo
      .map((campo) => perfil[campo])
      .find((valor) => valor !== undefined && valor !== null && String(valor).trim() !== "");
    rotuloGrupo.textContent = rotulo;
    valorGrupo.textContent = grupo === undefined ? "—" : String(grupo);

    const listaCondecoracoes = document.querySelector("[data-lista-condecoracoes]");
    listaCondecoracoes.replaceChildren();
    if (!Array.isArray(perfil.condecoracoes) || perfil.condecoracoes.length === 0) {
      const linha = document.createElement("tr");
      const vazio = document.createElement("td");
      vazio.className = "condecoracoes-vazio";
      vazio.colSpan = 3;
      vazio.textContent = "Sem condecorações registadas.";
      linha.append(vazio);
      listaCondecoracoes.append(linha);
    } else {
      perfil.condecoracoes.forEach((condecoracao) => {
        const linha = document.createElement("tr");
        const nome = document.createElement("td");
        nome.textContent = String(condecoracao.nome || "—");
        const osa = document.createElement("td");
        osa.textContent = String(condecoracao.osa || "—");
        const data = document.createElement("td");
        const dataTexto = String(condecoracao.data || "");
        if (dataTexto && /^\d{4}-\d{2}-\d{2}$/.test(dataTexto)) {
          const dataElemento = document.createElement("time");
          dataElemento.dateTime = dataTexto;
          dataElemento.textContent = dataTexto;
          data.append(dataElemento);
        } else {
          data.textContent = dataTexto || "—";
        }
        linha.append(nome, osa, data);
        listaCondecoracoes.append(linha);
      });
    }

    const listaAtividades = document.querySelector("[data-lista-atividades]");
    listaAtividades.replaceChildren();
    if (!Array.isArray(perfil.atividades) || perfil.atividades.length === 0) {
      const vazio = document.createElement("p");
      vazio.className = "percurso-vazio";
      vazio.textContent = "Sem atividades registadas.";
      listaAtividades.append(vazio);
      return;
    }

    const atividadesPorAno = new Map();
    perfil.atividades.forEach((atividade) => {
      const data = String(atividade.data || "");
      const ano = data.match(/\b(?:19|20)\d{2}\b/)?.[0] || "Sem data";
      if (!atividadesPorAno.has(ano)) atividadesPorAno.set(ano, []);
      atividadesPorAno.get(ano).push(atividade);
    });

    const anos = Array.from(atividadesPorAno.keys()).sort((a, b) => {
      if (a === "Sem data") return 1;
      if (b === "Sem data") return -1;
      return Number(b) - Number(a);
    });

    anos.forEach((ano, indice) => {
      const grupo = document.createElement("details");
      grupo.className = "timeline-item percurso-ano";
      grupo.open = indice === 0;

      const cabecalho = document.createElement("summary");
      const rotuloAno = document.createElement("time");
      if (ano !== "Sem data") rotuloAno.dateTime = ano;
      rotuloAno.textContent = ano;
      cabecalho.append(rotuloAno);

      const total = atividadesPorAno.get(ano).length;
      const quantidade = document.createElement("span");
      quantidade.className = "percurso-ano-total";
      quantidade.textContent = `${total} ${total === 1 ? "atividade" : "atividades"}`;
      cabecalho.append(quantidade);
      grupo.append(cabecalho);

      const lista = document.createElement("ol");
      lista.className = "percurso-atividades";
      atividadesPorAno.get(ano).forEach((atividade) => {
        const item = document.createElement("li");
        item.className = "percurso-atividade";
        const data = String(atividade.data || "");
        if (data) {
          const dataElemento = document.createElement("time");
          if (/^\d{4}-\d{2}-\d{2}/.test(data)) dataElemento.dateTime = data;
          dataElemento.textContent = data;
          item.append(dataElemento);
        }

        const titulo = document.createElement("h3");
        titulo.textContent = String(atividade.titulo || "Atividade");
        item.append(titulo);
        if (atividade.descricao) {
          const descricao = document.createElement("p");
          descricao.textContent = String(atividade.descricao);
          item.append(descricao);
        }
        lista.append(item);
      });
      grupo.append(lista);
      listaAtividades.append(grupo);
    });
  }

  function limparPerfil() {
    document.querySelectorAll("[data-dado], [data-campo-perfil]").forEach((elemento) => {
      elemento.textContent = "";
    });

    const listaCondecoracoes = document.querySelector("[data-lista-condecoracoes]");
    listaCondecoracoes.replaceChildren();
    const linhaCondecoracoesVazia = document.createElement("tr");
    const mensagemCondecoracoesVazia = document.createElement("td");
    mensagemCondecoracoesVazia.className = "condecoracoes-vazio";
    mensagemCondecoracoesVazia.colSpan = 3;
    mensagemCondecoracoesVazia.textContent = "As condecorações aparecerão depois do login.";
    linhaCondecoracoesVazia.append(mensagemCondecoracoesVazia);
    listaCondecoracoes.append(linhaCondecoracoesVazia);

    const listaAtividades = document.querySelector("[data-lista-atividades]");
    listaAtividades.replaceChildren();
    const vazio = document.createElement("p");
    vazio.className = "percurso-vazio";
    vazio.textContent = "As atividades aparecerão depois do login.";
    listaAtividades.append(vazio);
  }

  formularioConclusao.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const email = campoConclusaoEmail.value.trim().toLowerCase();
    const botao = formularioConclusao.querySelector("button[type='submit']");
    botao.disabled = true;
    mensagemSessao.textContent = "A confirmar o link…";

    try {
      await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem(emailStorageKey);
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (erro) {
      console.error("Falha ao confirmar o link de acesso:", erro?.code || "unknown");
      const codigo = codigoSuporte(erro, {
        "auth/expired-action-code": "CNE-MAGIC-07",
        "auth/invalid-action-code": "CNE-MAGIC-07",
        "auth/invalid-email": "CNE-MAGIC-08",
        "auth/network-request-failed": "CNE-MAGIC-09"
      }, "CNE-MAGIC-98");
      mensagemSessao.textContent = mensagemSuporte("Não foi possível confirmar o link.", codigo);
      botao.disabled = false;
    }
  });

  if (isSignInWithEmailLink(auth, window.location.href)) {
    avisoPerfil.hidden = true;
    estadoSessao.hidden = false;
    campoConclusaoEmail.value = window.localStorage.getItem(emailStorageKey) || "";
    formularioConclusao.hidden = false;
    mensagemSessao.textContent = campoConclusaoEmail.value
      ? "Confirma o endereço para concluir a entrada."
      : "Abre o link no mesmo navegador ou indica novamente o endereço que o recebeu.";
  } else {
    avisoPerfil.hidden = false;
    estadoSessao.hidden = true;
    formularioConclusao.hidden = true;
  }

  botaoSair.addEventListener("click", async () => {
    try {
      await signOut(auth);
      mostrarConteudoAutenticado(false);
      mensagemSessao.textContent = "Sessão terminada.";
    } catch (erro) {
      console.error("Falha ao terminar a sessão:", erro?.code || "unknown");
      mensagemSessao.textContent = mensagemSuporte("Não foi possível terminar a sessão.", "CNE-SESSAO-01");
    }
  });

  onAuthStateChanged(auth, async (utilizador) => {
    mostrarConteudoAutenticado(false);
    limparPerfil();

    if (!utilizador) {
      mensagemSessao.textContent = isSignInWithEmailLink(auth, window.location.href)
        ? mensagemSessao.textContent
        : "Inicia sessão para consultar o teu perfil.";
      return;
    }

    if (!utilizador.email || !utilizador.emailVerified) {
      mensagemSessao.textContent = mensagemSuporte("Esta sessão não tem um endereço de email confirmado.", "CNE-MAGIC-10");
      return;
    }

    mensagemSessao.textContent = "A confirmar a autorização do perfil…";
    try {
      const perfilRef = doc(database, "perfis", utilizador.uid);
      const perfilSnapshot = await getDoc(perfilRef);
      if (!perfilSnapshot.exists()) {
        mensagemSessao.textContent = mensagemSuporte("Este endereço ainda não tem um perfil autorizado.", "CNE-PERFIL-01");
        return;
      }
      preencherPerfil(perfilSnapshot.data());
      mensagemSessao.textContent = `Sessão iniciada como ${utilizador.email}.`;
      mostrarConteudoAutenticado(true);
    } catch (erro) {
      console.error("Falha ao carregar o perfil:", erro?.code || "unknown");
      const codigo = codigoSuporte(erro, {
        "permission-denied": "CNE-PERFIL-02",
        "unavailable": "CNE-PERFIL-03",
        "unauthenticated": "CNE-PERFIL-04"
      }, "CNE-PERFIL-99");
      mensagemSessao.textContent = mensagemSuporte("Não foi possível carregar o perfil.", codigo);
    }
  });
}