# Auditoria comparativa — 929 Belém (marítimo) × 80 Belém (terrestre)

*Outubro de 2026 · referência: `AfonsoBenedito/cne80belem` (ramo `main`) · alvo: `cne929belem/cne929belem.github.io`*

---

## Parte 1 — Gap Analysis e oportunidades

### 1.1 Arquiteturas comparadas

| | 80 Belém | 929 Belém |
|---|---|---|
| Stack | React + Vite (SPA), CSS Modules, testes Vitest, deploy por GitHub Actions | Jekyll (GitHub Pages nativo), HTML/CSS, JS mínimo, Firebase na Área Pessoal |
| Conteúdo | Ficheiros JS em `src/config/` | Markdown, coleções e `_data/` |
| Provas | `provas.js` + `provasContent.js`: **Adesão ao Movimento** (9) e **Adesão à Secção** (8 por secção), uma página por prova | «🏆 Treino para as Promessas» (cartões) nas 4 páginas de Vivência |

**Conclusão-chave:** as «provas» do 80 são provas de **adesão** (pré-Promessa), não o Sistema de Progresso. O 929 já tinha o equivalente funcional. A lacuna real do 929 era o **Sistema de Progresso das I, II e III Secções**, marcado como «🚧 Em breve».

### 1.2 Tabela de Gap Analysis

| Funcionalidade no 80 Belém | Pertinência no 929 | Valor para o Agrupamento, famílias, jovens e Equipas de Animação | Estado neste pacote |
|---|---|---|---|
| Progressão estruturada por secção | **Alta** | Os jovens veem o caminho que têm pela frente; os pais percebem o que é «passar de etapa»; as Equipas de Animação ganham uma referência comum. | ✅ Componente de Progresso nas I–III |
| Conteúdo de adesão revisto e centralizado | **Alta** | A lista partilhada tinha erros factuais repetidos em 3 páginas (ver 2.3). | ✅ `_data/adesao.yml` corrigido |
| Página 404 própria | **Alta** | Hoje um endereço errado mostra a página genérica do GitHub, sem caminho de volta. | ✅ `404.html` |
| `sitemap.xml` e `robots.txt` | **Alta** | Melhor indexação; as páginas privadas ficam fora do sitemap. | ✅ `jekyll-sitemap` + `defaults` |
| Ficheiros de governação fora do site | **Alta** (técnica) | No GitHub Pages, `.md` sem front matter viram páginas públicas — o README e os novos documentos seriam publicados. | ✅ `exclude` no `_config.yml` |
| Página Notícias | — | Mantém-se o título «Notícias» no menu e na página. | Sem alterações |
| Dados estruturados (JSON-LD) | **Média** | Nome, logótipo e contactos corretos nos motores de busca. | ✅ Página inicial |
| Verificação automática de PR (CI) | **Média** | Evita publicar um site que não compila ou com ligações quebradas. | ✅ `verificar-site.yml` |
| «Escada etária» das secções na página inicial | **Média** | Responde à pergunta mais comum dos pais: «em que secção fica o meu filho?» | Recomendado |
| Página «Contactos» dedicada | Baixa | Já coberto pelo rodapé e por Informações. | — |
| Direção / Dirigentes em páginas separadas | Baixa | Já coberto por Equipa. | — |
| Arquivo histórico de programas (desde 1997) | Baixa | Valor de memória, custo de manutenção alto. | — |
| Página por notícia com galeria (*lightbox*) | **Descartado** | Contraria a decisão `noticias: output: false` (evitar páginas órfãs). | — |
| Subscrição de newsletter no rodapé | **Descartado** (por agora) | Exige *backend*, consentimento RGPD e gestão de listas. | — |

### 1.3 Recomendações imediatas (alto impacto, baixo esforço)

