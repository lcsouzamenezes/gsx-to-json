const express = require('express');
const path = require('path');
const parser = require('body-parser');
const api = require('./api');

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/api', api);

app.use((error, req, res, next) => {
	console.error(error.stack);
	res.status(400).send(error.message);
});

app.listen(80, () => {
	console.log('API listening on port 80');
});
