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
    notes: String
    user: String!
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
    user(realName: String): User
    users: [User]
    characterAll: [Character]
    userCharacters(realName: String): [Character]
    groupAll: [Group]
    userGroups(realName: String): [Group]
  }

  input characterInput {
    characterName: String!
    class: String!
    race: String
    backstory: String
    level: Int
    role: String
    notes: String
    user: String!
  }

  input groupInput {
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
    characters: [String]
    lookingFor: [String]
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
    login(email: String!, password: String!): Auth
    updateUser(
      realName: String
      email: String
      password: String
      playerLevel: String
      city: String
      state: String
    ): User
    addCharacter(input: characterInput): Character
    updateCharacter(input: characterInput): Character
    deleteCharacter(characterId: ID!): Character
    addGroup(input: groupInput): Group
    updateGroup(input: groupInput): Group
    deleteGroup(groupId: ID!): Group
  }
`;

module.exports = typeDefs;
