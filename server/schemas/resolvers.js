const { AuthenticationError } = require("apollo-server-express");
const { User, Group, Character } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(context.user);
      const userName = args.realName || context.user.realName;
      if (userName) {
        return User.findOne({ realName: userName })
          .populate("characters")
          .populate("groups");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    users: async () => {
      return User.find().populate("characters").populate("groups");
    },

    characterAll: async () => {
      return Character.find();
    },

    groupAll: async () => {
      return Group.find();
    },

    // userCharacters: async (parent, { realName }, context) => {
    //   const params = realName ? { realName } : {};
    //   return Character.find(params);
    // },

    // userGroups: async (parent, { realName }, context) => {
    //   const params = realName ? { realName } : {};
    //   return Group.find(params);
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addCharacter: async (parent, { input }, context) => {
      const character = await Character.create(input);

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { characters: character._id } }
      );

      return character;
    },

    updateCharacter: async (parent, { id, input }) => {
      return await Character.findByIdAndUpdate(
        { _id: id },
        { input },
        { new: true }
      );
    },

    updateGroup: async (parent, { input }) => {
      return await Group.findByIdAndUpdate(
        { _id: id },
        { input },
        { new: true }
      );
    },

    addGroup: async (parent, { input }, context) => {
      const group = await Group.create(input);

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { groups: group._id } }
      );

      return group;
    },

    deleteCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.findOneAndDelete({
          _id: characterId,
          user: context.user.realName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { characters: character._id } }
        );

        return character;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    deleteGroup: async (parent, { groupId }, context) => {
      if (context.user) {
        const group = await Group.findOneAndDelete({
          _id: groupId,
          user: context.user.realName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { groups: group._id } }
        );

        return group;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
