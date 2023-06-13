const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const lodgingSchema = new Schema({
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
    },
    tripId: {
        type: Schema.Types.ObjectId, 
        ref: 'Trip'
    }
});

const Lodging = model('Lodging', lodgingSchema);

module.exports = Lodging;

