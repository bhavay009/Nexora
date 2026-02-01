const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const contactController = require('../controllers/contact.controller');

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('message', 'Message is required').not().isEmpty(),
    ],
    contactController.submitContact
);

router.get('/', contactController.getSubmissions); // Protect this later with auth

module.exports = router;
