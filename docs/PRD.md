# PRD (Product Requirements Document) , Escopo Pronto ✅

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

O Escopo Pronto é uma plataforma web que permite ao comercial registrar o briefing do cliente em linguagem natural, diretamente durante ou após a reunião. A partir desse briefing, a IA, alimentada por uma base de conhecimento real de projetos anteriores via RAG, gera automaticamente um escopo preliminar com estimativa de squad, horas e custo.

O escopo gerado é revisado pelo comercial e enviado ao supervisor técnico para aprovação via link seguro e tokenizado. Todo o processo é registrado, versionado e auditável.

O resultado é um processo comercial mais rápido, mais padronizado e com muito menos espaço para interpretações divergentes.

### 1.3 Lema e Posicionamento
Este projeto é desenvolvido para fins acadêmicos e de portfólio 
profissional, como demonstração de competências em análise de sistemas, 
produto e desenvolvimento assistido por IA. Não possui vínculo comercial 
com nenhuma empresa ou domínio de mesmo nome.

> "O que o cliente espera é o que será entregue."

O Escopo Pronto não é uma ferramenta de geração de propostas genéricas. É um sistema de alinhamento entre comercial e técnico, onde a IA atua como ponte entre a linguagem do cliente e a linguagem do time de desenvolvimento.

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

**Como usa o Escopo Pronto:**  
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

**Como usa o Escopo Pronto:**  
Recebe um e-mail com link seguro, acessa a tela de aprovação, visualiza o escopo gerado pela IA, adiciona comentário se precisar ajustar, e registra sua decisão. Tudo sem precisar entrar no sistema com login próprio.

---

### 2.3 Persona 3, O Cliente Final

**Nome fictício:** Roberto Alves  
**Cargo:** Diretor de Operações  
**Idade:** 44 anos  

**Contexto:**  
Roberto não usa o Escopo Pronto diretamente. Ele é o motivo pelo qual o sistema existe. É ele quem descreveu o problema para o Carlos na reunião, e é a expectativa dele que o sistema precisa capturar com precisão.

**Relevância para o produto:**  
O sucesso do Escopo Pronto é medido pela distância entre o que Roberto descreveu e o que foi desenvolvido. Quanto menor esse gap, mais o sistema está cumprindo seu propósito.

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

## 6. Arquitetura do Sistema

### 6.1 Padrão Arquitetural

O Escopo Pronto adota o padrão Layered Architecture (Arquitetura em Camadas) com 4 camadas bem definidas. Cada camada tem responsabilidade única e se comunica exclusivamente com a camada imediatamente abaixo, garantindo separação de responsabilidades, facilidade de manutenção e testabilidade independente de cada módulo.
┌─────────────────────────────────────────┐
│         Camada de Apresentação          │
│   React + Vite (frontend)               │
│   Rotas Express (backend)               │
├─────────────────────────────────────────┤
│         Camada de Aplicação             │
│   Controllers (orquestram o fluxo)      │
├─────────────────────────────────────────┤
│         Camada de Serviço               │
│   Services: AI, RAG, e-mail, token      │
├─────────────────────────────────────────┤
│         Camada de Dados                 │
│   Models + PostgreSQL via Supabase      │
└─────────────────────────────────────────┘

**Regras da arquitetura:**
- Controllers não acessam o banco diretamente, sempre passam pelos Services
- Services não conhecem o Express, são independentes de framework
- Models não contêm lógica de negócio, apenas acesso a dados
- O frontend se comunica exclusivamente com o backend via API REST

### 6.2 Diagrama de Arquitetura Geral
[Browser , React]
|
| HTTPS / REST
|
[Express , Node.js]
|
┌──┴──────────────────┐
|                     |
[Controllers]        [Middlewares]
|                 JWT, Helmet,
|                 Rate Limit,
|                 Sanitização
|
[Services]
|
├── [AI Service] ──────────────► [Claude API , Anthropic]
|        |
|   [RAG Service] ─────────────► [OpenAI Embeddings API]
|        |                              |
|        └──────────────────────► [pgvector , Supabase]
|
├── [Email Service] ───────────► [Gmail API]
|
├── [Token Service] ──────────── UUID v4 + hash + expiração
|
└── [Models] ──────────────────► [PostgreSQL , Supabase]

### 6.3 Como o RAG Funciona no Escopo Pronto

O RAG (Retrieval-Augmented Generation) é o mecanismo que garante que a IA gere escopos fundamentados em projetos reais, e não em conhecimento genérico. Funciona em duas etapas distintas:

**Etapa 1, Indexação (feita uma vez, ao configurar o sistema):**

Pensa numa biblioteca com centenas de livros. Para encontrar rapidamente os livros mais parecidos com o que você procura, alguém precisou ler todos e criar um índice detalhado. A OpenAI Embeddings faz exatamente isso com a base de conhecimento do Escopo Pronto. Ela lê cada projeto fictício da base e transforma em números (vetores) que representam o significado do texto. Esses vetores ficam armazenados no pgvector dentro do Supabase.
[projetos.json]
,
[OpenAI Embeddings API]
, transforma cada projeto em vetor
[pgvector , Supabase]
, armazena os vetores indexados

**Etapa 2, Geração (acontece a cada briefing submetido):**

Quando o comercial envia um briefing, o sistema transforma esse briefing em vetor usando a mesma OpenAI Embeddings API, busca no pgvector os projetos mais similares, e monta um prompt rico para o Claude contendo o briefing original mais o contexto dos projetos encontrados. O Claude então gera o escopo com base nesse contexto real.
[Briefing do comercial]
,
[OpenAI Embeddings , transforma briefing em vetor]
,
[pgvector , busca projetos similares na base]
,
[Claude API , recebe briefing + contexto dos projetos similares]
,
[Escopo gerado , squad, horas, custo, viabilidade]

**Por que duas APIs diferentes:**

São duas tarefas com características distintas. A OpenAI Embeddings é o serviço mais consolidado e barato do mercado para indexação vetorial, com custo inferior a R$ 0,10 para indexar a base inteira. O Claude é superior para geração de texto estruturado, raciocínio e análise de viabilidade. Usar o melhor de cada um para sua função específica é uma decisão de arquitetura comum em sistemas RAG de produção. Essa decisão está documentada formalmente na seção 18.

### 6.4 Stack Tecnológica Justificada

| Tecnologia | Função | Justificativa |
|---|---|---|
| React + Vite | Frontend | Ecossistema consolidado, build rápido, padrão de mercado |
| Tailwind + Shadcn | Estilização | Componentes prontos e elegantes, evita visual genérico |
| Node.js + Express | Backend | Stack favorita |
| PostgreSQL via Supabase | Banco relacional | Mais robusto que MySQL, suporte nativo a pgvector |
| pgvector via Supabase | Busca vetorial | Resolve banco relacional e RAG na mesma plataforma |
| Claude API | Geração de escopo | Superior para texto estruturado e raciocínio |
| OpenAI Embeddings | Indexação vetorial | Mais barato e consolidado para essa função específica |
| JWT | Autenticação | Stateless, sem necessidade de sessão no servidor |
| UUID v4 + hash | Tokens de aprovação | Seguro, único, sem exposição do valor real |
| Nodemailer + Gmail API | E-mail | Gratuito, confiável, e-mail real sem serviço pago |
| Helmet.js | Segurança de headers | Middleware padrão de mercado para Express |
| Railway | Deploy | Já utilizado em outros projetos, suporte a Node.js e PostgreSQL |

### 6.5 Fluxo de Dados Completo

Comercial preenche briefing no frontend React
Frontend envia POST /api/briefings com JWT no header
Middleware valida JWT e sanitiza inputs
Controller recebe e chama BriefingService
BriefingService salva briefing com status "rascunho" no PostgreSQL
BriefingService chama RAGService
RAGService transforma briefing em vetor via OpenAI Embeddings
RAGService busca projetos similares no pgvector
RAGService retorna contexto para AIService
AIService monta prompt e chama Claude API (timeout 10s, retry 2x)
AIService valida schema da resposta
AIService salva escopo como nova versão no PostgreSQL
Status do briefing atualiza para "gerado"
Frontend exibe escopo para revisão do comercial
Comercial aprova e clica em enviar para aprovação
TokenService gera UUID v4, cria hash, define expiração 48h
EmailService envia e-mail via Gmail API com link tokenizado
Status atualiza para "em aprovação"
Supervisor clica no link, backend valida token (hash + expiração + uso único)
Supervisor visualiza escopo e registra decisão
LogAuditoria registra ator, decisão, versão e timestamp
Status atualiza para "aprovado", "ajuste solicitado" ou "recusado"
Token é invalidado imediatamente
Comercial vê resultado no dashboard

## 7. Modelagem de Dados

### 7.1 Dicionário de Dados

---

#### Entidade: Usuario

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | UUID | Sim | Identificador único gerado automaticamente |
| nome | VARCHAR(100) | Sim | Nome completo do usuário |
| email | VARCHAR(150) | Sim | E-mail único, usado para login |
| senha_hash | VARCHAR(255) | Sim | Senha armazenada com hash bcrypt |
| perfil | ENUM | Sim | Perfil de acesso: "comercial" |
| ativo | BOOLEAN | Sim | Indica se o usuário está ativo no sistema |
| criado_em | TIMESTAMP | Sim | Data e hora de criação do registro |
| atualizado_em | TIMESTAMP | Sim | Data e hora da última atualização |

---

#### Entidade: Briefing

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | UUID | Sim | Identificador único gerado automaticamente |
| usuario_id | UUID | Sim | Referência ao usuário que criou o briefing |
| nome_cliente | VARCHAR(150) | Sim | Nome do cliente ou empresa |
| segmento | VARCHAR(100) | Sim | Segmento de atuação do cliente |
| descricao | TEXT | Sim | Descrição do problema em linguagem natural |
| prazo_esperado | DATE | Sim | Prazo esperado pelo cliente para entrega |
| orcamento | DECIMAL(12,2) | Não | Orçamento aproximado informado pelo cliente |
| status | ENUM | Sim | Status atual do briefing no ciclo de vida |
| criado_em | TIMESTAMP | Sim | Data e hora de criação |
| atualizado_em | TIMESTAMP | Sim | Data e hora da última atualização |

**Valores possíveis para status:**
rascunho, processando, gerado, em_aprovacao, aprovado, ajuste_solicitado, recusado, falha

---

#### Entidade: EscopoGerado

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | UUID | Sim | Identificador único gerado automaticamente |
| briefing_id | UUID | Sim | Referência ao briefing que originou o escopo |
| versao | INTEGER | Sim | Número da versão (1, 2, 3...) |
| escopo | TEXT | Sim | Escopo preliminar descritivo gerado pela IA |
| squad_sugerido | JSONB | Sim | Perfis e quantidade do squad sugerido |
| horas_estimadas | JSONB | Sim | Estimativa de horas por perfil do squad |
| custo_estimado | DECIMAL(12,2) | Sim | Custo total estimado |
| viabilidade | ENUM | Sim | Nível de viabilidade: alta, media, baixa |
| observacoes | TEXT | Não | Riscos e observações identificados pela IA |
| falha_geracao | BOOLEAN | Sim | Indica se houve falha na geração pela IA |
| criado_em | TIMESTAMP | Sim | Data e hora da geração |

---

#### Entidade: Aprovacao

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | UUID | Sim | Identificador único gerado automaticamente |
| briefing_id | UUID | Sim | Referência ao briefing |
| escopo_id | UUID | Sim | Referência à versão do escopo em aprovação |
| token_hash | VARCHAR(255) | Sim | Hash do token UUID, nunca o valor real |
| decisao | ENUM | Não | Decisão registrada: aprovado, ajuste_solicitado, recusado |
| comentario | TEXT | Não | Comentário obrigatório em ajuste ou recusa |
| expires_at | TIMESTAMP | Sim | Data e hora de expiração do token (48h) |
| usado_em | TIMESTAMP | Não | Data e hora do primeiro acesso válido |
| criado_em | TIMESTAMP | Sim | Data e hora de criação do token |

---

