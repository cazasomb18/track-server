const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://admin:admin@cluster0-g3k5s.gcp.mongodb.net/test?retryWrites=true&w=majority';

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