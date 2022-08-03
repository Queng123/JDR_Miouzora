const mongoose = require('mongoose');
const schema = mongoose.Schema;

//mob schema (test)
const mobSchema = schema({
  type: {type: String, required: true, unique: true},
  default_level: {type: Number, required: true},
});

const Mob = mongoose.model('mob', mobSchema);

module.exports = Mob;