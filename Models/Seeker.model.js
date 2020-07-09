import mongoose from 'mongoose';

const SeekerSchema = new mongoose.Schema({
  email: String,
  father: String,
  mother: String,
  foccupation: String,
  moccupation: String,

year10: String,
baord10: String,
percentage10: String,
maths: String,
physics: String,
biology: String,
social: String,

year12: String,
baord12: String,
percentage12: String,
sub1: String,
sub2: String,
sub3: String,

byear: String,
bpercentage: String,

myear: String,
mpercentage: String,
});
const Seekers = mongoose.model('Seeker', SeekerSchema, 'Seekers');

// Export the model
module.exports = Seekers;
