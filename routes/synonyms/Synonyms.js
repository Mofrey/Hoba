var express = require('express');
var router = express.Router();

// Require controller modules.
var synonyms  = require('../../controllers/synonyms/Synonyms');

router.get('/getall', synonyms.findAll);

// POST request for creating synonyms.
router.post('/create', synonyms.create);

// PUT request to update synonyms.
router.put('/:synonymsId', synonyms.update);

// DELETE request to delete synonyms.
router.delete('/:synonymsId', synonyms.delete);
// GET request to get one synonyms.
router.get('/:synonymsId', synonyms.findOne);

module.exports = router;