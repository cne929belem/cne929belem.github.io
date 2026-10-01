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
const EMAIL_SECRETARIA_PEDIDOS = "secretaria929.grupo@escutismo.pt";

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

function converterData(valor) {
  if (!valor) return null;
  if (typeof valor.toDate === "function") return converterData(valor.toDate());
  if (typeof valor.seconds === "number") return new Date(valor.seconds * 1000);
  if (valor instanceof Date) return Number.isNaN(valor.getTime()) ? null : valor;

  const texto = String(valor).trim();
  let correspondencia = texto.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (correspondencia) {
    const [, ano, mes, dia] = correspondencia;
    const data = new Date(Date.UTC(Number(ano), Number(mes) - 1, Number(dia)));
    return data.getUTCFullYear() === Number(ano) && data.getUTCMonth() === Number(mes) - 1 && data.getUTCDate() === Number(dia) ? data : null;
  }

  correspondencia = texto.match(/^(\d{1,2})[/. -](\d{1,2})[/. -](\d{4})$/);
  if (correspondencia) {
    const [, dia, mes, ano] = correspondencia;
    const data = new Date(Date.UTC(Number(ano), Number(mes) - 1, Number(dia)));
    return data.getUTCFullYear() === Number(ano) && data.getUTCMonth() === Number(mes) - 1 && data.getUTCDate() === Number(dia) ? data : null;
  }

  const data = new Date(texto);
  return Number.isNaN(data.getTime()) ? null : data;
}

function formatarData(valor) {
  const data = converterData(valor);
  return data ? data.toLocaleDateString("pt-PT", { timeZone: "UTC" }) : String(valor || "");
}

function preencherAtividades(atividades, mensagemVazia = "Sem atividades registadas.") {
  const listaAtividades = document.querySelector("[data-lista-atividades]");
  listaAtividades.replaceChildren();

  if (!Array.isArray(atividades) || atividades.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "percurso-vazio";
    vazio.textContent = mensagemVazia;
    listaAtividades.append(vazio);
    return;
  }

  const grupos = new Map();
  atividades.forEach((atividade) => {
    const data = converterData(atividade.data);
    const anoInicio = data ? data.getUTCFullYear() - (data.getUTCMonth() < 9 ? 1 : 0) : null;
    const chave = anoInicio === null ? "sem-data" : String(anoInicio);
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave).push({ atividade, data });
  });

  const gruposOrdenados = [...grupos.entries()].sort(([anoA], [anoB]) => {
    if (anoA === "sem-data") return 1;
    if (anoB === "sem-data") return -1;
    return Number(anoB) - Number(anoA);
  });

  gruposOrdenados.forEach(([anoInicio, itens], indice) => {
    const grupo = document.createElement("details");
    grupo.className = "percurso-ano";
    grupo.open = indice === 0;

    const resumo = document.createElement("summary");
    resumo.textContent = anoInicio === "sem-data"
      ? `Sem data (${itens.length})`
      : `Ano escutista ${anoInicio}-${Number(anoInicio) + 1} (${itens.length})`;
    grupo.append(resumo);

    const linhaTempo = document.createElement("ol");
    linhaTempo.className = "percurso-timeline";
    itens.sort((itemA, itemB) => (itemB.data?.getTime() || 0) - (itemA.data?.getTime() || 0));
    itens.forEach(({ atividade, data }) => {
      const item = document.createElement("li");
      if (atividade.data) {
        const elementoData = document.createElement("time");
        if (data) elementoData.dateTime = data.toISOString().slice(0, 10);
        elementoData.textContent = formatarData(atividade.data);
        item.append(elementoData);
      }
      const titulo = document.createElement("strong");
      titulo.textContent = String(atividade.titulo || "Atividade");
      item.append(titulo);
      if (atividade.descricao) {
        const descricao = document.createElement("span");
        descricao.textContent = String(atividade.descricao);
        item.append(descricao);
      }
      linhaTempo.append(item);
    });
    grupo.append(linhaTempo);
    listaAtividades.append(grupo);
  });
}

function obterEtapa(perfil, secao, numero) {
  const dadosEtapas = perfil.etapas || perfil.Etapas || {};
  const nomeSecao = secao[0].toUpperCase() + secao.slice(1);
  const dadosSecao = dadosEtapas[secao] || dadosEtapas[nomeSecao] || {};
  let etapa = Array.isArray(dadosSecao)
    ? dadosSecao[numero - 1]
    : dadosSecao[numero] ?? dadosSecao[`etapa${numero}`] ?? dadosSecao[`Etapa ${numero}`];

  if (etapa === undefined) {
    const chavesPossiveis = [
      `${secao}_etapa_${numero}`,
      `etapa_${secao}_${numero}`,
      `etapa${numero}_${secao}`,
      `Etapa ${numero} - ${nomeSecao}`
    ];
    const chaveEncontrada = chavesPossiveis.find((chave) => perfil[chave] !== undefined);
    if (chaveEncontrada) etapa = perfil[chaveEncontrada];
  }

  if (etapa && (typeof etapa.toDate === "function" || typeof etapa.seconds === "number" || etapa instanceof Date)) {
    return { nome: "", data: etapa };
  }

  if (etapa && typeof etapa === "object") {
    return {
      nome: String(etapa.nome || etapa.etapa || ""),
      data: etapa.data || etapa.date || etapa.concluidaEm || etapa.concluida_em || ""
    };
  }
  return { nome: "", data: etapa || "" };
}

