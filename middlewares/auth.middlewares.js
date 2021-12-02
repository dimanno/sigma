const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');
const {authValidator: {authValidator}} = require('../validators');
const {passwordService: {compare}} = require('../services')

module.exports = {
    checkAuthDataValid: (req, res, next) => {
        try {
            const {error, value} = authValidator.validate(req.body)

            if (error) {
                throw new ErrorHandler(messageResponse.WRONG_LOGIN_DATA, statusCodeResponse.NOT_FOUND)
            }

            req.body = value;
            next();
        } catch (e) {
            next(e)
        }
    },

    checkPasswordMatched: async (req, res, next) => {
        try {
            const {password} = req.body;
            const {password: hashPassword} = req.user;
            await compare(password, hashPassword);

            next();
        } catch (e) {
            next(e);
        }
    }
};
