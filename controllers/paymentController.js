const Payment = require('../models/Payment');
const { validationResult } = require('express-validator');


exports.createPayment = async (req, res) => {

    //Check if errors exist
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        //Create new payment
        const payment = new Payment(req.body);
        console.log(req.body);
        //Save creator with jwt
        payment.creator = req.user.id;

        //Save payment
        payment.save();
        res.json(payment);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Obtain payments
exports.obtainPayments = async (req, res) => {

    try {
        const payments = await Payment.find().sort({ created: -1 });
        res.json({ payments });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}