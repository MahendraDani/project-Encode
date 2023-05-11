const asyncHandler = require("express-async-handler");

const { SUCCESS } = require("../statusCodes");
let PROBLEMS = require("../models/problemsModel");
const problemSetConroller = asyncHandler(async (req, res) => {
  try {
    await res.status(SUCCESS).json({ PROBLEMS });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { problemSetConroller };
