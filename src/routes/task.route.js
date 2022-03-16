const express = require('express');
const router = express.Router();
const controllers = require('../controllers/task.controller.js')

router.get('/home', controllers.getHome);
router.get('/profile', controllers.getProfile);
router.get('/contact', controllers.getContact);
router.get('/signin', controllers.getSignin);
router.get('/signup', controllers.getSignup);

module.exports = router;