const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();
const {
    proceedToPharmacy,
    proceedToConsultant
} = require('../../controllers/laboratory/labDelete')

const  {
    getPatientDetails,
    getServiceDetails,
    getLabTestPatients
} = require('../../controllers/laboratory/labRead')
const  {
    uploadReport,
    uploadLabDetails
} = require('../../controllers/laboratory/labInsert')

router.get('/api/lab-technician/patient-details',auth,getPatientDetails)
router.put('/api/lab-technician/upload-report',auth,uploadReport)
router.get('/api/lab-technician/get-service-details',auth,getServiceDetails)
router.post('/api/lab-technician/proceed-to-consultant',auth,proceedToConsultant)
router.post('/api/lab-technician/proceed-to-pharmacy',auth,proceedToPharmacy)
router.put('/api/lab-technician/upload-lab-details',auth,uploadLabDetails)
router.put('/api/lab-technician/get-labtest-patients',auth,getLabTestPatients)


module.exports = router;
