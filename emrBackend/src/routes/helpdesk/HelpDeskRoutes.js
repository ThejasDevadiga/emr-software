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

} = require('../../controllers/helpdesk/hlpRead')

router.get('/api/help-desk/patient-count',auth, getPatientCount)
router.get('/api/help-desk/bed-count',auth, getBedCount)
router.get('/api/help-desk/available-bed',auth, getAvaililablebed)
router.get('/api/help-desk/available-services',auth, availableServices)
router.get('/api/help-desk/available-doctor',auth, availableDoctor)
router.get('/api/help-desk/appointments-list',auth, getAppointmentsList)
router.get('/api/help-desk/get-Employees-Data',auth, getEmployeesData)


module.exports = router;
