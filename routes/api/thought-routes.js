const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/thoughts').get().post(addThought);

router.route('/thoughts/:thoughtId').get().put().delete(removeThought);

router.route('/thoughts/:thoughtId/reactions').post(addReaction);

router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;