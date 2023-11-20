const { Schema, model } = require("mongoose");
const destinationSchema = require("./Destination.model");

const departureSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    destination: [{
      type: Schema.Types.ObjectId,
      ref: 'Destination'}],

    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Departure = model("Departure", departureSchema);
module.exports = Departure;
