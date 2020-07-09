// Controller to handle all login/* routes
/* eslint-disable no-console */

import Users from '../Models/Users.model';
import Institute from '../Models/Institutes.model';

exports.addAdmissionDetails = (request, response) => {
  // Update the user to have details

  const newUserDetails = new Institute({

    email: request.body.puc.email,
    iname: request.body.puc.iname,
    address: request.body.puc.address,
    website: request.body.puc.website,
    pincode: request.body.puc.pincode,

    seats: request.body.mtech.seats,
    age: request.body.mtech.age,
    notification: request.body.mtech.notification,
    application: request.body.mtech.application,
    
  });
  newInstituteDetails.save((err) => {
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
