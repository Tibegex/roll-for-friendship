import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_CHARACTER, ADD_GROUP } from "../../utils/mutations";
// import Auth from "../../utils/auth";

const AddGroupForm = ({ index }) => {
  const [state, dispatch] = useStoreContext();
  const { classList, raceList, roleList, stateList } = state;

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
      <Form.Group controlId="campaignName">
        <Form.Label>Enter Campaign name:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Campaign Name"
          name="campaignName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="gameVersion">
        <Form.Label>Enter Game Version:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Game Version"
          name="gameVersion"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="meetingTime">
        <Form.Label>Enter a meeting time:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Meeting Time"
          name="meetingTime"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="meetingTimezone">
        <Form.Label>Enter a meeting timezone:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Meeting Timezone"
          name="meetingTimezone"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="weekday">
        <Form.Label>Enter a meeting weekday:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Weekday"
          name="weekday"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="frequencyTime">
        <Form.Label>Enter meeting frequency:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Meeting Frequency"
          name="frequencyTime"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="gameLocationCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          name="gameLocationCity"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="gameLocationState">
        <Form.Label>State</Form.Label>
        <Form.Control
          as="select"
          placeholder="state"
          name="gameLocationState"
          onChange={handleChange}
        >
          {stateList.map((option) => (
            <option value={option.abrv} key={option.abrv}>
              {option.state}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="vTTUsed">
        <Form.Label>Enter vTT used:</Form.Label>
        <Form.Control
          type="text"
          placeholder="vTT"
          name="vTTUsed"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="currentCampaignLevel">
        <Form.Label>Enter Current Campaign Level:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Current Campaign Level"
          name="currentCampaignLevel"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="minPlayerLevel">
        <Form.Label>Enter Minimum Player Level Required:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Minimum Player Level"
          name="minPlayerLevel"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="discordChannel">
        <Form.Label>Enter Discord Channel:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Discord Channel"
          name="discordChannel"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="profanityLevel">
        <Form.Label>Enter Profanity Level:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Profanity Level"
          name="profanityLevel"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="lookingFor">
        <Form.Label>Enter what you are looking for:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Looking for..."
          name="lookingFor"
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
