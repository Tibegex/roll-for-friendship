import React from "react";
import { Grid, Segment, Container, Header, Tab } from "semantic-ui-react";

const panes = [
  { menuItem: "Login", render: () => <Tab.Pane>Login Form</Tab.Pane> },
  { menuItem: "Sign Up", render: () => <Tab.Pane>Sign Up Form</Tab.Pane> },
];

const Home = () => {
  return (
    <Segment>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Container text>
            <Header as="h2">Welcome to Roll for Friendship!</Header>
            <p>This site is meant to group players with game masters.</p>
            <p>If you are a player, search for a group in your area!</p>
            <p>
              If you are a game master, put a group together and be able to
              provide times for the players to play.
            </p>
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3">Login</Header>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Home;
