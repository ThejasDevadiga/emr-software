const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../middlewares/authMiddleware');
const { Router } = require('express');
dotenv.config();

router.post('/api/consultant/patient-details',auth,getPatientDetails)
router.post('/api/consultant/upload-report',auth,uploadReport)
router.post('/api/consultant/update-report',auth,updateReport)
router.post('/api/consultant/upload-prescription',auth,uploadPrescription)
router.post('/api/consultant/update-prescription',auth,updatePrescription)
router.post('/api/consultant/proceed-to-labtest',auth,proceedToLabtest)
router.post('/api/consultant/proceed-to-pharmacy',auth,proceedToPharmacy)
router.post('/api/consultant/get-services-data',auth,getServicesData)
router.post('/api/consultant/labTest-list',auth,labTestList)


module.exports = router;