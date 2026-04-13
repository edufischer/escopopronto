import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  FileText, 
  ChevronRight,
  Clock,
  LogOut
} from 'lucide-react';

/**
 * Página de Histórico de Briefings.
 * Permite filtrar e visualizar todos os briefings criados pelo usuário.
 */
const HistoricoBriefings = () => {
  const [briefings, setBriefings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState('todos');
  const [termoBusca, setTermoBusca] = useState('');

  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBriefings = async () => {
      try {
        setLoading(true);
        const params = filtro !== 'todos' ? { status: filtro } : {};
        const response = await api.get('/briefings', { params });
        setBriefings(response.data.briefings);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBriefings();
  }, [filtro]);

  const getStatusColor = (status) => {
    const colors = {
      rascunho: 'text-zinc-400 border-zinc-500/30 bg-zinc-500/10',
      processando: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      gerado: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      em_aprovacao: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
      aprovado: 'text-green-400 border-green-500/30 bg-green-500/10',
      ajuste_solicitado: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
      recusado: 'text-red-400 border-red-500/30 bg-red-500/10',
      falha: 'text-red-900 border-red-900/30 bg-red-900/10'
    };
    return colors[status] || colors.rascunho;
  };

  const filtrosDisponiveis = [
    { id: 'todos', label: 'Todos' },
    { id: 'rascunho', label: 'Pendentes' },
    { id: 'aprovado', label: 'Aprovados' },
    { id: 'ajuste_solicitado', label: 'Ajuste' },
    { id: 'recusado', label: 'Recusados' }
  ];

  const briefingsFiltrados = briefings.filter(b => 
    b.nome_cliente.toLowerCase().includes(termoBusca.toLowerCase()) ||
    b.segmento.toLowerCase().includes(termoBusca.toLowerCase())
  );

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

      <main className="max-w-5xl mx-auto px-6 mt-10">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para o Dashboard</span>
        </button>

        <div className="flex flex-col md:row md:justify-between md:items-center gap-6 mb-10">
          <h1 className="text-3xl font-bold">Histórico de Briefings</h1>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text"
              placeholder="Buscar por cliente ou segmento..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filtrosDisponiveis.map(f => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${
                filtro === f.id 
                ? 'bg-primary/10 border-primary text-primary' 
                : 'glass-card text-secondary hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Listagem */}
        <div className="space-y-4">
          {loading ? (
            [1, 2, 3, 4].map(i => (
              <div key={i} className="glass-card p-6 h-20 animate-pulse bg-white/5" />
            ))
          ) : briefingsFiltrados.length === 0 ? (
            <div className="glass-card p-20 flex flex-col items-center justify-center text-center gap-4">
              <FileText size={48} className="text-secondary/20" />
              <p className="text-secondary">Nenhum briefing encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            briefingsFiltrados.map((briefing, index) => (
              <motion.div
                key={briefing.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(`/briefings/${briefing.id}`)}
                className="glass-card p-6 flex items-center justify-between group cursor-pointer hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{briefing.nome_cliente}</h3>
                    <div className="flex items-center gap-3 text-xs text-secondary">
                      <span>{briefing.segmento}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{new Date(briefing.criado_em).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(briefing.status)}`}>
                    {briefing.status.replace('_', ' ')}
                  </span>
                  <ChevronRight size={18} className="text-secondary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default HistoricoBriefings;
