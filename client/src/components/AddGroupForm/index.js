import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CHARACTER, ADD_GROUP } from "../../utils/mutations";
// import Auth from "../../utils/auth";

const AddGroupForm = ({ index }) => {
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

  const [addGroup] = useMutation(ADD_GROUP);

  const handleSubmit = async (event) => {
    event.prevent.default();

    console.log({ ...formState });
    addGroup({ ...formState });
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
      {console.log(classList, raceList, roleList)}
      <Form.Group controlId="characterName">
        <Form.Label>Enter your Character's name:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Character Name"
          name="characterName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="class">
        <Form.Label>Enter your Character's class:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Class"
          name="class"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="race">
        <Form.Label>Enter your Character's race:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Race"
          name="race"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="backstory">
        <Form.Label>Enter your Characters backstory</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Backstory"
          name="backstory"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="notes">
        <Form.Label>Enter any additional notes:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Notes"
          name="notes"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddGroupForm;
