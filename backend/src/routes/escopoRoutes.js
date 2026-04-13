const express = require('express');
const escopoController = require('../controllers/escopoController');
const authMiddleware = require('../middlewares/auth');
const { aiRateLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();

/**
 * Definição de rotas para o módulo de escopos (IA e RAG).
 * Todas as rotas de escopos requerem autenticação.
 */

// Aplica o middleware de autenticação JWT em todas as rotas de escopos
router.use(authMiddleware);

/**
 * Rota: POST /api/briefings/:id/processar
 * Descrição: Inicia o fluxo completo de geração de escopo pela IA (RAG + Claude).
 * Possui rate limiter específico para controle de custos e abuso.
 */
router.post(
  '/:id/processar',
  aiRateLimiter, // Máximo 20 requisições por hora conforme PRD
  escopoController.processar
);

/**
 * Rota: GET /api/briefings/:id/escopos
 * Descrição: Lista o histórico de versões de escopos gerados para um briefing.
 */
router.get('/:id/escopos', escopoController.listar);

/**
 * Rota: GET /api/briefings/:id/escopos/latest
 * Descrição: Busca a versão mais recente do escopo de um briefing.
 */
router.get('/:id/escopos/latest', escopoController.getLatest);

module.exports = router;
