const usuarioController = require('../controllers/usuarioController');
const express = require('express');
const router = express.Router();

router.post('/', usuarioController.create);
router.get('/', usuarioController.read);
router.get('/:usuarioId', usuarioController.readForId);
router.put('/:usuarioId', usuarioController.update);
router.delete('/:usuarioId', usuarioController.delete);

module.exports = router;