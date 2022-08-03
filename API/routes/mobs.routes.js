const router = require('express').Router();
const { mobCreate, mobDelete} = require('../controllers/mobs.controller');
const Mob = require('../database/models/mob.model');


//create one mob route -> /mobs/
router.post('/', mobCreate);

//delete one mob route -> /mobs/:mobId
router.delete('/:mobId', mobDelete);


module.exports = router;