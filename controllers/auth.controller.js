const {User, AuthData} = require('../database');
const {passwordService} = require('../services');
const {userNormalize} = require('../handlers/user.normalize');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    login: async (req, res, next) => {
        try {

        } catch (e) {
            next(e)
        }
    },

    logout: async (req, res, next) => {
        try {

        } catch (e) {
            next(e)
        }
    }
};
