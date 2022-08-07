const Mob = require('../database/models/mob.model');
const schema = require('../database/models/mob.model').mobSchema;

//create one mob
exports.createMob = (mob) => {
  const newMob = new Mob(mob);
  return newMob.save();
}


// delete one mob
exports.deleteMob = (mobId) => {
  return Mob.findByIdAndDelete(mobId).exec();
}


//get one mob
exports.getMob = (mobId) => {
  return Mob.findOne({ _id: mobId }).exec();
}

//get mob schema
exports.getSchemaMob = () => {
  return Mob.schema.obj;
}

//get all mobs
exports.getMobs = () => {
  return Mob.find({}).exec();
}
