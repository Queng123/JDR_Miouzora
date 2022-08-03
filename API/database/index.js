const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://queng:azerty@jdrmiouzora.7wn6y.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
  console.log('connection with data base: DONE');
}).catch( err => {
  console.log(err);
})