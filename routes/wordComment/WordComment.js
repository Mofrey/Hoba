var express = require('express');
var router = express.Router();

// Require controller modules.
var wordComment  = require('../../controllers/wordComment/WordComment');

router.get('/getall', wordComment.findAll);

// POST request for creating wordComment.
router.post('/create', wordComment.create);

// PUT request to update wordComment.
router.put('/:wordCommentId', wordComment.update);

// DELETE request to delete wordComment.
router.delete('/:wordCommentId', wordComment.delete);
// GET request to get one wordComment.
router.get('/:wordCommentId', wordComment.findOne);

module.exports = router;