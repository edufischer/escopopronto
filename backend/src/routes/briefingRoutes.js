const express = require('express');
const { body } = require('express-validator');
const briefingController = require('../controllers/briefingController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

/**
 * Definição de rotas para o módulo de briefings.
 * Todas as rotas de briefings requerem autenticação.
 */

// Aplica o middleware de autenticação JWT em todas as rotas de briefings
router.use(authMiddleware);

/**
 * Rota: POST /api/briefings
 * Descrição: Cria um novo briefing rascunho.
 */
router.post(
  '/',
  [
    // Validação de inputs com express-validator
    body('nome_cliente').trim().notEmpty().withMessage('O nome do cliente é obrigatório.'),
    body('segmento').trim().notEmpty().withMessage('O segmento é obrigatório.'),
    body('descricao').trim().notEmpty().withMessage('A descrição em linguagem natural é obrigatória.'),
    body('prazo').isDate().withMessage('O prazo informado deve ser uma data válida.'),
    body('orcamento').optional().isFloat({ min: 0 }).withMessage('O orçamento deve ser um valor numérico positivo.')
  ],
  briefingController.create
);

/**
 * Rota: GET /api/briefings
 * Descrição: Lista os briefings do usuário autenticado (filtro de status opcional).
 */
router.get('/', briefingController.list);

/**
 * Rota: GET /api/briefings/:id
 * Descrição: Busca detalhes de um briefing específico do usuário autenticado.
 */
router.get('/:id', briefingController.get);

module.exports = router;
