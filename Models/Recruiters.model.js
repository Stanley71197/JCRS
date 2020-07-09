import mongoose from 'mongoose';

const RecruiterSchema = new mongoose.Schema({
  remail: String,
  rname: String,
  raddress: String,
  rpincode: String,
  rwebite: String,

  profession: String,
  rseats: String,
  rqualification: String,
  rage: String,
  rgender: String,
  rdate: String,
  rnotification: String,
  rapplication: String,
  
});
const Recruiters = mongoose.model('Recruiter', RecruiterSchema, 'Recruiters');

// Export the model
module.exports = Recruiters;
