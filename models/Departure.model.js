const { Schema, model } = require("mongoose");
const destinationSchema = require("./Destination.model");

const { Schema, model } = require("mongoose");






const departureSchema = new Schema({
  name: String,
  distance: Number 
});

const destinationSchema = new Schema({
  name: String,
  image: String,
  departures: [departureSchema] 
});





const Destination = model("Destination", destinationSchema);
module.exports = Destination;


const Departure = model("Departure", departureSchema);
module.exports = Departure;
