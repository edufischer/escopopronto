const briefingModel = require('../models/briefingModel');

/**
 * Serviço de briefing para orquestrar a lógica de criação e busca de briefings.
 * Não possui dependência do framework Express.
 */
const briefingService = {
  /**
   * Valida e cria um novo briefing para um usuário.
   */
  async createBriefing(usuarioId, dados) {
    const { nome_cliente, segmento, descricao, prazo, orcamento } = dados;

    // Persiste o briefing via model
    const briefing = await briefingModel.create({
      usuario_id: usuarioId,
      nome_cliente,
      segmento,
      descricao,
      prazo,
      orcamento,
      status: 'rascunho'
    });

    return briefing;
  },

  /**
   * Recupera os detalhes de um briefing específico de um usuário.
   */
  async getBriefing(id, usuarioId) {
    const briefing = await briefingModel.findById(id, usuarioId);

    if (!briefing) {
      throw new Error('Briefing não encontrado ou acesso negado.');
    }

    return briefing;
  },

  /**
   * Lista todos os briefings de um usuário com filtro de status opcional.
   */
  async listBriefings(usuarioId, status) {
    const filtros = status ? { status } : {};
    return await briefingModel.findAllByUsuario(usuarioId, filtros);
  },

  /**
   * Atualiza o status de um briefing específico.
   */
  async updateBriefingStatus(id, status) {
    return await briefingModel.updateStatus(id, status);
  }
};

module.exports = briefingService;
