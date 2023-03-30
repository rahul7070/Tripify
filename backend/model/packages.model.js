const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
    name: {type: String, required: true},
    contact : {type: Number, required: true},
    duration : {type: String, required: true},
    location : {type: String, required: true},
    services: {type: String, required: true},
    overview: {type: String, required: true},
})

const PackageModel = mongoose.model("package", packageSchema);

module.exports = {PackageModel}