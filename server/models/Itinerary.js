const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const itinerarySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    tripId: {
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }

});

const Itinerary = model('Itinerary', itinerarySchema)


tripId: [
    {t}
]
{type: Schema.Types.ObjectId, ref: ''}