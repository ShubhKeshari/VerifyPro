const { Users } = require("../models/users.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { BlacklistToken } = require("../models/blacklistToken.model");
const saltRound = 7;
const userRegister = async (req, res) => {
  try {
    const { name, email, password} = req.body;
    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists" });
    }
    bcrypt.hash(password, saltRound, async (err, hash) => {
      if (err) {
        throw new Error(err);
      }
      const user = new Users({
        name,
        email,
        password: hash,
      });
      await user.save();
      return res.status(200).json({
        data: {
          _id: user._id,
          email: user.email,
        },
        message: "New User registered successfully",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: true, message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: true,
        message: "User does not exist. Try to register.",
      });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        throw new Error(err);
      }
      if (result) {
        const accessToken = jwt.sign(
          {
            userId: user._id,
            email: user.email,
          },
          process.env.ACCESS_TOKEN_SECRET
        );
        return res.status(200).json({
          accessToken,
          data: {
            userId: user._id,
            email: user.email,
          },
          message: "User logged in successfully",
        });
      } else {
        return res
          .status(400)
          .json({ error: true, message: "Invalid email or password" });
      }
    });
  } catch (error) {
    return res.status(400).json({ error: true, message: error.message });
  }
};

const userLogout = async (req, res) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] == "Bearer"
    ) {
      const accessToken = req.headers.authorization.split(" ")[1];
      const blacklistToken = new BlacklistToken({ token: accessToken });
      await blacklistToken.save();
      return res.status(200).json({
        error: false,
        message: "User logged out successfully",
      });
    } else {
      return res
        .status(400)
        .json({ error: true, message: "Access Token Required" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
};
