const router = require('express').Router();

const {usersMiddlewares, authMiddlewares, universalMiddlewares} = require('../middlewares');
const {usersController, postsController} = require('../controllers');
const {tokenTypeEnum: {ACCESS}}= require('../constants');
const {userValidator:{addUser_validator, updateUserValidator}, postValidator} = require('../validators')

router.get('/:user_id/posts', postsController.getPostsByUser);

router.use(authMiddlewares.checkToken(ACCESS))

router.post('/',
    universalMiddlewares.checkValidDataMiddleware(addUser_validator),
    usersMiddlewares.checkEmailExist,
    usersController.addUser);
router.get('/', usersController.getUsers);

router.get('/:user_id', usersMiddlewares.checkUserById, usersController.getUserById);
router.put('/:user_id',
    universalMiddlewares.checkValidDataMiddleware(updateUserValidator),
    usersController.updateUser);
router.delete('/:user_id', usersController.deleteUser);

module.exports = router;
