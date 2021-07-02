import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { GET_USER } from "../../utils/queries";

const UserSearch = () => {
  return (
    <Container>
      {Auth.loggedIn() ? (
        <Form.Group>
          <header className="h2">Search Users:</header>

          <Form.Row>
            <Form.Label column="lg" lg={2}>
              realName
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="realName" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              email
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="email" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              playerLevel
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="playerLevel" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              City
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="City" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              State
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="State" />
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

export default UserSearch;
