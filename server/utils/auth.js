const jwt = require("jsonwebtoken");

const secret = "dndermifflin";
const expiration = "15m";

module.exports = {
  signToken: function ({ email, realName, _id }) {
    const payload = { email, realName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
