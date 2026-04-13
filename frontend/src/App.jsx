import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';

// Componentes de Layout Base (Placeholder)
const Layout = ({ children }) => <div className="min-h-screen aurora-bg">{children}</div>;

// Componente PrivateRoute: Protege rotas que exigem autenticação
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Componente PublicRoute: Impede acesso ao login se já estiver autenticado
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

// Páginas Placeholders
const Landing = () => <h1>Landing Page (Em breve)</h1>;
const Login = () => <h1>Login Page (Em breve)</h1>;
const Dashboard = () => <h1>Dashboard (Em breve)</h1>;
const NovoBriefing = () => <h1>Novo Briefing (Em breve)</h1>;
const HistoricoBriefings = () => <h1>Histórico de Briefings (Em breve)</h1>;
const DetalhesBriefing = () => <h1>Detalhes do Briefing (Em breve)</h1>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Landing />} />
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />

            {/* Rotas Protegidas */}
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/briefings/novo" 
              element={
                <PrivateRoute>
                  <NovoBriefing />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/briefings" 
              element={
                <PrivateRoute>
                  <HistoricoBriefings />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/briefings/:id" 
              element={
                <PrivateRoute>
                  <DetalhesBriefing />
                </PrivateRoute>
              } 
            />

            {/* Redirecionamento para 404/Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
