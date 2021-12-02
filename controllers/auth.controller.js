const {User, AuthData} = require('../database');
const {passwordService} = require('../services');
const {userNormalize} = require('../handlers/user.normalize');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');
const {serve} = require("swagger-ui-express");
const {jwtService: {generateTokenPair, verifyToken}} = require('../services')

module.exports = {
    login: (req, res, next) => {
        try {
            const {user} = req;
            const tokenPair = generateTokenPair();

            // await AuthData.create({
            //     ...tokenPair,
            //     user_id: user._id
            // });

            res.json({
                user,
                ...tokenPair
            });
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
