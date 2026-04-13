const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Verifica se as variáveis de ambiente necessárias estão presentes
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('As variáveis SUPABASE_URL e SUPABASE_ANON_KEY devem estar configuradas no arquivo .env.');
}

/**
 * Cliente do Supabase para interação com o banco de dados PostgreSQL.
 * Utiliza o padrão de singleton para exportar uma única instância.
 */
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // O backend não precisa persistir sessão
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

// Exporta o cliente Supabase para ser utilizado em outros serviços e models
module.exports = supabase;
