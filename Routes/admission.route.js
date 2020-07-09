import { Router } from 'express';

const callback = require('../Controllers/admissionDetails.controller');

const router = Router();
router.post('/add', callback.addAdmissionDetails);
module.exports = router;
