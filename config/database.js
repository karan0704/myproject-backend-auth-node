/* Database Configuration Module */

const mongoose = require('mongoose');
const {MESSAGES} = require('./constants');

require('dotenv').config();

/* Connect to MongoDB Database */
const connectDB = async () => {
    try {
        // Get database URI from environment variables
        const mongoURI = process.env.MONGODB_URI;

        // Check if URI exists
        if (!mongoURI) {
            throw new Error('MONGODB_URI not found in environment variables');
        }

        const connection = await mongoose.connect(mongoURI);

        console.log('✅ MongoDB Connected Successfully');
        console.log(`📍 Database: ${connection.connection.name}`);

        return connection;

    } catch (error) {
        // Log error and exit
        console.error('❌ Database Connection Failed:', error.message);
        process.exit(1);
    }
};

// Export
module.exports = {connectDB};
