import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NovoBriefing from './pages/NovoBriefing';
import DetalheBriefing from './pages/DetalheBriefing';
import HistoricoBriefings from './pages/HistoricoBriefings';

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
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
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
                  <DetalheBriefing />
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
