// mailer.js
const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async ({ name, email, message }) => {
  return resend.emails.send({
    from: `${name} via Portfolio Client Inquiry <onboarding@resend.dev>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name}`,
    reply_to: email,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333;">New Message from Your Portfolio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          <p style="font-size: 16px;"><strong>Message:</strong></p>
          <p style="font-size: 15px; line-height: 1.6; background: #f1f1f1; padding: 15px; border-radius: 6px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0 10px;">
          <p style="font-size: 12px; color: #999; text-align: center;">This message was sent via your portfolio contact form.</p>
        </div>
      </div>
    `,
  });
};

module.exports = sendMail;
