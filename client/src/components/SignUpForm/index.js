import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignUpForm = () => {
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
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        realName: formState.realName,
        email: formState.email,
        password: formState.password,
        playerLevel: formState.playerLevel,
        city: formState.city,
        state: formState.state,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // set up the controls to handle the state of the fields in the form (controlled form)
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name, ":", "value", value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="realName">
        <Form.Label>Enter your real name</Form.Label>
        <Form.Control
          type="realName"
          placeholder="realName"
          name="realName"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          Character names come later!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
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

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="playerLevel">
        <Form.Label>What is your level of play?</Form.Label>
        <Form.Control
          type="playerLevel"
          placeholder="playerLevel"
          name="playerLevel"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="remoteOnlyCheckbox">
        <Form.Check
          type="checkbox"
          label="I only want to play via remote"
          value={remoteOnlyChecked}
          onChange={() => {
            console.log("checkbox clicked: ", remoteOnlyChecked);
            setRemoteOnlyChecked(!remoteOnlyChecked);
          }}
        />
      </Form.Group>

      {remoteOnlyChecked ? null : (
        <>
          <Form.Group controlId="city">
            <Form.Label>city</Form.Label>
            <Form.Control
              type="city"
              placeholder="city"
              name="city"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="state"
              placeholder="state"
              name="state"
              onChange={handleChange}
            />
          </Form.Group>
        </>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