1. **Largada, não Partida.** O Regulamento Geral (art. 57.º, n.º 12, al. m) determina que, nos marítimos, *a Partida designa-se Largada*. A Vivência da Comunidade 88 usa «4. A Partida» e os PDFs chamam-se `partida_*.pdf`. Rever com a Equipa de Animação da IV.
2. **README desatualizado** — cores das secções e páginas «em construção». ✅ Atualizado neste pacote.
3. **Nomear os conselhos na Frota.** A Vivência descreve os conselhos sem os nomear; o Regulamento Geral chama-lhe **Conselho de Mestres**.
4. **Insígnias das etapas I–III.** Carregar as imagens oficiais em `assets/img/seccoes/` e preencher o campo `imagem` em `_data/progresso.yml` (hoje aparece um emoji).
5. **Guias de objetivos educativos das I–III.** A IV tem `PostersFaceis_IV.pdf`; quando existirem os das outras secções, basta preencher `objetivos_documento` no YAML.
6. **Escada etária** na página inicial (secção, idades, cor do lenço e ligação) — próximo passo sugerido.
7. **PDFs acessíveis** — ver limitações em `ACCESSIBILITY.md`.

---

## Parte 2 — Arquitetura do Sistema de Provas e Progresso

### 2.1 Mapeamento terrestre → marítimo

| | I — Alcateia | II — Flotilha | III — Frota | IV — Comunidade |
|---|---|---|---|---|
| Terrestre (80) | Lobitos · Bando | Exploradores · Patrulha | Pioneiros · Equipa | Caminheiros · Tribo/Clã |
| **Marítimo (929)** | **Lobitos · Bando** | **Moços · Tripulação** | **Marinheiros · Equipagem** | **Companheiros · Companha** |
| Guia / Sub-Guia | Guia / Sub-Guia | Timoneiro / Sota-Timoneiro | Mestre / Contramestre | Arrais / 2.º Arrais |
| Conselho de Guias | Conselho de Guias | Conselho de Timoneiros | Conselho de Mestres | Conselho de Arrais |
| Distinção dos grupos | Cor | Totem (animal marinho) | Patrono (preferência náutica) | Patrono |
| Patrono · Mística | S. Francisco · Louvor ao Criador | S. Tiago · Descoberta da Terra Prometida | S. Pedro · A Igreja em construção | S. Paulo · A Vida no Homem Novo |
| Atividade típica | Caçada | Expedição | Cruzeiro | Empreendimento |
| **Etapas** | Pata-Tenra · Lobo Valente · Lobo Cortês · Lobo Amigo ⚠️ | Apelo · Aliança · Rumo · Descoberta | Desprendimento · Conhecimento · Vontade · Construção | Caminho · Comunidade · Serviço · Largada |
| Leitura marítima | Cótique, a Foca Branca | Descobrimentos | S. Pedro pescador | A Barca (Rumos) |

⚠️ Os nomes das etapas da I Secção têm de ser confirmados no manual de secção em vigor (os documentos do projeto só confirmam «pata-tenra»).

Fontes: Regulamento Geral do CNE (art. 3.º, 4.º, 57.º, 60.º e 64.º), Regulamento de Uniformes (art. 9.º, 10.º e Anexo 1), Rumos (Escutismo Marítimo) e quadro comparativo das secções marítimas.

### 2.2 Adesão à Secção — cobertura das 8 provas do 80 nos cartões do 929

| Prova (80 Belém) | Alcateia | Flotilha | Frota | Comunidade |
|---|---|---|---|---|
| 1. Organização da secção | ✅ | ✅ | ✅ | ✅ |
| 2. Cargos no pequeno grupo | ➕ novo cartão | ✅ | ✅ | ❌ |
| 3. Símbolos e mística | ✅ | ✅ | ✅ | ✅ |
| 4. Patrono da secção e do grupo | ✅ | ✅ (Totem) | ➕ novo cartão (Patrono da Equipagem) | ⚠️ só o da secção |
| 5. Viver em grupo | ✅ | ✅ | ✅ | ✅ |
| 6. Atividade típica | ✅ | ✅ | ✅ | ✅ |
| 7. Etapas do progresso | ➕ novo cartão | ➕ novo cartão | ➕ novo cartão | ✅ |
| 8. Projetos existentes para a secção | ❌ | ❌ | ❌ | ❌ |

A prova 8 fica para as Equipas de Animação: depende dos projetos regionais e nacionais em curso, que não constam dos documentos do projeto.

