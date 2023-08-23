const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send_email', (req, res) => {
  const email = req.body.email;
  const vk = req.body.vk;
  const fullname = req.body.fullname;
  const country = req.body.country;
  const address = req.body.address;
  const index = req.body.index;
  const phone = req.body.phone;
  const comment = req.body.comment;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'keffirrml@gmail.com', // Замените на свой адрес электронной почты
      pass: 'Bp220609' // Замените на свой пароль
    }
  });

  const mailOptions = {
    from: 'keffirrml@gmail.com', // Замените на свой адрес электронной почты
    to: 'obrechony@mail.ru', // Замените на свой адрес электронной почты
    subject: 'Заказ',
    text: `Email: ${email}\nVK: ${vk}\nFull Name: ${fullname}\nCountry: ${country}\nAddress: ${address}\nIndex: ${index}\nPhone: ${phone}\nComment: ${comment}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json({ success: false });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});