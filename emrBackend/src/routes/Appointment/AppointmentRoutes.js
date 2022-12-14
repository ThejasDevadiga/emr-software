const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();
const {
    servicesAvailable,
    availableConsultant,
    availableTimings
} = require('../../controllers/Appointment/AppointmentRead')
const { patientDetailsUpload} = require('../../controllers/Appointment/AppointmentInsert')

 
router.put('/api/appointment/upload-patient-details',auth,patientDetailsUpload) //None
router.get('/api/appointment/services-available',auth,servicesAvailable)//None
router.get('/api/appointment/available-consultant',auth,availableConsultant)//None
router.get('/api/appointment/available-timings',auth,availableTimings)//None


module.exports = router;
