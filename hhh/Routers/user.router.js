const express=require("express");
const {UserModel}=require("../Models/users.model")
const bcrypt = require('bcrypt');
const jwt= require("jsonwebtoken")
require('dotenv').config()

const soltRounds=5;

const UserRouter=express.Router();

UserRouter.get("/",async(req,res)=>{
    try {
        let data=await UserModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

UserRouter.post("/register",async (req,res)=>{
    const {name,email,password,age,phoneNo,gender}=req.body
    try {
        const check_register= await UserModel.find({email});
        if(check_register.length>0){
            res.send("You are already register")
        }else{
            bcrypt.hash(password,soltRounds, async(err,hash_pass)=>{
                if(err){
                    console.log(err);
                    res.send({"bcrypt-msg":err})
                }else{
                    const user= new UserModel({
                        name,
                        email,
                        password:hash_pass,
                        age,
                        phoneNo,
                        gender
                    });
                    await user.save();
                    res.send("Register")
                    console.log(user)
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.send({"msg":error})
    }
})
UserRouter.post("/login",async (req,res)=>{
    const {email,password}=req.body
    try {
        const user= await UserModel.find({email});
        const name=user[0].name
        const hash= user[0].password
        const userId=user[0]._id;
        if(user.length>0){
            
            bcrypt.compare(password, hash, function(err, result) {
                // result == true
                if(result){
                    const token = jwt.sign({ userId:userId }, process.env.key);
                    res.send({"msg":"Login Succesfuly","token":token,"name":name})
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
    UserRouter
}