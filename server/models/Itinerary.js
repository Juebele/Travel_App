const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const itinerarySchema = new Schema({
    date: {
        type: String,
    },
    name: {
        type: String,
    },
    time: {
        type: Number,
    },
    description: {
        type: String
    }
});

const Itinerary = model('Itinerary', itinerarySchema)