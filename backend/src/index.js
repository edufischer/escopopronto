require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
const briefingRoutes = require('./routes/briefingRoutes');
const escopoRoutes = require('./routes/escopoRoutes');

const app = express();
app.set('trust proxy', 1); // Necessário para o Railway e outros proxies reversos



const PORT = process.env.PORT || 3000;

// Configuração do Helmet para segurança de headers HTTP
app.use(helmet());

// Configuração do CORS baseado no ambiente
const corsOptions = {
  origin: (origin, callback) => {
    // Permite requisições sem origin (Postman, curl, mobile apps)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      'http://localhost:5173',
      process.env.BASE_URL
    ];

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Rate limiting global: 100 requisições por 15 minutos por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite de 100 requisições por IP
  message: {
    error: 'Muitas requisições vindas deste IP, tente novamente após 15 minutos.'
  },
  standardHeaders: true, // Retorna info de limite nos headers `RateLimit-*`
  legacyHeaders: false, // Desabilita headers `X-RateLimit-*`
});

app.use(limiter);

// Body parser para JSON
app.use(express.json());

// Rotas de Autenticação
app.use('/api/auth', authRoutes);

// Rotas de Briefing
app.use('/api/briefings', briefingRoutes);

// Rotas de Escopo (IA / RAG) - Montadas em cima da estrutura de briefings
app.use('/api/briefings', escopoRoutes);

// Rota de Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date()
  });
});

// Tratamento de erros global (middleware de 4 parâmetros)
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Erro interno do servidor';

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
      timestamp: new Date()
    }
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} em modo ${process.env.NODE_ENV || 'development'}`);
});

