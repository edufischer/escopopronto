# EscopoCerto ✅ , Contexto do Projeto

**Lema:** "O que o cliente espera é o que será entregue."

Plataforma web que permite ao comercial de uma software house registrar
o briefing de um cliente em linguagem natural. A IA processa via RAG e
gera automaticamente escopo preliminar, estimativa de squad e custo.
O resultado é enviado por e-mail seguro ao supervisor para aprovação,
com todo o histórico registrado no sistema.

---

## Padrão Arquitetural

Layered Architecture (Arquitetura em Camadas), 4 camadas:

1. Apresentação , React (frontend) + Rotas Express (backend)
2. Aplicação    , Controllers (orquestram o fluxo)
3. Serviço      , Lógica de negócio (AI, RAG, e-mail)
4. Dados        , Models + PostgreSQL via Supabase

Regra: cada camada só se comunica com a camada imediatamente abaixo.
Controllers não acessam banco diretamente, passam pelos Services.
Services não conhecem o Express, são independentes de framework.

---

## Diferenciais

- Redução de desalinhamento entre comercial e técnico
- Geração padronizada de escopos via IA com RAG
- Histórico auditável de decisões por briefing
- Aprovação assíncrona com link seguro e tokenizado
- Versionamento de escopo por geração (v1, v2, v3...)
- Observabilidade estruturada em produção
- Uso de RAG para maior precisão nas estimativas

---

## Stack Tecnológica

### Frontend
- React + Vite
- Tailwind CSS
- Shadcn/ui (componentes)
- Framer Motion (animações e transições)
- React Router (navegação)
- Axios (chamadas à API)
- Lucide React (ícones)

### Backend
- Node.js + Express
- JWT (autenticação stateless baseada em tokens)
- UUID v4 (tokens de aprovação únicos)
- Nodemailer + Gmail API (e-mail real)
- Helmet.js (segurança de headers HTTP)
- express-rate-limit (proteção contra abuso)
- dotenv (variáveis de ambiente)

### Banco de Dados
- PostgreSQL via Supabase
- pgvector via Supabase (busca vetorial para RAG)

### Inteligência Artificial
- Claude API , Anthropic (geração de escopo)
- OpenAI Embeddings API (geração de vetores para RAG)
- Base de conhecimento fictícia em JSON (tipos de projeto,
  tecnologias, horas médias, faixas de custo, perfis de squad)

### Deploy
- Railway (backend + banco)
- Variáveis de ambiente configuradas no Railway

---

## Design

- Inspiração: Resend.com (tipografia, espaçamento, cores),
  Linear.app (movimento), Apple iOS atual (glassmorphism)
