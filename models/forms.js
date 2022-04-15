const mongoose = require("mongoose");

const formsSchema = {
    email: String,
    message: String,
}

const Form = mongoose.model("forms", formsSchema);

module.exports = Form;