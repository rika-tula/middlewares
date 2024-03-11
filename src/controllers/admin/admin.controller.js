module.exports = (req, res) => {
const user = req.query

  res.send(`Hola Admin: ${user}`)
  }
  