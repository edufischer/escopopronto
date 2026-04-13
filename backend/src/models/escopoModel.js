const supabase = require('./db');

/**
 * Modelo de acesso a dados para a entidade EscopoGerado.
 * Gerencia o versionamento de escopos no Supabase.
 */
const escopoModel = {
  /**
   * Salva um novo escopo gerado no banco de dados.
   * O número da versão deve ser calculado antes da inserção.
   */
  async create(dados) {
    const { data, error } = await supabase
      .from('escopos_gerados')
      .insert([dados])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  },

  /**
   * Lista todas as versões de escopos gerados para um briefing específico.
   */
  async findByBriefingId(briefingId) {
    const { data, error } = await supabase
      .from('escopos_gerados')
      .select('*')
      .eq('briefing_id', briefingId)
      .order('versao', { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  },

  /**
   * Busca a versão mais recente do escopo de um briefing.
   */
  async findLatestByBriefingId(briefingId) {
    const { data, error } = await supabase
      .from('escopos_gerados')
      .select('*')
      .eq('briefing_id', briefingId)
      .order('versao', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return data;
  },

  /**
   * Calcula o próximo número de versão para um briefing.
   */
  async getNextVersion(briefingId) {
    const { data, error } = await supabase
      .from('escopos_gerados')
      .select('versao')
      .eq('briefing_id', briefingId)
      .order('versao', { ascending: false })
      .limit(1);

    if (error) throw error;

    // Se não houver versões anteriores, inicia em 1, senão incrementa
    return (data && data.length > 0) ? data[0].versao + 1 : 1;
  }
};

module.exports = escopoModel;
