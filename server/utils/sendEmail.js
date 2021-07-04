const nodemailer = require("nodemailer");

// setup the email transfer variable globally
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = {
  sendWelcome: async function (userEmail) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Account Creation",
      text: "You have successfully created a an account on Roll for Friendship. Thanks for checking us out!",
    };

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
