require("dotenv").config();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
const axios = require("axios");

const getUser = (req, res) => {
  try {
    axios
      .get("https://gorest.co.in/public-api/users")
      .then(async (response) => {
        if (response) {
          const users = response.data.data;
          console.log(users);
          for (let i = 0; i < users.length; i++) {
            const now_user = users[i];
            const d_user = new User(now_user);
            console.log(now_user);
            await d_user.save();
          }
          res.status(200).json({
            msg: "Users fetched successfully",
            users,
          });
        }
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getUser };
