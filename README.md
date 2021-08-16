# Roll For Friendship

## Description

Roll for Friendship is a site that will linke Game Masters' games with Player's characters. The users will be able to select what type of character they are looking for in their game and we will match that player and game master together.

## Table of Contents

- [User Story](#user-story)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)
- [Known issues outside of our code](#known-issues-outside-of-our-code)

## User Story

AS AN avid RPG Game Master

I WANT to search for characters to play in my campaign

SO THAT I can have a full party

## Usage

### If Local:

- **npm run deploy** to start the application. It should automatically open a new browser window.

### From Heroku:

https://roll-for-friendship.herokuapp.com/

## Technologies

- [GraphQL](https://graphql.org/)
- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Express Server](https://expressjs.com/)
- [Apollo Server](https://www.npmjs.com/package/apollo-server-express)
- [Nodemailer](https://nodemailer.com/about/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)

## Credits

- Josh Lee
- Lacey Pape
- Tarik Maggio
- Aaron Mendoza
- Chip Long

## Known issues outside of our code:

- When opening the accordion, there is an error, "Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode." This is a known issue with react-bootstrap: https://github.com/react-bootstrap/react-bootstrap/issues/5075.
