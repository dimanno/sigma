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
    },

    getUsers: (req, res, next) => {
        try {
            const users = User.find({}).lean();
            const normUsers = users.map(user => userNormalize(user));

            res.json(normUsers);
        } catch (e) {
            next(e)
        }
    },

    getUserById: (req, res, next) => {
        try {

        } catch (e) {
            next(e)
        }
    },

    updateUser: (req, res, next) => {
        try {

        } catch (e) {
            next(e)
        }
    },

    deleteUser: (req, res, next) => {
        try {

        } catch (e) {
            next(e)
        }
    }
}
