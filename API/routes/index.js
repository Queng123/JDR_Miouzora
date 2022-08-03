const router = require('express').Router();
const mobs = require('./mobs.routes');
const users = require('./users.routes');

//default users route -> /mobs
router.use('/mobs', mobs);

//default users route -> /users
router.use('/users', users);

// redirect to default adress to /mobs
router.get('/', (req, res) => {
  res.redirect('/users');
});

module.exports = router;