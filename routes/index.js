const express = require('express');
const router = express.Router();

//controladores
const controller = require('../controllers/index.Controller');

//middleware
const registerMiddleware = require('../middleware/registerMiddleware');
const tokenMiddleware = require('../middleware/tokenMiddleware');

//rutas
router.post('/register', registerMiddleware, controller.register);
router.post('/login', controller.login);
router.post('/view',tokenMiddleware, controller.view);

module.exports = router;
