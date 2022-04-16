const mongoose = require("mongoose");

const formsSchema = {
    lName: String,
    fName: String,
    age: Number,
    address: String,
    gender: String,
    currentSchool: String,
    gpa: Number,
    phone: String,
    email: String,
    teacherName: String,
    grantsApplyingFor: String,
    sportsInvolved: String,
    listOfSports: String,
    coachName: String,
    message: String,

}

const Form = mongoose.model("forms", formsSchema);

module.exports = Form;