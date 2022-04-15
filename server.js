const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require('./routes/formRoute');
require("dotenv").config();

app.use(cors());
app.use(express.json());

// For Testing only
// app.get('/', (req, res) => {
//     res.send('hello world!');
// })

// app.get('/greeting', (req, res) => {
//     res.json({ greetings: 'hello' });
// })

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//require routes
app.use("/", router);

app.listen(process.env.PORT || 3001, function () {
    console.log("express server is running on port" + process.env.PORT);
})