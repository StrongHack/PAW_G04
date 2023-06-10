var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var ticketController = require('../controllers/ticketController');
var authController = require('../controllers/authController');

//middleware
//router.use(authController.verifyToken);

//get
router.get('/', userController.showAll);
router.get('/show/:id', userController.show);
router.get('/create', userController.formCreate, authController.verifyTokenAdmin);
router.get('/edit/:id', userController.formEdit, authController.verifyTokenAdmin);
router.get('/delete/:id', userController.delete, authController.verifyTokenAdmin);
router.get('/tickets/:id', ticketController.show);


//post

router.post('/loginCliente', userController.loginCliente);
router.post('/registerCliente', userController.registerCliente);
router.post('/create', userController.create, authController.verifyTokenAdmin);
router.post('/edit/:id', userController.edit, authController.verifyTokenAdmin);

module.exports = router;