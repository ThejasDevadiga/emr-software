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

router.get('/api/consultant/patient-details',auth,getPatientDetails)//None
router.put('/api/consultant/upload-report',auth,uploadReport)//None
router.put('/api/consultant/update-report',auth,updateReport)//None
router.put('/api/consultant/upload-prescription',auth,uploadPrescription)//None
router.put('/api/consultant/update-prescription',auth,updatePrescription)//None
router.post('/api/consultant/proceed-to-labtest',auth,proceedToLabtest)//Done
router.post('/api/consultant/proceed-to-pharmacy',auth,proceedToPharmacy)//Done
router.get('/api/consultant/get-services-data',auth,getServicesData)//None
router.get('/api/consultant/labTest-list',auth,labTestList)//None
router.get('/api/consultant/get-consulting-patients',auth,consultingPatientList)//Done


module.exports = router;