# ⚓ CNE 929 - Belém (Escuteiros Marítimos)

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 - Belém**.
Este portal digital foi desenhado para partilhar a vida da nossa alcateia, frota, flotilha e equipagem, e manter todos informados sobre as nossas atividades (ex: Jamboree 2027, ACAGRUP).

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Arquitetura e Tecnologias

O site foi recentemente atualizado para uma arquitetura moderna, escalável e de fácil manutenção:

* **Gerador de Sites Estáticos (Jekyll):** O GitHub Pages compila o site nativamente usando Jekyll. O cabeçalho, navegação e rodapé estão centralizados num único ficheiro de *Layout*, evitando duplicação de código.
* **Gestor de Conteúdos (Decap CMS):** Integrado via Netlify Identity e Git Gateway. Permite à Chefia editar conteúdos do site (criar notícias, atualizar páginas) através de um editor visual amigável em `/admin/`, sem necessidade de tocar em código.
* **Páginas em Markdown:** As páginas de conteúdo são escritas em `.md`, sendo convertidas automaticamente para HTML pelo Jekyll.
* **Portal de Respostas (Sem JS):** O formulário de inscrição nominal (Jamboree 2027) mantém-se 100% em HTML/CSS nativo, enviando os dados de forma limpa para um Google Apps Script (que por sua vez os guarda numa Google Sheet).

---

## 🧭 Como Atualizar o Site (Chefia / Dirigentes)

Para os utilizadores autorizados, a atualização de texto e imagens é feita de forma visual:

1. Aceder a **[cne929belem.github.io/admin/](https://cne929belem.github.io/admin/)**.
2. Fazer o Login com o e-mail e palavra-passe fornecidos (via Netlify Identity).
3. Utilizar o painel de controlo (Decap CMS) para editar os textos ou adicionar imagens. 
4. Ao clicar em "Publicar", o sistema encarrega-se de atualizar o código automaticamente. O site refletirá as mudanças no espaço de um minuto.

---

## 💻 Como Desenvolver o Site (Equipa Técnica)

Se precisares de alterar o código-fonte, o design (CSS) ou a estrutura (*Layouts*):

### 1. Alterar as Cores Oficiais e Estilos
Tudo está concentrado no ficheiro `assets/css/style.css`, gerido através das variáveis `:root`.

### 2. Alterar o Cabeçalho ou Rodapé
Basta editar o ficheiro `_layouts/default.html`. As alterações refletem-se instantaneamente em todas as páginas do site.

### 3. Atualizar as Perguntas do Portal de Respostas
O formulário de inscrição (`jamboree-inscricao.html`) continua a usar a lógica nativa em HTML/CSS. Sempre que adicionares um campo com um novo `name="..."`, certifica-te de que o mesmo é atualizado no código do Google Apps Script (`AppsScript_Code.gs`) que gere a receção dos dados.

### 4. Testar Localmente (Codespaces)
Para testar alterações de design sem sujar o histórico de *commits*:
1. Abre o repositório no **GitHub Codespaces**.
2. No terminal, instala as dependências se necessário: `bundle install`
3. Arranca o servidor local do Jekyll: `bundle exec jekyll serve --host 0.0.0.0`
4. *(Nota: O login do CMS (`/admin/`) só funciona no domínio público de produção por questões de segurança, não funcionará no endereço provisório do Codespaces).*

---

## 📂 Estrutura de Ficheiros

```text
/
├── _config.yml                      # Configurações globais do Jekyll
├── _layouts/
│   └── default.html                 # Template base (Cabeçalho, Menu, Rodapé)
├── admin/
│   ├── index.html                   # Página de Login do Decap CMS
│   └── config.yml                   # Regras de gestão e mapeamento do CMS
├── assets/
│   ├── css/style.css                # Estilos visuais
│   ├── docs/                        # Ficheiros PDF e documentação
│   └── img/                         # Imagens e logótipos
├── acagrup-2026.md                  # Página do Acampamento de Agrupamento (Markdown)
├── index.html                       # Página principal
├── jamboree-geral.html              # Jamboree 2027 — contador e resumo
├── jamboree-info.html               # Jamboree 2027 — informações logísticas
├── jamboree-news.html               # Jamboree 2027 — boletins
├── jamboree-inscricao.html          # Jamboree 2027 — Portal de Respostas (HTML Puro)
├── em-construcao.html               # Página de aviso para secções vazias
├── .gitignore                       # Ficheiros ignorados pelo Git (ex: pasta _site)
├── AppsScript_Code.gs               # Backend do Portal de Respostas
└── README.md                        # Este documento

⚜️ Créditos
Construído em HTML5 e CSS3, com arquitetura Jekyll e Decap CMS.
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.

Escutismo Marítimo • Sempre Alerta para Servir