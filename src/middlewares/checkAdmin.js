const { loadData } = require("../data")


module.exports = (req, res, next) => {
    const users = loadData()
    const user = users[0]

    if (user.role === 'ADMIN') {
        return next().redirect('/admin')
    }
    
    return res.redirect('/')
}