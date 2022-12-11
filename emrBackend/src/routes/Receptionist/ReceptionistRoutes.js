const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();


const {
    getPatientCount,
    getAvaililablebed,
    availableDoctor,
    getBedCount,
    getEmployeesData,
    getAppointmentsList,
    availableServices

} = require('../../controllers/Receptionist/receptionsRead')

router.get('/api/Receptionist/patient-count',auth, getPatientCount)//None
router.get('/api/Receptionist/bed-count',auth, getBedCount)//None
router.get('/api/Receptionist/available-bed',auth, getAvaililablebed)//None
router.get('/api/Receptionist/available-services',auth, availableServices)//None
router.get('/api/Receptionist/available-doctor',auth, availableDoctor)//None
router.get('/api/Receptionist/appointments-list',auth, getAppointmentsList)//None
router.get('/api/Receptionist/get-Employees-Data',auth, getEmployeesData)//None


module.exports = router;
