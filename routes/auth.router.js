const router = require('express').Router();

const {authMiddlewares} = require('../middlewares');
const {authController} = require('../controllers');

// router.post('/', authMiddlewares );

module.exports = router;
