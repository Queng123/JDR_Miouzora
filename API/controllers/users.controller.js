const { createUser, sendMail, validUser } = require('../queries/users.queries');
const passport = require("passport");

//singup new user
exports.signup = async (req, res, next) => {
  const body = req.body;
  try {
    const user = await createUser(body);
    const message = 'Welcome ' + user.username + ' to the JDR Miouzora website. \n\n\nClick to the link below to be redirect on our website: \n\nhttp://localhost:3000/users/validation/' + user._id;
    await sendMail(user, message);
    res.end(JSON.stringify(user));
  } catch(err) {
    next(err);
  }
}

exports.validation = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    req.user = await validUser(userId);
    res.redirect('/connexion');
  } catch(err) {
    next(err);
  }
}

//signin user that already exist (link to passport.config)
exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (user.valid === false) {
      res.redirect('/users');
      return;
    } else if (err) {
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