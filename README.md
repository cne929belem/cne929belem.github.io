# ⚓ CNE 929 Belém - Escuteiros Marítimos

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 (Belém)**.

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Como o site é feito

* **Jekyll**, compilado automaticamente pelo GitHub Pages a partir do código-fonte.
* **Layout partilhado** (`_layouts/default.html`): cabeçalho, navegação e rodapé vivem num único ficheiro.
* **Coleções** (`_noticias/`, `_documentos/`) para conteúdo que se repete — ver secção própria abaixo. É a peça central para não teres de escrever HTML à mão sempre que há uma notícia ou um documento novo.
* **Painel de administração visual** em `/admin/` (Decap CMS + DecapBridge) — a maior parte do conteúdo do dia a dia edita-se por lá, sem tocar em código.
* **HTML + CSS puro onde é possível, sem JavaScript.** Menus, pop-ups e campos condicionais do Portal de Respostas funcionam só com CSS (`:hover`, `:checked`, `:target`, `:not(:placeholder-shown)`). As únicas exceções (tecnicamente inevitáveis): o contador da página Jamboree — Geral, o widget do Instagram, e o preenchimento automático do NIN no Portal de Respostas.
* **Design 100% Responsivo**, com um único `assets/css/style.css` a cobrir desktop, tablet e telemóvel.

---

## 📄 Páginas do Site

| Página | Ficheiro | Gerido por |
|---|---|---|
| Início | `index.html` | Código — mostra automaticamente destaque + 3 notícias recentes |
| Notícias | `noticias.html` | Código — lista **todas** as notícias, geridas pela coleção `_noticias/` |
| Documentos | `documentos.md` | Código — organiza automaticamente a coleção `_documentos/` por ano |
| Equipa | `equipa.html` | CMS — placeholder pronto a receber o organigrama |
| ACAGRUP 2026 | `acagrup-2026.md` | CMS |
| Promessas 2026 | `promessas26.md` | CMS |
| Jamboree — Geral / Informações / Newsletter / Portal de Respostas | `jamboree-*.html` | Código |
| Em Construção | `em-construcao.html` | Código — para separadores ainda sem conteúdo (Secções I-IV) |

**Navegação:** Agrupamento ▾ (Equipa, Documentos, Notícias) · Secções ▾ · Atividades ▾ (Promessas, ACAGRUP) · Jamboree 2027 ▾ · 🔒 Login

---

## 📰 Como acrescentar uma Notícia

**Pelo painel `/admin/` (recomendado):** "Notícias" → "Novo Notícias" → preenche Título, Data, Resumo, e opcionalmente uma Imagem.

Há duas formas de uma notícia funcionar:
1. **Anúncio que liga a outra página** (o caso mais comum — ex.: "Já está disponível X", a ligar para a página do X): preenche o campo **"Link direto para outra página"** (ex.: `/acagrup-2026.html`). O cartão da notícia liga diretamente para lá.
2. **Notícia com página própria**: deixa o "Link direto" vazio e escreve o texto completo no campo "Texto completo" — a notícia ganha a sua própria página (`/noticias/titulo-da-noticia.html`).

A notícia aparece **automaticamente**:
- Nas 3 mais recentes da página inicial (se estiver entre as 3 mais recentes por data).
- Na lista completa em `/noticias.html`.

Não precisas de editar nenhuma destas duas páginas à mão.

**Manualmente:** cria um ficheiro novo em `_noticias/`, copiando a estrutura de um já existente.

---

## 📁 Como acrescentar um Documento

**Pelo painel `/admin/`:** "Documentos" → "Novo Documentos" → preenche Título, Descrição, o PDF (ou deixa vazio se ainda não existir), o **Ano** ("Geral" ou um ano como "2026"), e o **Estado** ("disponivel" ou "brevemente").

