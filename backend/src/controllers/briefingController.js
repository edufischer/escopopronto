const { validationResult } = require('express-validator');
const briefingService = require('../services/briefingService');

/**
 * Controller de briefings para gerenciar as requisições HTTP do módulo de briefings.
 * Orquestra o fluxo de validação e chama o serviço correspondente.
 */
const briefingController = {
  /**
   * Endpoint POST /api/briefings
   * Cria um novo briefing para o usuário autenticado.
   */
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome_cliente, segmento, descricao, prazo_esperado, orcamento } = req.body;
    const usuarioId = req.user.id; // Extraído do middleware de auth JWT

    try {
      const briefing = await briefingService.createBriefing(usuarioId, {
        nome_cliente,
        segmento,
        descricao,
        prazo_esperado,
        orcamento
      });

      return res.status(201).json({
        message: 'Briefing criado com sucesso.',
        briefing
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao criar briefing.' });
    }
  },

  /**
   * Endpoint GET /api/briefings
   * Lista todos os briefings do usuário autenticado com filtro de status opcional.
   */
  async list(req, res) {
    const usuarioId = req.user.id;
    const { status } = req.query;

    try {
      const briefings = await briefingService.listBriefings(usuarioId, status);
      return res.status(200).json({
        count: briefings.length,
        briefings
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao listar briefings.' });
    }
  },

  /**
   * Endpoint GET /api/briefings/:id
   * Busca um briefing específico pelo ID para o usuário autenticado.
   */
  async get(req, res) {
    const { id } = req.params;
    const usuarioId = req.user.id;

    try {
      const briefing = await briefingService.getBriefing(id, usuarioId);
      return res.status(200).json(briefing);
    } catch (err) {
      if (err.message === 'Briefing não encontrado ou acesso negado.') {
        return res.status(404).json({ error: err.message });
      }
      console.error(err);
      return res.status(500).json({ error: 'Erro ao buscar briefing.' });
    }
  }
};

module.exports = briefingController;
