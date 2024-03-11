module.exports = (req, res) => {
  const user = req.query.user;

  res.send(`Hola Admin: ${user}`);
}
