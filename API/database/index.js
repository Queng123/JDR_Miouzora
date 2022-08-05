const mongoose = require('mongoose');

const mongodbAdress = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost:27017/?authMechanism=DEFAULT&authSource=jdr' : process.env.DB_ADRESS;

exports.clientPromise = mongoose.connect(mongodbAdress, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection with data base: DONE');
}).catch(err => {
    console.log(err);
})