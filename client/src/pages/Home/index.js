import React from "react";

import { useQuery } from "@apollo/client";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";

import { GET_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import "./homeStyle.css";

import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import CharacterList from "../../components/CharacterList";
import GroupList from "../../components/GroupList";

const Home = () => {
  const { data } = useQuery(GET_ME);

  let user = [];
  let characterList = [];
  let groupList = [];

  if (data) {
    user = data.user;
    characterList = user.characterList;
    groupList = user.groupList;
  }

  return (
    <Container>
      {!Auth.loggedIn() ? (
        <Row>
          <Col>
            <div className="container">
              <header className="h2">Welcome to Roll for Friendship!</header>
              <p className="welcome">
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
        <>
          <header className="h2">Your Characters:</header>
          <Accordion>
            {characterList.map((character, index) => (
              <CharacterList character={character} index={index} key={index} />
            ))}
            <Card key="addChar">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={characterList.length + 1}
                >
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={characterList.length + 1}>
                <Card.Body>Add Character Form</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <header className="h2">Your Groups:</header>
          <Accordion>
            {groupList.map((group, index) => (
              <GroupList character={group} index={index} key={index} />
            ))}
            <Card key="addChar">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={groupList.length + 1}
                >
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={groupList.length + 1}>
                <Card.Body>Add Group Form Here</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
      )}
    </Container>
  );
};

export default Home;
