const router = require('express').Router();

const {authMiddlewares} = require('../middlewares');
const {authController} = require('../controllers');

router.post('/', authController.login );

module.exports = router;
