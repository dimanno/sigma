const router = require('express').Router();

const {authMiddlewares, usersMiddlewares} = require('../middlewares');
const {authController} = require('../controllers');

router.post('/',
    authMiddlewares.checkAuthDataValid,
    usersMiddlewares.isUserPresent,
    authMiddlewares.checkPasswordMatched,
    authController.login );

module.exports = router;
