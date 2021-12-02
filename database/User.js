const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number
    },
}, {timestamps:true});

module.exports = model('user', userSchema);
