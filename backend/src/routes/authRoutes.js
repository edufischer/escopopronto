const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { authRateLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();

/**
 * Definição de rotas para o módulo de autenticação.
 * Todas as rotas de autenticação utilizam rate limiting.
 */

/**
 * Rota: POST /api/auth/login
 * Descrição: Realiza o login do usuário.
 */
router.post(
    '/login',
    authRateLimiter, // Aplica limite de tentativas para login
    [
        // Validação de inputs com express-validator
        body('email').isEmail().withMessage('Informe um e-mail válido.'),
        body('senha').notEmpty().withMessage('A senha é obrigatória.')
    ],
    authController.login
);

/**
 * Rota: POST /api/auth/register
 * Descrição: Registra um novo usuário no sistema.
 */
router.post(
    '/register',
    authRateLimiter, // Aplica limite de tentativas para registro
    [
        // Validação de inputs com express-validator
        body('nome').trim().notEmpty().withMessage('O nome é obrigatório.'),
        body('email').isEmail().withMessage('Informe um e-mail válido.'),
        body('senha').isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres.'),
        body('perfil').optional().isIn(['comercial', 'supervisor']).withMessage('Perfil inválido.')
    ],
    authController.register
);

module.exports = router;
