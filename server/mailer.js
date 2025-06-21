// mailer.js
const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ name, email, message }) => {
  return resend.emails.send({
    from: `${name} via Portfolio Client Inquiry <onboarding@resend.dev>`, // Use backticks for template literals
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    reply_to: email,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });
};

module.exports = sendMail;
