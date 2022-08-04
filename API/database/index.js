const mongoose = require('mongoose');

const mongodbAdress = (process.env.NODE_ENV === 'development') ? 'mongodb://queng:azerty@localhost/twitter' : 'mongodb+srv://queng:azerty@jdrmiouzora.7wn6y.mongodb.net/?retryWrites=true&w=majority';

exports.clientPromise = mongoose.connect(mongodbAdress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
  console.log('connection with data base: DONE');
}).catch( err => {
  console.log(err);
})