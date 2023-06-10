var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');
var ticketController = require('../controllers/ticketController');
var authController = require('../controllers/authController');
const Event = require('../models/event');

//middleware

//get
router.get('/', eventController.showAll);
router.get('/api', eventController.showAllJSON);
router.get('/show/:id', eventController.show);
router.get('/api/show/:id?', eventController.showJSON);
router.get('/create/:propertyId', eventController.formCreate, authController.verifyTokenAdmin);
router.get('/edit/:id', eventController.formEdit, authController.verifyTokenAdmin);
router.get('/delete/:id', eventController.delete, authController.verifyTokenAdmin);
router.get('/image/:id', (req, res) => {
    const eventId = req.params.id;
  
    Event.findById(eventId, (err, event) => {
      if (err) {
        console.error('Error fetching event:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      if (!event.photos || !event.photos.data || !event.photos.contentType) {
        return res.status(404).json({ message: 'Event image not found' });
      }
  
      res.set('Content-Type', event.photos.contentType);
      res.send(event.photos.data);
    });
  });

//post
router.post('/create/:id', eventController.create, authController.verifyTokenAdmin);
router.post('/edit/:id', eventController.edit, authController.verifyTokenAdmin);
router.post('/buy-ticket', ticketController.create, authController.verifyTokenAdmin);

module.exports = router;