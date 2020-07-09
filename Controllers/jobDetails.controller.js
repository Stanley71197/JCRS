// Controller to handle all login/* routes
/* eslint-disable no-console */

import Users from '../Models/Users.model';
import Recruiter from '../Models/Recruiters.model';

exports.addJobDetails = (request, response) => {
  // Update the user to have details

  const newUserDetails = new Recruiter({

    remail: request.body.puc.remail,
    rname: request.body.puc.rname,
    raddress: request.body.puc.raddress,
    rwebsite: request.body.puc.rwebsite,
    rpincode: request.body.puc.rpincode,

    rseats: request.body.mtech.rseats,
    rage: request.body.mtech.rage,
    rnotification: request.body.mtech.rnotification,
    rapplication: request.body.mtech.rapplication,
    
  });
  newUserDetails.save((err) => {
    if (err) return console.error(err);
    Users.findOne({ user: request.body.puc.remail }).exec((err1, doc) => {
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
