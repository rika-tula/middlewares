const createLog = require('../../middlewares/userLogs')

module.exports = (req, res) => {
  res.render("./other/home");

  createLog("El usuario ingresó a la ruta: /")
}
