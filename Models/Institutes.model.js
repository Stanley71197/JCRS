import mongoose from 'mongoose';

const InstituteSchema = new mongoose.Schema({
  iname: String,
  address: String,
  pincode: String,
  webite: String,
  course: String,

  capacity: String,
  qualification: String,
  age: String,
  gender: String,
  date: String,
  notification: String,
  application: String,
});
const Institutes = mongoose.model('Institute', InstituteSchema, 'Institutes');

// Export the model
module.exports = Institutes;
