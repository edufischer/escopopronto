import axios from 'axios';

/**
 * Configuração base do Axios para comunicação com o backend.
 * BaseURL obtida das variáveis de ambiente do Vite.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

/**
 * Interceptor de Requisição: Adiciona o token JWT no header Authorization
 * se o token estiver presente no localStorage.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('@EscopoCerto:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor de Resposta: Trata erros globais, como a expiração do token (401).
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se o backend retornar 401, limpa os dados locais e redireciona para o login
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('@EscopoCerto:token');
      localStorage.removeItem('@EscopoCerto:usuario');

      // Só redireciona se não estiver já na página de login para evitar loop
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
