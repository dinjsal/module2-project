const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const departureSchema = require("./Departure.model");
const destinationSchema = require("./Destination.model");

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
      required: [true, "Please select your date of birth"],
    },

    address: {
      type: String,
      required: [true, "Please enter your address"],
      // alphanumeric and special characters key in
      match: [/^[A-Za-z0-9_@./#&+-]*$/],
    },

    dateFrom: {
      type: Date,
      required: [true, "Please select your departure date"],
    },

    dateTo: {
      type: Date,
      required: [true, "Please select your return date"],
    },

    departure: {
      type: String[departureSchema],
      required: [true, "Please select your departure location"],
    },

    destination: {
      type: String[destinationSchema],
      required: [true, "Please select your departure location"],
    },

    passportNumber: {
      type: String,
      required: [true, "Please enter your passport number"],
      // alphanumeric and special characters key in
      match: [/^[A-Za-z0-9_@./#&+-]*$/],
    },
  },
  {
    timestamps: true,
  }
);

const Passenger = mongoose.model("Passenger", passengerSchema);
module.exports = Passenger;
