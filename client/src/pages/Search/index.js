import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Auth from "../../utils/auth";

const Search = () => {
  return (
    <Container>
      {Auth.loggedIn() ? (
        <Form.Group>
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
          <Button variant="secondary" size="lg" block>
            Search
          </Button>
        </Form.Group>
      ) : (
        <>route to login</>
      )}
    </Container>
  );
};

export default Search;
