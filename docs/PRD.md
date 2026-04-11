# PRD , EscopoCerto ✅

> "O que o cliente espera é o que será entregue."

**Versão:** 1.0  
**Data:** Abril 2026  
**Autor:** Eduardo de Castro Fischer  
**Status:** Em desenvolvimento  

---

## 1. Visão do Produto

### 1.1 Problema Central

Software houses e consultorias de tecnologia enfrentam um problema recorrente e custoso: o gap entre o que o cliente descreveu na reunião comercial e o que o time técnico entendeu e desenvolveu.

Esse desalinhamento acontece porque o processo de captura de requisitos é informal, dependente da memória e da interpretação do comercial, sem padronização, sem registro estruturado e sem validação técnica antes do projeto começar. O resultado é retrabalho, insatisfação do cliente, estouros de prazo e perda de margem.

Além disso, a geração de propostas técnicas é lenta. O comercial sai da reunião com o cliente, liga para o tech lead, aguarda análise, recebe um número de horas e custo dias depois. Nesse intervalo, o cliente já pode ter fechado com outro fornecedor.

### 1.2 Solução Proposta

O EscopoCerto é uma plataforma web que permite ao comercial registrar o briefing do cliente em linguagem natural, diretamente durante ou após a reunião. A partir desse briefing, a IA, alimentada por uma base de conhecimento real de projetos anteriores via RAG, gera automaticamente um escopo preliminar com estimativa de squad, horas e custo.

O escopo gerado é revisado pelo comercial e enviado ao supervisor técnico para aprovação via link seguro e tokenizado. Todo o processo é registrado, versionado e auditável.

O resultado é um processo comercial mais rápido, mais padronizado e com muito menos espaço para interpretações divergentes.

### 1.3 Lema e Posicionamento

> "O que o cliente espera é o que será entregue."

O EscopoCerto não é uma ferramenta de geração de propostas genéricas. É um sistema de alinhamento entre comercial e técnico, onde a IA atua como ponte entre a linguagem do cliente e a linguagem do time de desenvolvimento.

### 1.4 Público-Alvo

Software houses, consultorias de tecnologia e agências digitais com times comerciais ativos e squads de desenvolvimento internos. O sistema é especialmente relevante para empresas que atendem múltiplos clientes simultaneamente e precisam padronizar e acelerar o processo de escopo sem perder qualidade técnica.

### 1.5 Métricas de Sucesso

| Métrica | Descrição |
|---|---|
| Tempo de geração de escopo | Redução de dias para minutos |
| Taxa de retrabalho por gap de escopo | Redução estimada de 40% |
| Tempo de aprovação pelo supervisor | Redução por processo assíncrono |
| Briefings registrados por semana | Volume de uso da plataforma |
| Taxa de aprovação na primeira versão | Qualidade da geração da IA |

## 2. Personas

### 2.1 Persona 1, O Comercial

**Nome fictício:** Carlos Mendes  
**Cargo:** Executivo de Contas  
**Idade:** 32 anos  

**Contexto:**  
Carlos é o ponto de contato entre a software house e os clientes. Ele conduz reuniões de levantamento, entende o problema do cliente e precisa transformar essa conversa em algo concreto para o time técnico. Não tem formação técnica aprofundada, mas conhece bem o portfólio de serviços da empresa.

**Dores:**  
- Depende do tech lead para gerar qualquer estimativa, o que atrasa a proposta
- Não tem um processo padronizado para registrar o que o cliente pediu
- Já perdeu negócios porque a proposta demorou dias para chegar
- Fica sem resposta quando o cliente pergunta "quanto vai custar e quanto tempo leva?"

**O que ele precisa:**  
Registrar o briefing rapidamente, receber uma estimativa preliminar na hora e ter algo concreto para apresentar ao supervisor sem depender de uma reunião técnica imediata.

**Como usa o EscopoCerto:**  
Durante ou logo após a reunião com o cliente, abre o sistema, preenche o briefing em linguagem natural e aguarda o escopo gerado pela IA. Revisa, ajusta se necessário, e envia para aprovação do supervisor com um clique.

---

### 2.2 Persona 2, O Supervisor Técnico

**Nome fictício:** Marcela Souza  
**Cargo:** Tech Lead / Gerente de Projetos  
**Idade:** 35 anos  

