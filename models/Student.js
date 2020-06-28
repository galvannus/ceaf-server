const mongoose = require('mongoose');


const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },

});