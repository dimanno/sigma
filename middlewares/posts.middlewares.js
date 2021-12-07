const {Posts, User} = require('../database');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    checkUserPost: async (req, res, next) => {
        try {
            const {user_id:{_id}} = req.user
            console.log(_id);
            const post = await Posts.findOne({_id: req.params});
            const {user_id} = post;
            console.log(typeof user_id._id);
            console.log(typeof _id);

            if (_id.toString() !== user_id._id.toString()) {
                throw new ErrorHandler(messageResponse.ACCESS_DENIED, statusCodeResponse.CONFLICT);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
