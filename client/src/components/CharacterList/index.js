import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Accordion, Card, Button } from "react-bootstrap";

import { GET_Characters } from "../../utils/queries";

function CharacterList() {
  const { data, error } = useQuery(GET_Characters);

  console.log(data, error);

  const characterList = data?.characters || [];

  return (
    <Accordion>
      {characterList.map((character) => (
        <Card key={character._id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {character.characterName}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{character.characterName}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
      <Card key="addChar">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CharacterList;
