const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  realName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  playerLevel: {
    type: String,
    default: "Beginner",
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
