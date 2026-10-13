# ⚓ CNE 929 Belém — Escuteiros Marítimos

Website oficial do **Agrupamento 929 – Belém**, do Corpo Nacional de Escutas — Escutismo Católico Português (CNE).

🌐 **Site em direto:** [cne929belem.github.io](https://cne929belem.github.io/)
📄 **Licença:** [MIT](LICENSE) · 🤝 [Como contribuir](CONTRIBUTING.md) · 🧭 [Código de Conduta](CODE_OF_CONDUCT.md) · 🔒 [Segurança](SECURITY.md) · ♿ [Acessibilidade](ACCESSIBILITY.md)

---

## Sobre

O Agrupamento 929 é um agrupamento de **Escutismo Marítimo**, sediado na Doca de Recreio de Belém, em Lisboa, com as quatro secções do CNE marítimo:

| Secção | Elementos | Unidade | Idades | Pasta |
|---|---|---|---|---|
| I | Lobitos | Alcateia | 6–10 | `alcateia/` |
| II | Moços | Flotilha | 10–14 | `flotilha/` |
| III | Marinheiros | Frota 98 | 14–18 | `frota/` |
| IV | Companheiros | Comunidade 88 | 18–22 | `comunidade/` |

Este repositório contém o código-fonte completo do site: páginas do Agrupamento e das secções (incluindo a Vivência e o Sistema de Progresso), documentos oficiais, inscrições em atividades, a Área Pessoal dos associados e o portal de preparação para o 26.º World Scout Jamboree (Polónia, 2027).

---

## Tecnologia

- **[Jekyll](https://jekyllrb.com/)**, compilado automaticamente pelo [GitHub Pages](https://pages.github.com/) a partir deste repositório — sem servidor próprio.
- **Layout partilhado** (`_layouts/default.html`): cabeçalho, navegação, rodapé, dados estruturados (JSON-LD) e data de atualização definidos uma única vez.
- **Componentes reutilizáveis** (`_includes/`): navegações, contador do Jamboree, cartões e o acordeão de **Progresso** das secções.
- **Dados partilhados** (`_data/`): etapas do Sistema de Progresso (`progresso.yml`) e perguntas da «Adesão ao Movimento» (`adesao.yml`) — uma só fonte para várias páginas.
- **Coleções Jekyll** (`_noticias/`, `_documentos/`, `_inscricoes/`) para conteúdo repetível.
- **`jekyll-sitemap`**: gera `/sitemap.xml` e `/robots.txt`; as páginas privadas ficam de fora (ver `defaults` no `_config.yml`).
- **Área Pessoal**: *magic link* por Firebase Authentication e leitura do perfil próprio no Firestore. As regras-fonte estão em `firestore.rules` e têm de ser publicadas no Firebase à parte.
- **HTML e CSS como base**, com JavaScript reduzido ao indispensável; uma única folha de estilos (`assets/css/style.css`), responsiva.
- **Verificação automática** (`.github/workflows/verificar-site.yml`): cada *pull request* é compilado e verificado antes da integração.

---

## Começar

**Requisitos:** Ruby 3.x e Bundler.

```sh
git clone https://github.com/cne929belem/cne929belem.github.io.git
cd cne929belem.github.io
bundle install
bundle exec jekyll serve      # pré-visualização em http://localhost:4000
bundle exec jekyll build      # compila para _site/
```

> Há ficheiros com acentos em `assets/docs/`. Se o Jekyll falhar com um erro de *encoding*, corre antes `export LANG=C.UTF-8 LC_ALL=C.UTF-8`.

A publicação acontece quando as alterações chegam ao ramo configurado no GitHub Pages. Trabalha sempre num ramo próprio, abre um *pull request* e faz `git push` no fim de cada sessão — ver [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Estrutura do Repositório

```text
/
├── index.md                      # Página inicial
├── 404.html                      # Página «Fora de rota» (endereço inexistente)
├── em-construcao.md              # Aviso genérico para páginas ainda por desenvolver
│
├── agrupamento/                  # Menu "Agrupamento"
│   ├── informacoes.md              # Sobre o Agrupamento, contactos, quotas
│   ├── historia.md                 # A nossa história
│   ├── equipa.md                   # Organigrama e Equipas de Animação
│   ├── documentos.md               # Documentos oficiais, agrupados por ano escutista
│   ├── noticias.md                 # Arquivo cronológico de notícias
│   └── protecao-dados.md           # Proteção de dados
│
├── alcateia/  flotilha/  frota/  comunidade/   # Uma pasta por secção:
│   ├── geral.md                    #   Equipa de Animação, uniforme, recursos
│   ├── vivencia.md                 #   Imaginário, mística, simbologia, Progresso, Treino para as Promessas
│   ├── programa.md                 #   Programa de atividades
│   └── diario.md                   #   Diário de Bordo — arquivo e galeria
│
├── atividades/                   # Menu "Atividades" (índice, ACAGRUP, Promessas, inscrições)
├── escuteiro/                    # Área Pessoal (acesso por magic link e perfil)
├── jamboree/                     # Menu "Jamboree 2027"
│   ├── geral.html                  # Datas, local, mapa, contador e acesso ao portal
│   ├── informacoes.html            # Informações da Tropa e do Contingente
│   ├── newsletter.html             # Boletins nacionais e internacionais
│   └── inscricao.html              # Portal de Respostas — inscrição nominal
│
├── _config.yml                   # Configuração, coleções, plugins, exclusões
├── _layouts/default.html         # Layout partilhado
├── _includes/                    # Componentes (inclui vivencia-progresso.html e json-ld.html)
├── _data/                        # progresso.yml · adesao.yml
├── _noticias/  _documentos/  _inscricoes/   # Coleções
├── firestore.rules               # Regras-fonte do Firestore (não publicadas pelo Jekyll)
├── Gemfile / Gemfile.lock        # Dependências Ruby
│
├── assets/
│   ├── css/style.css               # Estilos e componentes visuais
│   ├── js/area-pessoal-firebase.js # Magic link e leitura do perfil autenticado
│   ├── docs/                       # PDFs (documentos, boletins, cerimoniais, uniformes)
│   └── img/                        # marca/, seccoes/, equipa/, atividades/, jamboree/, carrossel/, elementos/
│
├── .github/
│   ├── ISSUE_TEMPLATE/             # Modelos: erro no site · correção de conteúdo
│   ├── pull_request_template.md    # Lista de verificação dos PR
│   └── workflows/verificar-site.yml
│
├── README.md · CONTRIBUTING.md · CODE_OF_CONDUCT.md · SECURITY.md · ACCESSIBILITY.md · AUDITORIA.md
└── LICENSE
```

> Os ficheiros de governação (`*.md` na raiz), `LICENSE`, `firestore.rules` e `.github/` estão em `exclude` no `_config.yml`: vivem no repositório mas não são publicados no site.
>
> O código do formulário de inscrição do Jamboree (Google Apps Script) não está neste repositório — está associado à Google Sheet que recebe as respostas.

---

## Gerir Conteúdo

Não existe painel de administração: edita-se diretamente nos ficheiros. Para criar uma entrada numa coleção, copia um ficheiro existente da mesma pasta e adapta os campos.

| Conteúdo | Onde editar | Notas |
|---|---|---|
| Notícias | `_noticias/` | Um Markdown por notícia (ver abaixo). |
| Documentos | `_documentos/` | O campo `ano` segue o **ano escutista** do Agrupamento, não o ano civil. |
| Inscrições em atividades | `_inscricoes/` | Só entradas com `ativo: true` aparecem como abertas. |
| Etapas do Progresso (I–III) | `_data/progresso.yml` | Etapas, leituras marítimas e «Competências a Bordo». O componente é `_includes/vivencia-progresso.html`. |
| Perguntas da «Adesão ao Movimento» | `_data/adesao.yml` | Lista única usada pela Flotilha, Frota e Comunidade 88. |
| Perguntas de cada secção | `*/vivencia.md` (no `<script>`) | Lista `perguntasSeccao` (ou `perguntasAlcateia`). |
| Diário de Bordo | `*/diario.md` | Os IDs das pastas do Google Drive estão no front matter. |

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

Cada secção tem uma navegação própria (Geral, Vivência, Programa, Diário de Bordo) e uma cor definida no front matter de cada página (`seccao_cor` e, na Alcateia, `seccao_cor_texto` para o texto sobre o amarelo). As páginas de **Vivência** das quatro secções têm a mesma estrutura de acordeões; o tema **📖 Progresso** das I–III usa o componente partilhado e o da IV Secção mantém o «Progresso e PPV». Conteúdos ainda por confirmar estão assinalados no comentário `VALIDAR ANTES DE PUBLICAR` no topo de cada página.

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

**Terminologia** — usa sempre as designações do Escutismo Marítimo (Tripulação, Equipagem, Companha, Timoneiro, Mestre, Arrais, Largada…). A tabela completa está no [CONTRIBUTING.md](CONTRIBUTING.md#terminologia-oficial--escutismo-marítimo).

---

## Privacidade dos Dados

O GitHub Pages publica HTML, CSS e JavaScript; não protege páginas. A área pessoal usa Firebase Authentication para confirmar o email e Firestore para carregar `perfis/{uid}`. As regras atuais só permitem a leitura do documento com o UID da sessão autenticada e bloqueiam listagem e escrita. Um perfil só fica disponível depois de o administrador criar o documento correspondente no Firebase. A configuração Web no JavaScript é pública; a segurança depende das regras Firestore, nunca de esconder essa configuração.

As regras em `firestore.rules` são fonte de referência e não são publicadas automaticamente pelo Jekyll. Confirma que as mesmas regras estão publicadas no projeto Firebase. O formulário permite pedir links para qualquer email, mas uma conta sem documento de perfil não lê dados; antes de abrir a todos, testa a autorização com contas aprovadas. A página do Portal de Respostas também é pública, e o backend Apps Script não está versionado aqui, pelo que a validação e o controlo de acesso desse formulário não puderam ser auditados neste repositório.

Para comunicar uma falha de segurança, segue o [SECURITY.md](SECURITY.md) — nunca uma *issue* pública.

---

## Contribuir

Contribuições de dirigentes, Companheiros, pais e comunidade são bem-vindas. Lê o [CONTRIBUTING.md](CONTRIBUTING.md), respeita o [Código de Conduta](CODE_OF_CONDUCT.md) e usa os modelos de *issue* e de *pull request*.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável.
Criado por: Ricardo Isaías Serafim.
Colaboração de: Simão Pereira.
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Paulo Duarte.

Escutismo Marítimo • Sempre Alerta para Servir ⚓

Distribuído sob a [licença MIT](LICENSE).
