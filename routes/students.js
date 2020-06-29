const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


//Create student
//api/students
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('lastName', 'El nombre es obligatorio').not().isEmpty()
    ],
    studentController.createStudent
);

module.exports = router;