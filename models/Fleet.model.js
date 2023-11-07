const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fleetSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },


    capacity: {
        type: Number,
        required: true
    },  


    engine: {
        type: String,
        required: true
    },

    missionProfile: {
        type: String,
        required: true
    },

});

const Fleet = mongoose.model('Fleet', fleetSchema);
module.exports = Fleet;