const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();

const { UNAUTHORIZED } = require("../statusCodes");

const verifyAccessToken = asyncHandler(async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res
        .status(UNAUTHORIZED)
        .json({ message: "Authorization header required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
  }
});
