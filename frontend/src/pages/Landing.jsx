import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Cpu,
  CheckCircle,
  ChevronDown,
  Check,
  ArrowRight
} from 'lucide-react';

/**
 * Componente de Landing Page do Escopo Pronto.
 * Implementa design premium com Glassmorphism, Aurora Effect e animações Framer Motion.
 */
const Landing = () => {
  const navigate = useNavigate();

  // Variantes de animação para reutilização
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* SEÇÃO HERO */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* Efeito Aurora Animado */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Navbar */}
        <nav className="absolute top-0 w-full px-6 py-8 flex justify-between items-center z-20 max-w-7xl mx-auto">
          <div className="text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">✅</span>
            <span className="text-white">Escopo Pronto</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 rounded-full glass-card text-white hover:bg-white/10 transition-colors"
          >
            Entrar
          </button>
        </nav>

        {/* Conteúdo Central Hero */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            O que o cliente espera é o que será entregue.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { delay: 0.2 } }
            }}
            className="text-lg md:text-xl text-secondary mb-10 max-w-2xl"
          >
            Plataforma de escopo inteligente para software houses.
            Reduza o gap entre comercial e técnico com IA fundamentada em RAG.
          </motion.p>

          <motion.button
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { delay: 0.4 } }
            }}
            onClick={() => navigate('/login')}
            className="px-8 py-4 rounded-full bg-primary text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
          >
            Começar agora <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-10 text-secondary/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* SEÇÃO COMO FUNCIONA */}
      <section className="py-24 bg-[#111111] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como funciona</h2>
            <p className="text-secondary">Três passos para alinhar expectativas e acelerar propostas.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="glass-card p-8 relative overflow-hidden group">
              <span className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">01</span>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Briefing em minutos</h3>
              <p className="text-secondary leading-relaxed">
                Descreva o projeto do cliente em linguagem natural. Nosso sistema captura os requisitos fundamentais.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="glass-card p-8 relative overflow-hidden group">
              <span className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">02</span>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">IA processa via RAG</h3>
              <p className="text-secondary leading-relaxed">
                A IA consulta sua base de projetos reais para gerar estimativas precisas de squad, horas e custos.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="glass-card p-8 relative overflow-hidden group">
              <span className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">03</span>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Aprovação segura</h3>
              <p className="text-secondary leading-relaxed">
                O supervisor recebe um link tokenizado para revisar e aprovar o escopo sem precisar de login.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section className="py-24 bg-background px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-8">
              Por que o Escopo Pronto?
            </motion.h2>

            <div className="space-y-6">
              {[
                "Escopo gerado em minutos, não em dias",
                "Histórico auditável de todas as decisões",
                "Aprovação assíncrona sem reuniões extras",
                "Sem gap entre expectativa e entrega",
                "Base de conhecimento real via RAG"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4 text-secondary"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check size={14} />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            className="relative"
          >
            {/* Mockup Simulado do Dashboard */}
            <div className="glass-card p-4 aspect-video relative overflow-hidden shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-4">
                <div className="h-8 w-1/3 bg-white/10 rounded" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-white/5 rounded" />
                  <div className="h-24 bg-white/5 rounded" />
                  <div className="h-24 bg-white/5 rounded" />
                </div>
                <div className="h-32 bg-white/5 rounded" />
              </div>
              {/* Overlay Decorativo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO CTA FINAL */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Gradiente de Fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-[#052e16] z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Chega de escopo mal definido.
            </h2>
            <p className="text-lg text-secondary mb-10">
              Junte-se às software houses que já entregam exatamente o que o cliente espera.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all"
            >
              Começar agora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-12 bg-background border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-white/50">
            <span>✅</span> Escopo Pronto
          </div>
          <p className="text-secondary/50 text-sm">
            © 2026 Escopo Pronto
            Projeto acadêmico desenvolvido para fins de portfólio profissional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
