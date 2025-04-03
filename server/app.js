const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const cors=require("cors")
//const dbcon = require('./app/config/dbcon');

// Connect to the database
//dbcon();



// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

const authRoute=require('./src/routes/auth');
app.use(authRoute);



app.listen(4007, () => {
    console.log('Server is running on port 4007');
});




