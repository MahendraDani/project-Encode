const asyncHandler = require("express-async-handler");

const { SUCCESS, BAD_REQUEST } = require("../statusCodes");
let PROBLEMS = require("../models/problemsModel");

const problemController = asyncHandler(async (req, res) => {
  try {
    const requestId = req.params.id;
    const intRequestID = parseInt(requestId);

    if (intRequestID >= 0 && intRequestID <= PROBLEMS.length) {
      await res.status(SUCCESS).json(PROBLEMS[requestId]);
    } else {
      res.status(BAD_REQUEST).json({
        message: `The id value should be between 0 and ${PROBLEMS.length}`,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = { problemController };
