const app = require("express")();
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// NODEMAILER

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_SECRET,
    refreshToekn: process.env.OAUTH_REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: "kyote222@gmail.com",
  to: "kyle.olsen222@gmail.com",
  subject: "test",
  text: "This is my nodemailer test",
};

app.post("/api/mail", (req, res) => {
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Email sent successfully");
    }
  });
});

module.exports = app;
