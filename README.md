# ⚓ CNE 929 Belém - Escuteiros Marítimos

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 (Belém)**.
Este portal digital foi desenhado para partilhar a vida da nossa alcateia, frota, flotilha e equipagem, e manter todos informados sobre as nossas atividades, como o Jamboree 2027.

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Funcionalidades do Site

* **Design 100% Responsivo:** o site adapta-se automaticamente a computadores, tablets e telemóveis.
* **Quase tudo em HTML + CSS puro, sem JavaScript:** menus dropdown, campos condicionais do formulário, e os pop-ups (Tropa e Insígnia) funcionam só com CSS (`:checked`, `:target`, `:not(:placeholder-shown)`). Isto torna o site mais rápido e, sobretudo, muito mais fácil de editar — não é preciso saber programar para mudar texto, cores ou imagens.
* **As duas únicas exceções, por serem tecnicamente inevitáveis:**
  - O **contador** na página "Geral" (dias/horas/minutos até ao Jamboree) — uma contagem que se atualiza sozinha exige sempre um pequeno script.
  - O **feed de Instagram** na página inicial — widget externo da Elfsight, copiado e colado, não é código nosso para manter.
* **Rodapé Institucional:** links diretos para mapas, contactos, redes sociais e portais oficiais do CNE.
* **Otimização SEO:** meta-tags para facilitar a descoberta do agrupamento no Google/Bing.
* **Micro-secção Jamboree 2027:** três páginas informativas (Geral, Informações, Newsletter) e um Portal de Respostas com inscrição nominal da Tropa 10.
* **Página "Em Construção":** todos os separadores ainda sem conteúdo próprio apontam para uma página de aviso consistente, em vez de ficarem por preencher.

---

## 📄 Páginas do Site

| Página | Ficheiro | Descrição |
|---|---|---|
| Início | `index.html` | Página principal, feed de Instagram e destaque para o Jamboree 2027 |
| Jamboree — Geral | `jamboree-geral.html` | Contador, datas, local e botão de entrada no Portal de Respostas |
| Jamboree — Informações | `jamboree-info.html` | Imaginário, insígnia do Contingente (com pop-up de ampliar), logística, saúde/SfH, Operação de Solidariedade, o que levar, pop-up da Tropa |
| Jamboree — Newsletter | `jamboree-news.html` | Boletins nacionais e internacionais para download |
| Jamboree — Portal de Respostas | `jamboree-inscricao.html` | Formulário de inscrição nominal (89 campos, consentimento RGPD + 8 secções), **100% HTML/CSS, sem JavaScript** |
| Em Construção | `em-construcao.html` | Página de aviso para onde apontam os separadores ainda vazios |

**Navegação (igual em todas as páginas):** Agrupamento ▾ · Secções ▾ · **ACAGRUP ▾** (com "2026 - Ilha dos Cavalos", atualmente a apontar para "Em Construção") · Jamboree 2027 ▾

---

## 📝 Portal de Respostas — como funciona (sem JavaScript)

O `jamboree-inscricao.html` é um `<form method="POST">` HTML nativo — ao clicar em "Enviar", o browser envia os dados diretamente para um **Google Apps Script** implementado como Aplicação Web, sem passar por nenhum código nosso no meio. O Apps Script grava a resposta numa Google Sheet e devolve uma página de confirmação (ou de erro) já estilizada.

**Como isto substitui o que normalmente seria feito com JavaScript:**
- **Validação de campos obrigatórios, datas, emails:** atributos nativos do HTML5 (`required`, `type="email"`, `type="date"`...). O browser trata disto sozinho.
- **Campos condicionais** (ex.: "Se Outro, especifica"): seletores CSS `:checked ~` e `:not(:placeholder-shown)` — o campo seguinte só aparece quando a opção certa é escolhida.
- **"Portão" de consentimento RGPD:** o resto do formulário fica visualmente esbatido e bloqueado (`opacity` + `pointer-events: none`) até a checkbox de consentimento ser marcada — outra vez, só CSS.
- **Navegação por secções:** links de âncora simples (`#secao-1`, `#secao-2`...).

**Antes de publicares uma alteração ao formulário:**
1. Confirma que o `action="..."` do `<form>` em `jamboree-inscricao.html` aponta para o URL do teu Apps Script (há um aviso amarelo visível na própria página a lembrar isto).
2. O código do Apps Script está em `AppsScript_Code.gs` (não corre no GitHub Pages — vive à parte, no projeto Apps Script ligado à Sheet).
3. Os dados recolhidos incluem categorias especiais (saúde, mobilidade, convicções religiosas) de menores — mantém o acesso à Sheet restrito à Direção do Agrupamento e confirma o texto de consentimento RGPD com alguém responsável por proteção de dados no CNE antes de publicares alterações a este fluxo.

