const mongoose = require('mongoose');

/**
 * TODO:
 * Create parents model for the realation
 */

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    parents: {
        //
    }

});
module.exports = mongoose.model('Student', StudentSchema);