- Tema: escuro (#0A0A0A de fundo)
- Fonte: Inter (Google Fonts), pesos 400 e 500 apenas
- Cor primária / ações: verde (#22C55E)
- Texto principal: branco (#FFFFFF)
- Texto secundário: cinza (#A1A1AA)
- Ícones: Lucide React
- Glassmorphism: bg rgba(255,255,255,0.05) + backdrop-blur-md +
  border rgba(255,255,255,0.1)
- Aurora hero: radial-gradient animado com #22C55E em baixa opacidade
- Animações de scroll: Framer Motion com whileInView + viewport once
- Gradiente Aurora sutil em verde (#22C55E com 5% a 15% opacity) no hero
- Transições de página fluidas com Framer Motion
- SEM gradientes coloridos nas seções internas
- SEM sombras exageradas
- SEM cards inflados
- SEM visual genérico de IA
- Espaçamento amplo, hierarquia clara, sensação de SaaS premium

---

## Arquitetura do Sistema
[Comercial] , preenche briefing no frontend
,
[Backend Express] , recebe, valida e sanitiza inputs
,
[RAG] , busca vetorial no Supabase (pgvector)
, consulta base de conhecimento fictícia
,
[Claude API] , gera escopo, squad, custo, viabilidade
, timeout máximo 10s | retry automático 2x em falha
,
[PostgreSQL] , salva versão do escopo (v1, v2, v3...)
,
[Comercial] , revisa escopo gerado na tela
,
[Nodemailer] , envia e-mail com token UUID ao supervisor
, notificação assíncrona
,
[Supervisor] , acessa link tokenizado
, sistema valida hash + expiração + uso único
, exibe escopo completo
,
[Supervisor] , aprova, ajusta ou declina com comentário
,
[Log de auditoria] , registra quem + quando + o quê
,
[Backend] , atualiza status no PostgreSQL + timestamp
,
[Comercial] , vê retorno no dashboard ou histórico

---

## Ciclo de Vida do Briefing (Status)

| Status | Descrição |
|---|---|
| rascunho | Criado, IA ainda não processou |
| processando | IA gerando escopo |
| gerado | Escopo disponível para revisão |
| em_aprovacao | Enviado ao supervisor |
| aprovado | Supervisor aprovou |
| ajuste_solicitado | Supervisor pediu revisão |
| recusado | Supervisor recusou |
| falha | Erro na geração da IA |

---

## Perfis de Usuário

**Comercial**
- Cria e envia briefings
- Revisa escopo gerado pela IA
- Acompanha status e histórico de versões

**Supervisor**
- Recebe notificação por e-mail
- Acessa tela de aprovação via link tokenizado
- Aprova, ajusta ou declina com comentário
- Visualiza qual versão do escopo está aprovando

---

## Entidades do Banco

- Usuario (id, nome, email, senha_hash, perfil, criado_em)
- Briefing (id, usuario_id, descricao, segmento, prazo,
  orcamento, status, criado_em)
- EscopoGerado (id, briefing_id, versao, escopo, squad_sugerido,
  horas_estimadas, custo_estimado, viabilidade, falha_geracao,
  criado_em)
- Aprovacao (id, briefing_id, escopo_id, token_uuid, token_hash,
  decisao, comentario, expires_at, usado_em, criado_em)
- LogAcesso (id, usuario_id, acao, ip, criado_em)
- LogAuditoria (id, briefing_id, escopo_id, ator_id, decisao,
  versao, timestamp)

## Relacionamentos

- Usuario 1:N Briefing
- Briefing 1:N EscopoGerado (versionado por geração)
- Briefing 1:N Aprovacao
- EscopoGerado 1:1 Aprovacao (cada versão tem sua aprovação)
- Briefing 1:N LogAuditoria

---

## Segurança

- Autenticação JWT stateless com expiração configurável
- Tokens UUID v4 por aprovação (hash + uso único + expiração 48h)
- Proteção contra replay de tokens UUID
- Helmet.js em todos os endpoints (headers HTTP seguros)
- Rate limiting nas rotas de autenticação e geração de IA
- CORS configurado por ambiente (dev vs produção)
- Sanitização contra XSS e SQL Injection em todos os inputs
- Validação de entrada com schema em todos os campos
- Dados sensíveis NUNCA aparecem no e-mail, só notificação + link
- Não persistência de dados sensíveis em logs
- HTTPS obrigatório em produção
- Expiração e rotação periódica do JWT_SECRET
- Logs de acesso registrados com IP e timestamp

---

## Tratamento de IA (Fallback)

- Timeout máximo de 10s para resposta da API Claude
- Retry automático (até 2x) em falhas transitórias
- Fallback para resposta padrão estruturada em caso de erro
- Flag `falha_geracao` no banco indicando falha no processamento
- Possibilidade de reprocessar briefing manualmente pelo comercial
- Mensagem clara ao usuário em caso de falha, sem expor erro técnico

---

## Versionamento de Escopo

- Cada nova geração cria uma versão incremental (v1, v2, v3...)
- Histórico completo de versões acessível por briefing
- Registro de qual versão foi aprovada e por quem
- Possibilidade de comparar versões na interface

---

## Observabilidade

- Logs estruturados por nível (info, warning, error)
- Monitoramento de falhas na geração de IA com stack trace
- Registro de tempo de resposta por etapa (RAG, IA, e-mail)
- Flag de alerta para falhas críticas (ex: e-mail não enviado)
- Logs separados por ambiente (dev vs produção)

---

## Variáveis de Ambiente
Anthropic
ANTHROPIC_API_KEY=
OpenAI (somente embeddings)
OPENAI_API_KEY=
Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
JWT
JWT_SECRET=
JWT_EXPIRES_IN=8h
Gmail
GMAIL_USER=
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
GMAIL_REFRESH_TOKEN=
App
PORT=3000
BASE_URL=https://escopocerto.up.railway.app
NODE_ENV=production

---

## Estrutura de Pastas
escopocerto/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── services/
│   │   │   ├── ai/
│   │   │   ├── email/
│   │   │   └── rag/
│   │   ├── models/
│   │   └── index.js
│   └── package.json
├── knowledge-base/
│   └── projetos.json
├── docs/
│   ├── PRD.md
│   └── fluxo_v2.svg
├── .env.example
├── .gitignore
└── CLAUDE.md

---

## Regras para o Claude Code

- Nunca modificar variáveis de ambiente automaticamente
- Sempre pedir confirmação antes de deletar arquivos
- Não alterar estrutura do banco sem instrução explícita
- Priorizar código simples e legível sobre abstrações desnecessárias
- Sempre comentar funções complexas em português
- Commits em português, descritivos e atômicos
- Nunca expor chaves de API em logs ou respostas de erro
- Sempre validar inputs antes de qualquer operação no banco

---

## O que Este Projeto Demonstra

- Ciclo completo de análise: PRD, requisitos, modelagem, casos de uso
- Arquitetura RAG com busca vetorial real (pgvector)
- Autenticação stateless com JWT e tokens UUID seguros
- Integração com APIs externas (Claude + Gmail)
- Tratamento de falhas e fallback em sistemas de IA
- Versionamento de dados em contexto B2B
- Observabilidade e logs estruturados em produção
- Deploy em produção com variáveis de ambiente protegidas
- Decisões de produto documentadas e justificadas
- Perfil: Business Analyst | Product Owner | Product Manager





🛠️ Regras de Codificação e Escrita (Estilo Humano)
Para que o código pareça escrito por um desenvolvedor sênior e não uma saída genérica de IA, siga estas diretrizes:

1. Nomenclatura e Idioma
Código em Inglês: Variáveis, funções, classes, arquivos e rotas devem ser sempre em inglês (ex: calculateEstimate, useBriefingStore, authMiddleware).

Comentários em Português: Use comentários para explicar o porquê de decisões complexas, não apenas o que o código faz.

Commits em Português: Mensagens de commit claras, atômicas e no imperativo (ex: "ajusta lógica de retry da API do Claude").

2. Estilo "Hand-crafted" (Menos IA, Mais Dev)
Evite excesso de comentários óbvios: Não comente o que é autoexplicativo (ex: evite // define a variável x). Comente apenas lógicas de negócio ou integrações sensíveis.

Abstração Equilibrada: Não crie abstrações complexas demais para problemas simples. Prefira um código legível e direto ao ponto.

Tratamento de Erros Realista: Em vez de apenas dar um console.error, use logs estruturados que facilitem o debug em produção (conforme a seção de Observabilidade).

Clean Code: Use nomes descritivos. Prefira isTokenExpired em vez de isExp.

3. Padrões de Segurança e Performance
Validations First: Sempre valide inputs no início da função/controlador.

Early Return: Use a técnica de retorno antecipado para evitar aninhamentos de if/else (deixa o código mais limpo e "humano").

Não modifique .env: Nunca altere ou crie variáveis de ambiente sem solicitar explicitamente ao usuário.

4. Boas Práticas de Integração
Claude API: O código deve prever falhas de rede com os retries mencionados e timeout de 10s.

RAG Logic: A busca vetorial deve ser comentada passo a passo para facilitar a auditoria do processo de busca de contexto.

Como aplicar isso agora?
Sempre que você me pedir para gerar um componente ou uma rota, eu seguirei esse padrão:

Código limpo em inglês.

Lógica de negócio comentada em português.

Estrutura de pastas respeitando a Layered Architecture.