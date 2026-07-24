# ⚓ CNE 929 Belém - Escuteiros Marítimos

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 (Belém)**.
Este portal digital foi desenhado para partilhar a vida da nossa alcateia, frota, flotilha e equipagem, e manter todos informados sobre as nossas atividades, como o Jamboree 2027.

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Funcionalidades do Site

* **Design 100% Responsivo:** O site adapta-se automaticamente a computadores, tablets e telemóveis, garantindo uma excelente experiência de navegação (UX) sem necessidade de fazer scroll excessivo em ecrãs grandes.
* **Menu Dropdown Leve:** Menus de navegação desenvolvidos exclusivamente com CSS (sem JavaScript), o que torna o site extremamente rápido.
* **Feed de Instagram Integrado:** Uma barra lateral (visível em computadores) que puxa automaticamente as últimas publicações do [@929belem](https://www.instagram.com/929belem/) através de um widget da Elfsight.
* **Rodapé Institucional:** Links diretos para os mapas, contactos (com destaque visual), redes sociais em SVG e ligações aos portais oficiais do CNE.
* **Otimização SEO:** Meta-tags configuradas para facilitar a descoberta do agrupamento nos motores de busca (Google, Bing).
* **Micro-secção Jamboree 2027:** Três páginas informativas (Geral, Informações, Newsletter) e um Portal de Respostas com inscrição nominal da Tropa 10.
* **Página "Em Construção":** Todos os separadores ainda sem conteúdo próprio (Equipa, Documentos, Notícias, Secções I a IV) apontam para uma página de aviso consistente com o resto do site, em vez de ficarem por preencher ou a apontar para a homepage sem explicação.

---

## 📄 Páginas do Site

| Página | Ficheiro | Descrição |
|---|---|---|
| Início | `index.html` | Página principal, feed de Instagram e destaque para o Jamboree 2027 |
| Jamboree — Geral | `jamboree-geral.html` | Contador, datas, local e botão de entrada no Portal de Respostas |
| Jamboree — Informações | `jamboree-info.html` | Imaginário, insígnia do Contingente, logística, saúde/SfH, Operação de Solidariedade, o que levar |
| Jamboree — Newsletter | `jamboree-news.html` | Boletins nacionais e internacionais para download |
| Jamboree — Portal de Respostas | `jamboree-inscricao.html` | Formulário de inscrição nominal (consentimento RGPD + 8 secções + revisão), com envio para Google Sheets via Apps Script |
| Em Construção | `em-construcao.html` | Página de aviso para onde apontam os separadores ainda vazios |

---

## 📝 Portal de Respostas — como funciona

O `jamboree-inscricao.html` é um formulário estático (sem servidor próprio, como todo o site) que envia as respostas por `fetch()` para um **Google Apps Script** implementado como Aplicação Web, o qual grava cada submissão numa Google Sheet.

* O código do Apps Script está em `AppsScript_Code.gs` (não corre no GitHub Pages — vive à parte, no projeto Apps Script ligado à Sheet).
* Antes de publicar alterações a este formulário, confirma que a constante `SCRIPT_URL`, no topo do `<script>` de `jamboree-inscricao.html`, aponta para o URL de implementação correto.
* Os dados recolhidos incluem categorias especiais (saúde, mobilidade, convicções religiosas) de menores — mantém o acesso à Sheet restrito à Direção do Agrupamento e confirma o texto de consentimento RGPD com alguém responsável por proteção de dados no CNE antes de publicares alterações a este fluxo.

---

## 🧭 Como Atualizar o Site (Guia Rápido)

Se precisares de fazer alterações no futuro, aqui tens os pontos de referência:

### 1. Alterar as Cores Oficiais
As cores do site estão todas concentradas no topo do ficheiro `assets/css/style.css`. Basta mudar o código hexadecimal na zona `:root`:

```css
:root {
    --azul-marinho: #003366;
    --azul-claro: #0056b3;
    /* ... */
}
```

### 2. Atualizar o Feed do Instagram
O Instagram é alimentado pelo widget da Elfsight. Se houver algum problema com as fotos:
1. Acede a elfsight.com e faz login.
2. Atualiza o widget no painel deles.
3. Se o código mudar, vai ao `index.html`, procura a zona `<aside class="sidebar-desktop">` e substitui o `<script>` e a `<div>` pelo novo código gerado.

### 3. Substituir Imagens
Para mudares uma imagem (por exemplo, o logótipo ou a insígnia), basta fazeres upload do novo ficheiro para a pasta `assets/img/` no GitHub e garantires que o nome e a extensão (ex: `.jpg` ou `.png`) estão corretos no código HTML. Evita espaços e acentos nos nomes de ficheiro — podem partir o link no GitHub Pages.

### 4. Ligar uma nova secção (tirar da página "Em Construção")
Quando uma secção (ex.: "Equipa" ou "I - Lobitos") tiver conteúdo pronto:
1. Cria a nova página HTML (podes copiar a estrutura de `jamboree-geral.html` como ponto de partida).
2. Em **todas** as páginas do site, troca o `href="em-construcao.html"` correspondente a essa secção pelo novo ficheiro.

### 5. Atualizar o Portal de Respostas
Para ajustar perguntas do formulário de inscrição, edita o array `SECTIONS` no `<script>` de `jamboree-inscricao.html` — cada campo gera-se automaticamente a partir dessa configuração. Lembra-te de manter a lista `HEADERS` em `AppsScript_Code.gs` sincronizada com os títulos usados (mesma ordem, mesmo texto), para as colunas da Sheet corresponderem.

---

## ⚜️ Créditos

Este projeto foi construído à base de HTML5 e CSS3 puros, com JavaScript no Portal de Respostas.
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).
Insígnia do Contingente Português ao WSJ 2027: João Oliveira.

