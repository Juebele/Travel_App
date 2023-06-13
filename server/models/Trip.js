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
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    itinerary: {
        type: Schema.Types.ObjectId,
        ref: 'Itinerary'
    },
    lodgingName: {
        type: String,
        required: true
    },
    lodgingAddress: {
        type: String,
        required: true
    },
    lodgingContact: {
        type: String,
        required: true
    }
})

const Trip = model('Trip', tripSchema);

module.exports = Trip;