const { Schema, model } = require("mongoose");


// TODO: Please make sure you edit the model to whatever makes sense in this case

const destinationSchema = new Schema ([
  {
    name: 'Mars',
    image: '../images/mars.png',
    departures: [
      { name: 'Texas, USA', distance: 225000000 },
      { name: 'Valencia, Spain', distance: 225000000 },
      { name: 'Mumbai, India', distance: 225000000 },
      { name: 'Manila, Philippines', distance: 225000000 },
      { name: 'Stockholm, Sweden', distance: 225000000 }
    ]
  },

  {
    name: 'Jupiter',
    image: '../images/jupiter.png',
    departures: [
      { name: 'Texas, USA', distance: 365000000 },
      { name: 'Valencia, Spain', distance: 365000000 },
      { name: 'Mumbai, India', distance:  365000000 },
      { name: 'Manila, Philippines', distance:  365000000 },
      { name: 'Stockholm, Sweden', distance:  365000000 }
      
    ]
  },

  {
    name: 'Venus',
    image: '../images/venus.png',
    departures: [
      { name: 'Texas, USA', distance: 61000000 },
      { name: 'Valencia, Spain', distance: 61000000 },
      { name: 'Mumbai, India', distance:  61000000 },
      { name: 'Manila, Philippines', distance:  61000000 },
      { name: 'Stockholm, Sweden', distance:  61000000 }
      
    ]
  },

  {
    name: 'Moon',
    image: '../images/moon.png',
    departures: [
      { name: 'Texas, USA', distance: 384400 },
      { name: 'Valencia, Spain', distance: 384400 },
      { name: 'Mumbai, India', distance:  384400 },
      { name: 'Manila, Philippines', distance:  384400 },
      { name: 'Stockholm, Sweden', distance:  384400 }
      
    ]
  },



  {
    name: 'Lo',
    image: '../images/lo.png',
    departures: [
      { name: 'Texas, USA', distance: 628300000},
      { name: 'Valencia, Spain', distance: 628300000 },
      { name: 'Mumbai, India', distance:  628300000 },
      { name: 'Manila, Philippines', distance:  628300000 },
      { name: 'Stockholm, Sweden', distance:  628300000 }
      
    ]
  },


]);





const Destination = model("Destination", destinationSchema);
module.exports = Destination;



// save each destination to the database
destinationSchema.forEach(async (destinationSchema) => {
  const destination = new Destination(destinationSchema );
  await destination.save();
});