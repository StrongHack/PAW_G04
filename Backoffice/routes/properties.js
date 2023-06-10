var express = require('express');
var router = express.Router();
var propertyController = require('../controllers/propertyController');
var authController = require('../controllers/authController');

//middleware
router.use(authController.verifyToken);

//get
router.get('/', propertyController.showAll);
router.get('/show/:id', propertyController.show);
router.get('/create', propertyController.formCreate, authController.verifyTokenAdmin);
router.get('/edit/:id', propertyController.formEdit, authController.verifyTokenAdmin);
router.get('/delete/:id', propertyController.delete, authController.verifyTokenAdmin);

//post
router.post('/create', propertyController.create, authController.verifyTokenAdmin);
router.post('/edit/:id', propertyController.edit, authController.verifyTokenAdmin);

module.exports = router;