A página `/documentos.html` organiza tudo sozinha:
- Documentos com `ano: Geral` aparecem sempre em "Documentos Gerais", no topo.
- Os restantes agrupam-se automaticamente por ano, do mais recente para o mais antigo.
- Documentos com `estado: brevemente` (ou sem PDF associado) aparecem a cinzento com ⏳; com `estado: disponivel` e PDF, aparecem clicáveis com 📥.
- O campo **Ordem** controla a posição dentro do mesmo grupo (números mais baixos primeiro).

Quando chegar um novo ano escutista, não precisas de criar nenhuma secção nova na página — basta começares a acrescentar documentos com esse ano, e a secção aparece sozinha.

---

## 📝 Portal de Respostas — como funciona (sem JavaScript, exceto o NIN)

O `jamboree-inscricao.html` é um único `<form method="POST">` HTML nativo, com 8 secções (Dados Pessoais, Morada, Encarregado/Emergência, Viagem, Saúde, Mobilidade, Conforto, e SIIE Update). Ao clicar em "Enviar", os dados vão diretamente para um **Google Apps Script** (fora deste repositório, implementado no projeto Apps Script ligado à Google Sheet), que os grava e devolve uma página de confirmação com o estilo do site.

**Sem JavaScript, isto é conseguido através de:**
- **Validação:** atributos nativos do HTML5 (`required`, `type="email"`, `type="date"`...).
- **Campos condicionais:** seletores CSS `:checked ~` e `:not(:placeholder-shown)`. Quando uma pergunta tem **dois** campos condicionais diferentes (ex.: Alergias → "especifica" só com "Outra", mas "Gravidade" com qualquer alergia real), cada um usa uma classe CSS distinta (`.conditional-field` vs `.conditional-field-outro-only`) para não se confundirem um com o outro.
- **Portão de consentimento RGPD:** o resto do formulário fica esbatido e bloqueado até a checkbox de consentimento ser marcada.

**O consentimento RGPD** identifica o responsável (CNE - 929 Belém, NIF 500972052), cita a base legal (artigos 5.º, 6.º e 9.º do RGPD), os direitos do titular (artigos 15.º a 22.º), o direito de reclamação à CNPD (artigo 77.º), e uma secção dedicada aos dados de vacinação (alinhada com o Aviso de Proteção de Dados do Jamboree 2027). Este texto foi escrito com cuidado, mas não substitui uma revisão jurídica formal.

**Antes de publicares uma alteração ao formulário:**
1. O `action="..."` do `<form>` aponta para o Apps Script já implementado.
2. O código do Apps Script (`AppsScript_Code.gs`) não está neste repositório — mantém a lista de campos sincronizada manualmente entre o HTML (atributos `name`) e o `FIELD_MAP` do Apps Script.
3. Os dados recolhidos incluem categorias especiais de menores — mantém o acesso à Sheet restrito.

---

## 🎨 Componentes CSS reutilizáveis

Antes de escreveres `style="..."` novo numa página, verifica se já existe uma classe para o que precisas — evita repetição e mantém tudo consistente. Todas estão comentadas na Secção 10 de `assets/css/style.css`:

| Classe | Para quê |
|---|---|
| `.section-title` | Título de secção com sublinhado (ex.: "Documentos Gerais") |
| `.info-block` (+ `.laranja` `.verde` `.amarelo` `.roxo` `.vermelho` `.azul-claro`) | Bloco de destaque com borda colorida à esquerda |
| `.doc-link` (+ `.pendente`) | Linha de documento com título, descrição e ícone |
| `.jump-nav` | Barra de âncoras para saltar entre secções de uma página longa |
| `.noticia-card` | Cartão de notícia (usado no índice e na lista completa) |
| `.quick-links-grid` + `.quick-link-card` | Grelha de acesso rápido (cartões compactos lado a lado) |

---

## 🖊️ Painel de Administração (CMS)

Em `/admin/`, a Direção edita conteúdo através de um formulário, sem tocar em HTML.

**Como funciona por baixo:** **Decap CMS** é o editor visual; **DecapBridge** trata da autenticação e liga ao GitHub (substituiu o Netlify Identity + Git Gateway, descontinuados pela Netlify). Configurado em `admin/config.yml`.

