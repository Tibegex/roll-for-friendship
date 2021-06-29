const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    _id: ID!
    characterName: String!
    class: String!
    race: String
    backstory: String
    level: Int
    role: String
    Notes: String
  }

  type Group {
    _id: ID!
    campaignName: String!
    gameVersion: String
    meetingTime: String
    meetingTimezone: String
    weekday: String
    frequencyTimes: Int
    frequencyPeriod: String
    gameLocationCity: String
    gameLocationState: String
    vTTUsed: String
    currentCampaignLevel: Int
    minPlayerLevel: String
    discordChannel: String
    notes: String
    profanityLevel: String
    characters: [Character]
    lookingFor: [String]
  }

  type User {
    _id: ID!
    realName: String!
    email: String!
    password: String!
    playerLevel: String
    city: String
    state: String
    groups: [Group]
    characters: [Character]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
  }

  type Mutation {
    addUser(
      realName: String!
      email: String!
      password: String!
      playerLevel: String
      city: String
      state: String
    ): Auth
  }
`;

module.exports = typeDefs;
