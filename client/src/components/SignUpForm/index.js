import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "../../pages/Home/index";

const SignUpForm = () => {
  const [state, dispatch] = useStoreContext();
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

  // set up mutation for signing up
  const [addUser, error] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const variables = {};

    variables.realName = formState.realName;
    variables.email = formState.email;
    variables.password = formState.password;
    variables.playerLevel = formState.playerLevel
      ? formState.playerLevel
      : "Beginner";
    if (remoteOnlyChecked) {
      variables.city = "Remote Only";
    } else {
      variables.city = formState.city;
      variables.state = formState.state;
    }

    const mutationResponse = await addUser({
      variables: variables,
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="realName">
        <Form.Label className="formFont">Enter your real name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Real Name"
          name="realName"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          Character names come later!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="signUpEmail">
        <Form.Label className="formFont">Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We'll never sell your email, but we do pass it between game masters
          and players.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="signUpPassword">
        <Form.Label className="formFont">Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="playerLevel">
        <Form.Label className="formFont">
          What is your level of play?
        </Form.Label>
        <Form.Control
          as="select"
          required
          placeholder="playerLevel"
          name="playerLevel"
          onChange={handleChange}
        >
          {playerLevels.map((option) => (
            <option value={option.name} key={option.name}>
              {option.name} - {option.description}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="remoteOnlyCheckbox">
        <Form.Check
          className="formFont"
          type="checkbox"
          label="I only want to play via remote"
          value={remoteOnlyChecked}
          onChange={() => {
            setRemoteOnlyChecked(!remoteOnlyChecked);
          }}
        />
      </Form.Group>

      {remoteOnlyChecked ? null : (
        <>
          <Form.Group controlId="city">
            <Form.Label className="formFont">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="state">
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
          </Form.Group>
        </>
      )}

      {error.message ? <Alert variant="danger">{error.message}</Alert> : null}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
