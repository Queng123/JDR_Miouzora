const mongoose = require('mongoose');

exports.clientPromise = mongoose.connect(process.env.MONGODB_ADRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
  console.log('connection with data base: DONE');
}).catch( err => {
  console.log(err);
})