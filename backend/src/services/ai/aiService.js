const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    timeout: 10000 // Timeout de 10s conforme PRD
});

/**
 * Serviço de IA para geração de escopos preliminares utilizando Claude.
 */
const aiService = {
    /**
     * Gera o escopo estruturado baseado no briefing e em projetos similares recuperados via RAG.
     */
    async gerarEscopo(briefing, projetosSimilares = [], retries = 2) {
        try {
            // Monta o contexto dos projetos similares para o prompt
            const contextoProjetos = projetosSimilares.length > 0
                ? `Considere os seguintes projetos similares da nossa base de conhecimento para fundamentar suas estimativas:
          ${JSON.stringify(projetosSimilares, null, 2)}`
                : 'Não há projetos similares na base de conhecimento para fundamentar este briefing. Use seu conhecimento geral para estimar.';

            const prompt = `Você é um Tech Lead sênior de uma software house brasileira.
      Seu objetivo é gerar um escopo técnico preliminar baseado no briefing do comercial.

      ### BRIEFING DO CLIENTE:
      - Cliente: ${briefing.nome_cliente}
      - Segmento: ${briefing.segmento}
      - Descrição: ${briefing.descricao}
      - Prazo Esperado: ${briefing.prazo_esperado}
      - Orçamento Aproximado: ${briefing.orcamento || 'Não informado'}

      ### CONTEXTO DA BASE DE CONHECIMENTO (RAG):
      ${contextoProjetos}

      ### REGRAS DE GERAÇÃO:
      1. Gere um escopo técnico detalhado em Markdown para o campo "escopo".
      2. Sugira um squad realista no campo "squad_sugerido" (ex: { "tech_lead": 1, "frontend_developer": 2 }).
      3. Estime as horas por perfil no campo "horas_estimadas" (ex: { "tech_lead": 160, "frontend_developer": 640 }).
      4. Calcule o "custo_estimado" total baseado em uma média de mercado para o Brasil.
      5. Avalie a "viabilidade" (Alta, Média, Baixa) e inclua "observacoes" técnicas relevantes.
      6. Responda estritamente em formato JSON, em português do Brasil.

      ### FORMATO DE RESPOSTA ESPERADO (JSON):
      {
        "escopo": "...",
        "squad_sugerido": { ... },
        "horas_estimadas": { ... },
        "custo_estimado": 0.00,
        "viabilidade": "...",
        "observacoes": "..."
      }`;

            // Chamada à API do Claude
            const response = await anthropic.messages.create({
                model: 'claude-haiku-4-5-20251001', // Modelo mais avançado para geração de escopo
                max_tokens: 4000,
                messages: [{ role: 'user', content: prompt }],
                system: 'Você é um assistente técnico que responde exclusivamente em JSON válido.'
            });

            // Extrai e limpa a resposta JSON
            const content = response.content[0].text;
            const jsonResponse = JSON.parse(content.match(/\{[\s\S]*\}/)[0]);

            // Validação básica de schema antes de retornar
            if (!jsonResponse.escopo || !jsonResponse.squad_sugerido || !jsonResponse.custo_estimado) {
                throw new Error('Resposta da IA incompleta.');
            }

            return { ...jsonResponse, falha_geracao: false };
        } catch (err) {
            console.error(`Erro na geração da IA (Tentativas restantes: ${retries}):`, err);

            // Lógica de retry automático conforme PRD
            if (retries > 0) {
                return await this.gerarEscopo(briefing, projetosSimilares, retries - 1);
            }

            // Fallback final após exaurir retries
            return {
                escopo: 'Erro na geração automática do escopo.',
                squad_sugerido: {},
                horas_estimadas: {},
                custo_estimado: 0.00,
                viabilidade: 'Desconhecida',
                observacoes: 'A geração via IA falhou após múltiplas tentativas.',
                falha_geracao: true
            };
        }
    }
};

module.exports = aiService;