**Contexto:**  
Marcela é responsável por validar a viabilidade técnica das propostas antes de elas chegarem ao cliente. Ela conhece a capacidade dos squads, as tecnologias disponíveis e os projetos em andamento. Seu tempo é escasso e ela odeia ser interrompida para análises que poderiam ser assíncronas.

**Dores:**  
- Recebe pedidos de estimativa por WhatsApp, e-mail e reunião ao mesmo tempo, sem padronização
- Não tem histórico centralizado das propostas que já avaliou
- Às vezes aprova algo sem todas as informações necessárias porque o comercial não registrou direito

**O que ela precisa:**  
Receber um resumo estruturado e completo do briefing, com escopo e estimativa já gerados, para avaliar, ajustar se necessário e aprovar ou recusar de forma rápida e rastreável.

**Como usa o EscopoCerto:**  
Recebe um e-mail com link seguro, acessa a tela de aprovação, visualiza o escopo gerado pela IA, adiciona comentário se precisar ajustar, e registra sua decisão. Tudo sem precisar entrar no sistema com login próprio.

---

### 2.3 Persona 3, O Cliente Final

**Nome fictício:** Roberto Alves  
**Cargo:** Diretor de Operações  
**Idade:** 44 anos  

**Contexto:**  
Roberto não usa o EscopoCerto diretamente. Ele é o motivo pelo qual o sistema existe. É ele quem descreveu o problema para o Carlos na reunião, e é a expectativa dele que o sistema precisa capturar com precisão.

**Relevância para o produto:**  
O sucesso do EscopoCerto é medido pela distância entre o que Roberto descreveu e o que foi desenvolvido. Quanto menor esse gap, mais o sistema está cumprindo seu propósito.

**Não usa o sistema, mas impacta:**  
- A qualidade do briefing que o Carlos registra
- O nível de detalhe que a IA consegue processar
- A satisfação final com o projeto entregue

## 3. Escopo do Produto

### 3.1 O que está dentro do escopo (v1)

- Autenticação de usuários com perfis distintos (comercial)
- Criação e envio de briefings em linguagem natural
- Processamento do briefing via RAG com base de conhecimento fictícia
- Integração com Claude API (Anthropic) para geração de escopo via linguagem natural
- Arquitetura RAG com base de conhecimento vetorial (pgvector via Supabase) para respostas fundamentadas em projetos reais
- Geração de embeddings via OpenAI Embeddings API para indexação da base de conhecimento
- Prompt Engineering estruturado para geração consistente de escopo, squad e estimativas
- Tratamento de respostas não determinísticas da IA com validação de schema antes de persistir no banco
- Geração automática de escopo, squad sugerido, horas estimadas, custo e viabilidade
- Revisão do escopo gerado pelo comercial antes do envio
- Versionamento de escopo por geração (v1, v2, v3...)
- Envio de e-mail automático ao supervisor via Gmail API
- Link de aprovação seguro com token UUID (hash + expiração 48h + uso único)
- Tela de aprovação para o supervisor, sem necessidade de login
- Registro de decisão com comentário (aprovar, ajustar, recusar)
- Log de auditoria por briefing (quem, quando, o quê)
- Atualização de status do briefing em tempo real
- Histórico completo de briefings para o comercial
- Dashboard com resumo de briefings por status
- Tratamento de falha na IA com fallback, retry automático e flag no banco
- Landing page institucional do produto

### 3.2 O que está fora do escopo (v1)

| Item | Justificativa |
|---|---|
| Login próprio para o supervisor | Aumenta complexidade sem ganho real na v1. Token UUID resolve com segurança |
| Integração com CRM externo | Fora do escopo de portfólio, pode entrar na v2 |
| Geração automática de contrato | Etapa posterior à aprovação, não faz parte do fluxo central |
| Pagamento ou faturamento | Fora do contexto do produto |
| App mobile | Web responsivo atende a demanda da v1 |
| Múltiplos idiomas | Produto focado no mercado brasileiro na v1 |
| Parsing de e-mail de resposta do supervisor | Complexidade de infraestrutura alta, aprovação interna resolve 
| Fine-tuning ou treinamento de modelo próprio | RAG com base de conhecimento resolve o problema sem custo e complexidade de treinar modelo |

### 3.3 Evoluções futuras

**v2, curto prazo:**
- Login próprio para o supervisor com histórico de aprovações
- Integração com CRM via webhook (RD Station, HubSpot)
- Comparação visual entre versões de escopo
- Notificação interna no dashboard quando supervisor decidir
- Dashboard administrativo com métricas de conversão

