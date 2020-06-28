const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');

/*
TODO:
Add validations for create payments
*/

//Create payments
// api/payments
router.post('/',
    auth,
    paymentController.createPayment
);

router.get('/',
    auth,
    paymentController.obtainPayments
);

module.exports = router;