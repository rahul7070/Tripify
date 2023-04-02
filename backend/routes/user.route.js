const express = require("express");
const bcrypt = require("bcrypt");
const SendOtp  = require("sendotp");
const jwt = require("jsonwebtoken")
const { UserModel } = require("../model/users.model");
const userRouter = express.Router();


userRouter.post("/register", async (req, res) => {
    try {
        const { Fullname, email, pass, contact } = req.body;
        bcrypt.hash(pass, 5, async (error, hash) => {
            if (hash) {
                let payload = await new UserModel({ Fullname, email, pass: hash, contact })
                try {
                    await payload.save() 
                    res.json({"msg": "registered successfully"})
                } catch (error) {
                    res.status(400).json(error.message)
                }
            } else {
                res.status(400).json(error.message)
            }
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

userRouter.post("/login", async (req, res) => {
    let { email, pass } = req.body;
    try {
        let obj = await UserModel.findOne({ email })
        if (obj) {
            bcrypt.compare(pass, obj.pass, function (err, result) {
                // result == true
                if (result) {
                    res.send({ "msg": "login success", token: jwt.sign({ "userID": obj._id }, "rahul"), "Fullname":obj.Fullname, "email":obj.email, "contact": obj.contact })
                } else {
                    res.send({ "msg": "wrong password" })
                }
            });
        } else {
            res.send({ "msg": "No user found by this credential" })
        }
    } catch (error) {
        res.send({ "msg": "something wrong happend please try again" })
    }
})

module.exports = { userRouter }