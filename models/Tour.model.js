const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the model to whatever makes sense in this case
const tourSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    difficulty: {
      type: String,
    },
    activities: {
      type: String,
    },
    numberPeople: {
      type: Number,
    },
    equipmentNeeded: {
        type: String,
    },
    suggestedAttire: {
    type: String,
    },
    recommendedTo: {
    type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = model("Tour", tourSchema);
module.exports = Tour;
