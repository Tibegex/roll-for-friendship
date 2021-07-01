import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

import LoginForm from "../components/LoginForm";

// const panes = [
//   {
//     menuItem: "Login",
//     render: () => (
//       <Tab.Pane>
//         <LoginForm />
//       </Tab.Pane>
//     ),
//   },
//   { menuItem: "Sign Up", render: () => <Tab.Pane>Sign Up Form</Tab.Pane> },
// ];

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <header className="h2">Welcome to Roll for Friendship!</header>
          <p>This site is meant to group players with game masters.</p>
          <p>If you are a player, search for a group in your area!</p>
          <p>
            If you are a game master, put a group together and be able to
            provide times for the players to play.
          </p>
        </Col>
        <Col>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              <LoginForm />
            </Tab>
            <Tab eventKey="signUp" title="Sign Up">
              <p>Sign up form</p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
