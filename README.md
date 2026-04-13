# ✅ Escopo Pronto

> "O que o cliente espera é o que será entregue."

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## Sobre o Projeto

O Escopo Pronto é um sistema web desenvolvido para software houses que precisam padronizar e acelerar o processo de geração de escopo de projetos. O comercial descreve o projeto do cliente em linguagem natural e o sistema gera automaticamente um escopo técnico preliminar com estimativa de squad, horas e custo, utilizando inteligência artificial com arquitetura RAG fundamentada em projetos reais.

Este é um projeto acadêmico e de portfólio profissional, desenvolvido para demonstrar competências em análise de sistemas, documentação de produto e desenvolvimento assistido por IA. Não possui vínculo comercial com nenhuma empresa.

---

## Funcionalidades

- Registro de briefing em linguagem natural
- Geração automática de escopo via IA com arquitetura RAG
- Versionamento incremental de escopos (v1, v2, v3...)
- Fluxo de aprovação seguro com token UUID (hash + expiração + uso único)
- Log de auditoria completo por briefing
- Dashboard com histórico e filtros por status
- Notificação assíncrona ao supervisor via e-mail

---

## Stack Tecnológica

| Frontend | Backend |
|---|---|
| React + Vite | Node.js + Express |
| Tailwind CSS | PostgreSQL via Supabase |
| Shadcn/ui | pgvector (busca vetorial RAG) |
| Framer Motion | Claude API (Anthropic) |
| React Router | OpenAI Embeddings API |
| Axios | JWT + UUID v4 |
| Lucide React | Nodemailer + Gmail API |

---

## Arquitetura

O sistema adota **Layered Architecture de 4 camadas**:
Apresentação  →  React (frontend) + Rotas Express (backend)
Aplicação     →  Controllers (orquestram o fluxo)
Serviço       →  Lógica de negócio (AI, RAG, e-mail, token)
Dados         →  Models + PostgreSQL via Supabase

Regra: cada camada se comunica apenas com a camada imediatamente abaixo. Controllers não acessam o banco diretamente, services não conhecem o Express.

---

## Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- Conta no Supabase
- Chave de API da Anthropic
- Chave de API da OpenAI
- Credenciais OAuth2 do Gmail

### Instalação

```bash
# Clone o repositório
git clone https://github.com/edufischer/escopopronto.git
cd escopopronto
```

### Configurar variáveis de ambiente

Cria o arquivo `backend/.env` baseado no `.env.example`:
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
JWT_SECRET=
JWT_EXPIRES_IN=8h
GMAIL_USER=
GMAIL_CLIENT_ID=
GMAIL_CLIENT_SECRET=
GMAIL_REFRESH_TOKEN=
PORT=3000
BASE_URL=http://localhost:3000
NODE_ENV=development

Cria o arquivo `frontend/.env`:
VITE_API_URL=http://localhost:3000/api

### Rodar o backend

```bash
cd backend
npm install
npm run dev
```

### Rodar o frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

---

## Deploy

| Serviço | Plataforma | URL |
|---|---|---|
| Frontend | Vercel | https://escopopronto.vercel.app |
| Backend | Railway | https://escopopronto-production.up.railway.app |

---

## Documentação

- PRD completo com 19 seções: [`docs/PRD.md`](docs/PRD.md)
- Fluxo completo do sistema: [`docs/escopocerto_fluxo_v2.svg`](docs/escopocerto_fluxo_v2.svg)
- Contexto do projeto para Claude Code: [`CLAUDE.md`](CLAUDE.md)

---

## Autor

**Eduardo de Castro Fischer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Eduardo%20Fischer-blue)](https://www.linkedin.com/in/eduardo-de-castro-fischer-457437237/)
[![GitHub](https://img.shields.io/badge/GitHub-edufischer-black)](https://github.com/edufischer/)

---

> **Aviso:** Este projeto é desenvolvido para fins acadêmicos e de portfólio profissional, sem vínculo comercial com nenhuma empresa.
