// exports.handler = async (event) => {
//   var AWS = require("aws-sdk");
//   var ses = new AWS.SES();

//   var RECEIVER = "kyle.olsen222@gmail.com";
//   var SENDER = "kyle.olsen222@gmail.com";
//   var response = {
//     isBase64Encoded: false,
//     headers: { "Content-Type": "application/json" },
//     statusCode: 200,
//     body: '{"result": "Success."}',
//   };
//   exports.handler = function (event, context) {
//     console.log("Received event:", event);
//     sendEmail(event, function (err, data) {
//       context.done(err, null);
//     });
//   };

//   function sendEmail(event, done) {
//     var params = {
//       Destination: {
//         ToAddresses: [RECEIVER],
//       },
//       Message: {
//         Body: {
//           Text: {
//             Data:
//               "Name: " +
//               event.name +
//               "\nEmail: " +
//               event.email +
//               "\nSubject: " +
//               event.subject +
//               "\nMessage: " +
//               event.message,
//             Charset: "UTF-8",
//           },
//         },
//         Subject: {
//           Data: "Website Referral Form - Message from " + event.name,
//           Charset: "UTF-8",
//         },
//       },
//       Source: SENDER,
//     };
//     ses.sendEmail(params, done);
//   }
//   try {

//   } catch (error) {

//   }
// };

exports.handler = async (event) => {
  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");

  const CLIENT_EMAIL = process.env.EMAIL_USERNAME;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;

  let response;
  try {
    // OAUTH
    const OAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );

    OAuth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });
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
    // EMAIL CONFIG
    let mailOptions = {
      from: "kyle.olsen222@gmail.com",
      to: "kyle.olsen222@gmail.com",
      subject: "Test",
      text: `From: their name\n\nEmail: their email\n\nMessage:\nTest Message`,
      // text: `From: ${name}\n\nEmail: ${email}\n\nMessage:\n${msg}`,
    };
    // SEND EMAIL
    const result = transport.sendMail(mailOptions);
    response = {
      statusCode: 200,
      body: JSON.stringify("Email sent successfully!\n", result),
    };
  } catch (e) {
    response = {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
  return response;
};
