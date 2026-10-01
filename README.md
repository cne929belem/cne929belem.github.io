# ⚓ CNE 929 Belém — Escuteiros Marítimos

Website oficial do **Agrupamento 929 (Belém)**, do Corpo Nacional de Escutas — Escutismo Católico Português.

🌐 **Site em direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## Sobre

O Agrupamento 929 é um agrupamento de Escutismo Marítimo, sediado em Belém, Lisboa, com atividade nas quatro secções etárias do CNE — Alcateia, Flotilha, Frota e Comunidade. Este repositório contém o código-fonte completo do website do Agrupamento: páginas informativas, formulários de inscrição e o portal de preparação para o 26.º World Scout Jamboree (Polónia, 2027).

---

## Tecnologia

- **[Jekyll](https://jekyllrb.com/)**, compilado automaticamente pelo [GitHub Pages](https://pages.github.com/) a partir deste repositório — sem necessidade de servidor próprio.
- **Layout partilhado** (`_layouts/default.html`): cabeçalho, navegação, rodapé e data de atualização definidos uma única vez.
- **Componentes reutilizáveis** (`_includes/`): navegações de Atividades e Jamboree, contador do Jamboree e cartões de conteúdo.
- **Coleções Jekyll** (`_noticias/`, `_documentos/`, `_inscricoes/`) para conteúdo repetível, mantidas diretamente nos ficheiros deste repositório.
- **Área pessoal**: magic link por Firebase Authentication e leitura do perfil próprio no Firestore. As regras-fonte estão em `firestore.rules`; têm de ser publicadas no projeto Firebase separadamente, porque o GitHub Pages não as aplica.
- **HTML e CSS como base**, com JavaScript para o menu, a homepage e a integração Firebase da área pessoal.
- **Design responsivo**, com uma única folha de estilos (`assets/css/style.css`) a cobrir desktop, tablet e telemóvel, incluindo um menu de navegação recolhível em ecrãs pequenos.

---

## Estrutura do Repositório

Os ficheiros fonte estão organizados por área do site e por tipo de conteúdo:

```text
/
├── index.md                      # Página inicial (gera index.html)
├── em-construcao.md              # Aviso genérico para secções ainda por desenvolver
│
├── agrupamento/                  # Menu "Agrupamento"
│   ├── informacoes.md              # Sobre o Agrupamento, contactos, quotas
│   ├── equipa.md                   # Organigrama e Equipas de Animação
│   ├── documentos.md              # Documentos oficiais, agrupados por ano
│   └── noticias.md                 # Arquivo cronológico de notícias
│
├── escuteiro/                    # Acesso e perfil pessoal
│   ├── acesso.md                   # Pedido de magic link
│   └── area-pessoal.md              # Perfil após autenticação e autorização
│
├── comunidade/                   # Secção IV — Comunidade
│   ├── geral.md                    # Equipa de Animação, uniforme, ligação ao CNE
│   ├── vivencia.md                 # Imaginário, mística, simbologia, progresso e PPV
│   ├── programa.md                 # Programa de atividades da secção
│   └── diario.md                   # Diário de Bordo da Comunidade — arquivo e galeria
│
├── alcateia/                     # Secção I — Lobitos
│   ├── geral.md
│   ├── vivencia.md
│   ├── programa.md
│   └── diario.md
├── flotilha/                     # Secção II — Moços
│   ├── geral.md
│   ├── vivencia.md
│   ├── programa.md
│   └── diario.md
├── frota/                        # Secção III — Marinheiros
│   ├── geral.md
│   ├── vivencia.md
│   ├── programa.md
│   └── diario.md
│
├── atividades/                   # Menu "Atividades"
│   ├── geral.md                    # Índice de atividades e navegação
│   ├── acagrup-2026.md             # Acampamento de Agrupamento 2026
│   ├── promessas26.md              # Galeria de Promessas 2026
│   └── inscricoes.md               # Inscrições atuais e histórico em timeline
│
├── jamboree/                     # Menu "Jamboree 2027"
│   ├── geral.html                  # Datas, local, mapa, contador e acesso ao portal
│   ├── informacoes.html            # Informações da Tropa e do Contingente
│   ├── newsletter.html             # Boletins nacionais e internacionais
│   └── inscricao.html              # Portal de Respostas — inscrição nominal
│
├── _config.yml                   # Configuração do Jekyll e das coleções
├── Gemfile / Gemfile.lock        # Dependências Ruby
│
├── _layouts/                     # Layouts partilhados
├── _includes/                    # Componentes reutilizáveis (navegação de Atividades, Jamboree e Secções, contador, cartões)
├── _noticias/                    # Notícias que alimentam o feed da página inicial
├── _documentos/                  # Coleção de documentos
├── _inscricoes/                  # Entradas opcionais para inscrições abertas
├── firestore.rules               # Regras-fonte da base Firestore
│
└── assets/
    ├── css/style.css               # Estilos e componentes visuais
    ├── js/area-pessoal-firebase.js # Magic link e leitura do perfil autenticado
    ├── docs/                       # PDFs (documentos, boletins, cerimoniais)
    └── img/
        ├── marca/                   # Logótipos do Agrupamento e do CNE
        ├── jamboree/                 # Logótipos e insígnia do WSJ 2027
        ├── seccoes/                  # Ícones das secções e etapas de progresso
        ├── equipa/                   # Fotografias dos dirigentes
        └── atividades/               # Fotografias de atividades
```

> O código do formulário de inscrição do Jamboree (Google Apps Script) não está incluído neste repositório — está associado diretamente à Google Sheet que recebe as respostas.

---

## Gerir Conteúdo

Não existe painel de administração. Para alterar o site, edita os ficheiros fonte neste repositório; para criar uma entrada numa coleção, copia um ficheiro existente da mesma pasta e adapta os campos. As alterações são publicadas pelo GitHub Pages quando chegam ao ramo de publicação.

| Conteúdo | Onde editar | Notas |
|---|---|---|
| Notícias | `_noticias/` | Um Markdown por notícia. A homepage mostra uma notícia em destaque e grupos fixos de 3 laterais; depois do segundo grupo, o link abre `/agrupamento/noticias.html`, que contém o arquivo completo por data. |
| Documentos | `_documentos/` | Criar ou editar um ficheiro Markdown. O campo `ano` determina onde aparece. |
| Inscrições em atividades | `_inscricoes/` | Só entradas com `ativo: true` aparecem como inscrições abertas; cria a pasta quando adicionar a primeira entrada. |
| Diário de Bordo da Comunidade | `comunidade/diario.md` | Os IDs das pastas do Google Drive são definidos no front matter. |

As páginas normais são editadas no respetivo ficheiro `.md` ou `.html`. Para pré-visualizar e compilar localmente:

```sh
bundle install
bundle exec jekyll serve
bundle exec jekyll build
```

### Publicar uma notícia

Cria `_noticias/AAAA-MM-DD-titulo-curto.md` com front matter semelhante a este:

```yaml
---
title: "Título da notícia"
date: 2026-09-30
resumo: "Uma frase curta para o cartão da homepage."
link: /atividades/geral.html
imagem: /assets/img/atividades/fotografia.jpg
autor: "Nome"
funcao: "Dirigente"
prioridade: 0
---
Texto de apoio para o registo editorial.
```

`title`, `date`, `resumo` e `link` são necessários para o feed. `imagem`, `autor`, `funcao` e `prioridade` são opcionais. Usa `prioridade: 1` para marcar a notícia no arquivo e na homepage; se houver várias, a mais recente fica no destaque principal e as restantes mantêm o selo. Sem prioridade, o destaque principal é a notícia mais recente. Otimiza as imagens e guarda-as em `assets/img/`. Links internos começam por `/`; links externos devem usar HTTPS e abrem num novo separador.

O corpo Markdown de cada notícia aparece no arquivo. O campo `link` aponta para a página relacionada, interna ou externa. Recomenda-se editar numa branch, pré-visualizar e abrir pull request para revisão; depois integra-se na branch configurada para publicação. Não é necessário CMS para este fluxo.

### Jamboree 2027

As páginas do Jamboree partilham uma navegação própria e um hero com a identidade oficial do evento e contador decrescente. O **Portal de Respostas** não aparece nessa navegação; o acesso é feito pela página Geral. A página tem `noindex` para reduzir indexação, mas continua pública: não estar no menu nem nos resultados de pesquisa não é controlo de acesso. A validação e as permissões dos dados submetidos têm de existir no Apps Script/Google Sheet.

Na página Geral, as datas e os acessos principais ficam à esquerda e o local, com mapa da Ilha de Sobieszewo em Gdańsk, à direita. A página de Newsletters separa os boletins nacionais dos internacionais em duas colunas, adaptando-se a ecrãs pequenos.

### Secções

Cada secção tem uma barra de navegação própria entre Geral, Vivência, Programa e Diário de Bordo. A I - Alcateia usa amarelo, a II - Flotilha usa verde, a III - Frota usa azul e a IV - Comunidade usa vermelho. As páginas Gerais das três primeiras secções já apresentam as respetivas Equipas de Animação e dois blocos reservados para informação e recursos; as restantes páginas continuam marcadas como “Em construção”.

### Padrão de página (hero + cabeçalho em vidro)

As páginas internas com hero — página inicial, secções, Equipa, Atividades, Área Pessoal, Jamboree e Em Construção — seguem a mesma estrutura:

- `main_class: pagina-com-hero` no front matter, para o `<main>` não herdar o espaçamento das páginas antigas.
- Uma secção com `id="hero"` logo no topo do conteúdo (a página inicial usa um carrossel de fotos; as restantes usam `hero-generico`, um gradiente com o título e subtítulo lá dentro — algumas, como a Comunidade, têm ainda uma variante com a cor e o ícone da própria secção).
- Um `<div class="espaco-hero-generico">` logo a seguir, só para reservar o espaço do hero no fluxo normal da página.
- O cabeçalho (`_layouts/default.html`) fica sempre transparente sobre o hero e passa a vidro sólido assim que se começa a fazer scroll — isto é automático, o script deteta sozinho se a página tem ou não um elemento com `id="hero"`.

Para criar uma página nova com este visual, o mais simples é copiar o topo de uma página já feita (ex.: `atividades/geral.md`) e adaptar o título, o texto e o conteúdo a seguir.

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

O GitHub Pages publica HTML, CSS e JavaScript; não protege páginas. A área pessoal usa Firebase Authentication para confirmar o email e Firestore para carregar `perfis/{uid}`. As regras atuais só permitem a leitura do documento com o UID da sessão autenticada e bloqueiam listagem e escrita. Um perfil só fica disponível depois de o administrador criar o documento correspondente no Firebase. A configuração Web no JavaScript é pública; a segurança depende das regras Firestore, nunca de esconder essa configuração.

As regras em `firestore.rules` são fonte de referência e não são publicadas automaticamente pelo Jekyll. Confirma que as mesmas regras estão publicadas no projeto Firebase. O formulário permite pedir links para qualquer email, mas uma conta sem documento de perfil não lê dados; antes de abrir a todos, testa a autorização com contas aprovadas. A página do Portal de Respostas também é pública, e o backend Apps Script não está versionado aqui, pelo que a validação e o controlo de acesso desse formulário não puderam ser auditados neste repositório.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável.
Criado por: Ricardo Isaías Serafim.
Colaboração de: Simão Pereira.
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Paulo Duarte.

Escutismo Marítimo • Sempre Alerta para Servir
