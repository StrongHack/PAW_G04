var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');
var ticketController = require('../controllers/ticketController');
var authController = require('../controllers/authController');

//middleware
router.use(authController.verifyToken);

//get
router.get('/', eventController.showAll);
router.get('/show/:id', eventController.show);
router.get('/create/:propertyId', eventController.formCreate, authController.verifyTokenAdmin);
router.get('/edit/:id', eventController.formEdit, authController.verifyTokenAdmin);
router.get('/delete/:id', eventController.delete, authController.verifyTokenAdmin);

//post
router.post('/create/:id', eventController.create, authController.verifyTokenAdmin);
router.post('/edit/:id', eventController.edit, authController.verifyTokenAdmin);
router.post('/buy-ticket', ticketController.create, authController.verifyTokenAdmin);

module.exports = router;