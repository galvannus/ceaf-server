const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Payment', PaymentSchema);