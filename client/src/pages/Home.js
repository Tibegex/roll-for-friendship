import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Auth from "../utils/auth";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  return (
    <Container>
      {!Auth.loggedIn() ? (
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
              <Tab eventKey="login" title="Login" key="Login">
                <LoginForm />
              </Tab>
              <Tab eventKey="signUp" title="Sign Up" key="Sign Up">
                <SignUpForm />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      ) : (
        <>You're logged in!</>
      )}
    </Container>
  );
};

export default Home;
