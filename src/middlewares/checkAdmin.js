const { loadData } = require("../data");

module.exports = (req, res, next) => {
    const base = loadData()
    const user = req.query.base

    if (user.role === 'ADMIN') {
        return next()
    }
    res.status(403).send('No tienes los privilegios para ingresar')
    
}
