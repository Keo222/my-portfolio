const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-west-2" });

exports.handler = async (event) => {
  let response;
  try {
    const params = {
      Destination: {
        ToAddresses: ["kyle.olsen222@gmail.com"],
      },
      Message: {
        Body: {
          Text: { Data: "Test" },
        },

        Subject: { Data: "Test Email" },
      },
      Source: "kyle.olsen222@gmail.com",
    };
    ses.sendEmail(params);
    response = {
      statusCode: 200,
      body: JSON.stringify("Email sent successfully!"),
    };
  } catch (e) {
    response = {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
  return response;
};
