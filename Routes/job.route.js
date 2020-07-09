import { Router } from 'express';

const callback = require('../Controllers/jobDetails.controller');

const router = Router();
router.post('/add', callback.addJobDetails);
module.exports = router;
