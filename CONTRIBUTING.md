# Como contribuir

Obrigado por quereres ajudar a pôr o site do **Agrupamento 929 – Belém** a navegar melhor. Este guia explica quem pode contribuir, como, e que regras seguimos para manter o site coerente com o CNE e com o Escutismo Marítimo.

Ao participar, aceitas o [Código de Conduta](CODE_OF_CONDUCT.md).

---

## Quem pode contribuir

| Quem | Contributo típico |
|---|---|
| **Dirigentes e Equipas de Animação** | Programas, conteúdos de Vivência, Progresso, documentos, notícias. |
| **Companheiros (IV Secção)** | Correções, fotografias de atividades (com consentimento), melhorias técnicas — é uma boa ação de Serviço. |
| **Pais e encarregados de educação** | Avisos de erros, ligações quebradas, sugestões de informação útil. |
| **Comunidade e outros agrupamentos** | Correções técnicas e boas práticas. |

Não precisas de saber programar: uma *issue* bem descrita já é uma grande ajuda.

---

## Três maneiras de ajudar

### 1. Abrir uma *issue* (sem programar)

Vai a **Issues → New issue** e escolhe o modelo:

- **🐞 Erro no site** — algo não funciona, aparece mal ou uma ligação está quebrada.
- **📝 Correção ou atualização de conteúdo** — um texto, data, prova, etapa ou documento está errado ou desatualizado.

Para **falhas de segurança ou dados pessoais expostos**, não abras uma *issue* pública: segue o [SECURITY.md](SECURITY.md).

### 2. Editar diretamente no GitHub (pequenas correções)

1. Abre o ficheiro no GitHub e carrega no ícone do lápis ✏️.
2. Faz a alteração.
3. Em baixo, escolhe **Create a new branch** e escreve uma descrição curta.
4. Carrega em **Propose changes** e abre o *pull request*.

### 3. Trabalhar localmente (alterações maiores)

```sh
git clone https://github.com/cne929belem/cne929belem.github.io.git
cd cne929belem.github.io
git switch -c conteudo/frota-programa-2027   # nome do ramo: tipo/descricao-curta
bundle install
bundle exec jekyll serve                      # abre http://localhost:4000
```

> Se o Jekyll falhar com erros de *encoding* (há ficheiros com acentos em `assets/docs/`), corre antes `export LANG=C.UTF-8 LC_ALL=C.UTF-8`.

Faz `git push` no fim de cada sessão de trabalho — alterações que só existem no teu computador não são vistas por mais ninguém e podem perder-se.

**Prefixos dos ramos:** `conteudo/`, `correcao/`, `funcionalidade/`, `docs/`, `seguranca/`.
**Mensagens de *commit*:** em português, no imperativo e curtas — por exemplo `Corrige a fórmula da Promessa na Adesão ao Movimento`.

---

## Regras de conteúdo

### Língua e tom

- **Português de Portugal**, com o Acordo Ortográfico em vigor.
- Páginas de imaginário (Vivência, atividades) usam linguagem animada e metáforas marítimas; páginas utilitárias (Documentos, Informações) são diretas.
- Os textos dirigidos aos jovens tratam-nos por **tu**.

### Terminologia oficial — Escutismo Marítimo

Usa sempre as designações do Regulamento Geral do CNE (art. 57.º) e do Rumos:

| Secção | Elementos | Unidade | Pequeno grupo | Guia / Sub-Guia | Conselho de Guias |
|---|---|---|---|---|---|
| I | Lobitos | Alcateia | Bando | Guia / Sub-Guia | Conselho de Guias |
| II | Moços | Flotilha | Tripulação | Timoneiro / Sota-Timoneiro | Conselho de Timoneiros |
| III | Marinheiros | Frota | Equipagem | Mestre / Contramestre | Conselho de Mestres |
| IV | Companheiros | Comunidade | Companha | Arrais / 2.º Arrais | Conselho de Arrais |

Outras designações a respeitar: **Largada** (e não «Partida») na IV Secção; atividades típicas **Caçada**, **Expedição**, **Cruzeiro** e **Empreendimento**; Chefe de Alcateia = **Àquêlà**. Não uses as designações terrestres (Exploradores, Pioneiros, Caminheiros, Patrulha, Equipa, Tribo, Clã) para falar das secções do 929.

### Fontes

- Antes de escrever sobre pedagogia, Lei, Promessa, uniformes ou distintivos, confirma nos regulamentos oficiais do CNE (Estatutos, Regulamento Geral, Regulamento de Uniformes, Distintivos e Bandeiras) e no Rumos.
- Não copies conteúdo de outros sites sem verificar — e sem autorização, se o texto não for nosso.
- Quando um conteúdo ainda não estiver confirmado, deixa-o assinalado num comentário `VALIDAR ANTES DE PUBLICAR` no topo do ficheiro, como já se faz nas páginas de Vivência.

### Dados pessoais e fotografias

- **Nunca** coloques no repositório dados reais de associados (exportações do SIIE, contactos, datas de nascimento, saúde). O repositório é público — tudo o que lá entra fica no histórico, mesmo que seja apagado depois.
- Fotografias de crianças e jovens só com consentimento dos encarregados de educação.
- Otimiza as imagens antes de as enviar (idealmente menos de 300 KB).

---

## Regras técnicas (convenções permanentes)

Estas convenções foram decididas pelo Agrupamento e **não se revertem** sem acordo da Direção:

- **Cor da marca: azul** (`--azul-marinho: #003366`, `--azul-claro: #0056b3`), e não o verde do CNE — exceção marítima intencional.
- **Tipografia:** Fustat para o texto e Geologica para os cabeçalhos, carregadas do Google Fonts no layout.
- **Dimensões novas** em `clamp(mín, vw, máx)`, com `vw = píxeis ÷ 1920 × 100` (base de desenho 1920×1080).
- **Páginas com hero:** `main_class: pagina-com-hero`, uma secção com `id="hero"` no topo e `<div class="espaco-hero-generico">` logo a seguir (ver README).
- **`_layouts/default.html`** começa obrigatoriamente com `---` e `---` (front matter vazio).
- **Fotografias da equipa** em `assets/img/equipa/` com o sufixo `_equipa` (ex.: `nome-apelido_equipa.jpg`).
- **`_documentos/`:** o campo `ano` segue o ano escutista do Agrupamento, que não coincide com o ano civil. Não o «corrijas».
- **Dados partilhados** vivem em `_data/`: o Progresso das secções em `_data/progresso.yml` e a «Adesão ao Movimento» em `_data/adesao.yml`. Não voltes a copiar estas listas para dentro das páginas.
- **Acessibilidade:** imagens com `alt` (vazio se forem decorativas), botões reais (`<button>`) para ações, foco visível e contraste suficiente — ver [ACCESSIBILITY.md](ACCESSIBILITY.md).

---

## *Pull requests*

1. Um *pull request* = um assunto.
2. Preenche a lista de verificação do modelo de PR.
3. Junta capturas de ecrã (telemóvel e computador) quando mudares algo visível.
4. A verificação automática compila o site; corrige os erros antes de pedir revisão.
5. Pelo menos uma pessoa da Direção de Agrupamento ou da equipa do site revê e aprova antes da integração no ramo de publicação.

---

## Dúvidas

Escreve para **geral.929@escutismo.pt** com o assunto «Site — contribuições».

*Sempre Alerta para Servir.* ⚓
