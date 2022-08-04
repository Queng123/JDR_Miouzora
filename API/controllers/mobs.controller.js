const { getMob, getMobs, createMob, deleteMob } = require('../queries/mobs.queries');

// controller to create one mob
exports.mobCreate = async (req, res, next) => {
try {
    const mob = await createMob(req.body);
    res.redirect('/mobs');
} catch (err) {
    next(err);
  }
}

// controller to take mob List
exports.mobList = async (req, res, next) => {
  try {
    const mob = await getMobs();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mob));
  } catch (err) {
    next(err);
  }
}

// controller to take mob Type
exports.mobType = async (req, res, next) => {
  try {
    const mob = await getMob(req.params.mobId);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mob));
  } catch (err) {
    next(err);
  }
}


// controller to delete one mob
exports.mobDelete = async (req, res, next) => {
  try {
    await deleteMob(req.params.mobId);
    res.redirect('/mobs');
  } catch (err) {
    next(err);
  }
}