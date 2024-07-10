// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// });


// app.post('/send', (req, res) => {
//     const { name, email, message } = req.body;

//     const mailOptions = {
//         from: email,
//         to: 'your-email@gmail.com',
//         subject: `Contact Form Submission from ${name}`,
//         text: message
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Message sent successfully!');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
