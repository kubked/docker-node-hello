
// Require Main Modules 
const fs = require('fs'); 
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const compression = require('compression');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();


// GENERAL MIDDLEWARES =============================================
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', (req, res) => {
	res.send('Hello!');
});

module.exports = app;