function preencherEtapas(perfil) {
  document.querySelectorAll("[data-seccao-etapas]").forEach((grupo) => {
    const secao = grupo.dataset.seccaoEtapas;
    grupo.querySelectorAll("[data-etapa]").forEach((elemento) => {
      const etapa = obterEtapa(perfil, secao, Number(elemento.dataset.etapa));
      const nome = etapa.nome || elemento.dataset.etapaNome;
      elemento.replaceChildren();
      if (!etapa.data) {
        elemento.textContent = `${nome} - não concluído`;
        return;
      }
      elemento.append(document.createTextNode(nome));
      const data = document.createElement("span");
      data.className = "etapa-data";
      data.textContent = formatarData(etapa.data);
      elemento.append(data);
    });
  });
}

function preencherDistincoes(distincoes) {
  const listaDistincoes = document.querySelector("[data-lista-distincoes]");
  listaDistincoes.replaceChildren();
  const registos = Array.isArray(distincoes) ? distincoes : [];
  if (!registos.length) {
    const linha = document.createElement("tr");
    const celula = document.createElement("td");
    celula.colSpan = 3;
    celula.textContent = "Sem distinções registadas.";
    linha.append(celula);
    listaDistincoes.append(linha);
    return;
  }

  registos.forEach((registo) => {
    const linha = document.createElement("tr");
    [registo.nome || registo.distincao || registo.distinção || "—", registo.osa || "—", formatarData(registo.data) || "—"].forEach((valor) => {
      const celula = document.createElement("td");
      celula.textContent = String(valor);
      linha.append(celula);
    });
    listaDistincoes.append(linha);
  });
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
  const formularioPedidoDados = document.querySelector("#form-pedido-alteracao-dados");
  const estadoPedidoDados = document.querySelector("#estado-pedido-alteracao");
  const avisoPerfil = document.querySelector("#aviso-perfil-privado");
  const separadores = document.querySelector(".area-pessoal-tabs");
  const painelPercurso = document.querySelector("#painel-percurso");
  const painelDados = document.querySelector("#painel-dados");
  const dataAtualizacao = document.querySelector("#data-atualizacao-perfil");

  formularioPedidoDados.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const utilizador = auth.currentUser;
    if (!utilizador?.email || !utilizador.emailVerified) {
      estadoPedidoDados.textContent = "Inicia sessão novamente para enviar um pedido de alteração.";
      return;
    }

    const dados = new FormData(formularioPedidoDados);
    const alteracoes = [
      ["Novo email", dados.get("novo-email")],
      ["Novo telemóvel", dados.get("novo-telemovel")],
      ["Outro dado a corrigir", dados.get("outros-dados")]
    ].filter(([, valor]) => String(valor || "").trim());

    if (!alteracoes.length) {
      estadoPedidoDados.textContent = "Indica pelo menos uma alteração a pedir.";
      formularioPedidoDados.querySelector("[name='outros-dados']").focus();
      return;
    }

    const dataHora = new Intl.DateTimeFormat("pt-PT", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Lisbon"
    }).format(new Date());
    const corpo = [
      "Pedido de alteração de dados pessoais",
      "",
      `Email de quem pede: ${utilizador.email}`,
      `Data e hora do pedido: ${dataHora} (hora de Lisboa)`,
      "Origem: site do Agrupamento 929 - Belém / Área Pessoal",
      "",
      "Alterações pedidas:",
      ...alteracoes.map(([campo, valor]) => `- ${campo}: ${String(valor).trim()}`)
    ].join("\n");
    const assunto = `Pedido de alteração de dados - ${utilizador.email}`;
    window.location.href = `mailto:${EMAIL_SECRETARIA_PEDIDOS}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    estadoPedidoDados.textContent = `Mensagem preparada para ${EMAIL_SECRETARIA_PEDIDOS}. Revê-a e envia-a no teu programa de email para concluir o pedido.`;
  });

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

  function preencherPerfil(perfil) {
    document.querySelectorAll("[data-dado]").forEach((elemento) => {
      const valor = perfil[elemento.dataset.dado];
      elemento.textContent = valor === undefined || valor === null || valor === "" ? "—" : String(valor);
    });

    document.querySelectorAll("[data-campo-perfil]").forEach((elemento) => {
      const valor = perfil[elemento.dataset.campoPerfil];
      elemento.textContent = valor === undefined || valor === null || valor === "" ? "—" : String(valor);
    });

    preencherAtividades(perfil.atividades);
    preencherEtapas(perfil);
    preencherDistincoes(perfil.distincoes || perfil.distinctions);
  }

  function limparPerfil() {
    document.querySelectorAll("[data-dado], [data-campo-perfil]").forEach((elemento) => {
      elemento.textContent = "";
    });

    preencherAtividades([], "As atividades aparecerão depois do login.");
    preencherEtapas({});
    preencherDistincoes([]);
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