#### Entidade: LogAuditoria

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | UUID | Sim | Identificador único gerado automaticamente |
| briefing_id | UUID | Sim | Referência ao briefing |
| escopo_id | UUID | Sim | Referência à versão do escopo |
| ator | VARCHAR(150) | Sim | Identificação de quem realizou a ação |
| acao | VARCHAR(100) | Sim | Ação realizada (aprovado, ajuste_solicitado, recusado) |
| comentario | TEXT | Não | Comentário registrado na decisão |
| ip | VARCHAR(45) | Não | IP de origem do acesso |
| timestamp | TIMESTAMP | Sim | Data e hora exata da ação |

---

#### Entidade: LogAcesso

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | UUID | Sim | Identificador único gerado automaticamente |
| usuario_id | UUID | Não | Referência ao usuário (nulo em acessos via token) |
| acao | VARCHAR(100) | Sim | Descrição da ação realizada |
| ip | VARCHAR(45) | Sim | IP de origem da requisição |
| user_agent | VARCHAR(255) | Não | Navegador e sistema operacional |
| criado_em | TIMESTAMP | Sim | Data e hora do acesso |

---

### 7.2 Relacionamentos
Usuario ──────────────────── 1:N ──── Briefing
Briefing ─────────────────── 1:N ──── EscopoGerado
Briefing ─────────────────── 1:N ──── Aprovacao
Briefing ─────────────────── 1:N ──── LogAuditoria
EscopoGerado ────────────── 1:1 ──── Aprovacao

### 7.3 Observações Técnicas

- Todos os IDs usam UUID v4 em vez de INTEGER sequencial. Isso evita exposição de volume de dados via URL e é mais seguro em sistemas distribuídos
- O campo `squad_sugerido` e `horas_estimadas` usam JSONB porque a estrutura varia conforme o tipo de projeto. JSONB permite consultas eficientes dentro do campo JSON no PostgreSQL
- O campo `token_hash` armazena apenas o hash do token, nunca o valor original. O token real é enviado por e-mail e nunca persiste no banco
- A entidade `LogAuditoria` é separada do `LogAcesso` intencionalmente. Log de auditoria registra decisões de negócio. Log de acesso registra eventos técnicos de segurança
- O campo `ativo` em Usuario permite desativar usuários sem excluir o histórico de briefings vinculados

## 8. Casos de Uso

### UC01 , Comercial cria novo briefing

**Ator principal:** Comercial  
**Pré-condição:** Usuário autenticado com perfil comercial  
**Trigger:** Comercial clica em "Novo Briefing" no dashboard  

**Fluxo principal:**
1. Sistema exibe formulário de briefing
2. Comercial preenche nome do cliente, segmento, descrição, prazo e orçamento
3. Comercial clica em "Gerar Escopo"
4. Sistema valida todos os campos obrigatórios
5. Sistema sanitiza os inputs
6. Sistema salva o briefing com status "rascunho"
7. Sistema inicia o processamento da IA
8. Sistema atualiza status para "processando"
9. Sistema exibe loading state com mensagem ao comercial

**Fluxo alternativo , campos obrigatórios não preenchidos:**
4a. Sistema exibe mensagem de erro indicando o campo faltante  
4b. Comercial corrige e tenta novamente  

**Fluxo de exceção , erro interno ao salvar:**
6a. Sistema exibe mensagem de erro genérica sem expor detalhes técnicos  
6b. Briefing não é criado  
6c. Comercial pode tentar novamente  

**Pós-condição:** Briefing salvo no banco com status "processando" e IA em execução

---

### UC02 , IA processa briefing e gera escopo

**Ator principal:** Sistema  
**Pré-condição:** Briefing salvo com status "processando"  
**Trigger:** Criação do briefing dispara o processamento automaticamente  

**Fluxo principal:**
1. RAGService transforma a descrição do briefing em vetor via OpenAI Embeddings
2. RAGService busca no pgvector os projetos mais similares da base de conhecimento
3. AIService monta o prompt com o briefing original mais o contexto recuperado
4. AIService envia o prompt para a Claude API com timeout de 10 segundos
5. Claude API retorna escopo estruturado
6. AIService valida o schema da resposta
7. Sistema salva o escopo como versão 1 no banco
8. Sistema atualiza status do briefing para "gerado"
9. Sistema notifica o frontend para atualizar a tela

**Fluxo de exceção , timeout ou erro na Claude API:**
4a. Sistema aguarda 10 segundos sem resposta  
4b. Sistema tenta novamente (tentativa 2)  
4c. Sistema tenta novamente (tentativa 3)  
4d. Após 3 tentativas sem sucesso, sistema salva flag "falha_geracao" no banco  
4e. Sistema atualiza status para "falha"  
4f. Sistema exibe mensagem clara ao comercial com opção de reprocessar  

**Fluxo de exceção , schema da resposta inválido:**
6a. AIService identifica resposta fora do formato esperado  
6b. Sistema trata como falha e segue fluxo 4d em diante  

**Pós-condição:** Escopo v1 salvo no banco ou briefing marcado com falha

---

### UC03 , Comercial revisa escopo gerado

**Ator principal:** Comercial  
**Pré-condição:** Briefing com status "gerado" e escopo disponível  
**Trigger:** Comercial abre o detalhe do briefing  

**Fluxo principal:**
1. Sistema exibe escopo completo, squad sugerido, horas, custo e viabilidade
2. Comercial analisa o escopo gerado
3. Comercial decide enviar para aprovação
4. Sistema habilita botão "Enviar para Aprovação"

**Fluxo alternativo , comercial quer reprocessar:**
2a. Comercial clica em "Reprocessar"  
2b. Sistema inicia novo ciclo de geração  
2c. Nova versão é criada (v2, v3...)  
2d. Histórico de versões anteriores permanece acessível  

**Pós-condição:** Comercial pronto para enviar o escopo para aprovação

---

### UC04 , Sistema envia e-mail com link tokenizado

**Ator principal:** Sistema  
**Pré-condição:** Comercial confirmou envio para aprovação  
**Trigger:** Comercial clica em "Enviar para Aprovação"  

**Fluxo principal:**
1. TokenService gera UUID v4 único
2. TokenService cria hash do token e define expiração de 48 horas
3. Sistema salva token (hash + expiração) na entidade Aprovacao
4. Sistema atualiza status do briefing para "em_aprovacao"
5. EmailService monta e-mail com notificação e link tokenizado
6. EmailService envia e-mail via Gmail API de forma assíncrona
7. Sistema registra envio no LogAcesso com timestamp
8. Sistema exibe confirmação ao comercial

**Fluxo de exceção , falha no envio do e-mail:**
6a. Gmail API retorna erro  
6b. Sistema registra falha no log  
6c. Sistema exibe alerta ao comercial informando que o e-mail não foi enviado  
6d. Sistema mantém o status "em_aprovacao" e permite reenvio manual  

**Pós-condição:** E-mail enviado ao supervisor com link seguro e token registrado no banco

---

### UC05 , Supervisor acessa tela de aprovação

**Ator principal:** Supervisor  
**Pré-condição:** Supervisor recebeu e-mail com link tokenizado válido  
**Trigger:** Supervisor clica no link do e-mail  

**Fluxo principal:**
1. Supervisor clica no link tokenizado
2. Backend extrai o token da URL
3. TokenService busca o token no banco pelo hash
4. TokenService valida expiração (menos de 48h)
5. TokenService valida que o token ainda não foi usado
6. Sistema marca o token como usado (timestamp)
7. Sistema exibe tela de aprovação com escopo completo

**Fluxo de exceção , token expirado:**
4a. Sistema identifica que o token passou de 48 horas  
4b. Sistema exibe página de erro: "Este link expirou. Solicite um novo link ao comercial responsável."  
4c. Nenhum dado do escopo é exibido  

**Fluxo de exceção , token já utilizado:**
5a. Sistema identifica que o token já foi usado  
5b. Sistema exibe página de erro: "Este link já foi utilizado e não é mais válido."  
5c. Nenhum dado do escopo é exibido  

**Fluxo de exceção , token inválido:**
3a. Sistema não encontra o hash no banco  
3b. Sistema exibe página de erro genérica sem expor detalhes  

**Pós-condição:** Supervisor visualiza o escopo completo e está pronto para registrar decisão

---

### UC06 , Supervisor registra decisão

**Ator principal:** Supervisor  
**Pré-condição:** Supervisor está na tela de aprovação com token válido  
**Trigger:** Supervisor clica em uma das três opções de decisão  

**Fluxo principal , Aprovar:**
1. Supervisor clica em "Aprovar"
2. Sistema registra decisão "aprovado" na entidade Aprovacao
3. Sistema registra no LogAuditoria (ator, decisão, versão, timestamp, IP)
4. Sistema atualiza status do briefing para "aprovado"
5. Sistema invalida o token imediatamente
6. Sistema exibe confirmação ao supervisor

**Fluxo alternativo , Solicitar Ajuste:**
1a. Supervisor clica em "Solicitar Ajuste"  
1b. Sistema exibe campo de comentário obrigatório  
1c. Supervisor preenche o comentário e confirma  
1d. Sistema registra decisão "ajuste_solicitado" com comentário  
1e. Sistema segue passos 3 a 6 do fluxo principal  

**Fluxo alternativo , Recusar:**
1a. Supervisor clica em "Recusar"  
1b. Sistema exibe campo de comentário obrigatório  
1c. Supervisor preenche o motivo e confirma  
1d. Sistema registra decisão "recusado" com comentário  
1e. Sistema segue passos 3 a 6 do fluxo principal  

**Pós-condição:** Decisão registrada, token invalidado, status atualizado e auditoria registrada

---

### UC07 , Sistema atualiza status e notifica comercial

**Ator principal:** Sistema  
**Pré-condição:** Supervisor registrou decisão  
**Trigger:** Decisão salva no banco  

**Fluxo principal:**
1. Sistema atualiza status do briefing no PostgreSQL
2. Sistema registra timestamp da atualização
3. Sistema atualiza badge de notificação no dashboard do comercial
4. Comercial visualiza o resultado ao acessar o dashboard ou o detalhe do briefing
5. Comercial visualiza o comentário do supervisor quando houver ajuste ou recusa

**Pós-condição:** Comercial informado sobre a decisão do supervisor

---

### UC08 , Comercial consulta histórico de briefings

**Ator principal:** Comercial  
**Pré-condição:** Usuário autenticado  
**Trigger:** Comercial acessa a página de histórico  

**Fluxo principal:**
1. Sistema exibe lista de todos os briefings do comercial
2. Comercial pode filtrar por status
3. Comercial clica em um briefing para ver o detalhe
4. Sistema exibe histórico completo, todas as versões de escopo e decisões registradas

**Pós-condição:** Comercial com visão completa do histórico de negociações

## 9. User Stories e Critérios de Aceite

### Épico 1, Autenticação e Acesso

---

**US01 , Login no sistema**

Como comercial,  
quero fazer login com meu e-mail e senha,  
para acessar o sistema de forma segura.

**Critérios de aceite:**
- Dado que o comercial está na tela de login, quando preencher e-mail e senha válidos e clicar em entrar, então deve ser redirecionado ao dashboard
- Dado que o comercial inseriu credenciais inválidas, quando clicar em entrar, então deve ver mensagem de erro sem indicar qual campo está errado
- Dado que o comercial ficou inativo por 8 horas, quando tentar acessar uma rota protegida, então deve ser redirecionado para o login
- Dado que o comercial fez mais de 10 tentativas de login em 1 minuto, quando tentar novamente, então deve receber erro de rate limit

---

**US02 , Logout do sistema**

Como comercial,  
quero fazer logout,  
para encerrar minha sessão com segurança.

**Critérios de aceite:**
- Dado que o comercial está logado, quando clicar em logout, então o token JWT deve ser invalidado e o usuário redirecionado para o login
- Dado que o comercial fez logout, quando tentar acessar uma rota protegida diretamente pela URL, então deve ser redirecionado para o login

---

### Épico 2, Criação de Briefing

---

**US03 , Criar novo briefing**

Como comercial,  
quero registrar o briefing de um cliente em linguagem natural,  
para iniciar o processo de geração de escopo sem depender do time técnico.

**Critérios de aceite:**
- Dado que o comercial está no dashboard, quando clicar em "Novo Briefing", então deve ser direcionado ao formulário de criação
- Dado que o comercial preencheu todos os campos obrigatórios, quando clicar em "Gerar Escopo", então o briefing deve ser salvo e o processamento iniciado
- Dado que o comercial não preencheu um campo obrigatório, quando clicar em "Gerar Escopo", então deve ver mensagem indicando o campo faltante
- Dado que o briefing foi submetido, quando o processamento iniciar, então o status deve mudar para "processando" e um loading state deve ser exibido

