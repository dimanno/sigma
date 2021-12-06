const router = require('express').Router();

const {postsController} = require('../controllers');
const {authMiddlewares, universalMiddlewares, postMiddlewares} = require('../middlewares')
const {ACCESS} = require('../constants/tokens.type.enum');
const {postValidator} = require('../validators');

router.get('/', postsController.getAllPosts);
router.get('/:user_id', postsController.getPostsByUser);

router.use(authMiddlewares.checkToken(ACCESS));
router.post('/create',
    universalMiddlewares.checkValidDataMiddleware(postValidator.addPost_validator),
    postsController.addPost);
router.put('/update/:_id', postMiddlewares.checkUserPost, postsController.updatePost);
router.delete('/delete/:_id', postsController.deletePost);

module.exports = router;
