const express = require("express");
const router = express.Router();
const { SUCCESS } = require("../statusCodes");

router.post("/", (req, res) => {
  res.status(SUCCESS).json({ message: "This is the POST singup route" });
});

module.exports = router;
