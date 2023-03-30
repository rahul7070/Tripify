const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const { PackageModel } = require("../model/packages.model");
const { UserModel } = require("../model/users.model");

const packageRouter = express.Router();

//get
packageRouter.get("/",async (req, res)=>{
    try {
        let dataarr = await PackageModel.find();
        res.send(dataarr)
    } catch (error) {
        res.send({"msg": error.msg})
    }
})

//add
packageRouter.post("/add", auth, async(req, res)=>{
    try {
        let payload = new PackageModel(req.body)
        await payload.save();
        res.send({"msg": "added successfully"})
    } catch (error) {
        res.send({"msg": error})
    }
})

// update
packageRouter.patch("/update/:id", auth, async(req, res)=>{
    try {
        await PackageModel.findByIdAndUpdate({_id:req.params.id}, req.body)    
        res.send({"msg": "updated successfully"})
    } catch (error) {
        res.send({"msg": error})
    }
})

// delete
packageRouter.delete("/delete/:id", auth, async(req, res)=>{
    try {
        await PackageModel.findByIdAndDelete({_id:req.params.id})    
        res.send({"msg": "deleted successfully"})
    } catch (error) {
        res.send({"msg": error})
    }
})

module.exports = {packageRouter}