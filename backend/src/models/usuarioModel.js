const supabase = require('./db');

/**
 * Modelo de acesso a dados para a entidade Usuario.
 * Realiza as operações no Supabase (PostgreSQL).
 */
const usuarioModel = {
  /**
   * Busca um usuário pelo e-mail.
   * Utilizado internamente no processo de autenticação (precisa da senha_hash).
   */
  async findByEmail(email) {
    const { data, error } = await supabase
      .from('usuarios')
      .select('id, nome, email, senha_hash, perfil, criado_em')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 significa "nenhum resultado encontrado", o que não é um erro fatal
      throw error;
    }

    return data;
  },

  /**
   * Busca um usuário pelo ID.
   * Retorna os dados do usuário sem a senha_hash por segurança.
   */
  async findById(id) {
    const { data, error } = await supabase
      .from('usuarios')
      .select('id, nome, email, perfil, criado_em')
      .eq('id', id)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return data;
  },

  /**
   * Cria um novo usuário no banco de dados.
   * Retorna os dados do usuário criado sem a senha_hash.
   */
  async create(dados) {
    const { data, error } = await supabase
      .from('usuarios')
      .insert([dados])
      .select('id, nome, email, perfil, criado_em')
      .single();

    if (error) {
      throw error;
    }

    return data;
  }
};

module.exports = usuarioModel;
