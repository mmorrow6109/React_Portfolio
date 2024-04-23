// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Route to handle form submission
// app.post('/send-email', (req, res) => {
//     const { name, email, message } = req.body;

//     // Create reusable transporter object using the default SMTP transport
//    // Create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'msmorrow6109@gmail.com',
//         pass: 'your-gmail-password',
//     },
// });


//     // Send mail with defined transport object
//     let info = await transporter.sendMail({
//         from: `"Your Name" <your-email@example.com>`, // sender address
//         to: 'recipient@example.com', // list of receivers
//         subject: 'New Message from Portfolio', // Subject line
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
//     });

//     console.log('Message sent: %s', info.messageId);
//     res.send('Email sent successfully!');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
