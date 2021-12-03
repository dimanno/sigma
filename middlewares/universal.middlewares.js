const ErrorHandler = require('../errors/errors.handler');
const {messageResponse, statusCodeResponse} = require('../constants');

module.exports = {
    checkValidDataMiddleware: (validator) => (req, res, next) => {
        try {
            const {error, value} = validator.validate(req.body)

            if (error) {
                throw new ErrorHandler(messageResponse.WRONG_LOGIN_DATA, statusCodeResponse.NOT_FOUND)
            }

            req.body = value;
            next();
        } catch (e) {
            next(e)
        }
    }
};
