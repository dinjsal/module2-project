const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const departureSchema = require("./Departure.model");
const destinationSchema = require("./Destination.model");

const passengerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },


    lastName: {
      type: String,
      required: true,
    },

    birthDate: {
      type: Date,
      required: true,
    },

    address: {
      type: String,
      required: true,
      // alphanumeric and special characters key in
      match: [/^[A-Za-z0-9_@./#&+-]*$/],
    },

    departure: {
      type: String,
      required: true,
    },

    destination: [{
        type: Schema.Types.ObjectId,
        ref: 'destinationSchema'
      }],


    departureDate: {
      type: Date,
      required: true,
    },

    returnDate: {
      type: Date,
      required: true,
    },

    passportNumber: {
      type: String,
      required: true,
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
