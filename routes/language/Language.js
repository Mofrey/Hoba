var express = require('express');
var router = express.Router();

// Require controller modules.
var language  = require('../../controllers/language/Language');

router.get('/getall', language.findAll);

// POST request for creating language.
router.post('/create', language.create);

// PUT request to update language.
router.put('/:languageId', language.update);

// DELETE request to delete language.
router.delete('/:languageId', language.delete);
// GET request to get one language.
router.get('/:languageId', language.findOne);

module.exports = router;