const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const donations = require('./routes/donations');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/donations', donations);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodwaste', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
