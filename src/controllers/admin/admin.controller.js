const { loadData } = require("../../data");

module.exports = (req, res) => {
  const json = loadData()
  const user = req.query.json;

  res.send(`Hola Admin: ${user}`);
}
