const mongoose = require('mongoose');
const schema = mongoose.Schema;

//mob schema (test)
const mobSchema = schema({
  type: {type: String, required: true},
  name: {type: String, required: true, unique: true},
  age: {type: Number},
  description: {type: String, multiline: true},
  stats: {
    health: {type: Number, required: true},
    soul: {type: Number, required: true},
    nama: {type: Number, required: true},
    caracteristics: {
      comprehension: {type: Number, required: true},
      fluidityWithEnvironment: {type: Number, required: true},
      discretion: {type: Number, required: true},
      conviction: {type: Number, required: true},
      beauty: {type: Number, required: true},
    },
    resistance: {
      physical: {type: Number, required: true},
      lofi: {type: Number, required: true},
      explosions: {type: Number, required: true},
      hypnosis: {type: Number, required: true},
      AMI: {type: Number, required: true},
      souls: {type: Number, required: true},
      influence: {type: Number, required: true},
      feelings: {type: Number, required: true},
      drowning: {type: Number, required: true},
    },
    strenght: {
      physical: {type: Number, required: true},
      explosif: {type: Number, required: true},
      hypnosis: {type: Number, required: true},
      souls: {type: Number, required: true},
      influence: {type: Number, required: true},
      feelings: {type: Number, required: true},
      drowning: {type: Number, required: true},
      lofif: {type: Number, required: true},
    }
  }
});

const Mob = mongoose.model('mob', mobSchema);

module.exports = Mob;
