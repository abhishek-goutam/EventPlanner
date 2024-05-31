const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const authorizeOrganizer = (req, res, next) => {
    if (req.user.role !== 'organizer') {
        return res.sendStatus(403);
    }
    next();
};

module.exports = { authenticateToken, authorizeOrganizer };
