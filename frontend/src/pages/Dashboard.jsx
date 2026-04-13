import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import { 
  Plus, 
  LogOut, 
  LayoutDashboard, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Search,
  ChevronRight
} from 'lucide-react';

/**
 * Página de Dashboard do Comercial.
 * Exibe resumo dos briefings e lista as criações recentes.
 */
const Dashboard = () => {
  const [briefings, setBriefings] = useState([]);
  const [resumo, setResumo] = useState({ total: 0, pendentes: 0, aprovados: 0, falha: 0 });
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBriefings();
  }, []);

  const fetchBriefings = async () => {
    try {
      const response = await api.get('/briefings');
      const data = response.data.briefings;
      
      setBriefings(data);
      
      // Calcula resumo baseado nos status
      const stats = data.reduce((acc, b) => {
        acc.total++;
        if (b.status === 'aprovado') acc.aprovados++;
        else if (b.status === 'falha') acc.falha++;
        else acc.pendentes++;
        return acc;
      }, { total: 0, pendentes: 0, aprovados: 0, falha: 0 });

      setResumo(stats);
    } catch (err) {
      setErro('Erro ao carregar briefings. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      rascunho: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
      processando: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      gerado: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      em_aprovacao: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      aprovado: 'bg-green-500/20 text-green-400 border-green-500/30',
      ajuste_solicitado: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      recusado: 'bg-red-500/20 text-red-400 border-red-500/30',
      falha: 'bg-red-900/40 text-red-300 border-red-900/50'
    };
    return colors[status] || colors.rascunho;
  };

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'agora';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m atrás`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h atrás`;
    if (diffInSeconds < 172800) return 'ontem';
    return date.toLocaleDateString('pt-BR');
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
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 mr-4 text-sm text-secondary">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {usuario?.nome?.charAt(0)}
              </span>
              <span>{usuario?.nome}</span>
            </div>
            <button 
              onClick={logout}
              className="p-2 rounded-lg hover:bg-white/5 text-secondary hover:text-white transition-all flex items-center gap-2 text-sm"
              title="Sair"
            >
              <LogOut size={18} />
              <span className="hidden md:inline">Sair</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-10">
        {/* Header Dashboard */}
        <div className="flex flex-col md:row md:justify-between md:items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">Olá, {usuario?.nome?.split(' ')[0]} 👋</h1>
            <p className="text-secondary">Gerencie seus briefings e acompanhe as aprovações.</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/briefings/novo')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]"
          >
            <Plus size={20} />
            <span>Novo Briefing</span>
          </motion.button>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total', value: resumo.total, icon: FileText, color: 'text-white' },
            { label: 'Pendentes', value: resumo.pendentes, icon: Clock, color: 'text-yellow-400' },
            { label: 'Aprovados', value: resumo.aprovados, icon: CheckCircle2, color: 'text-green-400' },
            { label: 'Falha', value: resumo.falha, icon: AlertCircle, color: 'text-red-400' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <item.icon size={20} className={item.color} />
                <span className="text-xs text-secondary font-medium uppercase tracking-wider">{item.label}</span>
              </div>
              <span className="text-3xl font-bold mt-1">{item.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Lista de Briefings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              Briefings recentes
            </h2>
            <button className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-1">
              Ver todos <ChevronRight size={16} />
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="glass-card p-6 h-24 animate-pulse bg-white/5" />
              ))}
            </div>
          ) : briefings.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-12 flex flex-col items-center justify-center text-center gap-4 border-dashed"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                <Search size={32} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Nenhum briefing ainda</h3>
                <p className="text-secondary text-sm">Crie seu primeiro briefing para começar a gerar escopos inteligentes.</p>
              </div>
              <button 
                onClick={() => navigate('/briefings/novo')}
                className="mt-2 text-primary hover:underline font-medium"
              >
                Criar meu primeiro briefing
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {briefings.map((briefing, index) => (
                <motion.div
                  key={briefing.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => navigate(`/briefings/${briefing.id}`)}
                  className="glass-card p-6 flex flex-col md:row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.07] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{briefing.nome_cliente}</h3>
                      <p className="text-xs text-secondary">{briefing.segmento} • Criado {formatRelativeTime(briefing.criado_em)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(briefing.status)}`}>
                      {briefing.status.replace('_', ' ')}
                    </span>
                    <ChevronRight size={18} className="text-secondary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
