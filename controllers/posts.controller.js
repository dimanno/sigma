const {Posts, User, AuthData} = require('../database');
const {statusCodeResponse} = require('../constants');
const {postValidator} = require('../validators');

module.exports = {
    addPost: async (req, res, next) => {
        try {
            const {user_id:{_id}} = req.user
            console.log(_id)
            const post = await Posts.create({...req.body, user_id: _id});

            res.status(statusCodeResponse.CREATED).json(post);
        } catch (e) {
            next(e);
        }
    },

    getAllPosts: async (req, res, next) => {
        try {
            const posts = await Posts.find({}).lean();

            res.json(posts)
        } catch (e) {
            next(e);
        }
    },

    getPostsByUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;
            const userPosts = await Posts.find({user_id}).lean();

            res.json(userPosts)
        } catch (e) {
            next(e);
        }
    },

    updatePost: async (req, res, next) => {
        try {
            // const {user_id:{_id}} = req.user

            const post_id = req.params
            const post = req.body;

            const postUpdated = await Posts.updateData(post_id,
                post, {new: true});

            res.json(postUpdated);
        } catch (e) {
            next(e);
        }
    },

    deletePost:async (req, res, next) => {
        try {

            const post_id = req.params
            await Posts.deleteOne({post_id});

            res.sendStatus(statusCodeResponse.NO_DATA);
        } catch (e) {
            next(e);
        }
    }
};
