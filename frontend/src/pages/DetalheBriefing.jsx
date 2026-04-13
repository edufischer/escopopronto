import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  RefreshCw, 
  Users, 
  DollarSign, 
  ChevronDown,
  FileText,
  ShieldCheck,
  Zap,
  LogOut
} from 'lucide-react';

/**
 * Página de Detalhes do Briefing.
 * Exibe o escopo gerado pela IA, permite reprocessar e enviar para aprovação.
 */
const DetalheBriefing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [briefing, setBriefing] = useState(null);
  const [escopo, setEscopo] = useState(null);
  const [versaoSelecionada, setVersaoSelecionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reprocessando, setReprocessando] = useState(false);
  const [erro, setErro] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const [resBriefing, resEscopo] = await Promise.all([
        api.get(`/briefings/${id}`),
        api.get(`/briefings/${id}/escopos/latest`)
      ]);

      setBriefing(resBriefing.data);
      setEscopo(resEscopo.data);
      setVersaoSelecionada(resEscopo.data?.versao);
      setLoading(false);

      // Se estiver processando, inicia o polling
      if (resBriefing.data.status === 'processando') {
        setTimeout(fetchData, 3000);
      }
    } catch (err) {
      console.error(err);
      setErro('Erro ao carregar dados do briefing.');
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleReprocessar = async () => {
    setReprocessando(true);
    setErro('');
    try {
      await api.post(`/briefings/${id}/processar`);
      fetchData();
    } catch (err) {
      setErro('Erro ao reprocessar escopo.');
    } finally {
      setReprocessando(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      rascunho: 'text-zinc-400 border-zinc-500/30 bg-zinc-500/10',
      processando: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      gerado: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      em_aprovacao: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
      aprovado: 'text-green-400 border-green-500/30 bg-green-500/10',
      falha: 'text-red-400 border-red-500/30 bg-red-500/10'
    };
    return colors[status] || colors.rascunho;
  };

  const getViabilidadeColor = (v) => {
    if (v?.toLowerCase().includes('alta')) return 'text-green-400 bg-green-400/10';
    if (v?.toLowerCase().includes('média')) return 'text-yellow-400 bg-yellow-400/10';
    return 'text-red-400 bg-red-400/10';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="animate-spin text-primary" size={40} />
          <p className="text-secondary animate-pulse">Carregando detalhes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pb-20">
      <nav className="sticky top-0 z-30 w-full border-b border-white/5 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => navigate('/dashboard')}>
            <span className="text-primary">✅</span>
            <span className="hidden md:inline">EscopoCerto</span>
          </div>
          <button onClick={logout} className="p-2 rounded-lg hover:bg-white/5 text-secondary hover:text-white transition-all flex items-center gap-2 text-sm">
            <LogOut size={18} />
            <span className="hidden md:inline">Sair</span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-10">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para o Dashboard</span>
        </button>

        {/* Header do Briefing */}
        <div className="flex flex-col md:row md:justify-between md:items-center gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{briefing?.nome_cliente}</h1>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(briefing?.status)}`}>
                {briefing?.status.replace('_', ' ')}
              </span>
            </div>
            <p className="text-secondary">{briefing?.segmento} • Criado em {new Date(briefing?.criado_em).toLocaleDateString()}</p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleReprocessar}
              disabled={reprocessando || briefing?.status === 'processando'}
              className="px-6 py-3 rounded-xl glass-card hover:bg-white/10 transition-all flex items-center gap-2 text-sm font-medium disabled:opacity-50"
            >
              <RefreshCw size={18} className={reprocessando ? 'animate-spin' : ''} />
              <span>{reprocessando ? 'Reprocessando...' : 'Reprocessar'}</span>
            </button>
            <button 
              disabled={briefing?.status !== 'gerado'}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(34,197,94,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              <span>Enviar para Aprovação</span>
            </button>
          </div>
        </div>

        {/* Alerta de Processamento */}
        <AnimatePresence>
          {briefing?.status === 'processando' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-10 p-6 glass-card border-primary/20 flex flex-col items-center justify-center text-center gap-4"
            >
              <Zap className="text-primary animate-pulse" size={32} />
              <div>
                <h3 className="text-lg font-bold">A IA está gerando seu escopo...</h3>
                <p className="text-secondary text-sm">Estamos analisando projetos similares e definindo a melhor solução técnica.</p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Conteúdo Principal */}
        {escopo && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna Esquerda: Escopo e Observações */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card overflow-hidden">
                <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                  <div className="flex items-center gap-3 font-bold">
                    <FileText size={20} className="text-primary" />
                    <span>Escopo Gerado</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                    <span>v{escopo.versao}</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="p-8 prose prose-invert max-w-none prose-p:text-secondary prose-headings:text-white prose-strong:text-white">
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {escopo.escopo}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8">
                <div className="flex items-center gap-3 font-bold mb-6">
                  <AlertCircle size={20} className="text-yellow-400" />
                  <span>Observações e Riscos</span>
                </div>
                <p className="text-secondary leading-relaxed">
                  {escopo.observacoes || 'Nenhuma observação adicional gerada pela IA.'}
                </p>
              </motion.div>
            </div>

            {/* Coluna Direita: Squad e Resumo */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-8">
                <div className="flex items-center gap-3 font-bold mb-8">
                  <Users size={20} className="text-primary" />
                  <span>Squad Sugerido</span>
                </div>
                <div className="space-y-6">
                  {Object.entries(escopo.squad_sugerido || {}).map(([perfil, qtd]) => (
                    <div key={perfil} className="flex justify-between items-center">
                      <span className="text-secondary text-sm capitalize">{perfil.replace('_', ' ')}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-secondary/50">{escopo.horas_estimadas?.[perfil]}h</span>
                        <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-sm">
                          {qtd}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-secondary text-sm font-medium">Investimento Estimado</span>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${getViabilidadeColor(escopo.viabilidade)}`}>
                      {escopo.viabilidade}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 text-3xl font-bold text-primary">
                    <span className="text-lg font-medium opacity-70">R$</span>
                    {parseFloat(escopo.custo_estimado).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 bg-primary/5 border-primary/10">
                <div className="flex items-center gap-3 font-bold mb-4">
                  <ShieldCheck size={20} className="text-primary" />
                  <span>Aprovação Segura</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Ao enviar para aprovação, o supervisor receberá um link seguro e tokenizado por e-mail para validar este escopo.
                </p>
                <div className="p-3 bg-black/20 rounded-lg border border-white/5 text-[10px] text-secondary font-mono">
                  Token: UUID-v4-generated-on-send
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DetalheBriefing;
