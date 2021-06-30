import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($realName: String) {
    user(realName: $realName) {
      _id
      realName
      email
      playerLevel
      city
      state
      groups {
        campaignName
        gameVersion
        meetingTime
        meetingTimezone
        weekday
        frequencyTimes
        frequencyPeriod
        gameLocationCity
        gameLocationState
        vttUsed
        currentCampaignLevel
        minPlayerLevel
        discordChannel
        notes
        profanityLevel
      }
      characters {
        characterName
        class
        race
        backstory
        level
        role
        notes
        user
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query users {
    users {
      _id
      realName
      email
      playerLevel
      city
      state
      groups {
        campaignName
        gameVersion
        meetingTime
        meetingTimezone
        weekday
        frequencyTimes
        frequencyPeriod
        gameLocationCity
        gameLocationState
        vttUsed
        currentCampaignLevel
        minPlayerLevel
        discordChannel
        notes
        profanityLevel
        characters
      }
      characters {
        characterName
        class
        race
        backstory
        level
        role
        notes
        user
      }
    }
  }
`;

export const GET_ALL_Characters = gql`
  query characterAll {
    characters {
      characterName
      class
      race
      backstory
      level
      role
      notes
      user
    }
  }
`;
export const GET_ALL_GROUPS = gql`
  query groupAll {
    groups {
      campaignName
      gameVersion
      meetingTime
      meetingTimezone
      weekday
      frequencyTimes
      frequencyPeriod
      gameLocationCity
      gameLocationState
      vttUsed
      currentCampaignLevel
      minPlayerLevel
      discordChannel
      notes
      profanityLevel
      characters
    }
  }
`;
