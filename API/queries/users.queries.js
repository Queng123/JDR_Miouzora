const User = require('../database/models/user.model');
const nodemailer = require('nodemailer');


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

//send mail to user
exports.sendMail = (user, body) => {
  const transporter = nodemailer.createTransport({
    host: 'mail56.lwspanel.com',
    port: 465,
    secure: true,
    auth: {
      user: 'no-reply@test-epitech.fr',
      pass: 'zG9-wtmP1HpGZvQ'
    }
  });
  return transporter.sendMail({
    from: '"JDR miouzora"<no-reply@test-epitech.fr>',
    to: user.local.email,
    subject: 'Ne pas répondre',
    text: body,
  });
}

exports.updateUser = (id, valueToUpdate) => {
  return User.findByIdAndUpdate(id, valueToUpdate).exec();
}

//find user by email
exports.findUserByEmail = (email) => {
  return User.findOne({ 'local.email': email }).exec();
}

//find user by id
exports.findUserById = (id) => {
  return User.findById(id).exec();
}