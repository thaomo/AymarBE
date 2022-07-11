var express = require("express");
var router = express.Router();
const Form = require("../models/forms");

router.route("/create").post((req, res) => {
    const lName = req.body.lName;
    const fName = req.body.fName;
    const age = req.body.age;
    const address = req.body.address;
    const gender = req.body.gender;
    const currentSchool = req.body.currentSchool;
    const gpa = req.body.gpa;
    const phone = req.body.phone;
    const email = req.body.email;
    const teacherName = req.body.teacherName;
    const isUnusual = req.body.isUnusual;
    const isExceptional = req.body.isExceptional;
    const isDuncan = req.body.isDuncan;
    const isOctavia = req.body.isOctavia;
    const sportsInvolved = req.body.sportsInvolved;
    const listOfSports = req.body.listOfSports;
    const coachName = req.body.coachName;
    const message = req.body.message;

    const newForm = new Form({
        lName,
        fName,
        age,
        address,
        gender,
        currentSchool,
        gpa,
        phone,
        email,
        teacherName,
        isUnusual,
        isExceptional,
        isDuncan,
        isOctavia,
        sportsInvolved,
        listOfSports,
        coachName,
        message,
    });
    newForm.save();
});

console.log("before GET");
router.get('/', (req, res) => {
    console.log("inside GET");
    Form.find({}, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});
console.log("after GET");

module.exports = router;