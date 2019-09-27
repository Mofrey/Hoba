var express = require('express');
var router = express.Router();

// Require controller modules.
var postReaction  = require('../../controllers/postReaction/PostReaction');

router.get('/getall', postReaction.findAll);

// POST request for creating postReaction.
router.post('/create', postReaction.create);

// PUT request to update postReaction.
router.put('/:postReactionId', postReaction.update);

// DELETE request to delete postReaction.
router.delete('/:postReactionId', postReaction.delete);

// GET request to get one postReaction.
router.get('/:postReactionId', postReaction.findOne);

module.exports = router;