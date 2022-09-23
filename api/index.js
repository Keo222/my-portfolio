const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());

// OAUTH
const OAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

OAuth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

app.post("/api/mail", async (req, res) => {
  const { name, email, subject, msg } = req.body;
  const CLIENT_EMAIL = process.env.EMAIL_USERNAME;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    // Generate the accessToken
    const accessToken = await OAuth2Client.getAccessToken();

    // Create the email envelope (transport)
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: CLIENT_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // Create the email options and body
    // ('email': user's email and 'name': is the e-book the user wants to receive)
    let mailOptions = {
      from: "kyle.olsen222@gmail.com",
      to: "kyle.olsen222@gmail.com",
      subject: subject,
      text: `From: ${name}\n\nEmail: ${email}\n\nMessage:\n${msg}`,
    };

    // Set up the email options and delivering it
    const result = await transport.sendMail(mailOptions);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = app;