---

**US04 , Visualizar briefings anteriores**

Como comercial,  
quero ver o histórico de todos os meus briefings,  
para acompanhar o andamento de cada negociação.

**Critérios de aceite:**
- Dado que o comercial acessa o histórico, quando a página carregar, então deve ver todos os seus briefings ordenados do mais recente para o mais antigo
- Dado que o comercial quer filtrar, quando selecionar um status, então deve ver apenas os briefings com aquele status
- Dado que o comercial clica em um briefing, quando a página de detalhe abrir, então deve ver todas as informações incluindo versões de escopo e decisões

---

### Épico 3, Geração de Escopo por IA

---

**US05 , Visualizar escopo gerado**

Como comercial,  
quero visualizar o escopo gerado pela IA após submeter o briefing,  
para revisar antes de enviar ao supervisor.

**Critérios de aceite:**
- Dado que a IA processou o briefing com sucesso, quando o comercial abrir o detalhe, então deve ver escopo descritivo, squad sugerido, horas estimadas, custo e viabilidade
- Dado que a geração falhou, quando o comercial abrir o detalhe, então deve ver mensagem clara de falha com opção de reprocessar
- Dado que existem múltiplas versões, quando o comercial acessar o detalhe, então deve ver a versão mais recente destacada e o histórico de versões acessível

---

**US06 , Reprocessar briefing**

Como comercial,  
quero reprocessar um briefing para gerar uma nova versão do escopo,  
para ajustar o resultado antes de enviar ao supervisor.

**Critérios de aceite:**
- Dado que o comercial está no detalhe do briefing, quando clicar em "Reprocessar", então uma nova versão deve ser gerada sem apagar as anteriores
- Dado que a nova versão foi gerada, quando o comercial visualizar o histórico, então deve ver v1, v2, v3... com datas de geração
- Dado que o reprocessamento falhar, quando o comercial for notificado, então a versão anterior deve continuar disponível

---

### Épico 4, Fluxo de Aprovação

---

**US07 , Enviar escopo para aprovação**

Como comercial,  
quero enviar o escopo gerado ao supervisor para aprovação,  
para avançar na negociação com o cliente.

**Critérios de aceite:**
- Dado que o escopo foi gerado com sucesso, quando o comercial clicar em "Enviar para Aprovação", então um e-mail deve ser disparado ao supervisor com link tokenizado
- Dado que o e-mail foi enviado, quando o comercial visualizar o briefing, então o status deve estar como "em aprovação"
- Dado que o envio do e-mail falhou, quando o comercial for notificado, então deve ver opção de reenviar manualmente

---

**US08 , Aprovar escopo**

Como supervisor,  
quero aprovar o escopo recebido via link seguro,  
para autorizar o avanço da proposta com o cliente.

**Critérios de aceite:**
- Dado que o supervisor recebeu o e-mail, quando clicar no link dentro de 48 horas, então deve ver a tela de aprovação com o escopo completo
- Dado que o supervisor clica em "Aprovar", quando confirmar, então o status deve atualizar para "aprovado" e o token deve ser invalidado
- Dado que o supervisor tenta acessar o link após aprovar, quando clicar novamente, então deve ver mensagem informando que o link já foi utilizado

---

**US09 , Solicitar ajuste no escopo**

Como supervisor,  
quero solicitar ajuste no escopo com um comentário,  
para orientar o comercial sobre o que precisa ser revisado.

**Critérios de aceite:**
- Dado que o supervisor clica em "Solicitar Ajuste", quando tentar confirmar sem preencher o comentário, então deve ver mensagem de campo obrigatório
- Dado que o supervisor preencheu o comentário e confirmou, quando o comercial acessar o briefing, então deve ver o status "ajuste solicitado" e o comentário do supervisor

---

**US10 , Recusar escopo**

Como supervisor,  
quero recusar um escopo inviável com justificativa,  
para encerrar a negociação de forma rastreável.

**Critérios de aceite:**
- Dado que o supervisor clica em "Recusar", quando tentar confirmar sem preencher o motivo, então deve ver mensagem de campo obrigatório
- Dado que o supervisor recusou com comentário, quando o comercial acessar o briefing, então deve ver o status "recusado" e o motivo registrado

---

### Épico 5, Segurança e Rastreabilidade

---

**US11 , Acesso seguro via link tokenizado**

Como supervisor,  
quero acessar a tela de aprovação apenas pelo link recebido por e-mail,  
para garantir que nenhum dado sensível seja exposto sem autenticação.

**Critérios de aceite:**
- Dado que o supervisor tenta acessar a URL sem token, quando a página carregar, então deve ver erro sem nenhum dado do escopo
- Dado que o token expirou, quando o supervisor clicar no link, então deve ver mensagem de link expirado sem expor dados
- Dado que o token é válido, quando o supervisor acessar, então deve ver o escopo completo e as opções de decisão

---

**US12 , Rastreabilidade de decisões**

Como comercial,  
quero ver o histórico completo de decisões de cada briefing,  
para ter rastreabilidade total do processo de aprovação.

**Critérios de aceite:**
- Dado que o comercial acessa o detalhe de um briefing aprovado, quando visualizar o histórico, então deve ver quem aprovou, quando e qual versão foi aprovada
- Dado que houve múltiplas versões e decisões, quando o comercial acessar o histórico, então deve ver cada decisão vinculada à sua versão correspondente

## 10. Fluxos e Diagramas

### 10.1 Processo AS-IS (Como é hoje, sem o Escopo Pronto)

O processo atual de geração de escopo em uma software house ocorre de forma manual, informal e dependente de múltiplos pontos de comunicação sem padronização.
[Reunião com cliente]
,
[Comercial anota no caderno ou no WhatsApp]
,
[Comercial liga ou manda mensagem pro tech lead]
,
[Tech lead analisa quando tiver tempo]
, (pode levar horas ou dias)
[Tech lead responde com estimativa verbal]
,
[Comercial monta proposta manualmente no Word ou Excel]
,
[Proposta enviada ao cliente]
,
❌ Sem registro formal
❌ Sem histórico de versões
❌ Sem validação estruturada
❌ Sem rastreabilidade de decisões
❌ Alto risco de gap entre o que foi combinado e o que será entregue

**Problemas identificados no AS-IS:**
- Dependência total do tech lead para qualquer estimativa
- Ausência de registro estruturado do que o cliente pediu
- Processo lento, média de 2 a 5 dias para gerar uma proposta
- Sem padronização, cada comercial registra de forma diferente
- Sem histórico centralizado de propostas e decisões
- Alta probabilidade de interpretações divergentes entre comercial e técnico

---

### 10.2 Processo TO-BE (Como fica com o Escopo Pronto)

Com o Escopo Pronto, o processo se torna estruturado, rápido, rastreável
e independente de comunicação informal.
[Reunião com cliente]
,
[Comercial abre o Escopo Pronto e preenche o briefing]
, (durante ou logo após a reunião)
[IA processa via RAG e gera escopo em minutos]
,
[Comercial revisa e envia para aprovação com um clique]
,
[Supervisor recebe e-mail com link seguro]
,
[Supervisor aprova, ajusta ou recusa com comentário]
,
[Status atualiza automaticamente]
,
[Comercial vê resultado no dashboard]
,
✅ Registro formal e estruturado
✅ Histórico completo de versões
✅ Validação técnica assíncrona
✅ Rastreabilidade total de decisões
✅ Gap entre expectativa e entrega reduzido significativamente

**Ganhos identificados no TO-BE:**
- Geração de escopo em minutos, não em dias
- Processo padronizado independente de qual comercial atende
- Supervisor analisa de forma assíncrona sem interrupções
- Histórico centralizado e auditável de todas as propostas
- Base de conhecimento melhora as estimativas ao longo do tempo

---

### 10.3 Diagrama de Sequência, Fluxo Completo da IA

Detalha a sequência de chamadas internas quando o briefing é submetido
para processamento.
Comercial     Frontend      Backend       RAGService     OpenAI        Claude API    PostgreSQL
|              |             |              |             |              |             |
|, submit ,>   |             |              |             |              |             |
|              |, POST /api ,>|              |             |              |             |
|              |             |, save draft ,>             |              |             |
|              |             |              |             |              |         ,< ok
|              |             |, call RAG ,> |             |              |             |
|              |             |              |, embed ,>   |              |             |
|              |             |              |             |,< vector     |             |
|              |             |              |, search pgvector ,>        |             |
|              |             |              |,< similar projects         |             |
|              |             |              |, return context ,>         |             |
|              |             |, call AI ,>  |             |              |             |
|              |             |              |             |, prompt ,>   |             |
|              |             |              |             |              |,< escopo    |
|              |             |, validate schema ,>        |              |             |
|              |             |, save escopo v1 ,>         |              |         ,< ok
|              |             |, update status "gerado" ,> |              |         ,< ok
|              |,< response  |              |             |              |             |
|,< exibe escopo             |              |             |              |             |

---

### 10.4 Diagrama de Sequência, Fluxo de Aprovação com Token

Detalha a sequência de validação de segurança no fluxo de aprovação
do supervisor.
Comercial     Backend       TokenService   EmailService   Supervisor    PostgreSQL
|              |              |              |              |             |
|, enviar ,>   |              |              |              |             |
|              |, gera UUID , |              |              |             |
|              |              |, cria hash , |              |             |
|              |              |, define 48h ,|              |             |
|              |, salva token hash ,>        |              |         ,< ok
|              |, update "em_aprovacao" ,>   |              |         ,< ok
|              |, monta email ,>             |              |             |
|              |              |              |, envia ,>    |             |
|              |              |              |              |,< e-mail    |
|,< confirmado |              |              |              |             |
|              |              |              |              |             |
|              |              |              |         [clica no link]    |
|              |,< GET /aprovacao/:token      |              |             |
|              |, busca hash ,>              |              |             |
|              |,< encontrado |              |              |             |
|              |, valida 48h ,>              |              |             |
|              |,< válido     |              |              |             |
|              |, valida uso único ,>        |              |             |
|              |,< não usado  |              |              |             |
|              |, marca usado ,>             |              |         ,< ok
|              |,< exibe escopo              |              |             |
|              |              |              |         [registra decisão] |
|              |,< POST /aprovacao/decisao   |              |             |
|              |, salva decisao ,>           |              |         ,< ok
|              |, log auditoria ,>           |              |         ,< ok
|              |, invalida token ,>          |              |         ,< ok
|              |, update status ,>           |              |         ,< ok
|              |,< confirmado |              |              |             |

---

### 10.5 Wireframes das Telas Principais

Os wireframes abaixo descrevem a estrutura e o comportamento visual de
cada tela. Todas as telas internas seguem a mesma linguagem visual da
landing page, fundo escuro, glassmorphism, animações com Framer Motion
e tipografia Inter.

---

**Especificações globais de design (landing page e telas internas)**

- Fundo global: #0A0A0A em todas as telas
- Cards: glass com rgba(255,255,255,0.05) + backdrop-blur-md +
  borda rgba(255,255,255,0.08)
- Inputs: fundo rgba(255,255,255,0.05) + borda rgba(255,255,255,0.1) +
  focus borda #22C55E
- Badges de status: glass colorido por status
  , aprovado: verde rgba(34,197,94,0.15) + borda #22C55E
  , em aprovação: amarelo rgba(234,179,8,0.15) + borda #EAB308
  , ajuste solicitado: laranja rgba(249,115,22,0.15) + borda #F97316
  , recusado: vermelho rgba(239,68,68,0.15) + borda #EF4444
  , processando: azul rgba(59,130,246,0.15) + borda #3B82F6
  , falha: vermelho escuro rgba(127,29,29,0.15) + borda #7F1D1D
- Botão primário: #22C55E sólido com hover scale 1.02 via Framer Motion
- Botão secundário: glass com borda rgba(255,255,255,0.1)
- Botão destrutivo: rgba(239,68,68,0.15) com borda #EF4444
- Hover nos cards de lista: borda verde sutil animada
- Animações de entrada: fade + slide up com Framer Motion whileInView
- Tipografia: Inter, pesos 400 e 500, tamanhos 12, 14, 16, 24, 32px
- Ícones: Lucide React

