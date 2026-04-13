const { validationResult } = require('express-validator');
const authService = require('../services/authService');

/**
 * Controller de autenticação para lidar com requisições HTTP de login e registro.
 * Orquestra o fluxo de validação e chama o serviço de autenticação.
 */
const authController = {
  /**
   * Endpoint POST /auth/login
   * Realiza o login do usuário.
   */
  async login(req, res) {
    // Valida os resultados do express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, senha } = req.body;

    try {
      // Chama o serviço de autenticação
      const result = await authService.login(email, senha);

      // Retorna o token JWT e os dados do usuário (sem senha)
      return res.status(200).json({
        message: 'Login realizado com sucesso.',
        token: result.token,
        usuario: result.usuario
      });
    } catch (err) {
      // Retorna uma mensagem genérica de erro para segurança
      return res.status(401).json({ error: 'Credenciais inválidas ou erro no sistema.' });
    }
  },

  /**
   * Endpoint POST /auth/register
   * Realiza o registro de um novo usuário.
   */
  async register(req, res) {
    // Valida os resultados do express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome, email, senha, perfil } = req.body;

    try {
      // Chama o serviço de autenticação para criar o usuário
      const novoUsuario = await authService.register(nome, email, senha, perfil);

      // Retorna o usuário criado com sucesso (sem senha)
      return res.status(201).json({
        message: 'Usuário registrado com sucesso.',
        usuario: novoUsuario
      });
    } catch (err) {
      // Verifica se o erro é de e-mail duplicado
      if (err.message === 'Este e-mail já está sendo utilizado.') {
        return res.status(400).json({ error: err.message });
      }
      // Retorna uma mensagem genérica para outros tipos de erro
      return res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
  }
};

module.exports = authController;
