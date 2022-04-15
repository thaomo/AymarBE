const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

let mongodb_pass = process.env.MONGODB_PASS;

//connect to mongodb
mongoose.connect(`mongodb+srv://thaomo:` + mongodb_pass + `@cluster0.f6ccp.mongodb.net/grantForms`)

//require routes
app.use("/", require("./routes/formRoute"));

app.listen(process.env.PORT || 5000, function () {
    console.log("express server is running on port" + process.env.PORT);
})