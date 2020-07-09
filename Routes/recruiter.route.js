import { Router } from 'express';

const callback = require('../Controllers/recruiter.controller');

const router = Router();
router.post('/verify', callback.verifyCredentials);
module.exports = router;
