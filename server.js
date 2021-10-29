// Require dependencies 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize Express App
const app = express();


// Confifure Settings
require('dotenv').config();
const { DATABASE_URL, PORT=3001 } = process.env;

// Configure connection to MongoDB
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('disconnected', () => console.log('Disconnected to MongoDB'));
db.on('error', (error) => console.log('MongoDB has an error' + error.message));


// Mount Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Mount Routes
app.get('/api', (req,res) => { 
    res.json({message: 'Welcome to the My Store'})
});

// Tell the app to listen
app.listen(PORT, () => console.log(`Express is listening on port:${PORT}`));