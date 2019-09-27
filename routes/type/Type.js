var express = require('express');
var router = express.Router();

// Require controller modules.
var type  = require('../../controllers/type/Type');

router.get('/getall', type.findAll);

// POST request for creating type.
router.post('/create', type.create);

// PUT request to update type.
router.put('/:typeId', type.update);

// DELETE request to delete type.
router.delete('/:typeId', type.delete);
// GET request to get one type.
router.get('/:typeId', type.findOne);

module.exports = router;