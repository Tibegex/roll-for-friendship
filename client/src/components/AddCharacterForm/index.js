import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CHARACTER } from "../../utils/mutations";
// import Auth from "../../utils/auth";

const AddCharacterForm = ({ index }) => {
  const [state, dispatch] = useStoreContext();
  const { classList, raceList, roleList } = state;

  const [formState, setFormState] = useState({
    characterName: "",
    class: "",
    race: "",
    level: 1,
    role: "",
    backstory: "",
    notes: "",
    classOther: "",
    raceOther: "",
    roleOther: "",
  });

  const [addCharacter] = useMutation(ADD_CHARACTER);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const variables = {};
    variables.characterName = formState.characterName;
    variables.class =
      formState.class !== "other" ? formState.class : formState.classOther;
    variables.race =
      formState.race !== "other" ? formState.race : formState.raceOther;
    variables.level = Number(formState.level);
    variables.role =
      formState.role !== "other" ? formState.role : formState.roleOther;
    variables.backstory = formState.backstory;
    variables.notes = formState.notes;

    const character = await addCharacter({ variables: { ...variables } });
    console.log(character);
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
          as="select"
          placeholder="Race"
          name="race"
          onChange={handleChange}
        >
          {raceList.map((race, index) => (
            <option value={race} key={index}>
              {race}
            </option>
          ))}
          <option value="other" key={raceList.length + 1}>
            Other...
          </option>
        </Form.Control>
      </Form.Group>
      {formState.race === "other" ? (
        <Form.Group controlID="raceOther">
          <Form.Label>
            <bold>Please note, this race will not be searchable.</bold>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Other..."
            name="raceOther"
            onChange={handleChange}
          />
        </Form.Group>
      ) : null}

      <Form.Group controlId="level">
        <Form.Label>Enter your Character's level:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="1"
          name="level"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label>Enter your Character's race:</Form.Label>
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
          <option value="other" key={roleList.length + 1}>
            Other...
          </option>
        </Form.Control>
      </Form.Group>
      {formState.role === "other" ? (
        <Form.Group controlID="roleOther">
          <Form.Label>
            Please note, this role will not be searchable.
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Other..."
            name="roleOther"
            onChange={handleChange}
          />
        </Form.Group>
      ) : null}

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

export default AddCharacterForm;
