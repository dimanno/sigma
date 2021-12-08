const {AuthData} = require('../database');
const {jwtService: {generateTokenPair}} = require('../services');
const {userNormalize} = require('../handlers/user.normalize');
const {statusCodeResponse, tokenTypeEnum: {REFRESH, ACCESS}} = require('../constants');

module.exports = {
    login: async (req, res, next) => {
        try {
            const userNormalized = userNormalize(req.user);
            const tokenPair = generateTokenPair();

            await AuthData.create({
                ...tokenPair,
                user_id: userNormalized._id
            });

            res.json({
                userNormalized,
                ...tokenPair
            });
        } catch (e) {
            next(e)
        }
    },

    updateRefreshToken: async (req, res, next) => {
        try {
            const {token} = req;
            const tokenPair = generateTokenPair();

            const newTokenPair = await AuthData.findOneAndUpdate(
                {[REFRESH]: token},
                {...tokenPair}
            );

            res.json(newTokenPair);
        } catch (e) {
            next(e)
        }
    },

    logout: async (req, res, next) => {
        try {
            const token = req.token;
            await AuthData.deleteOne({[ACCESS]: token});

            res.sendStatus(statusCodeResponse.NO_DATA);
        } catch (e) {
            next(e)
        }
    },

    logoutAll: async (req, res, next) => {
        try {
            const {_id} = req.user;
            await AuthData.deleteMany({user_id: _id});

            res.sendStatus(statusCodeResponse.NO_DATA);
        } catch (e) {
            next(e);
        }
    },
};