---

## 🧭 Como Atualizar o Site (Guia Rápido)

### 1. Alterar as Cores Oficiais
Tudo concentrado no topo de `assets/css/style.css`, na zona `:root`:
```css
:root {
    --azul-marinho: #003366;
    --azul-claro: #0056b3;
    /* ... */
}
```

### 2. Atualizar o Feed do Instagram
1. Acede a elfsight.com e faz login.
2. Atualiza o widget no painel deles.
3. Se o código mudar, vai ao `index.html`, procura `<aside class="sidebar-desktop">` e substitui o `<script>` e a `<div>` pelo novo código gerado.

### 3. Substituir Imagens
Upload do novo ficheiro para `assets/img/`, com nome sem espaços/acentos (evita problemas de link no GitHub Pages), e confirma que o nome/extensão batem certo no HTML.

### 4. Ligar uma nova secção (tirar da página "Em Construção")
1. Cria a nova página HTML (podes copiar a estrutura de `jamboree-geral.html`).
2. Em **todas** as páginas, troca o `href="em-construcao.html"` correspondente a essa secção pelo novo ficheiro. Isto inclui os itens de "Agrupamento", "Secções" e "ACAGRUP".

### 5. Atualizar as perguntas do Portal de Respostas
As perguntas estão escritas diretamente em HTML dentro de `<fieldset class="form-section">`, uma secção por bloco. Para:
- **Mudar o texto de uma pergunta:** edita o `<label>` correspondente.
- **Adicionar/remover uma opção (Sim/Não, etc.):** copia ou apaga o par `<input>` + `<label>` dentro do grupo.
- **Adicionar um campo novo simples:** copia um bloco `<div class="field">...</div>` existente do mesmo tipo (texto, data, etc.) e muda o `id`/`name`/rótulo.
- **Importante:** sempre que mudares ou acrescentares um `name` de um campo, atualiza também o `FIELD_MAP` em `AppsScript_Code.gs` (mesma chave, mesma ordem), para a coluna aparecer corretamente na Sheet.
- **Campos condicionais:** o "gatilho" (`class="trigger-yes"` ou `class="trigger-outro"`) tem de estar num `<input>` que seja **irmão direto** do `<div class="conditional-field">` que deve aparecer — ambos dentro do mesmo `<div class="field options-field">`, sem outra `<div>` a separá-los no meio. Se not aparecer, confirma esta estrutura primeiro.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, sem dependência de JavaScript no essencial do site (as exceções — contador e widget do Instagram — estão assinaladas acima).
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.

Escutismo Marítimo • Sempre Alerta para Servir

---

## 📂 Estrutura de Ficheiros

```text
/
├── index.html                       # Página principal e estrutura do site
├── jamboree-geral.html              # Jamboree 2027 — contador e resumo
├── jamboree-info.html               # Jamboree 2027 — informações, insígnia, SfH, Solidariedade
├── jamboree-news.html               # Jamboree 2027 — boletins nacionais e internacionais
├── jamboree-inscricao.html          # Jamboree 2027 — Portal de Respostas (HTML/CSS puro)
├── em-construcao.html               # Página de aviso para secções ainda vazias
├── AppsScript_Code.gs               # Backend do Portal de Respostas (implementar no Google Apps Script)
├── README.md                        # Este documento
└── assets/
    ├── css/
    │   └── style.css                 # Todo o design, cores, fontes, responsividade e lógica CSS dos formulários/pop-ups
    ├── docs/
    │   ├── Proposta Educativa_Geral.pdf
    │   ├── pt_WSJBoletim 1.pdf
    │   ├── pt_Boletim2_WSJ 2027.pdf
    │   ├── Bulletin 1 EN WSJ2027.pdf
    │   ├── WSJ2027EN Bulletin2.pdf
    │   └── EN Bulletin_3.pdf
    └── img/
        ├── Logo929.jpg                         # Logótipo principal
        ├── Logo929.ico                         # Ícone do separador do browser
        ├── CNE_escuteiros_Maritimos.jpg        # Logo da secção Marítima (Rodapé)
        ├── CNE_escuteiros.jpg                  # Logo oficial do CNE (Rodapé)
        ├── Bravely_Jamboree_27.png             # Destaque do Jamboree na página inicial
        ├── RGB_logo_white_WSJ2027.png          # Logo oficial WSJ 2027 (branco)
        ├── RGB_bravely_short_white_WSJ2027.png # Logótipo "Bravely" (branco)
        └── Insignia_Contingente_WSJ2027.png    # Insígnia do Contingente Português (João Oliveira)
```
