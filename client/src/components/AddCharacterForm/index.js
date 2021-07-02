import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CHARACTER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const AddCharacterForm = ({ index }) => {
  const [state, dispatch] = useStoreContext();
  const { classList, raceList, roleList } = state;

  const [formState, setFormState] = useState({
    characterName: "",
    class: "",
    race: "",
    playerLevel: "",
    backstory: "",
    level: "",
    role: "",
    notes: "",
  });

  const [addCharacter] = useMutation(ADD_CHARACTER);

  const handleSubmit = async (event) => {
    event.prevent.default();

    console.log({ ...formState });
    addCharacter({ ...formState });
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="characterName">
        <Form.Label>Enter your real name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="characterName"
          name="characterName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="class">
        <Form.Label>Enter your real name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="class"
          name="class"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddCharacterForm;
