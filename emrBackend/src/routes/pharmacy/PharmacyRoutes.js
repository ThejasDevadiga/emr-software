const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();
const {
    getPatientDetails,
    getAvailableDrug,
    getDrugDetails,
    getPharmacyPatientList
} = require('../../controllers/pharmacy/phmRead')
const {
    proceedToBilling,
    deleteDrugDetails
} = require('../../controllers/pharmacy/phmDelete')
const {
    updateDrugDetails
} = require('../../controllers/pharmacy/phmUpdate')

router.get('/api/pharmacy/patient-details',auth,getPatientDetails)//None
router.get('/api/pharmacy/drug-available',auth,getAvailableDrug)//None
router.get('/api/pharmacy/get-drug-details',auth,getDrugDetails)//None
router.post('/api/pharmacy/proceedToBilling',auth,proceedToBilling)//Done
router.put('/api/pharmacy/update-drug-details',auth,updateDrugDetails)//None
router.delete('/api/pharmacy/delete-drug-details',auth, deleteDrugDetails)//None
router.get('/api/pharmacy/get-pharmacy-patient-list',auth,getPharmacyPatientList)//Done

module.exports = router;
