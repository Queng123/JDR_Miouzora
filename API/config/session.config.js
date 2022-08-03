const { app } = require('../app');
const session = require('express-session');
var MongoStore = require('connect-mongodb-session')(session);
const mongoose = require('../database');

// session configuration
app.use(session({
  secret: 'ceci n\'est pas un secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24 * 14
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 * 24 * 14,
  }),
}));