**v3, médio prazo:**
- Parsing de e-mail de resposta do supervisor (fluxo bidirecional)
- Integração com ferramentas de gestão de projetos (Jira, Trello)
- Geração automática de proposta comercial em PDF
- Módulo de templates de escopo por segmento de cliente
- API pública para integração com sistemas externos

## 4. Funcionalidades , Requisitos Funcionais

### 4.1 Módulo de Autenticação

- O sistema deve permitir cadastro e login de usuários com e-mail e senha
- A senha deve ser armazenada com hash bcrypt, nunca em texto puro
- O sistema deve gerar um token JWT a cada login com expiração configurável
- O sistema deve invalidar a sessão ao expirar o token
- O sistema deve diferenciar perfis de acesso (comercial)
- Rotas protegidas devem retornar erro 401 para requisições sem token válido

### 4.2 Módulo de Briefing

- O comercial deve conseguir criar um novo briefing a partir do dashboard
- O formulário de briefing deve conter os seguintes campos:
  - Nome do cliente (texto, obrigatório)
  - Segmento de atuação (texto, obrigatório)
  - Descrição do problema em linguagem natural (texto longo, obrigatório)
  - Prazo esperado pelo cliente (data, obrigatório)
  - Orçamento aproximado (valor, opcional)
- O sistema deve validar todos os campos obrigatórios antes de processar
- O sistema deve sanitizar todos os inputs contra XSS e SQL Injection
- O briefing deve ser salvo com status "rascunho" antes do processamento
- O comercial deve conseguir visualizar, editar e excluir briefings em rascunho

### 4.3 Módulo de Processamento IA (RAG)

- Ao submeter o briefing, o sistema deve atualizar o status para "processando"
- O sistema deve buscar na base de conhecimento via pgvector os projetos mais similares ao briefing
- O sistema deve montar o prompt com o briefing mais o contexto recuperado e enviar para a Claude API
- A Claude API deve retornar um escopo estruturado contendo:
  - Escopo preliminar descritivo
  - Squad sugerido (perfis e quantidade)
  - Horas estimadas por perfil
  - Custo estimado total
  - Nível de viabilidade (alta, média, baixa)
  - Observações e riscos identificados
- O sistema deve validar o schema da resposta antes de persistir no banco
- Em caso de resposta inválida ou timeout (máximo 10s), o sistema deve tentar novamente até 2 vezes
- Após 2 tentativas sem sucesso, o sistema deve salvar o briefing com flag "falha_geracao" e status "falha"
- O sistema deve exibir mensagem clara ao comercial em caso de falha, sem expor erro técnico
- Cada geração bem-sucedida deve criar uma nova versão do escopo (v1, v2, v3...)

### 4.4 Módulo de Revisão

- Após a geração, o comercial deve visualizar o escopo completo na tela de detalhe do briefing
- O comercial deve conseguir visualizar o histórico de versões do escopo
- O comercial deve conseguir reprocessar o briefing para gerar uma nova versão
- O sistema deve indicar claramente qual é a versão mais recente
- O comercial só deve conseguir enviar para aprovação a versão mais recente

### 4.5 Módulo de Notificação

- Ao enviar para aprovação, o sistema deve gerar um token UUID v4 único para aquele briefing
- O token deve ser armazenado como hash no banco, nunca em texto puro
- O token deve ter expiração de 48 horas a partir da geração
- O token deve ser de uso único, invalidado após o primeiro acesso válido
- O sistema deve enviar um e-mail ao supervisor via Gmail API contendo:
  - Notificação de novo briefing aguardando aprovação
  - Nome do cliente e segmento
  - Link tokenizado para a tela de aprovação
  - Prazo de expiração do link
- O e-mail não deve conter valores, horas ou dados sensíveis do escopo
- O sistema deve registrar o envio do e-mail no log com timestamp

### 4.6 Módulo de Aprovação

- O supervisor deve acessar a tela de aprovação exclusivamente via link tokenizado
- O sistema deve validar o token antes de exibir qualquer dado (hash + expiração + uso único)
- Token inválido ou expirado deve exibir página de erro clara, sem expor dados
- A tela de aprovação deve exibir o escopo completo, squad, horas, custo e viabilidade
- O supervisor deve conseguir registrar uma das três decisões:
  - Aprovar, escopo aceito sem alterações
  - Solicitar ajuste, escopo precisa ser revisado com comentário obrigatório
  - Recusar, proposta inviável com comentário obrigatório
