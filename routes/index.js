var express = require('express');
var router = express.Router();
var models = require('../models');
var registerController = require('../controller/registerController')
var loginController = require('../controller/loginController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/getuser', function(req, res, next) {
  models.user.findAll().then(users => {
  res.json(users);
});
});

/* POST register page. */
router.post('/register', registerController.register);
module.exports = router;

/* POST login page. */
router.post('/login', loginController.login);
module.exports = router;
