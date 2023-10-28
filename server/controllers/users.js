require("dotenv").config();
const User = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

const fetchUser = (req, res) => {
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

const getUser = async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json({
    msg: "All users fetched successfully",
    allUsers,
  });
};

const updateUser = async (req, res) => {
  const { id, name, email, gender, status } = req.body;
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    console.log(user);
    await user.updateOne({ $set: { id, name, email, gender, status } });
    return res.status(200).json({
      msg: "User updated successfully",
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const exportCSV = async (req, res) => {
  const data = await User.find();
  const json2csvParser = new Json2csvParser();
  const fields = ["id", "name", "email", "gender", "status"];
  const opts = { fields };
  const csvData = json2csvParser.parse(data, opts);
  try {
    fs.writeFile("userData.csv", csvData, function (error) {
      if (error) throw error;
      console.log("Exported successfully!");
      return res.status(200).json({
        msg: "Exported successfully!",
      });
    });
  } catch {
    res.status(500).json(err);
  }
};

module.exports = { getUser, updateUser, fetchUser, exportCSV };
