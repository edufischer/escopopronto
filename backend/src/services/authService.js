const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuarioModel');

/**
 * Serviço de autenticação para lógica de negócio de login e registro.
 * Não depende do Express.
 */
const authService = {
  /**
   * Realiza a validação de credenciais, gera o JWT e retorna os dados do usuário.
   * A senha nunca é incluída no retorno.
   */
  async login(email, senha) {
    const usuario = await usuarioModel.findByEmail(email);

    if (!usuario) {
      throw new Error('Credenciais inválidas.');
    }

    // Compara o hash da senha enviada com a senha armazenada no banco
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaValida) {
      throw new Error('Credenciais inválidas.');
    }

    // Gera o token JWT com dados básicos do usuário e expiração
    const token = jwt.sign(
      { 
        id: usuario.id, 
        email: usuario.email, 
        perfil: usuario.perfil 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
    );

    // Remove a senha do objeto de retorno para segurança
    const { senha_hash, ...usuarioSemSenha } = usuario;

    return {
      token,
      usuario: usuarioSemSenha
    };
  },

  /**
   * Cria um novo usuário com senha criptografada.
   * Custo da criptografia bcrypt definido como 10 conforme PRD.
   */
  async register(nome, email, senha, perfil = 'comercial') {
    // Verifica se o e-mail já está em uso
    const usuarioExistente = await usuarioModel.findByEmail(email);

    if (usuarioExistente) {
      throw new Error('Este e-mail já está sendo utilizado.');
    }

    // Criptografa a senha antes de salvar no banco
    const salt = await bcrypt.genSalt(10);
    const senha_hash = await bcrypt.hash(senha, salt);

    // Salva o usuário no banco via model
    const novoUsuario = await usuarioModel.create({
      nome,
      email,
      senha_hash,
      perfil
    });

    return novoUsuario;
  },

  /**
   * Verifica e decodifica um token JWT.
   */
  verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error('Token inválido ou expirado.');
    }
  }
};

module.exports = authService;
