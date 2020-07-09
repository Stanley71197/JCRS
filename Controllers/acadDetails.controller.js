// Controller to handle all login/* routes
/* eslint-disable no-console */
import Seeker from '../Models/Seeker.model';
import Users from '../Models/Users.model';

exports.addAcadDetails = (request, response) => {
  // Update the user to have details

  const newUserDetails = new Seeker({
    email: request.body.puc.email,
    gender: request.body.puc.gender,
    income: request.body.puc.income,
    mother: request.body.puc.mother,
    father: request.body.puc.father,
    moccupation: request.body.puc.moccupation,
    foccupation: request.body.puc.foccupation,

    year10: request.body.university.year10,
    baord10: request.body.university.baord10,
    percentage10: request.body.university.percentage10,
    maths: request.body.university.maths,
    physics: request.body.university.physics,
    biology: request.body.university.biology,
    social: request.body.university.social,

    year12: request.body.university.year12,
    baord12: request.body.university.baord12,
    percentage12: request.body.university.percentage12,
    sub1: request.body.university.sub1,
    sub2: request.body.university.sub2,
    sub3: request.body.university.sub3,

    myear: request.body.university.myear,
    mpercentage: request.body.university.mpercentage,

    byear: request.body.university.byear,
    bpercentage: request.body.university.bpercentage,
    
    
  });
  newUserDetails.save((err) => {
    if (err) return console.error(err);
    Users.findOne({ user: request.body.puc.email }).exec((err1, doc) => {
      if (err1) console.log(err1.message);
      if (doc) {
        console.log(`here1 ${doc}`);
        // eslint-disable-next-line no-param-reassign
        doc.hasDetails = true;
        doc.save((err2) => {
          if (err2) console.log(err2.message);
        });
      }
    });
    return response.send('Saved');
  });
};
