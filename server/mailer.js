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
      <div style="background-color: #f4f6f8; padding: 40px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          
          <!-- Header with optional logo -->
          <div style="background-color: #0d6efd; padding: 20px 30px; text-align: center; color: white;">
            <!-- Optional logo: insert your image URL below -->
            <!-- <img src="https://yourdomain.com/path-to-image.png" alt="Logo" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 10px;" /> -->
            <h1 style="margin: 0; font-size: 22px;">📬 New Portfolio Inquiry</h1>
          </div>
          
          <!-- Body -->
          <div style="padding: 30px;">
            <p style="font-size: 18px; margin-bottom: 25px;">Hi there! You’ve received a new message via your portfolio contact form.</p>
            
            <div style="font-size: 16px; margin-bottom: 20px;">
              <strong>Name:</strong><br />
              <span style="color: #333;">${name}</span>
            </div>
            
            <div style="font-size: 16px; margin-bottom: 20px;">
              <strong>Email:</strong><br />
              <a href="mailto:${email}" style="color: #0d6efd; text-decoration: none;">${email}</a>
            </div>

            <div style="font-size: 16px; margin-bottom: 10px;">
              <strong>Message:</strong>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; font-size: 15px; color: #444; line-height: 1.6;">
              ${message}
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f3f5; padding: 15px 30px; text-align: center; font-size: 13px; color: #888;">
            This message was sent from your portfolio website.
          </div>
        </div>
      </div>
    `,
  });
};

module.exports = sendMail;
