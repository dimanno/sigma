const router = require('express').Router();

const {postsController} = require('../controllers');
const {authMiddlewares, universalMiddlewares} = require('../middlewares')
const {ACCESS} = require('../constants/tokens.type.enum');
const {postValidator} = require('../validators');

router.get('/', postsController.getAllPosts);
router.use(authMiddlewares.checkToken(ACCESS));
router.post('/:user_id',
    universalMiddlewares.checkValidDataMiddleware(postValidator.addPost_validator),
    postsController.addPost);
router.get('/:user_id', postsController.getPostsByUser);
router.put('/:user_id', postsController.updatePost);
router.delete('/:user_id', postsController.deletePost);

router.post('/:user_id/posts');
router.put('/:user_id/posts');
router.delete('/:user_id/posts');


module.exports = router;
