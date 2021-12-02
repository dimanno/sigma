const {User} = require('../database');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    checkUserExist: async (req, res, next) => {
        try {
            const user = await User.findOne({email: req.body.email});

            if (user) {
                throw new ErrorHandler(messageResponse.DATA_EXIST, statusCodeResponse.FORBIDDEN);
            }

            next();
        } catch (e) {
            next(e)
        }
    }
};
