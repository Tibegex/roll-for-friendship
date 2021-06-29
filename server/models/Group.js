const mongoose = require("mongoose");
const Character = require("./Character");

const { Schema } = mongoose;

const groupSchema = new Schema({
  campaignName: {
    type: String,
    required: true,
    trim: true,
  },
  gameVersion: {
    type: String,
    default: "D&D v5",
  },
  meetingTime: {
    type: String,
  }, //(translate to local -- store UTC)
  meetingTimezone: {
    type: String,
  },
  weekday: {
    type: String,
    trim: true,
  }, //(with S-S+"Varies")
  frequencyTimes: {
    type: Number,
    min: 0,
    default: 1,
  },
  frequencyPeriod: {
    type: String,
  },
  gameLocationCity: {
    type: String,
  },
  gameLocationState: {
    type: String,
  },
  vTTUsed: {
    type: String,
  }, // (Roll 20, fantasy Grounds, Foundry, Astral…)
  currentCampaignLevel: {
    type: Number,
  },
  minPlayerLevel: {
    type: String,
  },
  discordChannel: {
    type: String,
  },
  notes: {
    type: String,
  },
  profanityLevel: {
    type: String,
  },
  characters: [Character.schema],
  lookingFor: [{ type: String }],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
