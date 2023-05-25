const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();

const { UNAUTHORIZED } = require("../statusCodes");

const verifyAccessToken = asyncHandler(async (req, res, next) => {
  try {
    //catch token which has been passed via the headers
    const token = req.headers["x-access-token"];

    if (!token) {
      res.status(UNAUTHORIZED).json({ message: "Access token required" });
    }

    const decoded = jwt.verify(token, "Mahendra");
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
  }
});

module.exports = { verifyAccessToken };
