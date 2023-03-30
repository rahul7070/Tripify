const jwt = require("jsonwebtoken");
const { PackageModel } = require("../model/packages.model");

const auth = async (req, res, next)=>{
    let token = req.headers.authorization;
    try {
        jwt.verify(token, 'rahul', async function(err, decoded) {
            if(decoded){
                next()
            }else{
                res.send({"msg": err})
            }
        });
    } catch (error) {
        res.send({"msg": "somthing wrong"})
    }
}

module.exports = {auth}