---

**Tela 1, Landing Page**
SEÇÃO 1, Hero (100vh, centralizado)
, Fundo #0A0A0A com Aurora verde animada via CSS keyframes
, Nav: logo ✅ Escopo Pronto à esquerda + botão "Entrar" glass à direita
, Headline grande centralizada com fade + slide up via Framer Motion:
"O que o cliente espera é o que será entregue."
, Subtítulo em #A1A1AA com delay de animação:
"Plataforma de escopo inteligente para software houses"
, Botão glass "Começar agora" com backdrop-blur e borda verde sutil
, Link secundário "Ver documentação" em texto simples abaixo
, Mockup do dashboard flutuando com efeito glass abaixo dos botões
, Scroll indicator animado (seta pulsando suavemente)
SEÇÃO 2, Como funciona (ativada no scroll)
, Fundo #111111 com transição suave
, Título "Como funciona" com fade
, 3 cards glass aparecem em sequência com delay entre eles
, Card 1: ícone Lucide animado + "01" + "Briefing em minutos"
Comercial descreve o projeto em linguagem natural
, Card 2: ícone Lucide animado + "02" + "IA processa via RAG"
Escopo gerado com base em projetos reais
, Card 3: ícone Lucide animado + "03" + "Aprovação segura"
Supervisor decide via link tokenizado
SEÇÃO 3, Diferenciais (ativada no scroll)
, Layout dois lados: esquerdo texto, direito mockup em glass
, Esquerdo: lista de itens com check verde aparecendo um por um
✅ Escopo gerado em minutos, não em dias
✅ Histórico auditável de todas as decisões
✅ Aprovação assíncrona sem reuniões extras
✅ Sem gap entre expectativa e entrega
✅ Base de conhecimento real via RAG
, Direito: mockup animado da tela de detalhe do briefing
SEÇÃO 4, CTA final (ativada no scroll)
, Gradiente sutil de #0A0A0A para #052e16
, Headline: "Chega de escopo mal definido."
, Subtítulo curto em #A1A1AA
, Botão verde sólido #22C55E com hover animado
Especificações técnicas:
, Aurora: radial-gradient animado com #22C55E de 5% a 15% opacity
, Glassmorphism: bg rgba(255,255,255,0.05) + backdrop-blur-md +
border rgba(255,255,255,0.1)
, Referências: Resend.com (tipografia), Linear.app (movimento),
Apple iOS (glassmorphism)

---

**Tela 2, Dashboard do Comercial**
┌─────────────────────────────────────────────────────┐
│ fundo #0A0A0A, Aurora verde suave no topo           │
│                                                     │
│  ✅ Escopo Pronto                  [Carlos A.] [Sair] │
│  nav glass com borda bottom sutil                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Olá, Carlos Alberto 👋          fade in ao entrar  │
│  Seus briefings                                     │
│                                                     │
│  [card glass]  [card glass]  [card glass]  [card glass]
│   Total 12      Pendentes 3   Aprovados 8   Falha 1 │
│   aparecem em sequência com Framer Motion           │
│                                                     │
│  [+ Novo Briefing]  botão verde sólido              │
│                                                     │
│  Briefings recentes                                 │
│  ┌──────────────────────────────────────────────┐  │
│  │ card glass com hover, borda verde no hover   │  │
│  │ Cliente A  [em aprovação]  2h atrás       →  │  │
│  ├──────────────────────────────────────────────┤  │
│  │ Cliente B  [aprovado]      ontem          →  │  │
│  ├──────────────────────────────────────────────┤  │
│  │ Cliente C  [ajuste]        3 dias         →  │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

---

