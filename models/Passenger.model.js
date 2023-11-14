const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const passengerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },

    middleName: {
      type: String,
      required: [true, "Please enter your middle name"],
    },

    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },

    birthDate: {
      type: Date,
      required: [true, "Please enter your birthdate"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [2, "Your password must be at least 8 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

const Passenger = mongoose.model("Passenger", passengerSchema);
module.exports = Passenger;
