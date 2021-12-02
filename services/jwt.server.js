const jwt = require('jsonwebtoken');

const {tokenType: {ACCESS, REFRESH}} = require('../constants')
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = require('../configs/config')

module.exports = {
    generateTokenPair: () => {
        const access_token = jwt.sign({}, JWT_ACCESS_SECRET, {expiresIn: '15m'});
        const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: '30d'});

        return {
            access_token,
            refresh_token
        };
    },

    verifyToken: async (token, tokenType = ACCESS) => {
        try {
            let secret = tokenType === ACCESS ? JWT_ACCESS_SECRET : JWT_REFRESH_SECRET
            await jwt.verify(token, secret);
        } catch (e) {
            throw new ErrorHandler(messageResponse.INVALID_TOKEN, statusCodeResponse.INVALID_CLIENT)
        }
    }
};
