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
      firstName: $firstName
      lastName: $lastName
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
