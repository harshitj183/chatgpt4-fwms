const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// POST request to create a new donation
router.post('/', async (req, res) => {
    const { donor, food, quantity, edibility } = req.body;
    try {
        const newDonation = new Donation({ donor, food, quantity, edibility });
        await newDonation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
