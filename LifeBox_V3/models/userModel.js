const mongoose = require('mongoose');
// Database schema format for MongoDB
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDoctor: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    
},{
    timestamps: true
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;