// src/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
// Correct and robust CORS setup
app.use(cors({
    origin: 'http://localhost:3000', // Allow only your React app
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Add if cookies are involved
}));

// Handle preflight requests globally
app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).end();
});


// MongoDB connection
const MONGO_URI = 'mongodb+srv://gethiretech:gethiretech@atlascluster.womcxrm.mongodb.net/gethire';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schema
const WaitlistSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    companyName: String,
    describe: String,
    phone: String,
    email: String,
});

const Waitlist = mongoose.model('Waitlist', WaitlistSchema);

// Routes
app.post('/api/join-waitlist', async (req, res) => {
    try {
        const newRequest = new Waitlist(req.body);
        await newRequest.save();
        res.status(201).json({ message: 'Request submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting request' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});