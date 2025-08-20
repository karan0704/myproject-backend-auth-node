/* User Model Definition */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { VALIDATION_RULES } = require('../config/constants');

/* User Schema Definition */
const userSchema = new mongoose.Schema({
    // Username validation
    username: {
        type: String,
        required: [true, VALIDATION_RULES.USERNAME.REQUIRED_MESSAGE],
        unique: true,
        trim: true,
        minlength: [
            VALIDATION_RULES.USERNAME.MIN_LENGTH,
            VALIDATION_RULES.USERNAME.MIN_LENGTH_MESSAGE
        ],
        maxlength: [
            VALIDATION_RULES.USERNAME.MAX_LENGTH,
            VALIDATION_RULES.USERNAME.MAX_LENGTH_MESSAGE
        ]
    },

    // Email validation
    email: {
        type: String,
        required: [true, VALIDATION_RULES.EMAIL.REQUIRED_MESSAGE],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            VALIDATION_RULES.EMAIL.PATTERN,
            VALIDATION_RULES.EMAIL.INVALID_MESSAGE
        ]
    },

    // Password
    password: {
        type: String,
        required: [true, VALIDATION_RULES.PASSWORD.REQUIRED_MESSAGE],
        minlength: [
            VALIDATION_RULES.PASSWORD.MIN_LENGTH,
            VALIDATION_RULES.PASSWORD.MIN_LENGTH_MESSAGE
        ]
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});



/* Compare password method for login
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

    Remove password from JSON responses
userSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    delete user.__v;
    return user;
}; */

module.exports = mongoose.model('User', userSchema);