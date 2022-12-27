  const express = require('express');
const router = express.Router()
const auth = require('../../middlewares/authMiddleware')
const {deletePatientData,proceedWaitingToConsult}= require('../../controllers/patient/patientDelete')
const {getPatientData,getWaitingPatientData,getPatientDocument}= require('../../controllers/patient/patientRead')
const {updatePatientData,uploadPatientDocument}= require('../../controllers/patient/patientUpdate')
const {insertPatientData}= require('../../controllers/patient/patientInsert')
const {
  getBedData,
    getAvaililablebed,
    availableServices,
    availableDoctor,
    getAppointmentsList,
    getEmployeesData,
    schedulePatient
} = require('../../controllers/Hospital/hospRead')
const uploader = require('../../middlewares/filesUploader')

// const {getEmployeeData} = require("../../controllers/manager/manRead")

router.post('/api/admission/insert-patient-data',auth, insertPatientData)//Done//tested
router.put('/api/admission/update-patient-data',auth, updatePatientData)//DOne//tested
router.post("/api/admission/upload-patient-documents",uploader.single("files"),uploadPatientDocument)//Done//tested
// router.get("/api/admission/get-patient-documents/:filename",auth,getPatientDocument)//Pending
router.delete('/api/admission/delete-patient-data',auth, deletePatientData)//Done//tested
router.post('/api/admission/proceed-patient-consultant',auth, proceedWaitingToConsult)//Done//tested
router.post('/api/admission/get-patient-data',auth, getPatientData)//Done//tested
router.get('/api/admission/get-waiting-patient-data',auth, getWaitingPatientData)//Done//tested
router.get('/api/admission/available-services',auth, availableServices)//Done//tested
router.get('/api/admission/available-doctor',auth, availableDoctor)//Done//tested
router.get('/api/admission/get-Employees-Data',auth, getEmployeesData)//Done//tested
router.get('/api/admission/bed-data',auth, getBedData)//Done//tested
router.get('/api/admission/available-bed',auth, getAvaililablebed)//Done//tested
router.get('/api/admission/appointments-list',auth, getAppointmentsList)//Done//Tested
router.post('/api/admission/schedule-patient',auth, schedulePatient)//None


module.exports = router;
