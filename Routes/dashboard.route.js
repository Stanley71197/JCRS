import { Router } from 'express';

const callback = require('../Controllers/dashboard.controller');

const router = Router();
router.get('/details/personal/:email', callback.getPersonalDetails);

module.exports = router;
