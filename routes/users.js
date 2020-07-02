//Routes for create users
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

//Create users
// api/users
router.post('/',
    auth
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6}),
        /*check('role', 'El usuario necesita un rol').not().isEmpty()
            .withMessage('Rol de usuario no valido').isIn(['user', 'admin', 'accountant']),*/
    ],
    userController.createUser
);
module.exports = router;
/*
check('role').custom(value => {
            if(value !== 'user' || value !== 'admin' || value !== 'accountant'){
                return res.json('Rol no valido');
            }
        })
*/