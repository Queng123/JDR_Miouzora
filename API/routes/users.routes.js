const router = require('express').Router();
const { signup,  signin, signout } = require('../controllers/users.controller');

//route to signin with user -> /user/signin
router.post('/signin', signin);

//route to signout with user -> /user/signout
router.get('/signout', signout);

//route to signup with new user -> /user/signup
router.post('/signup', signup);

module.exports = router;