const express = require("express");
const router = express.Router();

const { admin } = require("../controllers/admin");
const checkAdmin = require("../middlewares/checkAdmin");

router.get("/admin",checkAdmin, admin)

module.exports = router