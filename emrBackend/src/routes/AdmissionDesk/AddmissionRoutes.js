  const express = require('express');
const router = express.Router()
const auth = require('../../middlewares/authMiddleware')
const [deletePatientData,proceedWaitingToConsult]= require('../../controllers/patient/patientDelete')
const {getPatientData,getWaitingPatientData,getPatientDocument}= require('../../controllers/patient/patientRead')
const {updatePatientData,uploadPatientDocument}= require('../../controllers/patient/patientUpdate')
const {insertPatientData}= require('../../controllers/patient/patientInsert')
const {
    getBedCount,
    getAvaililablebed,
    availableServices,
    availableDoctor,
    getAppointmentsList,
    getEmployeesData,
    schedulePatient
} = require('../../controllers/Hospital/hospRead')
const uploader = require('../../middlewares/filesUploader')


router.post('/api/admission/insert-patient-data',auth, insertPatientData)//Done
router.put('/api/admission/update-patient-data',auth, updatePatientData)//DOne
router.post("/api/admission/upload-patient-documents",uploader.single("files"),uploadPatientDocument)//Done
router.get("/api/admission/get-patient-documents/:filename",auth,getPatientDocument)//Pending
router.delete('/api/admission/delete-patient-data',auth, deletePatientData)//Done
router.post('/api/admission/get-patient-data',auth, getPatientData)//Done
router.get('/api/admission/bed-count',auth, getBedCount)//None
router.get('/api/admission/get-waiting-patient-data',auth, getWaitingPatientData)//Done
router.get('/api/admission/available-bed',auth, getAvaililablebed)//None
router.get('/api/admission/available-services',auth, availableServices)//None
router.get('/api/admission/available-doctor',auth, availableDoctor)//None
router.get('/api/admission/appointments-list',auth, getAppointmentsList)//None
router.get('/api/admission/get-Employees-Data',auth, getEmployeesData)//None
router.post('/api/admission/schedule-patient',auth, schedulePatient)//None
router.post('/api/admission/proceed-patient-consultant',auth, proceedWaitingToConsult)//Done

module.exports = router;
