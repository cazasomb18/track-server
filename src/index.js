require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true
});

mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB instance');
});

mongoose.connection.on('error', (err) => {
	console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
	res.send('HI THERE YOU STUPID FUCKING IDIOT!');
});

app.listen(3000, () => {
	console.log("BOOM!!! Listening on port 3000");
});

/*NOTE:  IF YOU CHANGE YOUR WIFI NETWORK mongoDB won't work
	Go to mongoDB account online
		Network Access
			Add IP Address*/