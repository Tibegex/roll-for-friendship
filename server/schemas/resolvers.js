const { AuthenticationError } = require("apollo-server-express");
const { User, Group, Character } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      console.log("Lacey is pretty");
      return User.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log("Lacey is pretty");
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
