const mongoose = require('mongoose');

// Connection URI
const mongoURI = 'mongodb://localhost:27017/ilonggogid';

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
