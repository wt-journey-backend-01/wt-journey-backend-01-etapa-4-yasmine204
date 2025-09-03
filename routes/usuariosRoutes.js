const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, controller.getUsuario);

router.delete('/:id', controller.deleteUsuario);

module.exports = router;