**Tela 3, Formulário de Novo Briefing**
┌─────────────────────────────────────────────────────┐
│ fundo #0A0A0A                                       │
│                                                     │
│  ← Voltar                                           │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ card glass centralizado, max-width 680px     │  │
│  │ fade + slide up ao entrar na tela            │  │
│  │                                              │  │
│  │  Novo Briefing                               │  │
│  │  Descreva o projeto do cliente               │  │
│  │  ──────────────────────────────────────      │  │
│  │                                              │  │
│  │  Nome do cliente *                           │  │
│  │  [input dark, focus borda #22C55E]           │  │
│  │                                              │  │
│  │  Segmento *                                  │  │
│  │  [input dark, focus borda #22C55E]           │  │
│  │                                              │  │
│  │  Descreva o problema do cliente *            │  │
│  │  [textarea dark, 5 linhas, resize vertical]  │  │
│  │                                              │  │
│  │  Prazo esperado *      Orçamento aprox.      │  │
│  │  [date input dark]     [number input dark]   │  │
│  │                                              │  │
│  │  [✨ Gerar Escopo com IA]                    │  │
│  │   botão verde sólido, full width             │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
Estado de loading (após clicar em Gerar):
, Botão muda para spinner + "Processando..."
, Card glass com mensagem animada:
"Buscando projetos similares na base de conhecimento..."
"Gerando escopo com inteligência artificial..."
, Fundo do card pulsa levemente via Framer Motion

---

**Tela 4, Detalhe do Briefing com Escopo**
┌─────────────────────────────────────────────────────┐
│ fundo #0A0A0A                                       │
│                                                     │
│  ← Voltar                                           │
│  Cliente A                    [em aprovação]        │
│                                badge glass amarela  │
│                                                     │
│  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │ card glass          │  │ card glass          │  │
│  │ Escopo , v1 [▾]     │  │ Squad sugerido      │  │
│  │                     │  │                     │  │
│  │ Descrição detalhada │  │ 1 Tech Lead  40h    │  │
│  │ do escopo gerado    │  │ 2 Dev Pleno  160h   │  │
│  │ pela IA...          │  │ 1 Dev Júnior 80h    │  │
│  │                     │  │ ─────────────────   │  │
│  └─────────────────────┘  │ Custo: R$ 12.000   │  │
│                            │ Viabilidade: ● Alta │  │
│  ┌─────────────────────┐  └─────────────────────┘  │
│  │ card glass          │                            │
│  │ Observações e riscos│  [Reprocessar]             │
│  │ identificados...    │  botão glass secundário    │
│  └─────────────────────┘                            │
│                            [Enviar para Aprovação]  │
│                            botão verde sólido       │
│                                                     │
│  Histórico de versões (se houver v2, v3...)         │
│  ┌──────────────────────────────────────────────┐  │
│  │ card glass colapsável                        │  │
│  │ v1 , 11/04/2026 10:32 , gerada pela IA   →  │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

---

**Tela 5, Tela de Aprovação do Supervisor**
┌─────────────────────────────────────────────────────┐
│ fundo #0A0A0A, Aurora verde suave                   │
│                                                     │
│  ✅ Escopo Pronto                                     │
│  "Aprovação de Escopo"                              │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ card glass centralizado, max-width 720px     │  │
│  │ fade + slide up ao carregar                  │  │
│  │                                              │  │
│  │  Cliente A · Varejo · v1 · 11/04/2026        │  │
│  │  ────────────────────────────────────────    │  │
│  │                                              │  │
│  │  Escopo                                      │  │
│  │  ┌────────────────────────────────────────┐  │  │
│  │  │ card glass interno, descrição completa │  │  │
│  │  └────────────────────────────────────────┘  │  │
│  │                                              │  │
│  │  Squad           Horas      Custo total      │  │
│  │  1 Tech Lead     40h                         │  │
│  │  2 Dev Pleno     160h       R$ 12.000        │  │
│  │  1 Dev Júnior    80h                         │  │
│  │                                              │  │
│  │  Viabilidade: ● Alta                        │  │
│  │  Observações: ...                            │  │
│  │  ────────────────────────────────────────    │  │
│  │                                              │  │
│  │  Comentário                                  │  │
│  │  obrigatório em ajuste ou recusa             │  │
│  │  [textarea dark, 3 linhas]                   │  │
│  │                                              │  │
│  │  [Recusar]  [Solicitar Ajuste]  [Aprovar]    │  │
│  │   vermelho       amarelo          verde      │  │
│  │   glass          glass            sólido     │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  Link expirado ou já utilizado:                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ card glass centralizado com ícone de alerta  │  │
│  │ "Este link expirou ou já foi utilizado."     │  │
│  │ "Solicite um novo link ao responsável."      │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

---

**Tela 6, Histórico de Briefings**
┌─────────────────────────────────────────────────────┐
│ fundo #0A0A0A                                       │
│                                                     │
│  ✅ Escopo Pronto                  [Carlos A.] [Sair] │
│                                                     │
│  Histórico de Briefings                             │
│                                                     │
│  Filtrar por status:                                │
│  [Todos] [Pendentes] [Aprovados] [Ajuste] [Recusado]│
│  botões glass, ativo com borda verde                │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ card glass com hover                         │  │
│  │ Cliente A · Varejo · em aprovação · 2h    →  │  │
│  ├──────────────────────────────────────────────┤  │
│  │ Cliente B · Tech · aprovado · ontem       →  │  │
│  ├──────────────────────────────────────────────┤  │
│  │ Cliente C · Saúde · ajuste · 3 dias       →  │  │
│  ├──────────────────────────────────────────────┤  │
│  │ Cliente D · Varejo · recusado · 1 semana  →  │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

## 11. Base de Conhecimento RAG

### 11.1 Estrutura da Base Fictícia

A base de conhecimento é composta por projetos fictícios mas realistas,
representando o histórico de entregas de uma software house brasileira.
Cada projeto contém informações suficientes para que o sistema de busca
vetorial encontre similaridades com novos briefings e forneça contexto
rico para a Claude API gerar estimativas precisas.

Os dados ficam armazenados no arquivo `knowledge-base/projetos.json`
e são indexados no pgvector via Supabase durante o setup inicial do
sistema.

---

### 11.2 Exemplo da Base de Conhecimento

```json
[
  {
    "id": "proj-001",
    "titulo": "Plataforma de E-commerce para Varejo de Moda",
    "segmento": "Varejo",
    "descricao": "Desenvolvimento de loja virtual completa com catálogo de produtos, carrinho, checkout com múltiplos meios de pagamento, painel administrativo e integração com ERP da empresa.",
    "tecnologias": ["React", "Node.js", "PostgreSQL", "Stripe", "AWS S3"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 2,
      "dev_junior": 1,
      "designer": 1
    },
    "horas_estimadas": {
      "tech_lead": 80,
      "dev_pleno": 320,
      "dev_junior": 160,
      "designer": 120
    },
    "horas_total": 680,
    "custo_estimado": 85000,
    "prazo_semanas": 16,
    "viabilidade": "alta",
    "complexidade": "alta",
    "observacoes": "Projeto com alta complexidade de integrações externas. Recomendado iniciar pelo módulo de catálogo antes do checkout.",
    "resultado": "entregue_com_sucesso"
  },
  {
    "id": "proj-002",
    "titulo": "Sistema de Agendamento para Clínica Médica",
    "segmento": "Saúde",
    "descricao": "Plataforma web para agendamento de consultas, gestão de pacientes, prontuário eletrônico simplificado e painel para médicos e recepcionistas.",
    "tecnologias": ["React", "Node.js", "MySQL", "Railway"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 1,
      "dev_junior": 1
    },
    "horas_estimadas": {
      "tech_lead": 40,
      "dev_pleno": 160,
      "dev_junior": 80
    },
    "horas_total": 280,
    "custo_estimado": 35000,
    "prazo_semanas": 8,
    "viabilidade": "alta",
    "complexidade": "media",
    "observacoes": "Atenção à LGPD para dados de saúde. Criptografia obrigatória em dados sensíveis.",
    "resultado": "entregue_com_sucesso"
  },
  {
    "id": "proj-003",
    "titulo": "App de Delivery para Restaurante Local",
    "segmento": "Alimentação",
    "descricao": "Aplicativo web responsivo para pedidos online, cardápio digital, integração com sistema de pagamento e painel de gestão de pedidos para o restaurante.",
    "tecnologias": ["React", "Node.js", "PostgreSQL", "Mercado Pago"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 2,
      "dev_junior": 0
    },
    "horas_estimadas": {
      "tech_lead": 60,
      "dev_pleno": 240
    },
    "horas_total": 300,
    "custo_estimado": 38000,
    "prazo_semanas": 10,
    "viabilidade": "alta",
    "complexidade": "media",
    "observacoes": "Integração com gateway de pagamento é o ponto crítico. Testar fluxo de reembolso antes de ir para produção.",
    "resultado": "entregue_com_sucesso"
  },
  {
    "id": "proj-004",
    "titulo": "Dashboard de Business Intelligence para Distribuidora",
    "segmento": "Logística",
    "descricao": "Painel de análise de dados com indicadores de vendas, estoque, rotas de entrega e performance de equipe. Integração com banco de dados legado da empresa.",
    "tecnologias": ["React", "Node.js", "PostgreSQL", "Chart.js"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 1,
      "dev_junior": 1
    },
    "horas_estimadas": {
      "tech_lead": 60,
      "dev_pleno": 180,
      "dev_junior": 80
    },
    "horas_total": 320,
    "custo_estimado": 42000,
    "prazo_semanas": 10,
    "viabilidade": "media",
    "complexidade": "alta",
    "observacoes": "Integração com legado frequentemente eleva o prazo em 20%. Mapear estrutura do banco antes de iniciar.",
    "resultado": "entregue_com_atraso"
  },
  {
    "id": "proj-005",
    "titulo": "Plataforma de Cursos Online",
    "segmento": "Educação",
    "descricao": "Sistema de EAD com cadastro de alunos, módulos de curso em vídeo, avaliações, emissão de certificados e painel de progresso.",
    "tecnologias": ["React", "Node.js", "PostgreSQL", "AWS S3", "Vimeo API"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 2,
      "dev_junior": 1
    },
    "horas_estimadas": {
      "tech_lead": 80,
      "dev_pleno": 320,
      "dev_junior": 120
    },
    "horas_total": 520,
    "custo_estimado": 65000,
    "prazo_semanas": 14,
    "viabilidade": "alta",
    "complexidade": "alta",
    "observacoes": "Armazenamento e streaming de vídeo elevam o custo de infraestrutura. Considerar CDN desde o início.",
    "resultado": "entregue_com_sucesso"
  },
  {
    "id": "proj-006",
    "titulo": "Sistema de Gestão de Contratos para Escritório Jurídico",
    "segmento": "Jurídico",
    "descricao": "Plataforma para cadastro e acompanhamento de contratos, prazos processuais, gestão de clientes e geração de documentos em PDF.",
    "tecnologias": ["React", "Node.js", "PostgreSQL", "PDFKit"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 1,
      "dev_junior": 1
    },
    "horas_estimadas": {
      "tech_lead": 40,
      "dev_pleno": 160,
      "dev_junior": 80
    },
    "horas_total": 280,
    "custo_estimado": 34000,
    "prazo_semanas": 8,
    "viabilidade": "alta",
    "complexidade": "media",
    "observacoes": "Geração de PDF com templates personalizados costuma tomar mais tempo do que o estimado. Reservar buffer.",
    "resultado": "entregue_com_sucesso"
  },
  {
    "id": "proj-007",
    "titulo": "CRM Simplificado para Equipe Comercial",
    "segmento": "Comercial",
    "descricao": "Sistema de gestão de leads, pipeline de vendas, histórico de interações, metas por vendedor e relatórios de conversão.",
    "tecnologias": ["React", "Node.js", "PostgreSQL"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 1,
      "dev_junior": 0
    },
    "horas_estimadas": {
      "tech_lead": 40,
      "dev_pleno": 140
    },
    "horas_total": 180,
    "custo_estimado": 22000,
    "prazo_semanas": 6,
    "viabilidade": "alta",
    "complexidade": "baixa",
    "observacoes": "Escopo pequeno e bem definido. Risco baixo de desvio.",
    "resultado": "entregue_com_sucesso"
  },
  {
    "id": "proj-008",
    "titulo": "Integração entre E-commerce e ERP Legado",
    "segmento": "Varejo",
    "descricao": "Desenvolvimento de middleware para sincronização de estoque, pedidos e clientes entre plataforma de e-commerce e sistema ERP legado da empresa.",
    "tecnologias": ["Node.js", "PostgreSQL", "REST API", "Webhooks"],
    "squad": {
      "tech_lead": 1,
      "dev_pleno": 1,
      "dev_junior": 0
    },
    "horas_estimadas": {
      "tech_lead": 60,
      "dev_pleno": 120
    },
    "horas_total": 180,
    "custo_estimado": 24000,
    "prazo_semanas": 6,
    "viabilidade": "media",
    "complexidade": "alta",
    "observacoes": "Projetos de integração com legado têm alta incerteza. Documentação do ERP frequentemente incompleta.",
    "resultado": "entregue_com_atraso"
  }
]
```

---

### 11.3 Lógica de Recuperação

Quando um novo briefing é submetido, o sistema executa os seguintes
passos para recuperar o contexto relevante da base:

**Passo 1, Geração do embedding do briefing:**
O texto completo do briefing (nome do cliente + segmento + descrição)
é enviado para a OpenAI Embeddings API, que retorna um vetor numérico
representando o significado semântico do texto.

**Passo 2, Busca por similaridade no pgvector:**
O vetor do briefing é comparado com todos os vetores da base de
conhecimento usando a função de similaridade cosseno do pgvector.
O sistema retorna os 3 projetos mais similares com score acima de 0.75.

**Passo 3, Montagem do contexto para a Claude API:**
Os 3 projetos recuperados são formatados como contexto estruturado
e incluídos no prompt enviado à Claude API junto com o briefing original.

**Passo 4, Geração do escopo:**
A Claude API recebe o briefing + contexto e gera o escopo estruturado
com estimativas fundamentadas nos projetos similares encontrados.

---

### 11.4 Exemplos de Input e Output Esperado

**Input (briefing do comercial):**
Cliente: Farmácias Saúde Total
Segmento: Saúde / Varejo Farmacêutico
Descrição: O cliente quer um sistema para gerenciar o cadastro de
clientes, programa de fidelidade com acúmulo de pontos, consulta de
histórico de compras e envio automático de cupons por e-mail quando
o cliente atingir determinada pontuação.
Prazo: 4 meses
Orçamento: R$ 50.000

**Projetos similares recuperados pelo RAG:**
- proj-001 (e-commerce varejo, similaridade 0.82)
- proj-007 (CRM comercial, similaridade 0.79)
- proj-002 (sistema saúde, similaridade 0.76)

**Output esperado da IA:**
```json
{
  "escopo": "Sistema web para gestão de clientes e programa de fidelidade,
    incluindo módulo de cadastro com histórico de compras, engine de
    pontuação configurável, painel administrativo e sistema automatizado
    de envio de cupons por e-mail ao atingir metas de pontuação.",
  "squad_sugerido": {
    "tech_lead": 1,
    "dev_pleno": 2,
    "dev_junior": 1
  },
  "horas_estimadas": {
    "tech_lead": 60,
    "dev_pleno": 280,
    "dev_junior": 100
  },
  "custo_estimado": 55000,
  "viabilidade": "alta",
  "observacoes": "Escopo bem definido com complexidade média. Atenção
    à LGPD para dados de clientes na área de saúde. Módulo de e-mail
    automatizado deve ser desenvolvido após a engine de pontuação
    estar estável. Orçamento do cliente está levemente abaixo da
    estimativa, recomendo negociar redução de escopo ou ajuste
    de valor antes de fechar."
}
```

## 12. Glossário

Glossário de termos técnicos e de negócio utilizados neste documento.
Serve como referência para qualquer pessoa que leia o PRD, independente
de formação técnica ou área de atuação.

---

**Autenticação**
Processo de verificar a identidade de um usuário antes de conceder
acesso ao sistema. No Escopo Pronto é feita via e-mail e senha,
gerando um token JWT após login bem-sucedido.

---

**Backlog**
Lista priorizada de funcionalidades, melhorias e correções a serem
desenvolvidas em um produto. Gerenciado pelo Product Owner.

---

**Bcrypt**
Algoritmo de hash utilizado para armazenar senhas de forma segura.
Transforma a senha em uma sequência irreversível de caracteres,
impossibilitando a recuperação da senha original mesmo com acesso
ao banco de dados.

---

**Briefing**
Documento ou registro contendo as informações coletadas pelo
comercial durante a reunião com o cliente. No Escopo Pronto é
preenchido em linguagem natural e serve como base para a geração
de escopo pela IA.

---

**Claude API**
Interface de programação fornecida pela Anthropic para acesso ao
modelo de linguagem Claude. Utilizada no Escopo Pronto para geração
de escopo, estimativas de squad e análise de viabilidade.

---

**CORS**
Cross-Origin Resource Sharing. Mecanismo de segurança do navegador
que controla quais domínios podem fazer requisições à API. No
Escopo Pronto é configurado para aceitar requisições apenas do
domínio do frontend em produção.

---

**Deploy**
Processo de publicar o sistema em um ambiente de produção,
tornando-o acessível aos usuários finais. No Escopo Pronto é
realizado via Railway.

---

**Embedding**
Representação numérica (vetor) de um texto que captura seu
significado semântico. Gerado pela OpenAI Embeddings API e
utilizado pelo pgvector para encontrar projetos similares na
base de conhecimento.

---

**Épico**
Agrupamento de user stories relacionadas que representam uma
funcionalidade maior do produto. No PRD do Escopo Pronto os épicos
são: Autenticação, Briefing, IA, Aprovação e Segurança.

---

**Escopo**
Definição clara e documentada do que será desenvolvido em um
projeto de software, incluindo funcionalidades, tecnologias,
prazo e custo estimados. O principal entregável gerado pelo
Escopo Pronto.

---

**Fallback**
Comportamento alternativo do sistema quando uma operação falha.
No Escopo Pronto o fallback da IA exibe uma mensagem clara ao
usuário e salva o briefing com flag de falha, permitindo
reprocessamento manual.

---

**Gap de escopo**
Diferença entre o que o cliente descreveu e o que foi
desenvolvido. Principal problema que o Escopo Pronto resolve,
reduzindo interpretações divergentes entre comercial e técnico.

---

**Glassmorphism**
Estilo visual que simula vidro fosco, com fundo semitransparente,
desfoque (blur) e borda sutil. Utilizado no design do Escopo Pronto
em cards, modais e elementos de interface.

---

**Gmail API**
Interface de programação do Google para envio e leitura de
e-mails via Gmail. Utilizada no Escopo Pronto para envio do
e-mail de notificação ao supervisor com o link de aprovação.

---

**Hash**
Transformação irreversível de um dado em uma sequência fixa de
caracteres. Utilizado no Escopo Pronto para armazenar tokens UUID
no banco sem expor o valor original.

---

**Helmet.js**
Biblioteca Node.js que configura automaticamente headers HTTP de
segurança, protegendo o sistema contra vulnerabilidades comuns
como clickjacking, sniffing e XSS via headers.

---

**JWT**
JSON Web Token. Formato de token usado para autenticação stateless.
Contém informações do usuário assinadas digitalmente, eliminando a
necessidade de armazenar sessões no servidor.

---

**Layered Architecture**
Padrão de arquitetura de software que organiza o sistema em
camadas com responsabilidades bem definidas. No Escopo Pronto
são 4 camadas: Apresentação, Aplicação, Serviço e Dados.

---

**LGPD**
Lei Geral de Proteção de Dados. Legislação brasileira que
regulamenta o tratamento de dados pessoais. Relevante para
o Escopo Pronto na proteção dos dados de clientes cadastrados
nos briefings.

---

**Multi-tenant**
Arquitetura onde um único sistema atende múltiplas empresas
(tenants) de forma isolada. O Escopo Pronto tem estrutura
preparada para multi-tenant em versões futuras, sem
implementação na v1.

---

**OpenAI Embeddings API**
Interface de programação da OpenAI especializada em transformar
textos em vetores numéricos (embeddings). Utilizada no Escopo Pronto
para indexar a base de conhecimento e transformar briefings em
vetores para busca por similaridade.

---

**pgvector**
Extensão do PostgreSQL para armazenamento e busca eficiente de
vetores numéricos. Utilizada no Escopo Pronto via Supabase para
encontrar projetos similares ao briefing através de busca
por similaridade semântica.

---

**PRD**
Product Requirements Document. Documento que descreve o produto,
suas funcionalidades, requisitos e decisões técnicas. Este
documento é o PRD do Escopo Pronto.

---

**Prompt Engineering**
Técnica de estruturar instruções para modelos de linguagem de
forma a obter respostas mais precisas, consistentes e úteis.
Utilizado no Escopo Pronto para garantir que a Claude API gere
escopos no formato esperado com as informações corretas.

---

**RAG**
Retrieval-Augmented Generation. Técnica que combina busca em
base de dados com geração de texto por IA. Em vez de responder
apenas com conhecimento genérico, a IA consulta dados reais
antes de gerar a resposta. No Escopo Pronto o RAG usa projetos
históricos para fundamentar as estimativas geradas.

---

**Railway**
Plataforma de deploy em nuvem utilizada para hospedar o backend
e o banco de dados do Escopo Pronto em produção.

---

**Rate Limiting**
Mecanismo que limita o número de requisições que um usuário
ou IP pode fazer em um determinado período. Protege o sistema
contra abuso, ataques de força bruta e uso excessivo da API de IA.

---

**Retry**
Tentativa automática de reexecutar uma operação que falhou.
No Escopo Pronto o sistema tenta até 2 vezes chamar a Claude API
antes de registrar falha e acionar o fallback.

---

**Squad**
Equipe de desenvolvimento responsável por um projeto. No
Escopo Pronto o squad sugerido pela IA inclui perfis como
Tech Lead, Dev Pleno e Dev Júnior com suas respectivas
estimativas de horas.

---

**SQL Injection**
Ataque que insere comandos SQL maliciosos em campos de entrada
para manipular o banco de dados. Prevenido no Escopo Pronto via
queries parametrizadas e sanitização de inputs.

---

**Stateless**
Arquitetura onde o servidor não armazena estado da sessão entre
requisições. O JWT permite autenticação stateless pois o token
carrega as informações do usuário sem necessidade de sessão
no servidor.

---

**Supabase**
Plataforma que fornece PostgreSQL gerenciado com funcionalidades
adicionais incluindo pgvector para busca vetorial. Utilizada no
Escopo Pronto como banco de dados principal e motor de RAG.

---

**Token UUID**
Identificador único universal gerado aleatoriamente, utilizado
como token de acesso seguro para a tela de aprovação do
supervisor. No Escopo Pronto o token é de uso único, expira em
48 horas e é armazenado apenas como hash no banco de dados.

---

**User Story**
Descrição de uma funcionalidade do ponto de vista do usuário,
no formato "Como [usuário], quero [funcionalidade] para
[benefício]". Utilizada para descrever os requisitos do
Escopo Pronto de forma orientada ao valor entregue.

---

**Versionamento de escopo**
Mecanismo que cria uma nova versão do escopo a cada
reprocessamento, preservando o histórico completo. No
Escopo Pronto cada geração cria v1, v2, v3... sem sobrescrever
versões anteriores.

---

**XSS**
Cross-Site Scripting. Ataque que injeta código JavaScript
malicioso em páginas web através de campos de entrada.
Prevenido no Escopo Pronto via sanitização de todos os inputs
antes de processar ou exibir dados.

## 13. Premissas e Dependências

### 13.1 Premissas

Premissas são condições que assumimos como verdadeiras para que o
sistema funcione conforme projetado. Se alguma delas mudar, o impacto
precisa ser reavaliado.

---

**P01, Acesso ao e-mail corporativo pelo supervisor**
Assume-se que o supervisor tem acesso regular ao e-mail informado
pelo comercial no momento do envio para aprovação. Se o supervisor
não acessar o e-mail em até 48 horas, o token expirará e o comercial
precisará reenviar.

**P02, Conexão com internet durante o uso**
O sistema é web e depende de conexão com internet tanto para o
comercial preencher o briefing quanto para o supervisor acessar
o link de aprovação. Não há suporte a modo offline.

**P03, Base de conhecimento mantida manualmente na v1**
A base de projetos fictícios em `knowledge-base/projetos.json` é
atualizada manualmente pela equipe técnica. Não há interface de
administração para inclusão de novos projetos na v1.

**P04, Um perfil de acesso na v1**
O sistema contempla apenas o perfil "comercial" com login próprio.
O supervisor acessa exclusivamente via token de aprovação, sem
cadastro ou painel dedicado na v1.

**P05, Stack tecnológica estável**
Assume-se que as APIs externas utilizadas (Claude API, OpenAI
Embeddings, Gmail API) permanecem disponíveis e com contratos
de uso compatíveis com o volume do projeto durante o período
de desenvolvimento e operação inicial.

**P06, Dados dos briefings são fictícios no portfólio**
Para fins de demonstração pública do projeto, todos os briefings
e escopos exibidos no portfólio usam dados fictícios. Nenhum
dado real de cliente é utilizado.

**P07, Orçamento do cliente é opcional**
O campo de orçamento no formulário de briefing é opcional. A IA
gera estimativas baseadas na complexidade do projeto mesmo sem
essa informação, mas orçamento informado melhora a análise de
viabilidade.

**P08, Supervisor confia no e-mail remetente**
Assume-se que o supervisor reconhece o e-mail enviado pelo sistema
como legítimo. O domínio do remetente e a identidade visual do
e-mail devem ser consistentes para evitar que o e-mail seja
tratado como spam.

---

### 13.2 Dependências

Dependências são serviços, ferramentas ou condições externas que
o sistema precisa para funcionar. Falha em qualquer dependência
impacta diretamente o Escopo Pronto.

---

**D01, Claude API (Anthropic)**
Dependência crítica. Toda a geração de escopo depende da
disponibilidade desta API. Impacto em caso de falha: módulo de
geração indisponível. Mitigação: fallback com retry automático
(2 tentativas) e flag de falha no banco para reprocessamento
manual.

**D02, OpenAI Embeddings API**
Dependência crítica para o RAG. Sem ela o sistema não consegue
transformar briefings em vetores para busca por similaridade.
Impacto em caso de falha: geração de escopo indisponível.
Mitigação: mesma cadeia de retry e fallback da Claude API.

**D03, Supabase (PostgreSQL + pgvector)**
Dependência crítica. Toda a persistência de dados e a busca
vetorial dependem do Supabase. Impacto em caso de falha: sistema
completamente indisponível. Mitigação: Supabase tem SLA de 99.9%
no plano pago e backups automáticos diários.

**D04, Gmail API (Google)**
Dependência importante para o fluxo de aprovação. Sem ela
o e-mail ao supervisor não é enviado. Impacto em caso de
falha: fluxo de aprovação interrompido, mas briefing salvo
no banco. Mitigação: log de falha + opção de reenvio manual
pelo comercial.

**D05, Railway (deploy)**
Dependência de infraestrutura. O backend e o banco rodam no
Railway. Impacto em caso de falha: sistema completamente
indisponível. Mitigação: Railway tem histórico de alta
disponibilidade e suporte a redeploy automático.

**D06, Node.js versão 18 ou superior**
O backend requer Node.js 18+ para compatibilidade com as
bibliotecas utilizadas. Dependência de ambiente de
desenvolvimento e produção.

**D07, Conta Google com Gmail API habilitada**
O envio de e-mail real requer uma conta Google com a Gmail API
ativada no Google Cloud Console e credenciais OAuth2 configuradas.
Deve ser configurada antes do deploy em produção.

**D08, Chaves de API válidas e com créditos suficientes**
O sistema depende de chaves de API ativas para Anthropic e
OpenAI. Créditos esgotados ou chaves inválidas causam falha
na geração. Mitigação: monitoramento de uso e alertas de
limite via dashboards das respectivas plataformas.

## 14. Riscos

Riscos identificados durante a fase de análise, com impacto estimado,
probabilidade e estratégia de mitigação documentada.

---

### R01, Alucinação da IA gerando estimativas irreais

**Impacto:** Alto  
**Probabilidade:** Média  
**Descrição:** A Claude API pode gerar escopos com horas, custos ou
squads inconsistentes com a realidade do mercado, prejudicando a
credibilidade da proposta perante o supervisor e o cliente.

**Mitigação:**
- Uso de RAG com projetos reais para fundamentar as respostas
- Prompt Engineering estruturado com exemplos e restrições de formato
- Validação de schema antes de persistir a resposta no banco
- Revisão obrigatória pelo comercial antes do envio ao supervisor
- Supervisor tem poder de ajustar ou recusar o escopo gerado

---

### R02, Indisponibilidade da Claude API

**Impacto:** Alto  
**Probabilidade:** Baixa  
**Descrição:** Falha ou instabilidade na API da Anthropic impede a
geração de escopos, bloqueando o fluxo principal do sistema.

**Mitigação:**
- Retry automático de até 2 tentativas em falhas transitórias
- Timeout máximo de 10 segundos por tentativa
- Flag `falha_geracao` salva no banco para reprocessamento posterior
- Mensagem clara ao usuário sem expor detalhes técnicos
- Briefing preservado para reprocessar quando a API voltar

---

### R03, Vazamento do token de aprovação

**Impacto:** Alto  
**Probabilidade:** Baixa  
**Descrição:** O link tokenizado enviado ao supervisor pode ser
interceptado ou encaminhado indevidamente, expondo dados sensíveis
do escopo a pessoas não autorizadas.

**Mitigação:**
- Token armazenado apenas como hash no banco, nunca em texto puro
- Token de uso único, invalidado após o primeiro acesso válido
- Expiração de 48 horas independente de uso
- Dados sensíveis nunca incluídos no corpo do e-mail
- HTTPS obrigatório em produção
- Log de acesso registrado com IP e timestamp

---

### R04, Base de conhecimento RAG desatualizada

**Impacto:** Médio  
**Probabilidade:** Alta  
**Descrição:** Na v1 a base de conhecimento é atualizada manualmente.
Com o tempo, os projetos fictícios podem não refletir mais a realidade
do mercado, degradando a qualidade das estimativas geradas.

**Mitigação:**
- Documentação clara do processo de atualização da base
- Supervisor pode ajustar estimativas via fluxo de aprovação
- V2 prevê interface administrativa para gestão da base
- Projetos fictícios construídos com faixas realistas de mercado

---

### R05, Falha no envio de e-mail ao supervisor

**Impacto:** Médio  
**Probabilidade:** Baixa  
**Descrição:** Falha na Gmail API ou bloqueio do e-mail como spam
impede o supervisor de receber o link de aprovação, travando o
fluxo de aprovação.

**Mitigação:**
- Falha registrada no log com timestamp
- Alerta visual ao comercial informando que o e-mail não foi enviado
- Opção de reenvio manual pelo comercial
- Status do briefing mantido como `em_aprovacao` para não perder o contexto
- V2 prevê notificação interna no dashboard como canal alternativo

---

### R06, Custo inesperado das APIs externas

**Impacto:** Médio  
**Probabilidade:** Baixa  
**Descrição:** Uso intenso das APIs da Anthropic e OpenAI pode gerar
custos acima do esperado caso o volume de briefings aumente
significativamente.

**Mitigação:**
- Rate limiting por usuário nas rotas de geração de IA
- Monitoramento de uso via logs estruturados
- OpenAI Embeddings utilizada apenas para indexação, custo fixo e baixo
- Claude API chamada apenas após validação completa do briefing
- V2 prevê cache de embeddings para briefings similares

---

### R07, Reprocessamento excessivo pelo comercial

**Impacto:** Baixo  
**Probabilidade:** Média  
**Descrição:** Comercial pode reprocessar o mesmo briefing várias vezes
sem necessidade, gerando múltiplas versões desnecessárias e consumindo
créditos de API sem valor agregado.

**Mitigação:**
- Rate limiting de 20 requisições de IA por hora por usuário
- Histórico de versões visível para desencorajar reprocessamentos
  desnecessários
- V2 prevê aviso ao comercial quando há versão recente disponível

---

### R08, Desalinhamento entre escopo gerado e expectativa do cliente

**Impacto:** Alto  
**Probabilidade:** Média  
**Descrição:** Mesmo com RAG, a IA pode gerar um escopo que não reflete
com precisão o que o cliente descreveu na reunião, caso o briefing
preenchido pelo comercial seja vago ou incompleto.

**Mitigação:**
- Campos obrigatórios no formulário garantem informações mínimas
- Instrução no placeholder do campo de descrição orientando
  o comercial a ser específico
- Revisão obrigatória pelo comercial antes do envio
- Supervisor pode solicitar ajuste com comentário detalhado
- V2 prevê checklist de qualidade do briefing antes do processamento

---

### R09, Expiração do token antes da aprovação do supervisor

**Impacto:** Baixo  
**Probabilidade:** Média  
**Descrição:** Supervisor pode demorar mais de 48 horas para acessar
o link, fazendo o token expirar e impedindo a aprovação sem nova
notificação.

**Mitigação:**
- E-mail informa claramente o prazo de 48 horas para acesso
- Comercial pode reenviar o e-mail manualmente gerando novo token
- Status do briefing permanece `em_aprovacao` para não perder contexto
- V2 prevê envio automático de lembrete após 24 horas sem resposta

---

### R10, Acesso indevido ao sistema por credenciais comprometidas

**Impacto:** Alto  
**Probabilidade:** Baixa  
**Descrição:** Credenciais de um comercial podem ser comprometidas,
permitindo acesso não autorizado aos briefings e dados de clientes.

**Mitigação:**
- Rate limiting de 10 tentativas de login por minuto por IP
- Senhas armazenadas com hash bcrypt (custo mínimo 10)
- Tokens JWT com expiração máxima de 8 horas
- Log de acesso registrado com IP e user agent
- V2 prevê autenticação em dois fatores (2FA)


## 15. Análise de Valor de Negócio

Esta seção conecta o produto ao impacto real no negócio da software
house que o adota. Os números são estimativas baseadas em referências
de mercado e nos projetos fictícios da base de conhecimento, não em
dados reais de nenhuma empresa específica.

---

### 15.1 Problema Quantificado

Para dimensionar o valor do Escopo Pronto, é necessário primeiro
estimar o custo do problema que ele resolve.

**Cenário base de uma software house de médio porte:**

| Indicador | Estimativa |
|---|---|
| Propostas geradas por mês | 20 |
| Tempo médio para gerar uma proposta hoje | 3 dias |
| Taxa de retrabalho por gap de escopo | 35% dos projetos |
| Custo médio de retrabalho por projeto | R$ 15.000 |
| Projetos com retrabalho por mês | 2 a 3 |
| Custo mensal estimado de retrabalho | R$ 30.000 a R$ 45.000 |
| Propostas perdidas por lentidão no processo | 3 a 5 por mês |
| Ticket médio por proposta perdida | R$ 40.000 |
| Receita não capturada por mês | R$ 120.000 a R$ 200.000 |

**Custo total estimado do problema por mês:**
Entre R$ 150.000 e R$ 245.000 em retrabalho e oportunidades perdidas.

---

### 15.2 Valor Gerado pelo Escopo Pronto

**Redução do tempo de geração de proposta:**

| Situação | Tempo |
|---|---|
| Processo atual (AS-IS) | 2 a 5 dias |
| Com Escopo Pronto (TO-BE) | 15 a 30 minutos |
| Redução estimada | 95% |

Com propostas geradas em minutos, o comercial pode responder ao
cliente ainda no dia da reunião. A velocidade de resposta é um
fator decisivo em mercados competitivos.

**Redução de retrabalho por gap de escopo:**

O registro estruturado do briefing e a geração padronizada de escopo
reduzem interpretações divergentes entre comercial e técnico. A
estimativa conservadora é de redução de 40% nos casos de retrabalho
por gap de escopo, representando economia de R$ 12.000 a R$ 18.000
por mês no cenário base.

**Aumento na taxa de conversão de propostas:**

Propostas mais rápidas, mais estruturadas e com estimativas
fundamentadas em dados reais tendem a converter melhor. Uma melhora
de 10% na taxa de conversão no cenário base representa R$ 80.000 a
R$ 120.000 de receita adicional por mês.

**Rastreabilidade e redução de conflitos:**

O histórico auditável de decisões protege a software house em casos
de questionamento pelo cliente sobre o que foi acordado. Isso reduz
disputas contratuais e desgaste no relacionamento.

---

### 15.3 Resumo do Impacto Estimado

| Benefício | Impacto mensal estimado |
|---|---|
| Redução de retrabalho por gap | R$ 12.000 a R$ 18.000 |
| Receita adicional por conversão | R$ 80.000 a R$ 120.000 |
| Economia de tempo da equipe técnica | 40h a 80h por mês |
| Redução de conflitos contratuais | Não quantificável diretamente |

**Retorno sobre o investimento (ROI):**
Considerando o custo de desenvolvimento do Escopo Pronto como
investimento único e os benefícios mensais estimados, o sistema
se paga em menos de 30 dias de operação no cenário base.

---

### 15.4 Métricas de Acompanhamento

Após o lançamento, o sucesso do Escopo Pronto deve ser medido pelos
seguintes indicadores:

| Métrica | Meta v1 | Como medir |
|---|---|---|
| Tempo médio de geração de escopo | Menos de 30 min | Log de timestamps |
| Taxa de aprovação na primeira versão | Acima de 60% | Banco de dados |
| Taxa de reprocessamento por briefing | Menos de 2x | Contagem de versões |
| Briefings gerados por semana | Crescimento constante | Dashboard |
| Taxa de falha na geração de IA | Menos de 5% | Flag falha_geracao |
| Tempo médio de resposta do supervisor | Menos de 24h | Log de aprovações |

---

### 15.5 Posicionamento Competitivo

O Escopo Pronto não compete com ferramentas genéricas de proposta
como Google Docs ou Word. Ele compete com a ausência de processo,
que é o cenário atual da maioria das software houses brasileiras
de pequeno e médio porte.

O diferencial não é apenas a IA, é a combinação de:
- Registro estruturado de briefing em linguagem natural
- Estimativas fundamentadas em histórico real via RAG
- Fluxo de aprovação seguro e rastreável
- Histórico auditável de todas as decisões

Esse conjunto transforma um processo informal e dependente de
pessoas em um processo sistematizado, escalável e auditável.

## 16. Plano de Testes

### 16.1 Objetivos

Garantir que todas as funcionalidades do Escopo Pronto funcionam
conforme especificado nos requisitos e casos de uso, com foco
especial nos fluxos críticos de segurança, geração de IA e
aprovação via token.

---

### 16.2 Escopo dos Testes

**Incluído:**
- Fluxo completo de criação de briefing até aprovação
- Validação de segurança dos tokens UUID
- Tratamento de falhas na IA (fallback e retry)
- Validação de inputs e sanitização
- Autenticação e controle de acesso
- Versionamento de escopo
- Envio de e-mail e geração de link tokenizado

**Excluído:**
- Testes de performance em alta escala (acima de 50 usuários)
- Testes de penetração formal (previsto para v2)
- Testes automatizados end-to-end (previsto para v2)

---

### 16.3 Casos de Teste por Módulo

---

#### Módulo de Autenticação

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| T01 | Login com credenciais válidas | E-mail e senha corretos | Redireciona ao dashboard com JWT gerado |
| T02 | Login com senha incorreta | Senha errada | Mensagem de erro genérica, sem indicar qual campo |
| T03 | Login com e-mail inexistente | E-mail não cadastrado | Mensagem de erro genérica |
| T04 | Rate limit de login | 11 tentativas em 1 minuto | Bloqueio com mensagem de rate limit |
| T05 | Acesso a rota protegida sem JWT | Sem token no header | Retorno 401 Unauthorized |
| T06 | Acesso com JWT expirado | Token com mais de 8h | Retorno 401, redirecionamento ao login |
| T07 | Logout | Clique em sair | Token invalidado, redirecionado ao login |

---

#### Módulo de Briefing

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| T08 | Criar briefing com todos os campos | Formulário completo | Briefing salvo, processamento iniciado |
| T09 | Criar briefing sem campo obrigatório | Nome do cliente vazio | Mensagem de validação no campo |
| T10 | Criar briefing com script no campo | `<script>alert(1)</script>` | Input sanitizado, sem execução de código |
| T11 | Criar briefing com SQL no campo | `'; DROP TABLE briefings;` | Input tratado como texto simples |
| T12 | Visualizar briefing existente | Clique no briefing | Detalhe exibido com escopo e status |
| T13 | Filtrar briefings por status | Seleção de filtro | Lista atualizada com briefings do status |

---

#### Módulo de Processamento IA

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| T14 | Geração de escopo com sucesso | Briefing válido | Escopo v1 gerado e exibido em menos de 10s |
| T15 | Timeout na Claude API | API não responde em 10s | Retry automático iniciado |
| T16 | Falha após 2 retries | API indisponível | Flag falha_geracao salva, mensagem ao usuário |
| T17 | Reprocessar briefing com falha | Clique em reprocessar | Nova tentativa iniciada, versão anterior preservada |
| T18 | Reprocessar briefing com sucesso | Briefing já com v1 | Escopo v2 gerado, histórico preservado |
| T19 | Schema inválido na resposta da IA | Resposta malformada | Tratado como falha, fallback acionado |
| T20 | Rate limit de IA por usuário | 21 requisições em 1h | Bloqueio com mensagem clara |

---

#### Módulo de Aprovação

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| T21 | Enviar briefing para aprovação | Clique em enviar | E-mail disparado, status atualizado |
| T22 | Acessar link válido | Token dentro de 48h, não usado | Tela de aprovação exibida com escopo |
| T23 | Acessar link expirado | Token com mais de 48h | Página de erro sem dados do escopo |
| T24 | Acessar link já utilizado | Token já usado | Página de erro sem dados do escopo |
| T25 | Acessar link com token inválido | Token inexistente no banco | Página de erro genérica |
| T26 | Aprovar escopo | Clique em aprovar | Status aprovado, token invalidado, log registrado |
| T27 | Solicitar ajuste sem comentário | Clique em ajuste sem preencher | Campo de comentário marcado como obrigatório |
| T28 | Solicitar ajuste com comentário | Comentário preenchido | Status ajuste_solicitado, comentário salvo |
| T29 | Recusar sem comentário | Clique em recusar sem preencher | Campo de comentário marcado como obrigatório |
| T30 | Recusar com comentário | Comentário preenchido | Status recusado, comentário salvo |
| T31 | Tentar reusar token após decisão | Clique no link após aprovar | Página de erro, token já invalidado |

---

#### Módulo de Segurança

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| T32 | Acessar rota de outro usuário | URL com briefing_id de outro usuário | Retorno 403 Forbidden |
| T33 | Token UUID sem hash no banco | Manipulação do token na URL | Não encontrado, página de erro |
| T34 | Requisição sem HTTPS | HTTP em produção | Redirecionamento forçado para HTTPS |
| T35 | Headers de segurança | Inspeção de headers | Helmet.js configurado corretamente |
| T36 | Chave de API em resposta de erro | Erro proposital na IA | Chave não exposta na resposta |
| T37 | Log de auditoria após decisão | Aprovação registrada | Log com ator, decisão, versão e timestamp |

---

#### Módulo de E-mail

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| T38 | E-mail enviado com sucesso | Envio para aprovação | E-mail recebido com link e prazo de 48h |
| T39 | E-mail sem dados sensíveis | Verificar corpo do e-mail | Sem valores, horas ou escopo no corpo |
| T40 | Falha no envio de e-mail | Gmail API indisponível | Alerta ao comercial, log de falha registrado |
| T41 | Reenvio manual após falha | Clique em reenviar | Novo token gerado, novo e-mail enviado |

---

### 16.4 Critérios de Aceite Globais

O sistema está pronto para deploy em produção quando:

- Todos os casos de teste críticos (T01 a T07, T21 a T31, T32 a T36)
  passarem sem falha
- Nenhum dado sensível exposto em logs, respostas de erro ou e-mails
- Tempo de geração de escopo abaixo de 10 segundos em condições normais
- Fluxo completo de briefing até aprovação executado sem erros em
  3 execuções consecutivas
- Fallback da IA funcionando corretamente em caso de falha simulada
- Tokens UUID expirados e usados rejeitados corretamente em 100% dos casos

---

### 16.5 Ambiente de Testes

| Ambiente | Finalidade |
|---|---|
| Local (localhost) | Desenvolvimento e testes unitários |
| Railway (staging) | Testes de integração com APIs reais |
| Railway (produção) | Deploy final após aprovação em staging |

**Dados de teste:**
- Usuários fictícios cadastrados localmente
- Briefings baseados nos projetos da base de conhecimento RAG
- E-mail de teste criado exclusivamente para o projeto
- APIs externas utilizadas em modo real no staging

## 17. Roadmap

### 17.1 V1, O que está sendo entregue agora

**Foco:** Fluxo central funcionando do briefing à aprovação, com IA,
segurança e rastreabilidade.

| Funcionalidade | Status |
|---|---|
| Autenticação JWT para comercial | V1 |
| Criação de briefing em linguagem natural | V1 |
| Processamento via RAG + Claude API | V1 |
| Versionamento de escopo (v1, v2, v3...) | V1 |
| Fallback e retry na IA | V1 |
| Envio de e-mail com token UUID seguro | V1 |
| Tela de aprovação para supervisor | V1 |
| Log de auditoria por decisão | V1 |
| Dashboard com histórico de briefings | V1 |
| Landing page institucional | V1 |
| Deploy em produção via Railway | V1 |

---

### 17.2 V2, Melhorias planejadas

**Foco:** Experiência mais completa para supervisor e comercial,
integrações e qualidade operacional.

| Funcionalidade | Justificativa |
|---|---|
| Login próprio para supervisor | Histórico centralizado de aprovações |
| Notificação interna no dashboard | Canal alternativo ao e-mail |
| Lembrete automático após 24h sem resposta | Reduz tokens expirados por esquecimento |
| Comparação visual entre versões de escopo | Facilita decisão em reprocessamentos |
| Interface administrativa para base RAG | Elimina atualização manual do JSON |
| Integração via webhook com CRM | RD Station, HubSpot |
| Checklist de qualidade do briefing | Reduz briefings vagos antes do processamento |
| Dashboard de métricas de conversão | Visibilidade do funil comercial |
| Autenticação em dois fatores (2FA) | Elevação do nível de segurança |
| Testes automatizados end-to-end | Qualidade e confiabilidade em escala |

---

### 17.3 V3, Visão de longo prazo

**Foco:** Produto completo, escalável e integrado ao ecossistema
de ferramentas da software house.

| Funcionalidade | Visão |
|---|---|
| Multi-tenant | Múltiplas empresas na mesma plataforma |
| Geração automática de proposta em PDF | Do escopo aprovado à proposta formal |
| Integração com Jira e Trello | Criação automática de backlog após aprovação |
| Parsing de e-mail de resposta | Fluxo bidirecional via e-mail |
| Templates de escopo por segmento | Modelos pré-configurados por área |
| API pública | Integração com sistemas externos |
| Fine-tuning do modelo com dados próprios | IA treinada no histórico real da empresa |
| Mobile app | Acesso ao sistema via smartphone |

---

## 18. Decisões e Trade-offs

Esta seção documenta as principais decisões técnicas e de produto
tomadas durante a concepção do Escopo Pronto, com o contexto,
as alternativas consideradas e a justificativa da escolha.
Decisões bem documentadas demonstram maturidade de produto e
facilitam revisões futuras.

---

### D01, Usar Claude API + OpenAI Embeddings em vez de uma API só

**Contexto:**
O RAG exige duas operações com características distintas: transformar
textos em vetores numéricos (embeddings) e gerar respostas em linguagem
natural (geração). Ambas podem ser feitas por um único provedor, mas
não com a mesma eficiência.

**Analogia para entender:**
Pensa numa biblioteca com 500 livros. Para encontrar os livros mais
parecidos com o que você procura, alguém precisou ler todos e criar
um índice. A OpenAI Embeddings faz isso com os projetos da base,
transforma cada um em números que representam o seu significado.
O Claude é o pesquisador que, com esse índice em mãos e o briefing
do comercial, analisa tudo e escreve o escopo. São tarefas diferentes
que pedem perfis diferentes.

**Opções consideradas:**
- Claude API para tudo (embeddings + geração)
- OpenAI para tudo (embeddings + GPT para geração)
- OpenAI Embeddings + Claude API

**Decisão:** OpenAI Embeddings + Claude API

**Justificativa:**
A OpenAI Embeddings é o endpoint mais consolidado, barato e documentado
do mercado para indexação vetorial. Custo inferior a R$ 0,10 para
indexar a base inteira. O Claude é superior para geração de texto
estruturado, raciocínio e análise de viabilidade. Usar o melhor de
cada um para sua função específica é prática comum em sistemas RAG
de produção. A complexidade adicional de gerenciar duas APIs é
justificada pela qualidade e custo do resultado.

---

### D02, Aprovação interna no sistema em vez de parsing de e-mail

**Contexto:**
O supervisor precisa registrar sua decisão sobre o escopo. A decisão
pode ser capturada de duas formas: lendo e interpretando a resposta
do supervisor ao e-mail, ou exibindo uma tela de aprovação acessível
via link no e-mail.

**Opções consideradas:**
- Parsing de e-mail bidirecional (supervisor responde o e-mail e o
  sistema interpreta a resposta)
- Tela de aprovação interna acessível via link tokenizado no e-mail

**Decisão:** Tela de aprovação interna via link tokenizado

**Justificativa:**
O parsing de e-mail exige configurar um servidor para escutar e-mails
recebidos (webhook de e-mail via SendGrid Inbound Parse ou Mailgun),
adiciona complexidade de infraestrutura significativa e é mais frágil,
dependendo do formato exato da resposta do supervisor. A tela interna
entrega a mesma experiência prática com muito menos risco técnico,
garante que a decisão seja registrada no formato correto e permite
controle total sobre validação, auditoria e expiração. O e-mail
notifica, a decisão fica no sistema.

---

### D03, Token UUID com hash em vez de login do supervisor

**Contexto:**
O supervisor precisa acessar o escopo para aprovar. Isso pode ser
feito exigindo que ele tenha login próprio no sistema, ou via link
seguro enviado por e-mail sem necessidade de cadastro.

**Opções consideradas:**
- Login próprio do supervisor com cadastro no sistema
- Token UUID com hash, expiração e uso único via link no e-mail

**Decisão:** Token UUID com hash, expiração e uso único

**Justificativa:**
Na v1 o supervisor é um ator externo ao fluxo principal do sistema.
Exigir cadastro cria fricção desnecessária e aumenta a superfície de
ataque. O token UUID com hash resolve o acesso de forma segura,
rastreável e sem dependência de sessão. A segurança é garantida
pela combinação de hash (valor nunca exposto), expiração em 48 horas
e invalidação após o primeiro uso. É o mesmo padrão usado em links
de redefinição de senha em sistemas enterprise.

---

### D04, PostgreSQL via Supabase em vez de MySQL

**Contexto:**
O sistema precisa de banco relacional para dados da aplicação e
banco vetorial para o RAG. MySQL é uma stack amplamente utilizada no mercado. PostgreSQL com pgvector resolve os dois casos.

**Opções consideradas:**
- MySQL para dados relacionais + serviço separado para vetores
  (Pinecone, Weaviate)
- PostgreSQL via Supabase com pgvector

**Decisão:** PostgreSQL via Supabase com pgvector

**Justificativa:**
Supabase entrega PostgreSQL mais pgvector na mesma plataforma,
no plano gratuito, sem necessidade de gerenciar dois serviços
separados. PostgreSQL é mais robusto que MySQL para cargas de
trabalho complexas e tem suporte nativo a JSONB, útil para os
campos `squad_sugerido` e `horas_estimadas`. A consistência de
dados entre banco relacional e banco vetorial é garantida por
estarem na mesma plataforma. Menor complexidade operacional,
menor custo, maior confiabilidade.

---

### D05, Dados fictícios na base RAG em vez de dados reais

**Contexto:**
A base de conhecimento RAG precisa de projetos históricos para
fundamentar as estimativas. O Escopo Pronto é um projeto de portfólio,
sem acesso a dados reais de nenhuma software house.

**Opções consideradas:**
- Dados reais de projetos (inviável por confidencialidade)
- Dados fictícios genéricos e simplificados
- Dados fictícios realistas e detalhados

**Decisão:** Dados fictícios realistas e detalhados

**Justificativa:**
Dados fictícios realistas com segmentos, squads, horas e custos
dentro de faixas reais de mercado demonstram que a arquitetura
funciona corretamente em cenário representativo. Dados genéricos
ou simplificados degradariam a qualidade das estimativas e não
demonstrariam o valor real do RAG. Em uso real pela empresa, os
dados seriam substituídos por projetos reais do histórico da
software house. A base fictícia serve como template e prova de
conceito.

---

### D06, Layered Architecture em vez de Clean Architecture

**Contexto:**
O sistema precisa de uma arquitetura que separe responsabilidades,
seja testável e seja compreensível por qualquer desenvolvedor que
leia o código.

**Opções consideradas:**
- MVC simples (Model, View, Controller)
- Layered Architecture de 4 camadas
- Clean Architecture / Hexagonal

**Decisão:** Layered Architecture de 4 camadas

**Justificativa:**
MVC simples não oferece separação suficiente para um sistema com
múltiplos serviços externos (IA, e-mail, RAG). Clean Architecture
é mais poderosa mas introduz abstrações e indireções que aumentam
a complexidade desnecessariamente para um projeto solo de portfólio.
Layered Architecture equilibra separação de responsabilidades,
testabilidade e legibilidade. Controllers não acessam banco
diretamente, services são independentes de framework, models
não contêm lógica de negócio. É o padrão mais usado em software
houses brasileiras de médio porte, facilitando leitura por
qualquer dev que entre no projeto.

---

### D07, Vibe coding com Claude Code + Cursor em vez de desenvolvimento manual

**Contexto:**
O Escopo Pronto é desenvolvido por um único desenvolvedor com perfil
de Business Analyst e Product Owner, com experiência em desenvolvimento
assistido por IA.

**Opções consideradas:**
- Desenvolvimento manual linha a linha
- Desenvolvimento assistido por IA (Claude Code + Cursor)

**Decisão:** Desenvolvimento assistido por IA (Claude Code + Cursor)

**Justificativa:**
O uso de ferramentas de IA no desenvolvimento é uma prática consolidada
e crescente no mercado. O Claude Code com o CLAUDE.md do projeto como
contexto garante que toda geração de código segue as decisões de
arquitetura, stack e padrões definidos neste PRD. O responsável pelo produto mantém
entendimento completo de cada módulo e consegue explicar e defender todas as decisões 
técnicas e de produto em qualquer contexto profissional. A IA acelera a produção
sem substituir o raciocínio técnico, que foi aplicado integralmente
na fase de análise e documentação. Essa abordagem é honesta,
moderna e alinhada com como os melhores times de tecnologia
trabalham hoje.

---

D08, Vercel para frontend em vez de Railway

Contexto: PRD original previa Railway para todo o sistema.

Decisão: Vercel para frontend, Railway para backend.

Justificativa: Vercel é especializado em frontend estático e 
frameworks como React/Vite, com deploy automático a cada push, 
CDN global e configuração zero. Railway é superior para backend 
Node.js com banco de dados. Separar as responsabilidades é uma 
decisão de arquitetura comum no mercado e melhora a performance 
do frontend significativamente.

## 19. Premissas e Dependências (complemento)

> Esta seção complementa a seção 13, adicionando dependências
> técnicas identificadas após a conclusão da modelagem.

**D01, Conta Anthropic com créditos disponíveis**
O sistema depende de créditos na conta Anthropic para chamar a
Claude API. Sem créditos, a geração de escopo falha e o fallback
é acionado.

**D02, Conta OpenAI com créditos disponíveis**
O sistema depende de créditos na conta OpenAI para gerar embeddings
durante o setup inicial e para novas indexações. Custo estimado
inferior a R$ 0,10 para a base completa.

**D03, Projeto ativo no Google Cloud Console**
O envio de e-mail via Gmail API depende de um projeto ativo no
Google Cloud Console com a Gmail API habilitada e credenciais
OAuth2 configuradas.

**D04, Instância ativa no Railway**
O deploy depende de uma instância ativa no Railway com variáveis
de ambiente configuradas. A instância gratuita pode sofrer
cold start em períodos de inatividade.

**D05, Supabase com pgvector habilitado**
O banco vetorial depende da extensão pgvector habilitada no
projeto Supabase. Deve ser ativada manualmente via SQL Editor
antes do setup inicial.

```sql
create extension if not exists vector;
```