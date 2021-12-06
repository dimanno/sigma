const {Posts, User} = require('../database');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    checkUserPostsExist: (req, res, next) => {
        try {
            const {user_id} = req.params;
            const userPosts = Posts.find({user_id: user_id});

            if (!userPosts) {
                throw new ErrorHandler(messageResponse.POST_NOT_FOUND, statusCodeResponse.NO_DATA)
            }

            req.post = userPosts
            next();
        } catch (e) {
            next(e);
        }
    }
};
