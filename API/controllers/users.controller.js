const { createUser, sendMail } = require('../queries/users.queries');
const passport = require("passport");

//singup new user
exports.signup = async (req, res, next) => {
  const body = req.body;
  try {
    const user = await createUser(body);
    await sendMail(user);
    res.end(JSON.stringify(user));
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
        res.redirect('/mobs');
      }
    });
  })(req, res, next);
}

//signout user
exports.signout = (req, res, next) => {
  req.logout((err) => {
    next(err);
  });
  res.redirect('/mobs');
}