const escopoService = require('../services/escopoService');

/**
 * Controller de escopos para gerenciar as requisições de processamento via IA e listagem de versões.
 */
const escopoController = {
  /**
   * Endpoint POST /api/briefings/:id/processar
   * Inicia o processamento do briefing pela IA (RAG + Claude).
   */
  async processar(req, res) {
    const { id: briefingId } = req.params;
    const usuarioId = req.user.id;

    try {
      // O processamento pode ser longo, o timeout do Express/Railway deve suportar
      const escopo = await escopoService.processarBriefing(briefingId, usuarioId);

      return res.status(200).json({
        message: 'Processamento de IA concluído com sucesso.',
        escopo
      });
    } catch (err) {
      if (err.message === 'Briefing não encontrado ou acesso negado.') {
        return res.status(404).json({ error: err.message });
      }
      console.error(err);
      return res.status(500).json({ error: 'Erro no processamento de IA do briefing.' });
    }
  },

  /**
   * Endpoint GET /api/briefings/:id/escopos
   * Lista todas as versões geradas para um briefing específico.
   */
  async listar(req, res) {
    const { id: briefingId } = req.params;
    const usuarioId = req.user.id;

    try {
      const escopos = await escopoService.listarEscopos(briefingId, usuarioId);
      return res.status(200).json({
        count: escopos.length,
        escopos
      });
    } catch (err) {
      if (err.message === 'Briefing não encontrado ou acesso negado.') {
        return res.status(404).json({ error: err.message });
      }
      console.error(err);
      return res.status(500).json({ error: 'Erro ao listar versões de escopo.' });
    }
  },

  /**
   * Endpoint GET /api/briefings/:id/escopos/latest
   * Retorna a versão mais recente do escopo gerado para o briefing.
   */
  async getLatest(req, res) {
    const { id: briefingId } = req.params;
    const usuarioId = req.user.id;

    try {
      const escopo = await escopoService.getLatestEscopo(briefingId, usuarioId);
      if (!escopo) {
        return res.status(404).json({ error: 'Nenhum escopo gerado para este briefing.' });
      }
      return res.status(200).json(escopo);
    } catch (err) {
      if (err.message === 'Briefing não encontrado ou acesso negado.') {
        return res.status(404).json({ error: err.message });
      }
      console.error(err);
      return res.status(500).json({ error: 'Erro ao buscar versão mais recente do escopo.' });
    }
  }
};

module.exports = escopoController;
