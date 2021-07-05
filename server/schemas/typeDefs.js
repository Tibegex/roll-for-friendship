const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Character {
    _id: ID!
    characterName: String
    class: String
    race: String
    backstory: String
    level: Int
    role: String
    notes: String
    user: String
  }

  type Group {
    _id: ID!
    campaignName: String
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

  type DeletePayload {
    status: Boolean
    error: String
  }

  type userSearchPayload {
    _id: ID!
    realName: String!
    email: String!
    password: String!
    playerLevel: String
    city: String
    state: String
    groups: [Group]
    characters: Character
  }

  type Query {
    user(realName: String): User
    users: [User]
    me: User
    characters(
      characterName: String
      class: String
      race: String
      backstory: String
      level: Int
      role: String
      notes: String
    ): [Character]

    user_characters(
      playerLevel: String
      city: String
      state: String
      characterName: String
      class: String
      race: String
      level: Int
      role: String
    ): [userSearchPayload]

    groups(
      campaignName: String
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
      lookingFor: [String]
    ): [Group]
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

    addCharacter(
      characterName: String!
      class: String!
      race: String
      backstory: String
      level: Int
      role: String
      notes: String
    ): Character

    addGroup(
      campaignName: String
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
    ): Group

    updateCharacter(
      characterName: String
      class: String
      race: String
      backstory: String
      level: Int
      role: String
      notes: String
    ): Character

    deleteCharacter(characterId: ID!): DeletePayload

    updateGroup(
      campaignName: String
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
    ): Group

    deleteGroup(groupId: ID!): DeletePayload
  }
`;

module.exports = typeDefs;
