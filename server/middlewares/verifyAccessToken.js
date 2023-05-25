const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();
const localStorage = require("localStorage");

const { UNAUTHORIZED } = require("../statusCodes");

const verifyAccessToken = asyncHandler(async (req, res, next) => {
  try {
    const token = localStorage.getItem("accessToken");
    console.log(token);
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
