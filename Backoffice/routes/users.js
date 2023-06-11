var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var ticketController = require('../controllers/ticketController');
var authController = require('../controllers/authController');



//middleware
//router.use(authController.verifyToken);

//get
router.get('/', authController.verifyToken, userController.showAll);
router.get('/show/:id', authController.verifyToken, userController.show);
router.get('/create', authController.verifyToken, userController.formCreate, authController.verifyTokenAdmin);
router.get('/edit/:id', authController.verifyToken, userController.formEdit, authController.verifyTokenAdmin);
router.get('/delete/:id', authController.verifyToken, userController.delete, authController.verifyTokenAdmin);
router.get('/tickets/:id', authController.verifyToken, ticketController.show);


router.get('/profile', userController.verifyTokenClient, userController.getAuthenticatedUser, userController.profile);
router.put('/edit-profile',  userController.getAuthenticatedUser, userController.editProfile);
router.put('/change-password/:id',  userController.getAuthenticatedUser, userController.changePassword);


//post

router.post('/loginCliente', userController.loginCliente);
router.post('/registerCliente', userController.registerCliente);
router.post('/create', authController.verifyToken, userController.create, authController.verifyTokenAdmin);
router.post('/edit/:id', authController.verifyToken, userController.edit, authController.verifyTokenAdmin);
router.post('/recuperarSenha', userController.recuperarSenha);

module.exports = router;