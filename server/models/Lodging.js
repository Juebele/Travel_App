const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const lodgingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    tripId: [
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
});

const Lodging = model('Lodging', lodgingSchema);

module.exports = Lodging;

