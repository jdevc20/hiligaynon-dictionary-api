const mongoose = require('mongoose');

// Connection URI
const mongoURI = 'mongodb+srv://johndavecamarin20:Bacolod123!@cluster0.gqouffi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
