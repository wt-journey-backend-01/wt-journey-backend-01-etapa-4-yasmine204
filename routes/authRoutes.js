const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/register', controller.registro);

router.post('/login', controller.login);

router.post('/logout', controller.logout);

module.exports = router;
