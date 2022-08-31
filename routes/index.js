const express = require('express');
const router = express.Router();

//controladores
const controller = require('../controllers/index.Controller');

//middleware
const tokenMiddleware = require('../middleware/tokenMiddleware');

//rutas
router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/view',tokenMiddleware, controller.view);

module.exports = router;
