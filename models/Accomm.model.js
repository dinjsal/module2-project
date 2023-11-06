const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accommSchema = new Schema({
    name:{
        type: String,
        required: true
    },


    description:{
        type: String,
        required: true
    },

    ammenities:[{
        type: String,
    }],

    imageUrl:{
        type: String,
    },


});

//this schema is used as a subdocument in the destination model
Module.exports = accommSchema