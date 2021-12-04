const {User, AuthData, } = require('../database');
const {passwordService} = require('../services');
const {userNormalize:{userNormalize}} = require('../handlers');
const {statusCodeResponse} = require('../constants');

module.exports = {
    addUser: async (req, res, next) => {
        try {
            const {password} = req.body;
            const hashedPassword = await passwordService.hash(password);

            const newUser = await User.create({...req.body, password: hashedPassword});
            const userNormalise = userNormalize(newUser.toJSON());

            res.status(statusCodeResponse.CREATED).json(userNormalise);
        } catch (e) {
            next(e);
        }
    },

    getUsers: async (req, res, next) => {
        try {
            const users = await User.find({}).lean();
            const normUsers = users.map(user => userNormalize(user));

            res.json(normUsers);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const user = userNormalize(req.body);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;
            const user = req.body;
            const userUpdated = await User.updateData(user_id,
                user, {new: true});

            res.json(userUpdated);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;

            await User.deleteOne({user_id});
            await AuthData.deleteOne({...user_id});

            res.sendStatus(statusCodeResponse.NO_DATA);
        } catch (e) {
            next(e);
        }
    }
};
