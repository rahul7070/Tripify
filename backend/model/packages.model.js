const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
    descTitle: {type: String, required: true},
    number : {type: Number, required: true},
    days : {type: String, required: true},
    location : {type: String, required: true},
    price : {type: String, required: true},
    highlights: {type: Object, required: true},
    overview: {type: String},
    rating: {type: Number, required: true}
})

const PackageModel = mongoose.model("package", packageSchema);

module.exports = {PackageModel}