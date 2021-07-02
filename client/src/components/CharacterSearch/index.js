import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { GET_CHARACTERS } from "../../utils/queries";

const CharacterSearch = () => {
  return (
    <Container>
      {Auth.loggedIn() ? (
        <Form.Group>
          <header className="h2">Search Characters:</header>

          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Character Name
            </Form.Label>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Character Name"
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Class
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Class" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Race
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Race" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              level
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="level" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              role
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="role" />
            </Col>
          </Form.Row>
          <Button variant="secondary" size="lg" block>
            Search
          </Button>
        </Form.Group>
      ) : (
        <header className="h2">
          YOU MUST BE LOGGED IN!
          <Link to="/">Login or Signup!</Link>
        </header>
      )}
    </Container>
  );
};

export default CharacterSearch;
