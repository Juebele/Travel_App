const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const tripSchema = new Schema({
    tripName:{
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true

    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    lodging: {
        type: Schema.Types.ObjectId,
        ref: 'Lodging'
    },
    itinerary: {
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    }


})

const Trip = model('Trip', tripSchema);

module.exports = Trip;