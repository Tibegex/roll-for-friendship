const mongoose = require("mongoose");

const { Schema } = mongoose;

const characterSchema = new Schema({
  characterName: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  race: {
    type: String,
    trim: true,
  },
  backstory: {
    type: String,
    trim: true,
  },
  level: {
    type: Number,
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },
  Notes: {
    type: String,
    trim: true,
  },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
