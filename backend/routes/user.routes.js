const express = require("express");
require("dotenv").config();
const { Usermodel } = require("../model/users.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, age, password } = req.body;
  try {
    const user = await Usermodel.find({ email: email });
    // console.log(user);
    if (user.length > 0) {
      console.log(`${user[0].email} already exists try to login.`);
      res.send({ msg: `Email Already extists try to login.` });
    } else {
      bcrypt.hash(password, 5, async (err, secure_pass) => {
        if (err) {
          console.log(err);
        } else {
          const user = new Usermodel({
            name,
            email,
            age,
            password: secure_pass,
          });
          await user.save();
          console.log(user);
          res.send({ msg: `${user.name} Registered Succesfully` });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "Could not Resgister" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usermodel.findOne({ email: email });
    if (user) {
      const hashed_pass = user.password;
      bcrypt.compare(password, hashed_pass, (err, result) => {
        if (result == true) {
          const token = jwt.sign({ userID: user._id }, process.env.key);
          res.send({ msg: `${user.name} Logged in Successfull`, token: token });
        } else if (result == false) {
          res.send({ msg: `Password does not match. Please try again later` });
        }
      });
    } else {
      res.send({ msg: `Email does nor exists. Please Resgister !` });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message });
  }
});

module.exports = {
  userRouter,
};
