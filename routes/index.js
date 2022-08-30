const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.Controller');

/* GET home page. */
/* 
  login
  register
  view
*/
router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/view', controller.view);
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/



module.exports = router;
