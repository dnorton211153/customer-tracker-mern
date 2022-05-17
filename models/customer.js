const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please enter first name']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please enter last name']
    },
    email: {
        type: String,
        trim: true  
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);