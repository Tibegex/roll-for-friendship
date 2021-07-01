import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function CharacterList({ character, index }) {
  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={`"${index}"`}>
            {character.characterName} {index}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={`"${index}"`}>
          <Card.Body>
            <span className="font-weight-bold">Character name: </span>
            {character.characterName} <br />
            <span className="font-weight-bold">Class: </span>
            {character.class}
            <br />
            <span className="font-weight-bold">Race: </span>
            {character.race}
            <br />
            <span className="font-weight-bold">Backstory: </span>
            <br />
            {character.backstory}
            <br />
            <span className="font-weight-bold">Notes: </span>
            <br />
            {character.characterName}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default CharacterList;
