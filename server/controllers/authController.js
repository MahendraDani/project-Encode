const asyncHandler = require("express-async-handler");
const brycpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv").config();
const localStorage = require("localStorage");

const {
  SUCCESS,
  BAD_REQUEST,
  CREATED,
  UNAUTHORIZED,
} = require("../statusCodes");

const signupController = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return await res
        .status(BAD_REQUEST)
        .json({ message: "All fields are mandatory" });
    }

    //Hash the password of the user
    const saltRounds = 10;
    const hashedPassword = await brycpt.hash(password, saltRounds);

    const newUser = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    let usersData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "..", "models", "users.json"))
    );

    let usersArray = usersData.users;

    //Check if user already exists in USERS array
    const userExists = usersArray.find((user) => user.email === email);
    if (userExists) {
      return res.status(BAD_REQUEST).json({ message: "User already exists!" });
    }

    // Add new user
    usersArray.push(newUser);

    // Update the users.json file in models directory
    fs.writeFileSync(
      path.join(__dirname, "..", "models", "users.json"),
      JSON.stringify(usersData)
    );

    await res
      .status(CREATED)
      .json({ message: "New user created successfully" });
  } catch (err) {
    console.log(err);
  }
});

const loginController = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return await res
        .status(BAD_REQUEST)
        .json({ message: "All fields are mandatory" });
    }

    let usersData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "..", "models", "users.json"))
    );

    let usersArray = usersData.users;

    //Check if user already exists in USERS array
    const userExists = usersArray.find((user) => user.email === email);
    if (!userExists) {
      return res.status(BAD_REQUEST).json({ message: "User does not exists!" });
    }

    //Compare with the hashed password
    brycpt.compare(password, userExists.password, (err, result) => {
      if (err || !result) {
        res.status(UNAUTHORIZED).json({ message: "Invalid email or password" });
      } else {
        //Add logic to generate and  send access token
        const token = jwt.sign(
          { id: userExists.id },
          process.env.JWT_SECRET_KEY
        );
        localStorage.setItem("accessToken", token);
        res
          .status(SUCCESS)
          .json({ message: "User logged in successfully", accessToken: token });
      }
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = { signupController, loginController };
