const briefingModel = require('../models/briefingModel');
const escopoModel = require('../models/escopoModel');
const ragService = require('./rag/ragService');
const aiService = require('./ai/aiService');

/**
 * Serviço de escopo para orquestrar o fluxo completo de geração via IA e RAG.
 * Não possui dependência do framework Express.
 */
const escopoService = {
  /**
   * Orquestra o fluxo completo de processamento de um briefing pela IA.
   */
  async processarBriefing(briefingId, usuarioId) {
    // 1. Busca o briefing no banco e valida o acesso
    const briefing = await briefingModel.findById(briefingId, usuarioId);

    if (!briefing) {
      throw new Error('Briefing não encontrado ou acesso negado.');
    }

    // 2. Atualiza status para "processando"
    await briefingModel.updateStatus(briefingId, 'processando');

    try {
      // 3. Busca projetos similares na base de conhecimento (RAG)
      const projetosSimilares = await ragService.buscarProjetosSimilares(briefing.descricao);

      // 4. Chama a IA do Claude para gerar o escopo baseado no briefing e contexto
      const escopoGeradoRaw = await aiService.gerarEscopo(briefing, projetosSimilares);

      // 5. Calcula o número da próxima versão
      const proximaVersao = await escopoModel.getNextVersion(briefingId);

      // 6. Persiste o escopo gerado no banco (tabela escopos_gerados)
      const escopoSalvo = await escopoModel.create({
        briefing_id: briefingId,
        versao: proximaVersao,
        escopo: escopoGeradoRaw.escopo,
        squad_sugerido: escopoGeradoRaw.squad_sugerido,
        horas_estimadas: escopoGeradoRaw.horas_estimadas,
        custo_estimado: escopoGeradoRaw.custo_estimado,
        viabilidade: escopoGeradoRaw.viabilidade,
        observacoes: escopoGeradoRaw.observacoes,
        falha_geracao: escopoGeradoRaw.falha_geracao
      });

      // 7. Atualiza status do briefing para 'gerado' ou 'falha'
      const novoStatus = escopoGeradoRaw.falha_geracao ? 'falha' : 'gerado';
      await briefingModel.updateStatus(briefingId, novoStatus);

      return escopoSalvo;
    } catch (err) {
      console.error('Erro no fluxo de processamento do escopo:', err);
      // Em caso de erro fatal não tratado na IA, marca como falha
      await briefingModel.updateStatus(briefingId, 'falha');
      throw err;
    }
  },

  /**
   * Recupera o histórico de versões do escopo de um briefing.
   */
  async listarEscopos(briefingId, usuarioId) {
    // Valida o acesso ao briefing primeiro
    const briefing = await briefingModel.findById(briefingId, usuarioId);
    if (!briefing) {
      throw new Error('Briefing não encontrado ou acesso negado.');
    }

    return await escopoModel.findByBriefingId(briefingId);
  },

  /**
   * Recupera a versão mais recente do escopo de um briefing.
   */
  async getLatestEscopo(briefingId, usuarioId) {
    const briefing = await briefingModel.findById(briefingId, usuarioId);
    if (!briefing) {
      throw new Error('Briefing não encontrado ou acesso negado.');
    }

    return await escopoModel.findLatestByBriefingId(briefingId);
  }
};

module.exports = escopoService;
