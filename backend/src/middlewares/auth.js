const jwt = require('jsonwebtoken');

/**
 * Middleware de autenticação JWT.
 * Verifica a validade do token Bearer no header Authorization.
 */
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Verifica se o header Authorization está presente
    if (!authHeader) {
        return res.status(401).json({ error: 'Token de autenticação ausente.' });
    }

    // O formato esperado é "Bearer <token>"
    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Erro no formato do token.' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'Token malformatado.' });
    }

    try {
        // Verifica e decodifica o token usando o segredo do .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Anexa os dados do usuário decodificado à requisição para uso posterior
        req.user = {
            id: decoded.id,
            email: decoded.email,
            perfil: decoded.perfil
        };

        return next();
    } catch (err) {
        // Retorna erro caso o token seja inválido ou tenha expirado
        return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
};

module.exports = authMiddleware;
