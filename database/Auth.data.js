const {Schema, model} = require('mongoose');

const {models_name} = require('../constants');

const AuthDataSchema = new Schema({
    access_token: {
        type: String,
        required: true,
        trim: true
    },
    refresh_token: {
        type: String,
        required: true,
        trim: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

AuthDataSchema.pre('findOne', function() {
    this.populate('user_id');
});

module.exports = model(models_name.AUTH_DATA, AuthDataSchema);
