var express = require('express');
var router = express.Router();

// Require controller modules.
var word  = require('../../controllers/word/Word');

router.get('/getall', word.findAll);

// POST request for creating word.
router.post('/create', word.create);

// PUT request to update word.
router.put('/:wordId', word.update);

// DELETE request to delete word.
router.delete('/:wordId', word.delete);
// GET request to get one word.
router.get('/:wordId', word.findOne);

module.exports = router;