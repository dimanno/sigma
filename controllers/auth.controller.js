const {User, AuthData} = require('../database');
const {passwordService} = require('../services');
const {userNormalize} = require('../handlers/user.normalize');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

const {jwtService: {generateTokenPair, verifyToken}} = require('../services')

module.exports = {
    login: async (req, res, next) => {
        try {
            const user = req.body;
            console.log(user)
            const tokenPair = generateTokenPair();
            console.log(tokenPair)
            const userNormalized = userNormalize(user)

            await AuthData.create({
                ...tokenPair,
                user_id: userNormalized._id
            });

            res.json({
                userNormalized,
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
