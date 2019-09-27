var express = require('express');
var router = express.Router();

// Require controller modules.
var wordDev  = require('../../controllers/wordDev/WordDev');

router.get('/getall', wordDev.findAll);

// POST request for creating wordDev.
router.post('/create', wordDev.create);

// PUT request to update wordDev.
router.put('/:wordDevId', wordDev.update);

// DELETE request to delete wordDev.
router.delete('/:wordDevId', wordDev.delete);
// GET request to get one wordDev.
router.get('/:wordDevId', wordDev.findOne);

module.exports = router;