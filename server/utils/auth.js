const jwt = require("jsonwebtoken");

const secret = "dndermifflin";
const expiration = "15m";

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
