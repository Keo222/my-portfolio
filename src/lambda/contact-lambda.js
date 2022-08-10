exports.handler = async (event) => {
  var AWS = require("aws-sdk");
  var ses = new AWS.SES();

  var RECEIVER = "kyle.olsen222@gmail.com";
  var SENDER = "kyle.olsen222@gmail.com";
  var response = {
    isBase64Encoded: false,
    headers: { "Content-Type": "application/json" },
    statusCode: 200,
    body: '{"result": "Success."}',
  };
  exports.handler = function (event, context) {
    console.log("Received event:", event);
    sendEmail(event, function (err, data) {
      context.done(err, null);
    });
  };

  function sendEmail(event, done) {
    var params = {
      Destination: {
        ToAddresses: [RECEIVER],
      },
      Message: {
        Body: {
          Text: {
            Data:
              "Name: " +
              event.name +
              "\nEmail: " +
              event.email +
              "\nSubject: " +
              event.subject +
              "\nMessage: " +
              event.message,
            Charset: "UTF-8",
          },
        },
        Subject: {
          Data: "Website Referral Form - Message from " + event.name,
          Charset: "UTF-8",
        },
      },
      Source: SENDER,
    };
    ses.sendEmail(params, done);
  }
  return;
};
