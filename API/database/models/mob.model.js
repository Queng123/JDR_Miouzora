const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mobSchema = schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  default_level: {type: Number, required: true},
});

const Mob = mongoose.model('mob', mobSchema);

module.exports = Mob;