# ⚓ CNE 929 Belém - Escuteiros Marítimos

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 (Belém)**.

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Como o site é feito

* **Jekyll**, compilado automaticamente pelo GitHub Pages a partir do código-fonte.
* **Layout partilhado** (`_layouts/default.html`): cabeçalho, navegação e rodapé vivem num único ficheiro.
* **Páginas organizadas por pasta**, seguindo exatamente a estrutura do menu do site — ver secção "Estrutura de Pastas" abaixo.
* **Coleções** (`_noticias/`, `_documentos/`) para conteúdo que se repete, e **dados** (`_data/registos.yml`) para o registo de Noites/Horas.
* **Painel de administração visual** em `/admin/` (Decap CMS + DecapBridge) — a maior parte do conteúdo do dia a dia edita-se por lá, sem tocar em código.
* **HTML + CSS puro onde é possível, sem JavaScript.** Menus, pop-ups e campos condicionais do Portal de Respostas funcionam só com CSS. As exceções conhecidas (tecnicamente inevitáveis): o contador da página Jamboree — Geral, o widget do Instagram, o preenchimento automático do NIN no Portal de Respostas, o acordeão de secções da Vivência, e o motor de pesquisa de Noites/Horas.
* **Design 100% Responsivo**, com um único `assets/css/style.css` a cobrir desktop, tablet e telemóvel.

---

## 📂 Estrutura de Pastas

As páginas estão organizadas em pastas que seguem **exatamente** a estrutura do menu do site — se procuras uma página, o menu diz-te a pasta:

```text
/
├── index.html                   # Página inicial
├── em-construcao.html           # Aviso para secções ainda vazias
│
├── agrupamento/                 # Menu "Agrupamento ▾"
│   ├── informacoes.md            # Sobre o Agrupamento, contactos, quotas
│   ├── equipa.md                 # Organigrama e Equipas de Animação (CMS)
│   ├── documentos.md             # Lista os documentos, agrupados por ano (lê de _documentos/)
│   └── noticias.html             # Lista TODAS as notícias (lê de _noticias/)
│
├── comunidade/                   # Menu "Secções ▾ → IV - Comunidade"
│   ├── geral.md                   # Equipa de Animação, ligação ao CNE, Uniforme, Registo de Noites/Horas
│   ├── vivencia.md                # Imaginário, O que é ser Companheiro, Dimensões, Simbologia, Progresso/PPV
│   ├── programa.md                # (em construção)
│   ├── atividades.md              # (em construção)
│   └── diario.md                  # Diário de Bordo — galeria e documentos via Google Drive (CMS)
│
├── atividades/                   # Menu "Atividades ▾"
│   ├── acagrup-2026.md            # ACAGRUP 2026 (CMS)
│   ├── promessas26.md             # Galeria de Promessas (CMS)
│   └── inscricoes.md              # Molde reutilizável de inscrição numa atividade (Google Forms)
│
├── jamboree/                     # Menu "Jamboree 2027 ▾"
│   ├── geral.html                 # Contador e resumo
│   ├── informacoes.html           # Informações, insígnia, SfH, Solidariedade
│   ├── newsletter.html            # Boletins nacionais e internacionais
│   └── inscricao.html             # Portal de Respostas (8 secções, HTML/CSS puro) — fora do menu, só via botão
│
├── _config.yml                   # Configuração do Jekyll + definição das coleções
├── Gemfile / Gemfile.lock        # Dependências Ruby (Jekyll 4.4 + webrick)
├── .gitignore
├── README.md
│
├── _layouts/
│   ├── default.html               # Layout partilhado — cabeçalho, navegação, rodapé
│   └── noticia.html               # Layout de uma notícia individual
├── _includes/
│   ├── doc-link.html              # Uma linha de documento (usado por agrupamento/documentos.md)
│   └── noticia-card.html          # Um cartão de notícia (usado por index.html e agrupamento/noticias.html)
├── _noticias/                     # Coleção — uma notícia por ficheiro
├── _documentos/                   # Coleção — um documento por ficheiro
├── _data/
│   └── registos.yml               # Registo de Noites/Horas (editável pelo CMS) — ver aviso de privacidade abaixo
│
├── admin/
│   ├── config.yml                 # Configuração do Decap CMS + DecapBridge
│   └── index.html
│
└── assets/
    ├── css/
    │   └── style.css               # Design, cores, responsividade, componentes reutilizáveis
    ├── docs/                       # PDFs (documentos, boletins, cerimoniais)
    └── img/
        ├── marca/                   # Logótipos do Agrupamento e do CNE
        ├── jamboree/                 # Logos e insígnia do WSJ 2027
        ├── seccoes/                  # Ícones das 4 secções + dimensões da Comunidade
        ├── equipa/                   # Fotos dos dirigentes
        └── eventos/                  # Fotos de atividades (ACAGRUP, etc.)
```

