const rateLimit = require('express-rate-limit');

/**
 * Rate limiter específico para as rotas de autenticação (login/registro).
 * Limita o número de tentativas por IP para prevenir ataques de força bruta.
 */
const authRateLimiter = rateLimit({
  windowMs: 60 * 1000, // Janela de 1 minuto
  max: 10, // Limite de 10 tentativas por minuto por IP
  message: {
    error: 'Muitas tentativas de autenticação. Tente novamente após 1 minuto.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

/**
 * Rate limiter para as rotas que envolvem processamento de IA.
 * Limita o número de requisições por usuário/IP para controle de custos e abuso.
 */
const aiRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // Janela de 1 hora
  max: 20, // Limite de 20 requisições por hora por IP/Usuário
  keyGenerator: (req) => {
    // Se o usuário estiver autenticado, usa o ID dele, caso contrário usa o IP
    return req.user ? req.user.id : req.ip;
  },
  message: {
    error: 'Limite de geração de IA atingido para esta hora. Tente novamente mais tarde.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = {
  authRateLimiter,
  aiRateLimiter
};
