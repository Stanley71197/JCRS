/* eslint-disable no-console */
// Start point of the server
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
// Routes
const loginRouter = require('./Routes/login.route');
const instituteRouter = require('./Routes/institute.route');
const recruiterRouter = require('./Routes/recruiter.route');
const registerRouter = require('./Routes/register.route');
const acadRouter = require('./Routes/acad.route');
const dashboardRouter = require('./Routes/dashboard.route');
const confirmRouter = require('./Routes/confirmation.route');
const jobRouter = require('./Routes/job.route');
const admissionRouter = require('./Routes/admission.route');
const admindashRouter = require('./Routes/admindash.route');
const recommendRouter = require('./Routes/recommend.route');
// Server
const app = express();
const distPath = path.join(__dirname, '/Views');
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connetion to DB up!');
  app.use(cors());
  app.use(express.static(distPath));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);
  app.use('/academic', acadRouter);
  app.use('/dashboard', dashboardRouter);
  app.use('/confirm', confirmRouter);
  app.use('/job', jobRouter);
  app.use('/admission',admissionRouter);
  app.use('/recruiter',recruiterRouter);
  app.use('/institute',instituteRouter);
  app.use('/admindash',admindashRouter);
  app.use('/recommend',recommendRouter);

  app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
  });
});
