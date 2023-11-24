const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
    },

    departure: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

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
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    
  },
  {
    timestamps: true,
  }
);

const Passenger = mongoose.model("Passenger", passengerSchema);
module.exports = Passenger;
