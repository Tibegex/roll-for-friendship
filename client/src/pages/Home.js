import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Auth from "../utils/auth";
import "./homeStyle.css";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  return (
    <Container>
      {!Auth.loggedIn() ? (
        <Row>
          <Col>
            <div className="container">
              <header className="h2">Welcome to Roll for Friendship!</header>
              <p>
                This site is meant to group players with game masters. If you
                are a player, search for a group in your area! If you are a game
                master, put a group together and be able to provide times for
                the players to play.
              </p>
            </div>
          </Col>
          <Col>
            <div className="container">
              <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login" key="Login">
                  <LoginForm />
                </Tab>
                <Tab eventKey="signUp" title="Sign Up" key="Sign Up">
                  <SignUpForm />
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      ) : (
        <>You're logged in!</>
      )}
    </Container>
  );
};

export default Home;
