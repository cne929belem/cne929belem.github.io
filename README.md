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
- **Área pessoal em preparação**: o acesso por email e tótem, os dados de percurso e os pedidos de atualização ainda não estão ligados ao Google Drive. A página não contém dados reais; o GitHub Pages não fornece autenticação nem páginas privadas.
- **HTML e CSS puro sempre que possível.** O site evita JavaScript deliberadamente; as exceções (contador do Jamboree, widget do Instagram e preenchimento automático de campos) estão documentadas nos próprios ficheiros onde ocorrem.
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
│   └── documentos.md               # Documentos oficiais, agrupados por ano
│
├── escuteiro/                    # Área pessoal em preparação
│   ├── acesso.md                   # Preparação do pedido de magic link; envio desativado
│   ├── area-pessoal.md              # Protótipo de perfil, não publicado
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
├── _noticias/                    # Coleção de notícias (alimenta o feed da página inicial)
├── _documentos/                  # Coleção de documentos
├── _inscricoes/                  # Ficheiros de inscrições em atividades
├── _data/
│   └── links_uteis.yml             # Links externos (CNE nacional, etc.), editado à mão
│
└── assets/
    ├── css/style.css               # Estilos e componentes visuais
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
| Notícias | `_noticias/` | Cada ficheiro liga a uma página real do site (`link_externo`). A página inicial mostra uma notícia em destaque e até 5 laterais por vez; o botão permite percorrer os restantes grupos. Campos opcionais: `imagem`, `autor`, `funcao` e `prioridade` (força uma notícia a ficar em destaque, independentemente da data). |
| Documentos | `_documentos/` | Criar ou editar um ficheiro Markdown. O campo `ano` determina onde aparece. |
| Inscrições em atividades | `_inscricoes/` | Criar ou editar um ficheiro Markdown; só entradas com `ativo: true` aparecem como inscrições abertas. |
| Diário de Bordo da Comunidade | `comunidade/diario.md` | Os IDs das pastas do Google Drive são definidos no front matter. |
As páginas normais são editadas no respetivo ficheiro `.md` ou `.html`. Confirma a compilação local antes de publicar alterações estruturais.

### Jamboree 2027

As páginas do Jamboree partilham uma navegação própria e um hero com a identidade oficial do evento e contador decrescente. O **Portal de Respostas** não aparece nessa navegação: o acesso é feito exclusivamente através do botão existente na página Geral, para evitar que o formulário nominal seja exposto a visitantes ocasionais.

Na página Geral, as datas e os acessos principais ficam à esquerda e o local, com mapa da Ilha de Sobieszewo em Gdańsk, à direita. A página de Newsletters separa os boletins nacionais dos internacionais em duas colunas, adaptando-se a ecrãs pequenos.

### Secções

Cada secção tem uma barra de navegação própria entre Geral, Vivência, Programa e Diário de Bordo. A I - Alcateia usa amarelo, a II - Flotilha usa verde, a III - Frota usa azul e a IV - Comunidade usa vermelho. As páginas Gerais das três primeiras secções já apresentam as respetivas Equipas de Animação e dois blocos reservados para informação e recursos; as restantes páginas continuam marcadas como “Em construção”.

### Padrão de página (hero + cabeçalho em vidro)

Todas as páginas do redesign — página inicial, secções, Equipa, Atividades, Em Construção — seguem a mesma estrutura:

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

O GitHub Pages serve exclusivamente ficheiros estáticos e não fornece autenticação nem páginas privadas. A página `escuteiro/acesso.md` é apenas uma preparação visual: os campos de email e tótem e o botão estão desativados e não é enviado qualquer email. `escuteiro/area-pessoal.md` contém apenas a interface, sem dados reais; os dados de percurso só devem ser carregados após validação do login no servidor. Para ativar magic links, guardar pedidos de alteração e servir perfis privados será necessário um serviço de backend/autenticação e armazenamento de dados protegido; esconder uma página ou não a ligar ao menu não a torna privada.

---

## ⚜️ Créditos

Construído em HTML5 e CSS3, com JavaScript reduzido ao mínimo indispensável.
Criado por: Ricardo Isaías Serafim.
Colaboração de: Simão Pereira.
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.
Imaginário "O Segredo da Ilha Perdida" (ACAGRUP 2026): Paulo Duarte.

Escutismo Marítimo • Sempre Alerta para Servir
