const {Schema, model} = require('mongoose');

const {models_name} = require('../constants')
const {passwordService} = require('../services');

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
        trim: true,
        select: false
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

module.exports = userSchema.statics = {
    async createUserWithHashPassword(userObject) {
        const hashedPassword = await passwordService.hash(userObject.password);

        return this.create({
            ...userObject,
            password: hashedPassword
        });
    },

    updateData(userId, userDataObject) {
        return this.findByIdAndUpdate(
            userId,
            userDataObject,
            {new: true, runValidators: true}
        ).lean();
    },
}

module.exports = model(models_name.USER, userSchema);
