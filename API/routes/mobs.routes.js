const router = require('express').Router();
const { mobCreate, mobDelete, mobList, mobType} = require('../controllers/mobs.controller');
const Mob = require('../database/models/mob.model');


//create one mob route -> /mobs/create
router.post('/create', mobCreate);

//delete one mob route -> /mobs/:mobId
router.delete('/:mobId', mobDelete);

//get list of mobs route -> /mobs
router.get('/', mobList);


//get a type of mobs route -> /mobs/:mobId
router.get('/:mobId', mobType);


module.exports = router;