**Duas famílias de conteúdo no CMS:**
1. **"Páginas do Site"** — páginas soltas (ACAGRUP, Promessas, Equipa), cada uma com um bloco de texto livre.
2. **Coleções "Notícias" e "Documentos"** — ver secções acima. Cada entrada nova vira um ficheiro novo dentro de `_noticias/` ou `_documentos/`.

Nota: `documentos.md` **não** está no CMS como página — o seu conteúdo é gerado automaticamente a partir da coleção "Documentos", por isso editá-lo como texto livre quebraria a organização por ano.

---

## 🧭 Guia Rápido de Manutenção

### Cores oficiais
Topo de `assets/css/style.css`, zona `:root`.

### Feed do Instagram
Atualiza o widget em elfsight.com; se o código mudar, substitui o `<script>` em `index.html`, dentro de `<aside class="sidebar-desktop">`.

### Imagens
Upload para `assets/img/`, sem espaços/acentos no nome.

### Ligar uma nova secção (tirar da página "Em Construção")
Cria a página, depois troca o `em-construcao.html` correspondente em `_layouts/default.html` — só precisas de o fazer uma vez, o menu é partilhado por todas as páginas.

### Testar localmente antes de publicar
No terminal (Codespace ou local, com Ruby instalado):
```bash
bundle install
bundle exec jekyll serve --livereload
```
Isto é especialmente importante depois de mexeres nas coleções (Notícias/Documentos) ou em ficheiros `.md`/`.html` com lógica Liquid (`{% for %}`, `{% if %}`, etc.) — esses erros só aparecem mesmo a compilar o site, não abrindo o ficheiro diretamente no browser.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável.
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Agrupamento 929 - Belém.

Escutismo Marítimo • Sempre Alerta para Servir

---

## 📂 Estrutura de Ficheiros

```text
/
├── index.html                  # Página inicial (destaque + 3 notícias recentes + acesso rápido)
├── noticias.html               # Lista TODAS as notícias (lê de _noticias/)
├── documentos.md               # Lista os documentos, agrupados por ano (lê de _documentos/)
├── equipa.html                 # Equipa — pronta a receber o organigrama (CMS)
├── acagrup-2026.md             # ACAGRUP 2026 (CMS)
├── promessas26.md              # Galeria de Promessas (CMS)
├── jamboree-geral.html         # Jamboree 2027 — contador e resumo
├── jamboree-info.html          # Jamboree 2027 — informações, insígnia, SfH, Solidariedade
├── jamboree-news.html          # Jamboree 2027 — boletins nacionais e internacionais
├── jamboree-inscricao.html     # Jamboree 2027 — Portal de Respostas (8 secções, HTML/CSS puro)
├── em-construcao.html          # Aviso para secções ainda vazias
├── favicon.ico
├── _config.yml                 # Configuração do Jekyll + definição das coleções
├── Gemfile / Gemfile.lock      # Dependências Ruby (Jekyll 4.4 + webrick)
├── .gitignore                  # Impede _site/ e caches do Jekyll de serem versionados
├── README.md                   # Este documento
├── _layouts/
│   ├── default.html             # Layout partilhado — cabeçalho, navegação, rodapé
│   └── noticia.html             # Layout de uma notícia individual
├── _includes/
│   ├── doc-link.html            # Uma linha de documento (usado por documentos.md)
│   └── noticia-card.html        # Um cartão de notícia (usado por index.html e noticias.html)
├── _noticias/                   # Coleção — uma notícia por ficheiro
├── _documentos/                 # Coleção — um documento por ficheiro
├── admin/
│   ├── config.yml               # Configuração do Decap CMS + DecapBridge
│   └── index.html
└── assets/
    ├── css/
    │   └── style.css             # Design, cores, responsividade, e componentes reutilizáveis (secção 10)
    ├── docs/                     # PDFs (documentos, boletins do Jamboree)
    └── img/                      # Imagens e logótipos
```

**Nota:** o código do Apps Script (`AppsScript_Code.gs`) não está neste repositório — vive à parte, no projeto Apps Script ligado à Google Sheet de respostas.
