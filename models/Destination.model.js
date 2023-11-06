const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the model to whatever makes sense in this case
const destinationSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    moon: {
      type: Boolean,
    },
    planet: {
      type: String,
    },
    specialFeature: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Destination = model("Destination", destinationSchema);
module.exports = Destination;
