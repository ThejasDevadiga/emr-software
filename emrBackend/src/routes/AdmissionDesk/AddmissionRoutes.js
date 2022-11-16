const express = require('express');
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const deletePatientData= require('../../controllers/patient/patientDelete')
const {getPatientData,getPatientCount}= require('../../controllers/patient/patientRead')
const updatePatientData= require('../../controllers/patient/patientUpdate')
const insertPatientData= require('../../controllers/patient/patientInsert')
const {
    getBedCount,
    getAvaililablebed,
    availableServices,
    availableDoctor,
    getAppointmentsList,
    getEmployeesData,
    schedulePatient
} = require('../../controllers/Hospital/hospRead')

router.post('/api/admission-desk/insert-patient-data',auth, insertPatientData)
router.post('/api/admission-desk/update-patient-data',auth, updatePatientData)
router.post('/api/admission-desk/delete-patient-data',auth, deletePatientData)
router.post('/api/admission-desk/get-patient-data',auth, getPatientData)
router.post('/api/admission-desk/bed-count',auth, getBedCount)
router.post('/api/admission-desk/available-bed',auth, getAvaililablebed)
router.post('/api/admission-desk/available-services',auth, availableServices)
router.post('/api/admission-desk/available-doctor',auth, availableDoctor)
router.post('/api/admission-desk/appointments-list',auth, getAppointmentsList)
router.post('/api/admission-desk/get-Employees-Data',auth, getEmployeesData)
router.post('/api/admission-desk/schedule-patient',auth, schedulePatient)
module.exports = router;
