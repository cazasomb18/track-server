const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
	const { email, password } = req.body;

	const user = new User({ email, password });
	await user.save();

	res.send('You made a POST request');

	// console.log(`\n this is req.body: , ${email, password}`);

});

module.exports = router;