### 2.3 Correções na «Adesão ao Movimento» (lista partilhada)

| N.º | Antes | Depois | Fonte |
|---|---|---|---|
| 1 | CNE fundado por «D. António Mendes Belo» | Fundado em Braga, a 27/05/1923, por D. Manuel Vieira de Matos e Dr. Avelino Gonçalves | História do CNE |
| 2 | «Juntas Regionais (distritos)»; Direção sem os Chefes de Unidade | Regiões correspondem, em princípio, às dioceses; Direção inclui os Chefes de Unidade | Reg. Geral (art. 60.º e Regiões) |
| 3 | Sinal «Missão Cumprida» | Sinal de pista «Fui para casa» | Tradição escutista |
| 4 | Princípios da OMME; Lei parafraseada | Os 3 Princípios do CNE e a Lei com o texto oficial | Reg. Geral, art. 3.º |
| 7 | «Triângulos» nas mangas | Losango com flor de lis e cruz; cor = nível, cruz = função | Reg. Uniformes, art. 10.º e Anexo 1 |
| 9 | «…para com Deus e para com a minha Pátria; auxiliar o meu próximo…» | «…para com Deus, a Igreja e a Pátria; auxiliar o meu semelhante…» | Reg. Geral, art. 3.º |
| 10 | Nós genéricos | Nós de bordo: lais de guia, escota, volta do fiel, direito e oito | Adaptação marítima |
| 11 | Só campismo | Segurança na água (colete, natação) + campismo | Rumos / Escutismo para Rapazes |

Nota: o 80 Belém tem o mesmo erro sobre a fundação do CNE. O conteúdo de referência não deve ser copiado sem verificação.

### 2.4 Plano de integração técnica

| Ficheiro | Ação | Paridade com a IV Secção |
|---|---|---|
| `_data/progresso.yml` | **Novo** | Etapas, leituras, objetivos e «Competências a Bordo» das I–III |
| `_includes/vivencia-progresso.html` | **Novo** | Mesmas classes (`.acordeao.azul`, `.abas-botoes`, `.progresso-*`, `.ppv-*`), mesmas cores de etapa (cinzento → bronze → prata → ouro), duas abas |
| `_data/adesao.yml` | **Novo** | Fonte única da «Adesão ao Movimento» |
| `alcateia/`, `flotilha/`, `frota/vivencia.md` | Alterados | Novo tema «📖 Progresso» após «A Vida da…»; «Em breve» reduzido aos cerimoniais; novos cartões; dados de `_data/` |
| `comunidade/vivencia.md` | Alterado | Só a fonte da «Adesão ao Movimento»; markup intocado |
| `frota/vivencia.md` | Alterado | «Contra-Mestre» → «Contramestre» (Reg. Geral, art. 57.º); cores lidas de `seccao_cor` via `--cor-vivencia`, como na Alcateia e na Flotilha |

**Diferença deliberada face à IV:** a 2.ª aba é «Competências a Bordo» (natação e colete, nós de bordo, remo e vela, conservação, RIEAM, carta náutica), e não o PPV, que é exclusivo da IV Secção. Estas competências são uma proposta do Agrupamento, não requisitos oficiais de etapa.

**Melhorias de acessibilidade no componente:** `<button type="button">`, `aria-controls` e `aria-pressed`, painéis com `hidden` e foco visível. O componente não depende das variáveis CSS de cada página (a Frota não define `--cor-vivencia`).

### 2.5 Validações pendentes (Equipas de Animação)

- [ ] Nomes das etapas da I Secção.
- [ ] Leituras marítimas e textos das etapas (I–III).
- [ ] «Competências a Bordo» adequadas à realidade do Agrupamento (embarcações, sítios de navegação, seguro).
- [ ] «Largada» na IV Secção.


### 2.6 Fora do âmbito deste pacote

- **Jamboree 2027:** nenhum ficheiro da pasta `jamboree/` foi alterado e nenhuma regra de configuração se aplica a ela. As páginas compiladas do Jamboree são idênticas, byte a byte, às atuais.
- **Notícias:** título e página sem alterações.
