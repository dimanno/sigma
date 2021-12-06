const {Posts, User} = require('../database');
const {messageResponse, statusCodeResponse} = require('../constants');
const ErrorHandler = require('../errors/errors.handler');

module.exports = {
    checkUserPostsExist: (req, res, next) => {
        try {
            const {user_id} = req.params;
            const userPosts = Posts.find({user_id: user_id});

            if (!userPosts) {
                throw new ErrorHandler(messageResponse.POST_NOT_FOUND, statusCodeResponse.NO_DATA);
            }

            req.post = userPosts;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserPost: async (req, res, next) => {
        try {
            const {user_id:{_id}} = req.user
            console.log(_id);
            const post = await Posts.findOne({_id: req.params});
            const {user_id} = post;
            console.log(user_id._id);

            if (!_id === user_id._id) {
                throw new ErrorHandler(messageResponse.POST_NOT_FOUND, statusCodeResponse.NOT_FOUND);
            }

            next();
        } catch (e) {
            next(e);
        }

    }
};
