const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requireL: [true, 'Please add a name']
    },
    email: {
        type: String,
        requireL: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        requireL: [true, 'Please add a password']
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);