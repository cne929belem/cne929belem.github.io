# ⚓ CNE 929 Belém - Escuteiros Marítimos

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 (Belém)**.
Este portal digital foi desenhado para partilhar a vida da nossa alcateia, frota, flotilha e equipagem, e manter todos informados sobre as nossas atividades — da inscrição de novos elementos ao Jamboree 2027.

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Como o site é feito

* **Jekyll**, compilado automaticamente pelo GitHub Pages a partir do código-fonte — não precisas de "publicar" nada manualmente, só fazer commit.
* **Layout partilhado** (`_layouts/default.html`): o cabeçalho, a navegação e o rodapé vivem num único ficheiro. Cada página é só o seu próprio conteúdo.
* **Painel de administração visual** em `/admin/` (Decap CMS + DecapBridge) — algumas páginas podem ser editadas por um formulário simples, sem tocar em código. Ver secção própria abaixo.
* **HTML + CSS puro onde é possível, sem JavaScript.** Menus dropdown, campos condicionais do Portal de Respostas, e os pop-ups (Tropa e Insígnia) funcionam só com CSS (`:checked`, `:target`, `:not(:placeholder-shown)`). As únicas exceções, por serem tecnicamente inevitáveis:
  - O **contador** na página "Jamboree — Geral" (uma contagem que se atualiza sozinha exige sempre um pequeno script).
  - O **feed de Instagram** na página inicial (widget externo da Elfsight, copiado e colado).
  - O preenchimento automático do **NIN** no Portal de Respostas ao escolher um nome da lista (uma linha de JS, não há forma de fazer isto só com CSS).
* **Design 100% Responsivo**, com o mesmo ficheiro `assets/css/style.css` a cobrir desktop, tablet e telemóvel.

---

## 📄 Páginas do Site

| Página | Ficheiro | Gerido por | Descrição |
|---|---|---|---|
| Início | `index.html` | Código | Página principal — inscrição, ACAGRUP, Promessas e Jamboree em destaque |
| Jamboree — Geral | `jamboree-geral.html` | Código | Contador, datas, local e botão de entrada no Portal de Respostas |
| Jamboree — Informações | `jamboree-info.html` | Código | Imaginário, insígnia do Contingente, logística, saúde/SfH, Solidariedade, pop-up da Tropa |
| Jamboree — Newsletter | `jamboree-news.html` | Código | Boletins nacionais e internacionais para download |
| Jamboree — Portal de Respostas | `jamboree-inscricao.html` | Código | Formulário de inscrição nominal — ver secção própria abaixo |
| ACAGRUP 2026 | `acagrup-2026.md` | **CMS** | "O Segredo da Ilha Perdida" — imaginário e as quatro Caravelas |
| Documentos | `documentos.md` | **CMS** | Documentos para download (ex.: apólice do seguro escutista) |
| Promessas 2026 | `promessas26.md` | **CMS** | Galeria fotográfica das Promessas (liga a um álbum do Google Fotos) |
| Em Construção | `em-construcao.html` | Código | Aviso para separadores ainda sem conteúdo próprio (Equipa, Notícias, Secções I-IV) |

**Navegação atual:** Agrupamento ▾ · Secções ▾ · Atividades ▾ (Promessas, ACAGRUP) · Jamboree 2027 ▾ · 🔒 Login

> ⚠️ **Por fazer:** em `promessas26.md`, o botão "Abrir Álbum de Fotografias" ainda aponta para um placeholder (`COLA_AQUI_O_LINK_DE_PARTILHA_DO_GOOGLE_FOTOS`) — falta colar o link de partilha real do álbum.

---

## 🖊️ Painel de Administração (CMS)

Em `cne929belem.github.io/admin/`, a Direção pode editar certas páginas através de um formulário — sem precisar de saber HTML nem usar o GitHub diretamente.

**Como funciona por baixo:**
- **Decap CMS** é o editor visual.
- **DecapBridge** trata da autenticação e da ligação ao GitHub (substituiu o Netlify Identity + Git Gateway, que a Netlify descontinuou). Configurado em `admin/config.yml`, com o URL do site DecapBridge (`960f7679-5e07-43aa-b176-a32c0b0faa81`).
- Cada edição feita no `/admin/` gera automaticamente um commit no repositório (por ex. `Update paginas "acagrup-2026" - Nome <utilizador> via DecapBridge`), por isso há sempre um registo de quem alterou o quê.

