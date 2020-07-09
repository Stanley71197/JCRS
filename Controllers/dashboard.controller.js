// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
import Student from '../Models/Seeker.model';

exports.getPersonalDetails = (request, response) => {
  
  Users.findOne({ email: request.params.email }).exec((err, doc) => {
    console.log(doc);
    if (err) console.log(err.message);
    if (doc) {
      return response.send(doc);
    }
    return response.send({});
  });
};





