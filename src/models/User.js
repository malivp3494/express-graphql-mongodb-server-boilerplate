import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../config/constants';
const UserSchema = Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true },
);

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }
  next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },

  authenticate(password) {
    return compareSync(password, this.password);
  },

  createToken() {
    return jwt.sign({ _id: this._id }, constants.JWT_SECRET);
  },
};

export default mongoose.model('User', UserSchema);
