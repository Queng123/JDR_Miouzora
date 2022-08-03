const { getMob, createMob, deleteMob } = require('../queries/mobs.queries');


// controller to create one mob
exports.mobCreate = async (req, res, next) => {
  try {
    await createMob(req.body);
  } catch (err) {
    next(err);
  }
}

// controller to delete one mob
exports.mobDelete = async (req, res, next) => {
  try {
    await deleteMob(req.params.mobId);
  } catch (err) {
    next(err);
  }
}