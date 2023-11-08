const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FleetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    vehicleType: {
        type: String,
        required: true
    },

    capacity:{
        type: String,
        required: true
    },

    engine: {
        type: String,
        required: true
    },

    missionProfile: {
        type: String,
        required: true
    }


});


const Fleet = mongoose.model('Fleet', FleetSchema);
module.exports = Fleet;


