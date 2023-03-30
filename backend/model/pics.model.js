const mongoose = require("mongoose");

const picSchema = mongoose.Schema({
    link: {type: String, required: true},
    packageID : String
})

const PicsModel = mongoose.model("pic", picSchema);

module.exports = {PicsModel}