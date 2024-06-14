const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

router.get('/', (req, res, next) => {
  res.render('contact', {
    page: '2',
    msgSent: null
  });
});

router.post('/', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'appstudio.pc@gmail.com',
      pass: 'Templ@te;'
    }
  });

  const msg = "<p>Name: " + req.body.clientName + "</p>" +
              "<p>Project: " + req.body.clientProject + "</p>" +
              "<p>Phone Number: " + req.body.clientTel + "</p>" +
              "<p>Email: " + req.body.clientEmail + "</p>" +
              "<p>Message: " + req.body.clientMsg + "</p>";

  //send mail with defined transport object
  const info = transporter.sendMail({
    to: "appstudio.pc@gmail.com",
    subject: "Message from Studio Website",
    text: msg, // plain text body
    html: msg
  }, (err, result) => {
    console.log("Message sent:");
    console.log(result);
    res.render('contact', {
      page: '2',
      msgSent: !err ? true : false
    });
  });



});

module.exports = router;
