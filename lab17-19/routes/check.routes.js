const express = require("express");
const router = express.Router();

const checkControler = require("../controllers/check.controller");

router.get("/", checkControler.get_root);

module.exports = router;
