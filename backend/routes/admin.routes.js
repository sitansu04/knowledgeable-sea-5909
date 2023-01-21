const express=require("express");
const {AdminModel}=require("../model/admin.model.js")
const bcrypt = require('bcrypt');
const jwt= require("jsonwebtoken")
require('dotenv').config()

// const soltRounds=5;

const Adminrouter=express.Router();

Adminrouter.post("/register", async (req, res) => {
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
Adminrouter.post("/login",async (req,res)=>{
    const {email,password}=req.body
    try {
        const admin= await AdminModel.find({email});
        const hash= admin[0].password
        const adminId=admin[0]._id;
        if(admin.length>0){
            
            bcrypt.compare(password, hash, function(err, result) {
                // result == true
                if(result){
                    const token = jwt.sign({ adminId:adminId }, process.env.key);
                    res.send({"msg":"Login Succesfuly","token":token})
                }else{
                    res.send("Wrong Credentials")
                }
            });
        }else{
            res.send("You are not register I")
        }
    } catch (error) {
        console.log(error)
        res.send({"msg":"Wrong Credentials"})
    }
})



module.exports={
    Adminrouter
}