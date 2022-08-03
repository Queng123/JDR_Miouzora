const User = require('../database/models/user.model');


//create one user
exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        password: hashedPassword,
        email: user.email,
      }
    });
    return newUser.save();
  } catch (error) {
    throw(error);
  }
}

//find user by email
exports.findUserByEmail = (email) => {
  return User.findOne({ 'local.email': email }).exec();
}

//find user by id
exports.findUserById = (id) => {
  return User.findById(id).exec();
}