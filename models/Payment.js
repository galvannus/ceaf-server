const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    type: [],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Payment', PaymentSchema);