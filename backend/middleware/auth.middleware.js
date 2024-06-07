const jwt = require("jsonwebtoken");
const { Users } = require("../model/users.model");
const { BlacklistToken } = require("../models/blacklistToken.model");
require("dotenv").config();

const authenticateUser = async (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] == "Bearer"
    ) {
      const accessToken = req.headers.authorization.split(" ")[1];
      const isBlackListed = await BlacklistToken.findOne({ token: accessToken });
      if (isBlackListed) {
        return res
          .status(400)
          .json({ error: true, message: "Invalid Access Token." });
      }
      try {
        var decodedData = jwt.verify(
          accessToken,
          process.env.ACCESS_TOKEN_SECRET
        );
        if (decodedData) {
          console.log(decodedData);
          const { userId } = decodedData;
          const user = await Users.findById(userId);
          if (user) {
            req.role = user.role;
            req.userId = userId;
            next();
          } else {
            return res
              .status(400)
              .json({
                error: true,
                message: "Invalid Access Token. User does not exist",
              });
          }
        } else{
          return res.status.json({
            error: true,
            message: "Invalid Access Token",
          });
        }
      } catch (error) {
        return res.status(404).json({ error: true, message: error.message });
      }
    } else {
      return res
        .status(404)
        .json({ error: true, message: "Access Token Required" });
    }
  };
  module.exports = {
    authenticateUser,
  };