Escutismo Marítimo • Sempre Alerta para Servir

---

## 📂 Estrutura de Ficheiros

Para manter a organização a bordo, os nossos ficheiros estão estruturados da seguinte forma:

```text
/
├── index.html                       # Página principal e estrutura do site
├── jamboree-geral.html              # Jamboree 2027 — contador e resumo
├── jamboree-info.html               # Jamboree 2027 — informações, insígnia, SfH, Solidariedade
├── jamboree-news.html               # Jamboree 2027 — boletins nacionais e internacionais
├── jamboree-inscricao.html          # Jamboree 2027 — Portal de Respostas (inscrição nominal)
├── em-construcao.html               # Página de aviso para secções ainda vazias
├── AppsScript_Code.gs               # Backend do Portal de Respostas (implementar no Google Apps Script)
├── README.md                        # Este documento
└── assets/
    ├── css/
    │   └── style.css                 # Todo o design, cores, fontes e responsividade
    ├── docs/
    │   ├── Proposta Educativa_Geral.pdf
    │   ├── pt_WSJBoletim 1.pdf
    │   ├── pt_Boletim2_WSJ 2027.pdf
    │   ├── Bulletin 1 EN WSJ2027.pdf
    │   ├── WSJ2027EN Bulletin2.pdf
    │   └── EN Bulletin_3.pdf
    └── img/
        ├── Logo929.jpg                        # Logótipo principal
        ├── Logo929.ico                        # Ícone do separador do browser
        ├── CNE_escuteiros_Maritimos.jpg       # Logo da secção Marítima (Rodapé)
        ├── CNE_escuteiros.jpg                 # Logo oficial do CNE (Rodapé)
        ├── Bravely_Jamboree_27.png            # Destaque do Jamboree na página inicial
        ├── RGB_logo_white_WSJ2027.png         # Logo oficial WSJ 2027 (branco)
        ├── RGB_bravely_short_white_WSJ2027.png # Logótipo "Bravely" (branco)
        └── Insignia_Contingente_WSJ2027.png   # Insígnia do Contingente Português (João Oliveira)
```
