var express = require('express');
var router = express.Router();

// Require controller modules.
var dictionary  = require('../../controllers/dictionary/Dictionary');

router.get('/getall', dictionary.findAll);

// POST request for creating dictionary.
router.post('/create', dictionary.create);

// PUT request to update dictionary.
router.put('/:dictionaryId', dictionary.update);

// DELETE request to delete dictionary.
router.delete('/:dictionaryId', dictionary.delete);
// GET request to get one dictionary.
router.get('/:dictionaryId', dictionary.findOne);

module.exports = router;