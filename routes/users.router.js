const router = require('express').Router();

const {usersMiddlewares} = require('../middlewares');
const {usersController} = require('../controllers');

router.post('/', usersMiddlewares.checkUserExist, usersController.addUser);

module.exports = router;
