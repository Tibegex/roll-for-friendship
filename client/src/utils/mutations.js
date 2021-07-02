import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        realName
        email
        playerLevel
        city
        state
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $realName: String!
    $email: String!
    $password: String!
    $playerLevel: String
    $city: String
    $state: String
  ) {
    addUser(
      realName: $realName
      email: $email
      password: $password
      playerLevel: $playerLevel
      city: $city
      state: $state
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter(
    $characterName: String!
    $class: String!
    $race: String!
    $backstory: String
    $level: Int
    $role: String
    $notes: String
  ) {
    addCharacter(
      characterName: $characterName
      class: $class
      race: $race
      backstory: $backstory
      level: $level
      role: $role
      notes: $notes
    ) {
      character {
        characterName
        class
        race
        backstory
        level
        role
        notes
      }
    }
  }
`;

export const UPDATE_CHARACTER = gql`
  mutation updateCharacter(
    $characterName: String
    $class: String
    $race: String
    $backstory: String
    $level: Int
    $role: String
    $notes: String
  ) {
    updateCharacter(
      characterName: $characterName
      class: $class
      race: $race
      backstory: $backstory
      level: $level
      role: $role
      notes: $notes
    ) {
      character {
        characterName
        class
        race
        backstory
        level
        role
        notes
      }
    }
  }
`;

export const DELETE_CHARACTER = gql`
  mutation deleteCharacter($characterId: ID!) {
    deleteCharacter(characterId: $characterId) {
      character {
        characterName
        class
        race
        backstory
        level
        role
        notes
      }
    }
  }
`;

export const UPDATE_GROUP = gql`
  mutation updateGroup(
    $campaignName: String
    $gameVersion: String
    $meetingTime: String
    $meetingTimezone: String
    $weekday: String
    $frequencyTimes: Int
    $frequencyPeriod: String
    $gameLocationCity: String
    $gameLocationState: String
    $vTTUsed: String
    $currentCampaignLevel: Int
    $minPlayerLevel: String
    $discordChannel: String
    $notes: String
    $profanityLevel: String
    $characters: [Character]
    $lookingFor: [String]
  ) {
    updateGroup(
      campaignName: $campaignName
      gameVersion: $gameVersion
      meetingTime: $meetingTime
      meetingTimezone: $meetingTimezone
      weekday: $weekday
      frequencyTimes: $frequencyTimes
      frequencyPeriod: $frequencyPeriod
      gameLocationCity: $gameLocationCity
      gameLocationState: $gameLocationState
      vTTUsed: $vTTUsed
      currentCampaignLevel: $currentCampaignLevel
      minPlayerLevel: $minPlayerLevel
      discordChannel: $discordChannel
      notes: $notes
      profanityLevel: $profanityLevel
      lookingFor: $lookingFor
    ) {
      group {
        campaignName
        gameVersion
        meetingTime
        meetingTimezone
        weekday
        frequencyTimes
        frequencyPeriod
        gameLocationCity
        gameLocationState
        vTTUsed
        currentCampaignLevel
        minPlayerLevel
        discordChannel
        notes
        profanityLevel
        characters
        lookingFor
      }
    }
  }
`;

export const DELETE_GROUP = gql`
  mutation deleteGroup($groupId: ID!) {
    deleteGroup(groupId: $groupId) {
      group {
        campaignName
        gameVersion
        meetingTime
        meetingTimezone
        weekday
        frequencyTimes
        frequencyPeriod
        gameLocationCity
        gameLocationState
        vTTUsed
        currentCampaignLevel
        minPlayerLevel
        discordChannel
        notes
        profanityLevel
        characters
        lookingFor
      }
    }
  }
`;
