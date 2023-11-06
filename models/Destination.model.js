const { Schema, model } = require("mongoose");
const accommSchema = require('./Accomm.model');




// TODO: Please make sure you edit the model to whatever makes sense in this case
const destinationSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },

    distance: {
      type: String,
      required: true,
    },

    travelTime: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    attractions: [{
      type: String,
      
    }],


    imageUrl: {
      type: String,
      required: true,
    },

    ticketPrice: {
      type: String,
      required: true,
    },

    specialFeature: {
      type: String,
    },

    accommodation:[accommSchema]


  },
  {
    timestamps: true,
  }
);

const Destination = model("Destination", destinationSchema);
module.exports = Destination;
