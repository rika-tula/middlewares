const { loadData } = require("../data");

module.exports = (req, res, next) => {
    const base = loadData()
    const user = req.query.user

    const admin = base.find(p => p.user === user && p.role === 'ADMIN')

    if (admin) {
       return next()
    }
    res.status(403).send('No tienes los privilegios para ingresar')
    
}
