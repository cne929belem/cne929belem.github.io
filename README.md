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

---

# ⚓ CNE 929 Belém - Escuteiros Marítimos

Bem-vindo ao repositório oficial do website do **Corpo Nacional de Escutas - Agrupamento 929 (Santa Maria de Belém)**. 
Este portal digital foi desenhado para partilhar a vida da nossa alcateia, frota, flotilha e equipagem, e manter todos informados sobre as nossas atividades, como o Jamboree 2027.

🌐 **Website em Direto:** [cne929belem.github.io](https://cne929belem.github.io/)

---

## 🛠️ Funcionalidades do Site

* **Design 100% Responsivo:** O site adapta-se automaticamente a computadores, tablets e telemóveis, garantindo uma excelente experiência de navegação (UX) sem necessidade de fazer scroll excessivo em ecrãs grandes.
* **Menu Dropdown Leve:** Menus de navegação desenvolvidos exclusivamente com CSS (sem JavaScript), o que torna o site extremamente rápido.
* **Feed de Instagram Integrado:** Uma barra lateral (visível em computadores) que puxa automaticamente as últimas publicações do [@929belem](https://www.instagram.com/929belem/) através de um widget da Elfsight.
* **Rodapé Institucional:** Links diretos para os mapas, contactos (com destaque visual), redes sociais em SVG e ligações aos portais oficiais do CNE.
* **Otimização SEO:** Meta-tags configuradas para facilitar a descoberta do agrupamento nos motores de busca (Google, Bing).

🧭 Como Atualizar o Site (Guia Rápido)
Se precisares de fazer alterações no futuro, aqui tens os pontos de referência:

1. Alterar as Cores Oficiais
As cores do site estão todas concentradas no topo do ficheiro assets/css/style.css. Basta mudar o código hexadecimal na zona :root:

CSS
:root {
    --azul-marinho: #003366; 
    --azul-claro: #0056b3;
    /* ... */
}

2. Atualizar o Feed do Instagram
O Instagram é alimentado pelo widget da Elfsight. Se houver algum problema com as fotos:

Acede a elfsight.com e faz login.

Atualiza o widget no painel deles.

Se o código mudar, vai ao index.html, procura a zona <aside class="sidebar-desktop"> e substitui o <script> e a <div> pelo novo código gerado.

3. Substituir Imagens
Para mudares uma imagem (por exemplo, o logótipo), basta fazeres upload do novo ficheiro para a pasta assets/img/ no GitHub e garantires que o nome e a extensão (ex: .jpg ou .png) estão corretos no código HTML.

⚜️ Créditos
Este projeto foi construído à base de HTML5 e CSS3 puros.
Criado por: Ricardo Isaías Serafim em colaboração com os Companheiros (2025-2026).

Escutismo Marítimo • Sempre Alerta para Servir

---

## 📂 Estrutura de Ficheiros

Para manter a organização a bordo, os nossos ficheiros estão estruturados da seguinte forma:

```text
/
├── index.html                # Página principal e estrutura do site
├── README.md                 # Documento de apresentação da estrutura e funcionalidades
└── assets/
    ├── css/
    │   └── style.css         # Todo o design, cores, fontes e responsividade
    └── img/
        ├── Logo929.jpg                   # Logótipo principal 
        ├── Logo929.ico                   # Ícone do separador do browser
        ├── CNE_escuteiros_Maritimos.jpg  # Logo da secção Marítima (Rodapé)
        └── CNE_escuteiros.jpg            # Logo oficial do CNE (Rodapé)
