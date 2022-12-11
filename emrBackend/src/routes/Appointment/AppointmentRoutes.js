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

 
router.put('/api/appointment/upload-patient-details',auth,patientDetailsUpload) //
router.get('/api/appointment/services-available',auth,servicesAvailable)
router.get('/api/appointment/available-consultant',auth,availableConsultant)
router.get('/api/appointment/available-timings',auth,availableTimings)








module.exports = router;
