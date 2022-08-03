const router = require('express').Router();
const mobs = require('./mobs.routes');

router.use('/mobs', mobs);

// redirect to default adress to /mobs
router.get('/', (req, res) => {
  res.redirect('/mobs');
});

module.exports = router;