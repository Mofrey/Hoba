var express = require('express');
var router = express.Router();

// Require controller modules.
var commentReaction  = require('../../controllers/commentReaction/CommentReaction');

router.get('/getall', commentReaction.findAll);

// POST request for creating commentReaction.
router.post('/create', commentReaction.create);

// PUT request to update commentReaction.
router.put('/:commentReactionId', commentReaction.update);

// DELETE request to delete commentReaction.
router.delete('/:commentReactionId', commentReaction.delete);

// GET request to get one commentReaction.
router.get('/:commentReactionId', commentReaction.findOne);

module.exports = router;