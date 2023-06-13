const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    trips: [{
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }]
});

const User = model("User", userSchema);
module.exports = User;