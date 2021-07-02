import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { GET_GROUPS } from "../../utils/queries";

const GroupSearch = () => {
  return (
    <Container>
      {Auth.loggedIn() ? (
        <Form.Group>
          <header className="h2">Search Groups:</header>

          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Campaign Name
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Campaign Name" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Game Version
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Game Version" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Time
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Meeting Time" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Time Zone
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Time Zone" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Meeting Weekday
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Weekday" />
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

export default GroupSearch;
