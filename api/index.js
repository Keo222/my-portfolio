const app = require("express")();
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

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

// OAUTH

const OAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  process.env.REDIRECT_URI
);
console.log("made new Oauth2 client");

OAuth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

// NODEMAILER

// async function sendMail(email) {
//   const CLIENT_EMAIL = process.env.EMAIL_USERNAME;
//   const CLIENT_ID = process.env.CLIENT_ID;
//   const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
//   const REDIRECT_URI = process.env.REDIRECT_URI;
//   const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
//   const OAuth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
//   );

//   OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
//   try {
//     // Generate the accessToken on the fly
//     console.log("before access token");
//     const accessToken = await OAuth2Client.getAccessToken();
//     console.log("after access token");

//     // Create the email envelope (transport)
//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: CLIENT_EMAIL,
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     // Create the email options and body
//     // ('email': user's email and 'name': is the e-book the user wants to receive)
//     let mailOptions = {
//       from: "kyle.olsen222@gmail.com",
//       to: "kyle.olsen222@gmail.com",
//       subject: "test",
//       text: "This is my nodemailer test",
//     };

//     // Set up the email options and delivering it
//     const result = transport.sendMail(mailOptions);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

app.post("/api/mail", async (req, res) => {
  const { name, email, subject, msg } = req.body;
  const CLIENT_EMAIL = process.env.EMAIL_USERNAME;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
  console.log("before making oauth2 client");
  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  console.log("before setting oauth2 credentials");

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    // Generate the accessToken on the fly
    console.log("before access token");
    const accessToken = await OAuth2Client.getAccessToken();
    console.log("after access token");

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
      text: `Message from: ${name}\nEmail: ${email}\nMessage:\n${msg}`,
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

// app.get("/api/mail", (req, res) => {
//   console.log("from mail api");
//   res.send({ msg: "from the backend" });
// });

module.exports = app;
