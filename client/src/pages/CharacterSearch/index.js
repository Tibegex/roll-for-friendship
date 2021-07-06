import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// CSS
import {
  Container,
  Form,
  Col,
  Button,
  Row,
  Accordion,
  Card,
} from "react-bootstrap";
// Queries/Mutations
import { useQuery, useMutation } from "@apollo/client";
import { SEARCH_CHARACTERS } from "../../utils/queries";
import { INVITE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

// State Store
import { useStoreContext } from "../../utils/GlobalState";

// The component
const CharacterSearch = () => {
  const [state] = useStoreContext();
  const { classList, raceList, roleList, playerLevels, stateList } = state;

  // local state variables
  const [formState, setFormState] = useState({
    playerLevel: "",
    city: "",
    state: "",
    characterName: "",
    class: "",
    race: "",
    level: 1,
    role: "",
  });
  const [remoteOnlyChecked, setRemoteOnlyChecked] = useState(false);

  // setup query
  const { loading, data } = useQuery(SEARCH_CHARACTERS, {
    variables: { ...formState },
  });
  const [inviteUser] = useMutation(INVITE_USER);
  console.log("data:");
  console.log(data);

  const users = data?.user_characters || [];

  // handle inviting player to game
  const invitePlayer = async (userId, characterName) => {
    // use mutation to send email
    console.log("invitePlayer:", { userId, characterName });
    try {
      const { data } = await inviteUser({
        variables: { userId, characterName },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // set up the controls to handle the state of the fields in the form (controlled form)
  const handleChange = (event) => {
    const { name, value } = event.target;

    let newValue = name === "level" ? parseInt(value) : value;

    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  return (
    <Container>
      {!Auth.loggedIn() ? (
        <Redirect to="/" />
      ) : (
        <Form>
          {console.log("users: ", users)}
          <header className="h2">Search Characters:</header>

          <Form.Group as={Row} controlId="characterName">
            <Form.Label column="lg" lg={2}>
              Character Name
            </Form.Label>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Character Name"
                name="characterName"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <br />

          <Form.Group as={Row} controlId="classOption">
            <Form.Label column="lg" lg={2}>
              Class
            </Form.Label>
            <Col>
              <Form.Control as="select" name="class" onChange={handleChange}>
                {classList.map((classOption, index) => (
                  <option value={classOption} key={index}>
                    {classOption}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />

          <Form.Group as={Row} controlId="race">
            <Form.Label column="lg" lg={2}>
              Race
            </Form.Label>
            <Col>
              <Form.Control as="select" name="race" onChange={handleChange}>
                {raceList.map((race, index) => (
                  <option value={race} key={index}>
                    {race}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />

          <Form.Group as={Row} controlId="level">
            <Form.Label column="lg" lg={2}>
              Level
            </Form.Label>
            <Col>
              <Form.Control
                type="number"
                min="0"
                placeholder="1"
                name="level"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <br />

          <Form.Group as={Row} controlId="role">
            <Form.Label column="lg" lg={2}>
              Role
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                placeholder="Role"
                name="role"
                onChange={handleChange}
              >
                {roleList.map((role, index) => (
                  <option value={role} key={index}>
                    {role}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <br />

          <Form.Group as={Row} controlId="playerLevel">
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
          </Form.Group>
          <br />

          <Form.Group as={Row} controlId="remoteOnlyCheckbox">
            <Form.Check
              className="formFont"
              type="checkbox"
              label="Include remote players"
              value={remoteOnlyChecked}
              onChange={() => {
                setRemoteOnlyChecked(!remoteOnlyChecked);
              }}
            />
          </Form.Group>

          {remoteOnlyChecked ? null : (
            <Row>
              <Form.Group as={Col} controlId="city">
                <Row>
                  <Form.Label column="lg" lg={2} className="formFont">
                    City
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      size="lg"
                      placeholder="City"
                      name="city"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group as={Col} controlId="state">
                <Row>
                  <Form.Label column="lg" lg={2} className="formFont">
                    State
                  </Form.Label>
                  <Col>
                    <Form.Control
                      as="select"
                      size="lg"
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
                  </Col>
                </Row>
              </Form.Group>
            </Row>
          )}
          <br />
          {/* <Button type="submit" variant="secondary" size="lg" block>
            Search
          </Button> */}
        </Form>
      )}
      {loading ? (
        <p className="formFont">loading</p>
      ) : (
        <>
          {users.length === 0 ? (
            <p className="formFont">No characters found matching criteria.</p>
          ) : (
            <>
              <p className="formFont">There is data!</p>
              <Accordion>
                {users.map((user, index) => (
                  <Card key={index}>
                    {console.log("Accordion: user:", user)}
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={`"${index}"`}
                      >
                        <Row className="justify-content-between">
                          {user.characters.characterName}
                        </Row>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={`"${index}"`}>
                      <Card.Body>
                        Character details
                        <Button
                          onClick={() =>
                            invitePlayer(
                              user._id,
                              user.characters.characterName
                            )
                          }
                        >
                          Invite Character to Game
                        </Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default CharacterSearch;
