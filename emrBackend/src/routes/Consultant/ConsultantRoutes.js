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

router.get('/api/consultant/patient-details',auth,getPatientDetails)
router.put('/api/consultant/upload-report',auth,uploadReport)
router.put('/api/consultant/update-report',auth,updateReport)
router.put('/api/consultant/upload-prescription',auth,uploadPrescription)
router.put('/api/consultant/update-prescription',auth,updatePrescription)
router.post('/api/consultant/proceed-to-labtest',auth,proceedToLabtest)
router.post('/api/consultant/proceed-to-pharmacy',auth,proceedToPharmacy)
router.get('/api/consultant/get-services-data',auth,getServicesData)
router.get('/api/consultant/labTest-list',auth,labTestList)
router.get('/api/consultant/get-consulting-patients',auth,consultingPatientList)


module.exports = router;