**Páginas atualmente geridas pelo CMS:** ACAGRUP 2026, Documentos, Promessas 2026 (ver tabela acima).

**Para tornar uma nova página editável pelo CMS**, acrescenta uma nova entrada em `admin/config.yml`, dentro de `collections → paginas → files`, copiando o padrão das três já existentes (título, classe CSS, layout, e um campo `body` do tipo `markdown` para o conteúdo).

---

## 📝 Portal de Respostas — como funciona (sem JavaScript, exceto o NIN)

O `jamboree-inscricao.html` é um único `<form method="POST">` HTML nativo, com 8 secções:

1. Dados Pessoais (nome escolhido de uma lista, com NIN a preencher-se automaticamente; género; religião fixa; email; organização)
2. Morada e Contactos
3. Encarregado de Educação e Contactos de Emergência
4. Viagem e Logística
5. Saúde, Alimentação e Necessidades Especiais
6. Mobilidade e Acessibilidade
7. Conforto e Fatores Sensoriais
8. **SIIE Update** — número de utente, Cartão Europeu de Seguro de Doença, e seguro de saúde internacional (opcional)

Ao clicar em "Enviar", o browser envia os dados diretamente para um **Google Apps Script** (implementado como Aplicação Web), que grava tudo numa única folha "Respostas" da Google Sheet e devolve uma página de confirmação com o estilo do site.

**Sem JavaScript, isto é conseguido através de:**
- **Validação de campos:** atributos nativos do HTML5 (`required`, `type="email"`, `type="date"`...).
- **Campos condicionais** (ex.: "Se Outro, especifica"; a gravidade de uma alergia só aparece depois de escolhida uma alergia real): seletores CSS `:checked ~` e `:not(:placeholder-shown)`.
- **Portão de consentimento RGPD:** o resto do formulário fica esbatido e bloqueado (`opacity` + `pointer-events: none`) até a checkbox de consentimento ser marcada.
- **Navegação por secções:** links de âncora simples (`#secao-1` a `#secao-8`), numa barra com scroll horizontal.

**O consentimento RGPD** identifica o responsável pelo tratamento (CNE - 929 Belém, NIF 500972052), cita a base legal (artigos 5.º, 6.º e 9.º do RGPD), os direitos do titular (artigos 15.º a 22.º) e o direito de reclamação à CNPD (artigo 77.º). Inclui ainda uma secção dedicada ao tratamento específico dos **dados de vacinação**, alinhada com o Aviso de Proteção de Dados do Jamboree 2027 (Accredit Solutions, circuito de recolha via FEP, artigos 6.º/1/b e 9.º/2/d e c) e com o documento do CNE de 2018 sobre RGPD. Este texto foi escrito com cuidado, mas não substitui uma revisão jurídica formal antes de grandes alterações.

**Antes de publicares uma alteração ao formulário:**
1. O `action="..."` do `<form>` já aponta para o Apps Script implementado (URL termina em `.../exec`).
2. O código do Apps Script (`AppsScript_Code.gs`) **não está neste repositório** — vive à parte, colado diretamente no editor do projeto Apps Script ligado à Google Sheet.
3. Mantém sincronizada a lista de campos entre o HTML (atributos `name`) e o `FIELD_MAP` do Apps Script.
4. Os dados recolhidos incluem categorias especiais (saúde, mobilidade, convicções religiosas, vacinação) de menores — mantém o acesso à Sheet restrito à Direção do Agrupamento.

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

### 2. Editar conteúdo simples (ACAGRUP, Documentos, Promessas)
Usa o painel `/admin/` — não precisas de tocar em código nem de saber Git.

### 3. Atualizar o Feed do Instagram
1. Acede a elfsight.com e faz login.
2. Atualiza o widget no painel deles.
3. Se o código mudar, vai a `index.html`, procura `<aside class="sidebar-desktop">` e substitui o `<script>` e a `<div>` pelo novo código gerado.

### 4. Substituir Imagens
Upload do novo ficheiro para `assets/img/`, com nome sem espaços/acentos (evita problemas de link no GitHub Pages).

