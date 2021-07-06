import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { DELETE_GROUP } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

function GroupList({ group, index }) {
  const [deleteGroup] = useMutation(DELETE_GROUP);
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
  }
  const handleDeleteGroup = async (group) => {
    console.log("group:", group);
    try {
      const { data } = await deleteGroup({
        variables: { groupId: group },
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
            {group.campaignName}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={`"${index}"`}>
          <Card.Body>
            <span className="font-weight-bold">Campaign name: </span>
            {group.campaignName} <br />
            <span className="font-weight-bold">Game Version: </span>
            {group.gameVersion}
            <br />
            <span className="font-weight-bold">Meeting Time: </span>
            {group.meetingTime}
            <br />
            <span className="font-weight-bold">Meeting Time Zone: </span>
            {group.meetingTimezone}
            <br />
            <span className="font-weight-bold">Weekday: </span>
            {group.weekday}
            <br />
            <span className="font-weight-bold">Meeting Frequency Amount: </span>
            {group.frequencyTimes}
            <br />
            <span className="font-weight-bold">Meeting Frequency Period: </span>
            {group.frequencyPeriod}
            <br />
            <span className="font-weight-bold">Game Location City: </span>
            {group.gameLocationCity}
            <br />
            <span className="font-weight-bold">Game Location State: </span>
            {group.gameLocationState}
            <br />
            <span className="font-weight-bold">vTT: </span>
            {group.vTTUsed}
            <br />
            <span className="font-weight-bold">Current Campaign Level: </span>
            {group.currentCampaignLevel}
            <br />
            <span className="font-weight-bold">Minimum Player Level: </span>
            {group.minPlayerLevel}
            <br />
            <span className="font-weight-bold">Discord: </span>
            {group.discordChannel}
            <br />
            <span className="font-weight-bold">Notes: </span>
            {group.notes}
            <br />
            <span className="font-weight-bold">Profanity Level: </span>
            {group.profanityLevel}
            <br />
            {/* <span className="font-weight-bold">Looking For: </span>
            <br />
            {group.lookingFor}
            <br /> */}
            <button
              className="btn btn-sm btn-danger ml-auto"
              onClick={() => handleDeleteGroup(group._id)}
            >
              DELETE GROUP
            </button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default GroupList;
