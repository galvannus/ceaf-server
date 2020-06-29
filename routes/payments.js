const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


//Create payments
// api/payments
router.post('/',
    auth,
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('type', 'La razon es obligatoria').not().isEmpty()
    ],
    paymentController.createPayment
);

router.get('/',
    auth,
    paymentController.obtainPayments
);

module.exports = router;