### 5. Ligar uma nova secção (tirar da página "Em Construção")
1. Cria a nova página (código direto, ou como entrada nova no CMS — ver secção "Painel de Administração").
2. Em `_layouts/default.html`, troca o `em-construcao.html` correspondente pelo novo ficheiro — já não precisas de repetir isto em cada página, o menu é partilhado.

### 6. Atualizar as perguntas do Portal de Respostas
As perguntas estão escritas diretamente em HTML dentro de `<fieldset class="form-section">`, uma secção por bloco.
- **Mudar o texto de uma pergunta:** edita o `<label>` correspondente.
- **Adicionar/remover uma opção:** copia ou apaga o par `<input>` + `<label>` dentro do grupo.
- **Campos condicionais:** o gatilho (`class="trigger-yes"` ou `class="trigger-outro"`) tem de estar num `<input>` que seja **irmão direto** do `<div class="conditional-field">` que deve aparecer — ambos dentro do mesmo `<div class="field options-field">`, sem outra `<div>` a separá-los no meio.
- Sempre que mudares um `name`, atualiza também o `FIELD_MAP` no Apps Script.

### 7. Manter o repositório limpo
O `.gitignore` já impede que `_site/` (a compilação local do Jekyll) volte a ser enviada para o GitHub. Se algum dia gerares o site localmente (`bundle exec jekyll serve`), essa pasta fica só na tua máquina/Codespace.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável (contador, feed de Instagram, e o preenchimento automático do NIN — assinalados acima).
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Agrupamento 929 - Belém.

Escutismo Marítimo • Sempre Alerta para Servir

---

## 📂 Estrutura de Ficheiros

```text
/
├── index.html                       # Página principal
├── jamboree-geral.html              # Jamboree 2027 — contador e resumo
├── jamboree-info.html               # Jamboree 2027 — informações, insígnia, SfH, Solidariedade
├── jamboree-news.html               # Jamboree 2027 — boletins nacionais e internacionais
├── jamboree-inscricao.html          # Jamboree 2027 — Portal de Respostas (8 secções, HTML/CSS puro)
├── acagrup-2026.md                  # ACAGRUP 2026 (gerido pelo CMS)
├── documentos.md                    # Documentos do Agrupamento (gerido pelo CMS)
├── promessas26.md                   # Galeria de Promessas (gerido pelo CMS)
├── em-construcao.html               # Página de aviso para secções ainda vazias
├── favicon.ico                      # Ícone do site
├── _config.yml                      # Configuração do Jekyll
├── Gemfile / Gemfile.lock           # Dependências Ruby (Jekyll 4.4 + webrick)
├── .gitignore                       # Impede _site/ e caches do Jekyll de serem versionados
├── README.md                        # Este documento
├── _layouts/
│   └── default.html                 # Layout partilhado — cabeçalho, navegação, rodapé
├── admin/
│   ├── config.yml                   # Configuração do Decap CMS + DecapBridge
│   └── index.html                   # Página de entrada do painel /admin/
└── assets/
    ├── css/
    │   └── style.css                 # Todo o design, cores, fontes, responsividade e lógica CSS
    ├── docs/
    │   ├── Proposta_de_Admissao_929.pdf
    │   ├── seguro-escutista-zm450Dsp.pdf
    │   ├── Proposta Educativa_Geral.pdf
    │   ├── pt_WSJBoletim 1.pdf
    │   ├── pt_Boletim2_WSJ 2027.pdf
    │   ├── Bulletin 1 EN WSJ2027.pdf
    │   ├── WSJ2027EN Bulletin2.pdf
    │   └── EN Bulletin_3.pdf
    └── img/
        ├── Logo929.jpg / Logo929.ico
        ├── CNE_escuteiros_Maritimos.jpg / CNE_escuteiros.jpg
        ├── Bravely_Jamboree_27.png
        ├── RGB_logo_white_WSJ2027.png / RGB_bravely_short_white_WSJ2027.png
        ├── Insignia_Contingente_WSJ2027.png
        └── DSC_6301.jpg              # Fotografia de destaque das Promessas
```

**Nota:** o código do Apps Script (`AppsScript_Code.gs`) não está neste repositório — vive à parte, no projeto Apps Script ligado à Google Sheet de respostas.