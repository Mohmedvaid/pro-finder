const express = require('express');
const mongooose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Log HTTP requests
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    res.json({"message": "Welcome to the API"});
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`));