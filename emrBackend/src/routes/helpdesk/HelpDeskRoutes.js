const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../middlewares/authMiddleware')
dotenv.config();


const {
    getPatientCount,
    getAvaililablebed,
    availableDoctor,
    getBedCount,
    getEmployeesData,
    getAppointmentsList,
    availableServices

} = require('../../controllers/helpdesk/hlpRead')

router.post('/api/help-desk/patient-count',auth, getPatientCount)
router.post('/api/help-desk/bed-count',auth, getBedCount)
router.post('/api/help-desk/available-bed',auth, getAvaililablebed)
router.post('/api/help-desk/available-services',auth, availableServices)
router.post('/api/help-desk/available-doctor',auth, availableDoctor)
router.post('/api/help-desk/appointments-list',auth, getAppointmentsList)
router.post('/api/help-desk/get-Employees-Data',auth, getEmployeesData)


module.exports = router;
