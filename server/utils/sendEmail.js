const nodemailer = require("nodemailer");

// fake user from Ethereal
const account = {
  name: "Christopher Rau",
  user: "christopher.rau21@ethereal.email",
  pass: "JFDzqxgd3FHxxJGake",
};

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: account.user, // generated ethereal user
    pass: account.pass, // generated ethereal password
  },
});

module.exports = {
  sendWelcome: async function (userEmail) {
    console.log("sendWelcome");

    const mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Account Creation",
      text: "You have successfully created a an account on Roll for Friendship. Thanks for checking us out!",
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`message sent: ${mailOptions}`);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },

  sendInviteToCharacter: async function (toUser, fromUser, characterName) {
    console.log("sendInviteToCharacter");

    const mailOptions = {
      from: fromUser.email,
      to: toUser.email,
      subject: characterName,
      text: `Hello ${toUser.realName},
      
      My name is ${fromUser.realName} and I would like to invite your character, ${characterName}, to join my group. Please email me back at ${fromUser.email}.
      
      Sincerely,
      ${fromUser.realName}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`message sent: ${mailOptions}`);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },
};
