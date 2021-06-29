const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/User");
// const { User, Product, Category, Order } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return User.findAll({});
    },
  },

  // Mutations: {},
};
