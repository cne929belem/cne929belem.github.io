# ⚓ CNE 929 Belém — Escuteiros Marítimos

Website oficial do **Agrupamento 929 (Belém)**, do Corpo Nacional de Escutas — Escutismo Católico Português.

🌐 **Site em direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## Sobre

O Agrupamento 929 é um agrupamento de Escutismo Marítimo, sediado em Belém, Lisboa, com atividade nas quatro secções etárias do CNE — Alcateia, Flotilha, Frota e Comunidade. Este repositório contém o código-fonte completo do website do Agrupamento: páginas informativas, formulários de inscrição, o portal de preparação para o 26.º World Scout Jamboree (Polónia, 2027), e as ferramentas de gestão de conteúdo usadas pela Direção.

---

## Tecnologia

- **[Jekyll](https://jekyllrb.com/)**, compilado automaticamente pelo [GitHub Pages](https://pages.github.com/) a partir deste repositório — sem necessidade de servidor próprio.
- **Layout partilhado** (`_layouts/default.html`): cabeçalho, navegação e rodapé definidos uma única vez.
- **Coleções Jekyll** (`_noticias/`, `_documentos/`, `_inscricoes/`) para conteúdo repetível, geridas através do painel de administração.
- **[Decap CMS](https://decapcms.org/)**, com autenticação via [DecapBridge](https://decapbridge.com/), disponível em `/admin/` — permite à Direção editar a maior parte do conteúdo sem tocar em código.
- **HTML e CSS puro sempre que possível.** O site evita JavaScript deliberadamente; as exceções (contador do Jamboree, widget do Instagram, preenchimento automático de campos, motor de pesquisa de registos) estão documentadas nos próprios ficheiros onde ocorrem.
- **Design responsivo**, com uma única folha de estilos (`assets/css/style.css`) a cobrir desktop, tablet e telemóvel, incluindo um menu de navegação recolhível em ecrãs pequenos.

---

## Estrutura do Repositório

As páginas estão organizadas em pastas que espelham a estrutura do menu do site:

```text
/
├── index.html                    # Página inicial
├── em-construcao.html            # Aviso genérico para secções ainda por desenvolver
│
├── agrupamento/                  # Menu "Agrupamento"
│   ├── informacoes.md              # Sobre o Agrupamento, contactos, quotas
│   ├── equipa.md                   # Organigrama e Equipas de Animação
│   ├── documentos.md               # Documentos oficiais, agrupados por ano
│   └── noticias.html               # Diário de Bordo — todas as notícias
│
├── escuteiro/                    # Menu "Escuteiro"
│   └── registos.md                 # Espaço pessoal — Registo de Noites/Horas (mais registos a virem)
│
├── comunidade/                   # Menu "Secções → IV - Comunidade"
│   ├── geral.md                    # Equipa de Animação, uniforme, ligação ao CNE
│   ├── vivencia.md                 # Imaginário, mística, simbologia, progresso e PPV
│   ├── programa.md                 # Programa de atividades da secção
│   └── diario.md                   # Diário de Bordo da Comunidade — arquivo e galeria
│
├── atividades/                   # Menu "Atividades"
│   ├── acagrup-2026.md             # Acampamento de Agrupamento 2026
│   ├── promessas26.md              # Galeria de Promessas 2026
│   └── inscricoes.md               # Inscrições abertas em atividades
│
├── jamboree/                     # Menu "Jamboree 2027"
│   ├── geral.html                   # Contador e resumo
│   ├── informacoes.html             # Informações da Tropa e do Contingente
│   ├── newsletter.html              # Boletins nacionais e internacionais
│   └── inscricao.html               # Portal de Respostas — inscrição nominal
│
├── _config.yml                   # Configuração do Jekyll e das coleções
├── Gemfile / Gemfile.lock        # Dependências Ruby
│
├── _layouts/                     # Layouts partilhados
├── _includes/                    # Componentes reutilizáveis (cartões, listas)
├── _noticias/                    # Coleção de notícias
├── _documentos/                  # Coleção de documentos
├── _inscricoes/                  # Coleção de inscrições ativas
├── _data/                        # Bases de dados geridas pelo CMS
│
├── admin/                        # Painel de administração (Decap CMS)
│
└── assets/
    ├── css/style.css               # Estilos e componentes visuais
    ├── docs/                       # PDFs (documentos, boletins, cerimoniais)
    └── img/
        ├── marca/                   # Logótipos do Agrupamento e do CNE
        ├── jamboree/                 # Logótipos e insígnia do WSJ 2027
        ├── seccoes/                  # Ícones das secções e etapas de progresso
        ├── equipa/                   # Fotografias dos dirigentes
        └── eventos/                  # Fotografias de atividades
```

> O código do formulário de inscrição do Jamboree (Google Apps Script) não está incluído neste repositório — está associado diretamente à Google Sheet que recebe as respostas.

---

## Gerir Conteúdo

A maior parte do conteúdo do site atualiza-se pelo painel em `/admin/`, sem necessidade de editar código:

| Conteúdo | Onde | Notas |
|---|---|---|
| Notícias | `/admin/` → Notícias | Com link direto para outra página, ou texto próprio para gerar uma página nova. As 3 mais recentes aparecem sempre na página inicial. |
| Documentos | `/admin/` → Documentos | O campo "Ano" organiza automaticamente onde aparecem. |
| Inscrições em atividades | `/admin/` → Inscrições | Só as marcadas como "Ativo" aparecem na página de Inscrições. |
| Diário de Bordo da Comunidade | `/admin/` → Páginas do Site | Liga a pastas do Google Drive por ID. |
| Registo de Noites/Horas | `/admin/` → Bases de Dados | Ver nota de privacidade abaixo. |

---

## Guia de Estilo

**Emojis** — para manter consistência, usam-se sempre estes por omissão:

| Conceito | Emoji |
|---|---|
| Documento / PDF | 📄 |
| Download | 📥 |
| Pessoa | 🧑 |
| Grupo / equipa | 👥 |
| Ligação interna | → |
| Ligação externa | ↗️ |
| Campismo | 🏕️ |
| Confirmação | ✓ |

**Tom de voz** — páginas de imaginário (Destaque, ACAGRUP, Vivência) usam linguagem animada e metáforas marítimas; páginas utilitárias (Documentos, formulários) são diretas e claras. Evita-se linguagem de regulamento fora dos blocos que citam diretamente o Regulamento do CNE.

---

## Privacidade dos Dados

O GitHub Pages serve exclusivamente ficheiros estáticos. Isto significa que qualquer informação incluída em `_data/registos.yml` (usado no motor de consulta de Noites de Campo e Horas de Mar, em `escuteiro/registos.md`) é publicamente visível a quem consultar o código-fonte da página, ainda que não apareça diretamente na interface. O acesso por telemóvel e email funciona como um filtro de conveniência, não como autenticação. Recomenda-se cautela na quantidade e sensibilidade dos dados aí incluídos, em particular tratando-se de dados de menores.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável.
Criado por: Ricardo Isaías Serafim.
Colaboração de: Simão Pereira.
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Agrupamento 929 - Belém.

Escutismo Marítimo • Sempre Alerta para Servir
