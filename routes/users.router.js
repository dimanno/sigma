const router = require('express').Router();

const {usersMiddlewares} = require('../middlewares');
const {usersController} = require('../controllers');

router.post('/', usersMiddlewares.checkUserExist, usersController.addUser);
router.get('/', usersController.getUsers);

router.get('/:user_id', usersController.getUserById);
router.put('/:user_id', usersController.updateUser);
router.delete('/:user_id', usersController.deleteUser);

module.exports = router;
