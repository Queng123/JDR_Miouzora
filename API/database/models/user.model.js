const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//user schema -> local prepared for login
const userSchema = schema({
  username: { type: String, required: true },
  local: {
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
});

//hash password before saving
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 10);
}

//compare password with hashed password
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;