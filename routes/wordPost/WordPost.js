var express = require('express');
var router = express.Router();

// Require controller modules.
var wordPost  = require('../../controllers/wordPost/WordPost');

router.get('/getall', wordPost.findAll);

// POST request for creating wordPost.
router.post('/create', wordPost.create);

// PUT request to update wordPost.
router.put('/:wordPostId', wordPost.update);

// DELETE request to delete wordPost.
router.delete('/:wordPostId', wordPost.delete);
// GET request to get one wordDev.
router.get('/:wordPostId', wordPost.findOne);

module.exports = router;