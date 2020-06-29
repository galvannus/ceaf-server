const Stutudent = require('../models/Student');
const Payment = require('../models/Payment');
const { validationResult } = require('express-validator');


//Create new student
exports.createStudent = async (req, res) => {

    //Check if errors exist
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() })
    }
}