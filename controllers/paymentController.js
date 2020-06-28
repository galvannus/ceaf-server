const Payment = require('../models/Payment');


exports.createPayment = async (req, res) => {

    try {

        //Create new payment
        const payment = new Payment(req.body);

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