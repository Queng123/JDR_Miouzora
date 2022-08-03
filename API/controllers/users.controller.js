const { createUser } = require('../queries/users.queries');
const passport = require("passport");

//singup new user
exports.signup = async (req, res, next) => {
  const body = req.body;
  try {
    const user = await createUser(body);
    res.redirect('/');
  } catch(err) {
    next(err);
  }
}

//signin user that already exist (link to passport.config)
exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      console.log({ errors: [info.message] });
    }
    req.login(user, (err) => {
      if (err) {
        next(err);
      } else {
        res.redirect('/');
      }
    });
  })(req, res, next);
}

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/user/signin');
}