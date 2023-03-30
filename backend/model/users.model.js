const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    Fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    pass: {type: String, required: true, unique: true},
    contact: {type: Number, required: true, unique: true}
})

const UserModel = mongoose.model("user", userSchema);

module.exports = {UserModel}