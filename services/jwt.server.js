const jwt = require('jsonwebtoken');

const {tokenType: {ACCESS, REFRESH}} = require('../constants')
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    generateTokenPair: () => {
        const access_token = jwt.sign({}, 'xxx', {expiresIn: '15m'});
        const refresh_token = jwt.sign({}, 'zzz', {expiresIn: '30d'});

        return {
            access_token,
            refresh_token
        };
    },

    verifyToken: async (token, tokenType = ACCESS) => {
        try {
            let secret = tokenType === ACCESS ? 'xxx' : 'zzz'
            await jwt.verify(token, secret);
        } catch (e) {
            throw new ErrorHandler(messageResponse.INVALID_TOKEN, statusCodeResponse.INVALID_CLIENT)
        }
    }
};
