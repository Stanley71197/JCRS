// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
import Tokens from '../Models/Tokens.model';

exports.confirm = (request, response) => {
  console.log(request.params.token);console.log("@@@@");
  Tokens.findOne({ token: request.params.token }).exec((err, token) => {
    console.log(token);
    if (err) console.log(err.message);
    if (token) {
      // eslint-disable-next-line no-underscore-dangle
      Users.findById(token.userId).exec((errUser, email) => {

        console.log(email);
console.log("####");
        if (errUser) console.log('An error cooured while verifying');
        if (email) {
          // eslint-disable-next-line no-param-reassign
          user.isVerified = true;
          // eslint-disable-next-line consistent-return
          user.save((err1) => {
            if (err1) {
              return response.status(500).send({ msg: err.message });
            }
            response.redirect('http://localhost:4200/login');
            // response.status(200).send('The account has been verified. Please log in.');
          });
        }
      });
    }
  });
};
// gnbmjdmlsstwnotf;