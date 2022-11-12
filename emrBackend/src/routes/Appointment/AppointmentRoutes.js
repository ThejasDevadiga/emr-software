const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../middlewares/authMiddleware')
dotenv.config();



 
router.post('/api/appointment/upload-patient-details',auth,patientDetailsUpload)
router.post('/api/appointment/services-available',auth,servicesAvailable)
router.post('/api/appointment/available-consultant',auth,availableConsultant)
router.post('/api/appointment/available-timings',auth,availableTimings)








module.exports = router;
