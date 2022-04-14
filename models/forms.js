const mongoose = require("mongoose");

const formsSchema = {
    email: String,
    message: String,
}

const Form = mongoose.model("Form", formsSchema);

module.exports = Form;