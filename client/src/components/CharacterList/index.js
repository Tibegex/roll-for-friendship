import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { DELETE_CHARACTER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

function CharacterList({ character, index }) {
  const [deleteCharacter] = useMutation(DELETE_CHARACTER);
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
    console.log("page to reload");
  }
  const handleDeleteCharacter = async (character) => {
    console.log("character:", character);
    try {
      const { data } = await deleteCharacter({
        variables: { characterId: character },
      });
    } catch (err) {
      console.error(err);
    }
    refreshPage();
  };
  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={`"${index}"`}>
            {character.characterName}
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
            {character.notes}
            <button
              className="btn btn-sm btn-danger ml-auto"
              onClick={() => handleDeleteCharacter(character._id)}
            >
              DELETE CHARACTER
            </button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default CharacterList;
