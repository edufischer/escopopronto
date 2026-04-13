import { createContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';

/**
 * Contexto de Autenticação global para gerenciar o estado do usuário e token.
 */
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Inicialização: Tenta recuperar o token e o usuário do localStorage ao carregar.
   */
  useEffect(() => {
    const storagedToken = localStorage.getItem('@Escopo Pronto:token');
    const storagedUser = localStorage.getItem('@Escopo Pronto:usuario');

    if (storagedToken && storagedUser) {
      setToken(storagedToken);
      setUsuario(JSON.parse(storagedUser));
      
      // Define o token no header global do axios como fallback
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }

    setLoading(false);
  }, []);

  /**
   * Realiza o login do usuário, salvando o token e os dados no localStorage.
   */
  const login = useCallback(async (email, senha) => {
    try {
      const response = await api.post('/auth/login', { email, senha });
      
      const { token, usuario } = response.data;

      localStorage.setItem('@Escopo Pronto:token', token);
      localStorage.setItem('@Escopo Pronto:usuario', JSON.stringify(usuario));

      setToken(token);
      setUsuario(usuario);
      
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { success: true };
    } catch (error) {
      console.error('Erro no login:', error);
      return { 
        success: false, 
        message: error.response?.data?.error || 'Erro ao realizar login.' 
      };
    }
  }, []);

  /**
   * Realiza o logout, limpando o estado local e o localStorage.
   */
  const logout = useCallback(() => {
    localStorage.removeItem('@Escopo Pronto:token');
    localStorage.removeItem('@Escopo Pronto:usuario');

    setToken(null);
    setUsuario(null);
    
    delete api.defaults.headers.Authorization;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        login,
        logout,
        isAuthenticated: !!token,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
