module.exports = (req, res, next) => {
    console.log(`O i: ${req.ip} acessou a rota: ${req.originalUrl}`);
    next();
};
