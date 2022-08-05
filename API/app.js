const express = require('express');
const morgan = require('morgan');
const index = require('./routes');
const dotenv = require('dotenv').config();
const errorHandler = require('errorhandler');


require('./database');

const app = express();
exports.app = app;

//port to listen (default 3000)
const port = process.env.PORT || 3000;


require('./config/session.config');
require('./config/passport.config');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});


// jason parser
app.use(express.json());
// url encoded parser
app.use(express.urlencoded({ extended: true }));
//request logger
app.use(morgan('short'));
app.use(index);



// error handler when development mode -> very useful for debugging
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}


app.listen(port);