var express = require('express');
var router = express.Router();

// Require controller modules.
var wordAssessement  = require('../../controllers/wordAssessement/WordAssessement');

router.get('/getall', wordAssessement.findAll);

// POST request for creating wordAssessement.
router.post('/create', wordAssessement.create);

// PUT request to update wordAssessement.
router.put('/:wordAssessementId',wordAssessement.update);

// DELETE request to delete wordAssessement.
router.delete('/:wordAssessementId', wordAssessement.delete);
// GET request to get one wordAssessement.

router.get('/:wordAssessementId', wordAssessement.findOne);

module.exports = router;