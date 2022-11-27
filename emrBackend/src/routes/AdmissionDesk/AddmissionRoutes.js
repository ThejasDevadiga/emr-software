  const express = require('express');
const router = express.Router()
const auth = require('../../middlewares/authMiddleware')
const deletePatientData= require('../../controllers/patient/patientDelete')
const {getPatientData,getWaitingPatientData}= require('../../controllers/patient/patientRead')
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
const {passWaitingToConsult} = require('../../controllers/passPatientData/waitingToConsult')



router.post('/api/admission-desk/insert-patient-data',auth, insertPatientData)
router.put('/api/admission-desk/update-patient-data',auth, updatePatientData)
router.delete('/api/admission-desk/delete-patient-data',auth, deletePatientData)
router.get('/api/admission-desk/get-patient-data',auth, getPatientData)
router.get('/api/admission-desk/bed-count',auth, getBedCount)
router.get('/api/admission-desk/get-waiting-patient-data',auth, getWaitingPatientData)
router.get('/api/admission-desk/available-bed',auth, getAvaililablebed)
router.get('/api/admission-desk/available-services',auth, availableServices)
router.get('/api/admission-desk/available-doctor',auth, availableDoctor)
router.get('/api/admission-desk/appointments-list',auth, getAppointmentsList)
router.get('/api/admission-desk/get-Employees-Data',auth, getEmployeesData)
router.post('/api/admission-desk/schedule-patient',auth, schedulePatient)
router.post('/api/admission-desk/proceed-patient-consultant',auth, passWaitingToConsult)
module.exports = router;
