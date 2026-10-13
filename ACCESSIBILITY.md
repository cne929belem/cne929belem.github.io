# Declaração de Acessibilidade

O **Agrupamento 929 – Belém** quer que o seu site possa ser usado por todos: jovens, famílias, dirigentes e comunidade, incluindo pessoas com deficiência ou que usem tecnologias de apoio. Tal como na Lei do Escuta — *o Escuta é amigo de todos* —, ninguém deve ficar em terra.

## O nosso compromisso

- **Referência:** as [WCAG 2.1](https://www.w3.org/TR/WCAG21/), nível **AA**. O Agrupamento não é uma entidade pública, mas segue voluntariamente este padrão, que é também o de referência em Portugal.
- Cada alteração ao site é verificada com a lista de acessibilidade do modelo de *pull request*.
- As barreiras comunicadas são tratadas como erros, com prioridade.

## O que já fazemos

- Estrutura semântica: cabeçalhos ordenados, `<nav>`, `<main>`, `<footer>` e o idioma da página definido (`lang="pt"`).
- Menu principal com botões reais e `aria-expanded`; botão de menu com nome acessível.
- Acordeões com `<details>`/`<summary>`, operáveis por teclado sem JavaScript.
- Ilustrações decorativas marcadas com `aria-hidden="true"`; a ilustração do rodapé tem título descritivo.
- Design responsivo, pensado para ecrãs a partir de 360 px de largura.
- Na Alcateia, o texto sobre o amarelo da secção usa uma cor escura (`seccao_cor_texto`) para garantir contraste.
- Respeito pela preferência de movimento reduzido (`prefers-reduced-motion`) nas animações principais.

## Ambientes suportados

| Tipo | Versões |
|---|---|
| Navegadores de computador | As duas últimas versões do Chrome, Edge, Firefox e Safari |
| Telemóveis e tablets | Safari em iOS e Chrome em Android, versões atuais |
| Leitores de ecrã (objetivo de teste) | NVDA com Firefox ou Chrome (Windows); VoiceOver com Safari (macOS e iOS) |
| Ampliação | Até 200 % sem perda de conteúdo nem deslocação horizontal |

## Limitações conhecidas

Sabemos destes problemas e estamos a trabalhar neles:

| Área | Limitação | Alternativa até ser corrigido |
|---|---|---|
| **Documentos PDF** (`assets/docs/`) | Muitos PDF não estão etiquetados e são difíceis de ler com leitor de ecrã. | Pede o conteúdo em formato acessível para geral.929@escutismo.pt. |
| **Treino para as Promessas** | Os cartões mudam de pergunta sem anunciar a mudança aos leitores de ecrã (falta uma região `aria-live`). | O mesmo conteúdo está nos temas de texto da página Vivência. |
| **Abas das páginas de Vivência** | As abas antigas («Bando e Cargos», «Etapas e Objetivos» da IV Secção…) não indicam qual está ativa. O novo componente de Progresso já usa `aria-pressed`. | Lê os dois painéis em sequência. |
| **Emojis decorativos** | Alguns títulos usam emojis que os leitores de ecrã leem em voz alta. | — |
| **Galerias do Diário de Bordo** | As fotografias vêm do Google Drive e nem todas têm descrição. | — |
| **Mapa incorporado** | O mapa do Google tem acessibilidade limitada. | A morada está sempre escrita ao lado. |

## Comunicar uma barreira

Se algo no site te impede de aceder a informação ou de concluir uma tarefa:

- abre uma *issue* com o modelo **🐞 Erro no site** e escolhe a categoria «Acessibilidade», **ou**
- escreve para **geral.929@escutismo.pt** com o assunto «Acessibilidade».

Diz-nos a página, o que tentaste fazer, o que aconteceu e, se puderes, o navegador e a tecnologia de apoio que usas. Respondemos em até **10 dias úteis** e, se não for possível corrigir de imediato, enviamos-te a informação noutro formato.

*Última revisão: outubro de 2026.*
