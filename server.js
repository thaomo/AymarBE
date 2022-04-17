const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require('./routes/formRoute');
const PORT = process.env.PORT || 5000
require("dotenv").config();

app.use(cors());
app.use(express.json());

// For Testing only
// app.get('/', (req, res) => {
//     res.send('hello world!');
// })

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//require routes
app.use("/", router);

app.listen(PORT, () => {
    console.log("express server is running on port" + process.env.PORT);
})