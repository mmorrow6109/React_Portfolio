const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function(event, context) {
    const { name, email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Contact Form Submission from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send message. Please try again later.', error: error.toString() }),
        };
    }
};
