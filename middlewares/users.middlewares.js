const {User} = require('../database');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    checkUserExist: async (req, res, next) => {
        try {
            const user = await User.findOne({email: req.body.email});
            console.log(user)
            if (user) {
                throw new ErrorHandler(messageResponse.DATA_EXIST, statusCodeResponse.FORBIDDEN);
            }

            next();
        } catch (e) {
            next(e)
        }
    },

    isUserPresent: async (req, res, next) => {
        try {

            const user = await User
                .findOne({email: req.body.email})
                .select('+password')
                .lean();
            console.log(user)
            if (!user) {
                throw new ErrorHandler(messageResponse.USER_NOT_FOUND, statusCodeResponse.NOT_FOUND);
            }

            req.user = user;
            next();
        } catch (e) {
            next(e)
        }
    }
};