**Nota:** o código do Apps Script (`AppsScript_Code.gs`) não está neste repositório — vive à parte, no projeto Apps Script ligado à Google Sheet de respostas. Se algum dia mudares o caminho de `jamboree/geral.html` ou `jamboree/inscricao.html`, também tens de atualizar os links para lá dentro do Apps Script (nas páginas de confirmação/erro que ele devolve).

---

## 🎨 Guia de Emojis

Para o site não acumular dezenas de variantes do mesmo símbolo, usa sempre estes por omissão:

| Conceito | Emoji |
|---|---|
| Documento / PDF | 📄 |
| Download | 📥 |
| Pessoa | 🧑 |
| Grupo / equipa | 👥 |
| Ligação interna ("saber mais") | → |
| Ligação externa (sai do site) | ↗️ |
| Campismo / tenda | 🏕️ |
| Confirmação / feito | ✓ |

Símbolos com significado próprio (⚓ 🧭 ⚜️ 🏅, as cores 🔴🟡🟢🔵 das Caravelas/dimensões) mantêm-se — representam conceitos genuinamente diferentes, não precisam de uniformizar.

---

## ✍️ Tom de Voz

- **Páginas de narrativa/imaginário** (Destaque, ACAGRUP, Vivência): tom animado, metáforas marítimas à vontade — "as velas içadas", "assumir o leme".
- **Páginas utilitárias** (Documentos, listas, formulários): diretas e claras, sem precisar de metáfora.
- **Evitar linguagem de regulamento** ("órgãos", "unidades", "no âmbito de") fora dos blocos que citam mesmo o Regulamento — prefere linguagem próxima, como falarias com um jovem do Agrupamento.

---

## 📰 Como acrescentar uma Notícia

Pelo painel `/admin/` → "Notícias" → "Novo Notícias". Se preencheres **"Link direto para outra página"**, o cartão liga logo para lá (ex.: para o ACAGRUP); se deixares vazio e escreveres o "Texto completo", a notícia ganha página própria. Aparece sozinha nas 3 mais recentes da página inicial e em `agrupamento/noticias.html` — não precisas de mexer em mais nada.

## 📁 Como acrescentar um Documento

Pelo painel `/admin/` → "Documentos" → "Novo Documentos". O campo **Ano** ("Geral" ou um ano concreto) decide onde aparece em `agrupamento/documentos.md` — a página organiza-se sozinha.

## 🔐 Registo de Noites e Horas — aviso de privacidade

`_data/registos.yml` já está editável pelo painel `/admin/` (mais arrumado do que estar escrito direto no código), mas **isto não resolve o problema de fundo**: o GitHub Pages só serve ficheiros estáticos, por isso este ficheiro fica sempre 100% público — qualquer pessoa que veja o código da página vê a lista toda, o número de telemóvel não é uma password, só um filtro visual. Não uses aqui dados reais de menores até isto ser substituído por uma solução com autenticação a sério (ver conversas anteriores sobre as opções A/B/C/D consideradas).

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável.
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Agrupamento 929 - Belém.

Escutismo Marítimo • Sempre Alerta para Servir
