const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../middlewares/authMiddleware')
dotenv.config();

router.post('/api/pharmacy/patient-details',auth,getPatientDetails)
router.post('/api/pharmacy/drug-available',auth,getAvailableDrug)
router.post('/api/pharmacy/get-drug-details',auth,getDrugDetails)
router.post('/api/pharmacy/proceedToBilling',auth,proceedToBilling)
router.post('/api/pharmacy/update-drug-details',auth,getDrugDetails)
router.post('/api/pharmacy/delete-drug-details',auth, deleteDrugDetails)

module.exports = router;
