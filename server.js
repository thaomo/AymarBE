const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(cors());
app.use(express.json());


//connect to mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(console.log("Connected to MongoDB " + process.env.MONGODB_URI))
    .catch((err) => console.log(err));

//use routes to fetch information
app.use("/", require("./routes/formRoute"));
console.log("here");


app.listen(process.env.PORT || 5000, () => {
    console.log("express server is running on port " + process.env.PORT);
})