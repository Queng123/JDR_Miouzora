const { app } = require('../app');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { findUserByEmail, findUserById } = require('../queries/users.queries');

app.use(passport.initialize());
app.use(passport.session());


//transformer le user en bytes pour qu'il soit sauvegardé dans la session
passport.serializeUser((user, done) => {
  done(null, user._id);
})

//le retransformer en objet a partir des bytes pour qu'il soit utilisé dans le code
passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
})

//strategy pour le login
passport.use('local', new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await findUserByEmail(email);
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        done(null, user);
      } else {
        done(null, false, {message: 'Incorrect password'});
      }
    } else {
      done(null, false, {message: 'Email not found'});
    }
  } catch (error) {
    done(error);
  }
}))