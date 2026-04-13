const supabase = require('./db');

/**
 * Modelo de acesso a dados para a entidade Briefing.
 * Gerencia as operações de persistência de briefings no Supabase.
 */
const briefingModel = {
  /**
   * Cria um novo briefing no banco de dados.
   * Por padrão, o status é definido como 'rascunho' pelo banco de dados.
   */
  async create(dados) {
    const { data, error } = await supabase
      .from('briefings')
      .insert([dados])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  /**
   * Busca um briefing pelo ID, validando o pertencimento ao usuário.
   */
  async findById(id, usuarioId) {
    const { data, error } = await supabase
      .from('briefings')
      .select('*')
      .eq('id', id)
      .eq('usuario_id', usuarioId)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return data;
  },

  /**
   * Lista briefings de um usuário específico com filtro opcional de status.
   */
  async findAllByUsuario(usuarioId, filtros = {}) {
    let query = supabase
      .from('briefings')
      .select('*')
      .eq('usuario_id', usuarioId)
      .order('criado_em', { ascending: false });

    if (filtros.status) {
      query = query.eq('status', filtros.status);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  },

  /**
   * Atualiza o status de um briefing específico.
   */
  async updateStatus(id, status) {
    const { data, error } = await supabase
      .from('briefings')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  }
};

module.exports = briefingModel;
