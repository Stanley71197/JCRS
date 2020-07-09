import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  password: String,
  firstName: String,
  lastName: String,
  Mobile: String,
  email: String,
  type : String,
  isVerified: { type: Boolean, default: false },
  hasDetails: { type: Boolean, default: false },
});
const Users = mongoose.model('User', UsersSchema, 'Users');

// Export the model
module.exports = Users;
