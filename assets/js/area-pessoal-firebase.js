import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

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

const formPedido = document.querySelector("#form-pedido-magic-link");
if (formPedido) {
  const campoEmail = formPedido.querySelector("[name='email']");
  const mensagem = document.querySelector("#estado-pedido-magic-link");
  const botao = formPedido.querySelector("button[type='submit']");

  formPedido.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const email = campoEmail.value.trim().toLowerCase();
    const caminhoContinuacao = formPedido.dataset.urlContinuacao;

    botao.disabled = true;
    mensagem.hidden = false;
    mensagem.textContent = "A enviar o pedido…";

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: new URL(caminhoContinuacao, window.location.origin).href,
        handleCodeInApp: true
      });
      window.localStorage.setItem(emailStorageKey, email);
      mensagem.textContent = "Se o endereço puder receber acesso, receberás um link para continuar. Abre-o neste navegador.";
    } catch (erro) {
      console.error("Falha ao pedir o link de acesso:", erro);
      mensagem.textContent = "Não foi possível enviar o link. Confirma o endereço e tenta novamente.";
    } finally {
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

  function preencherPerfil(perfil) {
    document.querySelectorAll("[data-dado]").forEach((elemento) => {
      const valor = perfil[elemento.dataset.dado];
      elemento.textContent = valor === undefined || valor === null || valor === "" ? "—" : String(valor);
    });

    document.querySelectorAll("[data-campo-perfil]").forEach((elemento) => {
      const valor = perfil[elemento.dataset.campoPerfil];
      elemento.textContent = valor === undefined || valor === null || valor === "" ? "—" : String(valor);
    });

    const listaAtividades = document.querySelector("[data-lista-atividades]");
    listaAtividades.replaceChildren();
    if (!Array.isArray(perfil.atividades) || perfil.atividades.length === 0) {
      const vazio = document.createElement("li");
      vazio.className = "percurso-vazio";
      vazio.textContent = "Sem atividades registadas.";
      listaAtividades.append(vazio);
      return;
    }

    perfil.atividades.forEach((atividade) => {
      const item = document.createElement("li");
      if (atividade.data) {
        const data = document.createElement("time");
        data.textContent = String(atividade.data);
        item.append(data);
      }
      const titulo = document.createElement("strong");
      titulo.textContent = String(atividade.titulo || "Atividade");
      item.append(titulo);
      if (atividade.descricao) {
        const descricao = document.createElement("span");
        descricao.textContent = String(atividade.descricao);
        item.append(descricao);
      }
      listaAtividades.append(item);
    });
  }

  function limparPerfil() {
    document.querySelectorAll("[data-dado], [data-campo-perfil]").forEach((elemento) => {
      elemento.textContent = "";
    });

    const listaAtividades = document.querySelector("[data-lista-atividades]");
    listaAtividades.replaceChildren();
    const vazio = document.createElement("li");
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
      console.error("Falha ao confirmar o link de acesso:", erro);
      mensagemSessao.textContent = "Este link não foi aceite ou já expirou. Pede um novo link de acesso.";
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
    await signOut(auth);
    mostrarConteudoAutenticado(false);
    mensagemSessao.textContent = "Sessão terminada.";
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
      mensagemSessao.textContent = "Esta sessão não tem um endereço de e-mail confirmado.";
      return;
    }

    mensagemSessao.textContent = "A confirmar a autorização do perfil…";
    try {
      const perfilRef = doc(database, "perfis", utilizador.uid);
      const perfilSnapshot = await getDoc(perfilRef);
      if (!perfilSnapshot.exists()) {
        mensagemSessao.textContent = "Este endereço ainda não tem um perfil autorizado.";
        return;
      }
      preencherPerfil(perfilSnapshot.data());
      mensagemSessao.textContent = `Sessão iniciada como ${utilizador.email}.`;
      mostrarConteudoAutenticado(true);
    } catch (erro) {
      console.error("Falha ao carregar o perfil:", erro);
      mensagemSessao.textContent = "Não foi possível validar o perfil. Confirma as regras do Firestore e tenta novamente.";
    }
  });
}