import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// CSS
import { Container, Form, Col, Button } from "react-bootstrap";
// Queries/Mutations
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../utils/queries";
import Auth from "../../utils/auth";

// State Store
import { useStoreContext } from "../../utils/GlobalState";

const CharacterSearch = () => {
  const [state] = useStoreContext();
  const { playerLevels, stateList } = state;

  // local state variables
  const [formState, setFormState] = useState({
    realName: "",
    email: "",
    password: "",
    playerLevel: "",
    city: "",
    state: "",
  });
  const [remoteOnlyChecked, setRemoteOnlyChecked] = useState(false);

  const handleFormSubmit = async (event) => {
    // do something here...
  };

  // set up the controls to handle the state of the fields in the form (controlled form)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      {!Auth.loggedIn() ? (
        <Redirect to="/" />
      ) : (
        <Form onSubmit={handleFormSubmit}>
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
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Level
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="level" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Label column="lg" lg={2}>
              Role
            </Form.Label>
            <Col>
              <Form.Control size="lg" type="text" placeholder="role" />
            </Col>
          </Form.Row>
          <br />
          <Form.Row controlId="playerLevel">
            <Form.Label column="lg" lg={2} className="formFont">
              Player's level:
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                size="lg"
                name="playerLevel"
                onChange={handleChange}
              >
                {playerLevels.map((option) => (
                  <option value={option.name} key={option.name}>
                    {option.name} - {option.description}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Row>
          <br />

          <Form.Row controlId="remoteOnlyCheckbox">
            <Form.Check
              className="formFont"
              type="checkbox"
              label="I only want to play via remote"
              value={remoteOnlyChecked}
              onChange={() => {
                setRemoteOnlyChecked(!remoteOnlyChecked);
              }}
            />
          </Form.Row>

          {remoteOnlyChecked ? null : (
            <>
              <Form.Row controlId="city">
                <Form.Label className="formFont">City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                />
              </Form.Row>

              <Form.Row controlId="state">
                <Form.Label className="formFont">State</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="state"
                  name="state"
                  onChange={handleChange}
                >
                  {stateList.map((option) => (
                    <option value={option.abrv} key={option.abrv}>
                      {option.state}
                    </option>
                  ))}
                </Form.Control>
              </Form.Row>
            </>
          )}
          <br />
          <Button variant="secondary" size="lg" block>
            Search
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default CharacterSearch;
