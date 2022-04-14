//import mongoose
const mongoose = require("mongoose");

//Image schema
const imageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    //image: [{type: String, date: {type: String, default: new Date()} }],
    image: String,
    description: String,
    keywords: String,
    origin: String
});

const image = mongoose.model('upload', imageSchema); //convert to model named upload
module.exports = image; //export for controller use