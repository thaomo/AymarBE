const express = require("express");
const router = express.Router();
const Form = require("../models/forms");

router.route("/create").post((req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    const newForm = new Form({
        email,
        message,
    });

    newForm.save();
});

router.route("/forms").get((req, res) => {
    Form.find({}, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result);
        }
    });
    //.then(foundForms => res.json(foundForms))
});

module.exports = router;