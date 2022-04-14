const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const path = require("path");

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('contact');
});

app.post("/", (req, res) => {
  var email = req.body.email;
  var message = req.body.message;

  var mail = {
    from: email,
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  secure: false,
  port: 587,
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
  requireTLS: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

// verifying the connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
    console.log("There's an error");
  } else {
    console.log("Server is ready to take our messages!");
  }
});



const listener = app.listen(587, () => console.log("Server Running on port " + listener.address().port));