const {User} = require('../database');
const {passwordService} = require('../services');
const {userNormalize} = require('../handlers/user.normalize');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    addUser: async (req, res, next) => {
        try {
            const {password} = req.body;
            const hashedPassword = await passwordService.hash(password);

            const newUser = await User.create({...req.body, password: hashedPassword});
            const userNormalise = userNormalize(newUser.toJSON());

            res.status(statusCodeResponse.CREATED).json(userNormalise);
        } catch (e) {
            next(e)
        }
    }
}
