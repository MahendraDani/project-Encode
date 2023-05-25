const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const { verifyAccessToken } = require("./middlewares/verifyAccessToken");

//built in middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "App is running and good to go!" });
});

app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));
app.use("/problems", verifyAccessToken, require("./routes/problemSet"));
app.use("/problems", verifyAccessToken, require("./routes/problem"));

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
