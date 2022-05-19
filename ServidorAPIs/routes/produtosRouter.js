const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();

router.post('/', produtoController.create);
router.get('/', produtoController.read);
router.get('/:produtoId', produtoController.readForId);
router.put('/:produtoId', produtoController.update);
router.delete('/:produtoId', produtoController.delete);


module.exports = router;