- Após a decisão, o token deve ser invalidado imediatamente
- O sistema deve registrar a decisão no log de auditoria (ator, decisão, versão, timestamp)

### 4.7 Módulo de Status e Histórico

- O dashboard do comercial deve exibir o resumo de briefings por status
- O comercial deve conseguir filtrar briefings por status (rascunho, processando, gerado, em aprovação, aprovado, ajuste solicitado, recusado, falha)
- O sistema deve atualizar o status do briefing em tempo real após cada etapa
- O comercial deve conseguir visualizar o histórico completo de um briefing, incluindo todas as versões de escopo e decisões registradas
- O sistema deve exibir o comentário do supervisor quando houver ajuste solicitado ou recusa

## 5. Requisitos Não-Funcionais

### 5.1 Performance

- O sistema deve responder a requisições comuns (login, dashboard, histórico) em menos de 1 segundo
- A geração de escopo pela IA deve ter timeout máximo de 10 segundos
- A busca vetorial no pgvector deve retornar resultados em menos de 2 segundos
- O envio de e-mail deve ser processado de forma assíncrona, sem bloquear a resposta ao usuário
- O sistema deve suportar uso simultâneo de até 10 usuários sem degradação perceptível de performance

### 5.2 Segurança

- Todas as senhas devem ser armazenadas com hash bcrypt (custo mínimo 10)
- Tokens JWT devem ter expiração máxima de 8 horas
- Tokens UUID de aprovação devem ser armazenados como hash no banco, nunca em texto puro
- Tokens UUID devem expirar em 48 horas e ser invalidados após o primeiro uso válido
- O sistema deve implementar proteção contra replay de tokens
- Todas as rotas autenticadas devem validar o JWT a cada requisição
- O sistema deve usar HTTPS em produção, sem exceções
- Headers HTTP de segurança devem ser configurados via Helmet.js
- Rate limiting deve ser aplicado nas rotas de autenticação (máximo 10 tentativas por minuto por IP) e nas rotas de geração de IA (máximo 20 requisições por hora por usuário)
- CORS deve ser configurado por ambiente, restrito à origem do frontend em produção
- Inputs devem ser sanitizados contra XSS e SQL Injection em todos os endpoints
- Chaves de API nunca devem aparecer em logs, respostas de erro ou código versionado
- Dados sensíveis (valores, squad, escopo) nunca devem aparecer no corpo do e-mail enviado ao supervisor

### 5.3 Usabilidade

- A interface deve ser responsiva e funcionar em desktop e mobile
- O fluxo de criação de briefing até envio para aprovação deve ser concluído em no máximo 5 cliques
- Mensagens de erro devem ser claras e orientadas ao usuário, sem expor detalhes técnicos
- O status de cada briefing deve ser visível de forma imediata no dashboard
- A tela de aprovação do supervisor deve ser autoexplicativa, sem necessidade de cadastro ou tutorial
- O sistema deve exibir feedback visual durante o processamento da IA (loading state com mensagem)

### 5.4 Escalabilidade

- A arquitetura em camadas deve permitir escalar cada camada de forma independente
- A base de conhecimento RAG deve suportar adição de novos projetos sem necessidade de alteração no código
- O sistema de versionamento de escopo deve suportar número ilimitado de versões por briefing
- O banco de dados deve ser estruturado para suportar múltiplas empresas no futuro (estrutura multi-tenant preparada, não implementada na v1)

### 5.5 Disponibilidade

- O sistema deve ter disponibilidade mínima de 99% em produção
- O deploy deve ser realizado sem downtime perceptível ao usuário
- Falhas na API da IA não devem derrubar o sistema, apenas o módulo de geração
- O sistema deve manter funcionamento completo mesmo quando o serviço de e-mail estiver indisponível, registrando a falha no log e permitindo reenvio manual

### 5.6 Manutenibilidade

- O código deve seguir o padrão de Layered Architecture com responsabilidades bem definidas por camada
- Funções complexas devem ser comentadas em português
- Variáveis de ambiente devem ser documentadas no arquivo `.env.example`
- Logs devem ser estruturados por nível (info, warning, error) e separados por ambiente
- O projeto deve ter um `README.md` claro com instruções de instalação, configuração e execução local