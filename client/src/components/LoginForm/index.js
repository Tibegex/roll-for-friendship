import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "../../pages/Home/index";

const LoginForm = () => {
  // local state variable
  const [formState, setFormState] = useState({ email: "", password: "" });
  // set up mutation for logging in
  const [login, { error }] = useMutation(LOGIN_USER);

  // do the actual login on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target, formState);
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Form.Group controlId="loginEmail">
        <Form.Label className="formFont">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label className="formFont">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </Form.Group>
      {error ? <Alert variant="danger">{error.message}</Alert> : null}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
