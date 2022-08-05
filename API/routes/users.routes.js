const router = require('express').Router();
const { signup,  signin, signout, validation } = require('../controllers/users.controller');

//route to signin with user -> /users/signin
router.post('/signin', signin);

//route to signout with user -> /users/signout
router.get('/signout', signout);

//route to signup with new user -> /users/signup
router.post('/signup', signup);

router.get('/connection');

router.get('/validation/:userId', validation);

module.exports = router;