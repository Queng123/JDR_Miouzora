const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//user schema -> local prepared for login
const userSchema = schema({
  username: { type: String, required: true, unique: true, minlenght: 3 },
  local: {
    password: {
      type: String,
      required: true,
      minlenght: [8, 'Password must be at least 8 characters long']
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
  },
  admin: { type: Boolean, default: false },
  valid: { type: Boolean, default: false }
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