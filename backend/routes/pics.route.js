const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const { PicsModel } = require("../model/pics.model");

const picsRouter = express.Router();

//get
picsRouter.get("/",async (req, res)=>{
    try {
        let dataarr = await PicsModel.find();
        res.send(dataarr)
    } catch (error) {
        res.send({"msg": error.msg})
    }
})

picsRouter.post("/add", auth, async (req, res)=>{
    try {
        let payload = await new PicsModel(req.body);
        await payload.save();
        res.send({"msg":"pic added succeessfully"})
    } catch (error) {
        res.send({"msg": error.msg})
    }
})

module.exports = {picsRouter}