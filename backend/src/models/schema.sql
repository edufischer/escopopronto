-- Habilita a extensão pgvector para busca vetorial (RAG)
CREATE EXTENSION IF NOT EXISTS vector;

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    perfil VARCHAR(50) NOT NULL CHECK (perfil IN ('comercial', 'supervisor')),
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE usuarios IS 'Armazena as informações de acesso dos usuários do sistema.';

-- Tabela de Briefings
CREATE TABLE IF NOT EXISTS briefings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    nome_cliente VARCHAR(255) NOT NULL,
    segmento VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    prazo DATE NOT NULL,
    orcamento DECIMAL(12, 2),
    status VARCHAR(50) NOT NULL DEFAULT 'rascunho' CHECK (
        status IN (
            'rascunho', 
            'processando', 
            'gerado', 
            'em_aprovacao', 
            'aprovado', 
            'ajuste_solicitado', 
            'recusado', 
            'falha'
        )
    ),
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_briefings_usuario_id ON briefings(usuario_id);
CREATE INDEX idx_briefings_status ON briefings(status);
COMMENT ON TABLE briefings IS 'Registra os briefings enviados pelo time comercial.';

-- Tabela de Escopos Gerados (Versionamento)
CREATE TABLE IF NOT EXISTS escopos_gerados (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    briefing_id UUID NOT NULL REFERENCES briefings(id) ON DELETE CASCADE,
    versao INTEGER NOT NULL DEFAULT 1,
    escopo TEXT NOT NULL,
    squad_sugerido JSONB NOT NULL,
    horas_estimadas JSONB NOT NULL,
    custo_estimado DECIMAL(12, 2) NOT NULL,
    viabilidade TEXT NOT NULL,
    falha_geracao BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_escopos_briefing_id ON escopos_gerados(briefing_id);
COMMENT ON TABLE escopos_gerados IS 'Armazena as versões de escopos gerados pela IA para cada briefing.';

-- Tabela de Aprovações (Link seguro para o supervisor)
CREATE TABLE IF NOT EXISTS aprovacoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    briefing_id UUID NOT NULL REFERENCES briefings(id) ON DELETE CASCADE,
    escopo_id UUID NOT NULL REFERENCES escopos_gerados(id) ON DELETE CASCADE,
    token_uuid UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
    token_hash VARCHAR(255) NOT NULL,
    decisao VARCHAR(50) CHECK (decisao IN ('aprovado', 'ajuste_solicitado', 'recusado')),
    comentario TEXT,
    expires_at TIMESTAMPTZ NOT NULL,
    usado_em TIMESTAMPTZ,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_aprovacoes_briefing_id ON aprovacoes(briefing_id);
CREATE INDEX idx_aprovacoes_token_uuid ON aprovacoes(token_uuid);
COMMENT ON TABLE aprovacoes IS 'Gerencia os links de aprovação seguros enviados aos supervisores.';

-- Tabela de Base de Conhecimento (RAG)
CREATE TABLE IF NOT EXISTS knowledge_base (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    metadata JSONB,
    embedding vector(1536), -- Dimensão padrão para OpenAI Embeddings
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_knowledge_base_embedding ON knowledge_base USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
COMMENT ON TABLE knowledge_base IS 'Base de conhecimento vetorial para alimentar o processo de RAG.';

-- Tabela de Logs de Auditoria
CREATE TABLE IF NOT EXISTS logs_auditoria (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    briefing_id UUID REFERENCES briefings(id) ON DELETE SET NULL,
    escopo_id UUID REFERENCES escopos_gerados(id) ON DELETE SET NULL,
    ator_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
    decisao VARCHAR(255) NOT NULL,
    versao INTEGER,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_logs_auditoria_briefing_id ON logs_auditoria(briefing_id);
COMMENT ON TABLE logs_auditoria IS 'Histórico auditável de todas as decisões tomadas por briefing.';

-- Tabela de Logs de Acesso
CREATE TABLE IF NOT EXISTS logs_acesso (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
    acao VARCHAR(255) NOT NULL,
    ip VARCHAR(45) NOT NULL,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_logs_acesso_usuario_id ON logs_acesso(usuario_id);
COMMENT ON TABLE logs_acesso IS 'Registro de logins e acessos dos usuários para segurança.';
