const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
const supabase = require('../../models/db');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 10000 // Timeout de 10s conforme PRD
});

/**
 * Serviço de RAG (Retrieval-Augmented Generation).
 * Gerencia a indexação e busca de projetos similares na base de conhecimento vetorial.
 */
const ragService = {
    /**
     * Lê o arquivo projetos.json, gera embeddings e salva no Supabase.
     * Deve ser executado uma única vez para popular a base ou em atualizações.
     */
    async indexarBaseConhecimento() {
        try {
            const filePath = path.join(__dirname, '../../../../knowledge-base/projetos.json');
            const projetos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            console.log(`Iniciando indexação de ${projetos.length} projetos...`);

            for (const projeto of projetos) {
                // Monta o texto para gerar o embedding (combinando título, segmento e descrição)
                const textToEmbed = `Título: ${projeto.titulo}. Segmento: ${projeto.segmento}. Descrição: ${projeto.descricao}`;

                // Gera o embedding via OpenAI
                const response = await openai.embeddings.create({
                    model: 'text-embedding-3-small',
                    input: textToEmbed,
                    dimensions: 1536
                });

                const [{ embedding }] = response.data;

                // Salva no Supabase na tabela knowledge_base
                const { error } = await supabase
                    .from('knowledge_base')
                    .upsert({
                        content: textToEmbed,
                        metadata: projeto,
                        embedding: embedding
                    }, { onConflict: 'content' });

                if (error) throw error;
                console.log(`Projeto "${projeto.titulo}" indexado com sucesso.`);
            }

            return { message: 'Base de conhecimento indexada com sucesso.' };
        } catch (err) {
            console.error('Erro ao indexar base de conhecimento:', err);
            throw err;
        }
    },

    /**
     * Gera o embedding do briefing e busca os 3 projetos mais similares no pgvector.
     */
    async buscarProjetosSimilares(textoBriefing) {
        try {
            // Gera embedding do briefing
            const response = await openai.embeddings.create({
                model: 'text-embedding-3-small',
                input: textoBriefing,
                dimensions: 1536
            });

            const [{ embedding }] = response.data;

            /**
             * Chama a RPC (Stored Procedure) no Supabase para busca vetorial.
             * A função 'match_knowledge' deve ser criada no SQL do Supabase.
             */
            const { data, error } = await supabase.rpc('match_knowledge', {
                query_embedding: embedding,
                match_threshold: 0.75, // Threshold definido no PRD
                match_count: 3 // Busca os 3 mais similares
            });

            if (error) throw error;

            return data.map(item => item.metadata);
        } catch (err) {
            console.error('Erro ao buscar projetos similares:', err);
            // Fallback: se o RAG falhar, retorna array vazio para a IA tentar sem contexto
            return [];
        }
    }
};

module.exports = ragService;
