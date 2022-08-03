const express = require('express');
const morgan = require('morgan');
const index = require('./routes');

require('./database');

const app = express();

//port to listen (default 3000)
const port = process.env.PORT || 3000;

// jason parser
app.use(express.json());
// url encoded parser
app.use(express.urlencoded({ extended: true }));
//request logger
app.use(morgan('short'));
app.use(index);



app.listen(port);