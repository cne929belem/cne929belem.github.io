# Política de Segurança

O site do **Agrupamento 929 – Belém** inclui uma Área Pessoal com autenticação e formulários que recolhem dados de crianças e jovens. Levamos a sério qualquer falha de segurança ou de privacidade. Obrigado por nos ajudares a proteger os nossos escuteiros e as suas famílias.

## Versões abrangidas

| Componente | Abrangido |
|---|---|
| Site publicado em `https://cne929belem.github.io` (ramo de publicação) | ✅ |
| Código deste repositório, incluindo `firestore.rules` e `assets/js/` | ✅ |
| Área Pessoal (Firebase Authentication + Firestore) | ✅ |
| Portal de Respostas do Jamboree (Google Apps Script, **fora** deste repositório) | ✅ — reporta na mesma; encaminhamos internamente |
| Teste das Promessas (Google Apps Script em `apps-script/teste-promessas/`) | ✅ |
| Ramos antigos ou de trabalho que não estejam publicados | ❌ |
| Infraestrutura do GitHub, Google ou Firebase | ❌ — reporta diretamente a esses fornecedores |

## Como comunicar uma vulnerabilidade

**Não abras uma *issue* pública.**

1. Usa o botão **Report a vulnerability** no separador **Security** deste repositório (comunicação privada do GitHub), **ou**
2. Envia um email para **geral.929@escutismo.pt** com o assunto `[SEGURANÇA] Site 929`.

Indica, se possível:

- o que encontraste e onde (endereço, ficheiro ou linha);
- os passos para reproduzir;
- o impacto que imaginas (por exemplo, «é possível ler o perfil de outro utilizador»);
- se algum dado pessoal ficou exposto e se o guardaste (não deverias — ver abaixo).

## O que podes esperar

Somos uma equipa de voluntários, mas comprometemo-nos a:

- **confirmar a receção em até 5 dias úteis;**
- dar uma primeira avaliação em até **10 dias úteis**;
- corrigir as falhas graves com prioridade e informar-te quando a correção estiver publicada;
- reconhecer o teu contributo, se o desejares.

## Regras de boa-fé

Não iremos tomar medidas contra quem, de boa-fé:

- comunique a falha de forma privada e nos dê tempo razoável para a corrigir antes de a divulgar;
- **não aceda, descarregue, altere ou partilhe dados de terceiros** além do estritamente necessário para demonstrar o problema;
- não degrade o serviço (sem testes de carga, *spam* ou negação de serviço);
- não recorra a engenharia social contra dirigentes, jovens ou famílias.

## Nota sobre privacidade e dados de jovens

- **Dados reais de associados nunca são guardados no repositório.** As exportações do SIIE e as respostas dos formulários vivem em contas institucionais do Agrupamento, com acesso restrito a quem precisa delas.
- A configuração Web do Firebase que aparece no JavaScript é **pública por natureza**: a proteção depende das regras do Firestore (`firestore.rules`), que só permitem a cada utilizador autenticado, com email verificado, ler o seu próprio perfil, e bloqueiam listagens e escritas. As regras do repositório são a referência; quem mantém o projeto confirma que coincidem com as publicadas no Firebase sempre que mudam.
- Páginas com `noindex` ou fora do menu **não estão protegidas** — continuam públicas. Nada de sensível deve depender de «estar escondido».
- Se encontrares dados pessoais expostos (num ficheiro, numa página ou no histórico do Git), comunica-o de imediato pelos canais acima. Trataremos da remoção, incluindo do histórico, e da avaliação prevista no RGPD.

Para pedidos sobre os teus próprios dados (acesso, retificação, eliminação), consulta a página de [Proteção de Dados](https://cne929belem.github.io/agrupamento/protecao-dados.html).
