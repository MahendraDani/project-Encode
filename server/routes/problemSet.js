const express = require("express");
const router = express.Router();

const { problemSetConroller } = require("../controllers/problemSetController");

router.get("/", problemSetConroller);

module.exports = router;
