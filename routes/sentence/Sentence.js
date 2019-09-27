var express = require('express');
var router = express.Router();

// Require controller modules.
var sentence  = require('../../controllers/sentence/Sentence');

router.get('/getall', sentence.findAll);

// POST request for creating sentence.
router.post('/create', sentence.create);

// PUT request to update sentence.
router.put('/:sentenceId', sentence.update);

// DELETE request to delete sentence.
router.delete('/:sentenceId', sentence.delete);
// GET request to get one sentence.
router.get('/:sentenceId', sentence.findOne);

module.exports = router;