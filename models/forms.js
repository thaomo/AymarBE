const mongoose = require("mongoose");

const formsSchema = {
    lName: String,
    fName: String,
    age: String,
    address: String,
    gender: String,
    currentSchool: String,
    gpa: String,
    phone: String,
    email: String,
    teacherName: String,
    isUnusual: Boolean,
    isExceptional: Boolean,
    isDuncan: Boolean,
    isOctavia: Boolean,
    sportsInvolved: String,
    listOfSports: String,
    coachName: String,
    message: String,
}

const Form = mongoose.model("forms", formsSchema);

module.exports = Form;