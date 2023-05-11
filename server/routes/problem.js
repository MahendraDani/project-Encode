const express = require("express");
const { problemController } = require("../controllers/problemController");
const router = express.Router();

router.get("/:id", problemController);

module.exports = router;
