import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function GroupList({ group, index }) {
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
            <br />
            {group.meetingTimezone}
            <br />
            <span className="font-weight-bold">Weekday: </span>
            <br />
            {group.weekday}
            <span className="font-weight-bold">Meeting Frequency: </span>
            <br />
            {group.frequencyTime} {group.frequencyPeriod}
            <span className="font-weight-bold">Game Location: </span>
            <br />
            {group.gameLocationCity} {group.gameLocationState}
            <span className="font-weight-bold">vTT: </span>
            <br />
            {group.vTTUsed}
            <span className="font-weight-bold">Current Campaign Level: </span>
            <br />
            {group.currentCampaignLevel}
            <span className="font-weight-bold">Minimum Player Level: </span>
            <br />
            {group.minPlayerLevel}
            <span className="font-weight-bold">Discord: </span>
            <br />
            {group.discordChannel}
            <span className="font-weight-bold">Notes: </span>
            <br />
            {group.notes}
            <span className="font-weight-bold">Profanity Level: </span>
            <br />
            {group.profanityLevel}
            <span className="font-weight-bold">Looking For: </span>
            <br />
            {group.lookingFor}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default GroupList;
