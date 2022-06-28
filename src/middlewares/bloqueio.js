module.exports = (req, res, nest) => {
    const { pass } = req.query

    if(!pass || pass !== "banana") {
        return res.status(400).json("errado");
    }

    next();
};