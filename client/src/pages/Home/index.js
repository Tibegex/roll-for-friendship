import React from "react";

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
import "./homeStyle.css";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import CharacterList from "../../components/CharacterList";
import AddCharacterForm from "../../components/AddCharacterForm";
import GroupList from "../../components/GroupList";
import AddGroupForm from "../../components/AddGroupForm";

const Home = () => {
  const { data } = useQuery(GET_ME);

  const user = data?.me || {};
  const characterList = user.characters || [];
  const groupList = user.groups || [];

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
            {characterList.length > 0
              ? characterList.map((character, index) => (
                  <CharacterList
                    character={character}
                    index={index}
                    key={index}
                  />
                ))
              : null}
            <Card key="addChar">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={characterList.length + 1}
                >
                  +character
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={characterList.length + 1}>
                <Card.Body>
                  <AddCharacterForm />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <header className="h2">Your Groups:</header>
          <Accordion>
            {groupList.length > 0
              ? groupList.map((group, index) => (
                  <GroupList group={group} index={index} key={index} />
                ))
              : null}
            <Card key="addGroup">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={groupList.length + 1}
                >
                  +group
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={groupList.length + 1}>
                <Card.Body>
                  <AddGroupForm />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </>
      )}
    </Container>
  );
};

export default Home;
