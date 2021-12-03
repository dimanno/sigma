const router = require('express').Router();

const {tokenTypeEnum: {ACCESS, REFRESH}}= require('../constants');
const {authMiddlewares, usersMiddlewares, universalMiddlewares} = require('../middlewares');
const {authController} = require('../controllers');
const {authValidator:{authValidator}} = require('../validators');

router.post('/',
    universalMiddlewares.checkValidDataMiddleware(authValidator),
    usersMiddlewares.isUserPresent,
    authMiddlewares.checkPasswordMatched,
    authController.login );

router.post('/refresh', authMiddlewares.checkToken(REFRESH), authController.updateRefreshToken);
router.post('/logout', authMiddlewares.checkToken(ACCESS), authController.logout);
router.post('/logout_all', authMiddlewares.checkToken(ACCESS), authController.logoutAll);

module.exports = router;
