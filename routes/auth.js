//Routes for authenticate users
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

//Authenticate users
// api/auth
router.post('/',
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    authController.authenticateUser
);

router.get('',
    auth,
    authController.authenticatedUser
)
module.exports = router;