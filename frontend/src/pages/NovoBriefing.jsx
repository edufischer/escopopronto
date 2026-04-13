import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import { 
  ArrowLeft, 
  Sparkles, 
  Loader2, 
  User, 
  Briefcase, 
  Calendar, 
  DollarSign, 
  FileText,
  LogOut
} from 'lucide-react';

/**
 * Página de criação de Novo Briefing.
 * Realiza o cadastro do briefing e inicia o processamento automático via IA.
 */
const NovoBriefing = () => {
  const [formData, setFormData] = useState({
    nome_cliente: '',
    segmento: '',
    descricao: '',
    prazo_esperado: '',
    orcamento: ''
  });
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0); // 0: Inicial, 1: Similaridade, 2: Geração IA
  const [erro, setErro] = useState('');

  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setLoading(true);
    setLoadingStep(1);

    try {
      // 1. Cria o briefing no banco
      const responseBriefing = await api.post('/briefings', {
        ...formData,
        orcamento: formData.orcamento ? parseFloat(formData.orcamento) : null
      });

      const briefingId = responseBriefing.data.briefing.id;

      // 2. Inicia o processamento da IA
      setLoadingStep(2);
      await api.post(`/briefings/${briefingId}/processar`);

      // 3. Redireciona para a tela de detalhes
      navigate(`/briefings/${briefingId}`);
    } catch (err) {
      console.error(err);
      setErro(err.response?.data?.error || 'Erro ao processar briefing. Tente novamente.');
      setLoading(false);
      setLoadingStep(0);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white pb-12">
      {/* Navbar Superior */}
      <nav className="sticky top-0 z-30 w-full border-b border-white/5 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => navigate('/dashboard')}>
            <span className="text-primary">✅</span>
            <span className="hidden md:inline">Escopo Pronto</span>
          </div>
          <button onClick={logout} className="p-2 rounded-lg hover:bg-white/5 text-secondary hover:text-white transition-all flex items-center gap-2 text-sm">
            <LogOut size={18} />
            <span className="hidden md:inline">Sair</span>
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 mt-10">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para o Dashboard</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-2">Novo Briefing</h1>
            <p className="text-secondary text-sm">Descreva o projeto do cliente para que nossa IA gere um escopo inteligente.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Nome do cliente *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <input
                    name="nome_cliente"
                    required
                    value={formData.nome_cliente}
                    onChange={handleChange}
                    placeholder="Ex: Banco Central"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Segmento *</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <input
                    name="segmento"
                    required
                    value={formData.segmento}
                    onChange={handleChange}
                    placeholder="Ex: Finanças / Bancário"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Descreva o problema do cliente *</label>
              <div className="relative">
                <FileText className="absolute left-3 top-4 text-secondary" size={18} />
                <textarea
                  name="descricao"
                  required
                  rows={5}
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Descreva as dores do cliente, funcionalidades desejadas e objetivos principais..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Prazo esperado *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <input
                    type="date"
                    name="prazo_esperado"
                    required
                    value={formData.prazo_esperado}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">Orçamento aproximado (opcional)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                  <input
                    type="number"
                    name="orcamento"
                    value={formData.orcamento}
                    onChange={handleChange}
                    placeholder="Ex: 50000"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>
            </div>

            {erro && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm flex items-center gap-3">
                <AlertCircle size={18} />
                <span>{erro}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <Sparkles size={20} />
              )}
              <span>{loading ? 'Processando...' : 'Gerar Escopo com IA'}</span>
            </button>

            {/* Mensagens de Loading Animadas */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col items-center gap-2 mt-4"
                >
                  <p className="text-primary font-medium text-sm animate-pulse">
                    {loadingStep === 1 ? 'Buscando projetos similares...' : 'Gerando escopo com inteligência artificial...'}
                  </p>
                  <p className="text-secondary text-xs">Isso pode levar até 15 segundos.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default NovoBriefing;
