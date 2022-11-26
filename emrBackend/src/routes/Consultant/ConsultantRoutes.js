const express = require('express');
const router = express.Router()
const auth = require('../../middlewares/authMiddleware')


const {
proceedToLabtest,
    proceedToPharmacy
} = require('../../controllers/consultant/conDelete')

const {
    uploadReport,
    uploadPrescription
} = require('../../controllers/consultant/conInsert')

const {
    getPatientDetails,
    getServicesData,
    labTestList,
    consultingPatientList
} = require('../../controllers/consultant/conRead')

const {
    updateReport,
    updatePrescription
} = require('../../controllers/consultant/conUpdate')

router.post('/api/consultant/patient-details',auth,getPatientDetails)
router.post('/api/consultant/upload-report',auth,uploadReport)
router.post('/api/consultant/update-report',auth,updateReport)
router.post('/api/consultant/upload-prescription',auth,uploadPrescription)
router.post('/api/consultant/update-prescription',auth,updatePrescription)
router.post('/api/consultant/proceed-to-labtest',auth,proceedToLabtest)
router.post('/api/consultant/proceed-to-pharmacy',auth,proceedToPharmacy)
router.post('/api/consultant/get-services-data',auth,getServicesData)
router.post('/api/consultant/labTest-list',auth,labTestList)
router.post('/api/consultant/get-consulting-patients',auth,consultingPatientList)


module.exports = router;