const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();
const {
    deleteTransaction,
    deletePatientDetails
} = require("../../controllers/accountant/accDelete")
const {
    getReport,
    getPatientDetails,
    getDrugDetails,
    getTransaction,
    getBillingPatients
} = require("../../controllers/accountant/accRead")
const {
    editTransaction
} = require("../../controllers/accountant/accUpdate")

const{
    uploadTransaction,
    uploadReport
} = require("../../controllers/accountant/accInsert")


router.get('/api/accountant/patient-details',auth,getPatientDetails)
router.delete('/api/accountant/delete-patient',auth,deletePatientDetails)
router.get('/api/accountant/drug-details',auth,getDrugDetails)
router.put('/api/accountant/upload-transaction',auth,uploadTransaction)
router.put('/api/accountant/edit-transaction',auth,editTransaction)
router.get('/api/accountant/get-transaction',auth,getTransaction)
router.delete('/api/accountant/delete-transaction',auth,deleteTransaction)
router.put('/api/accountant/upload-report',auth,uploadReport)
router.get('/api/accountant/get-report',auth,getReport)
router.get('/api/accountant/get-billing-patients',auth,getBillingPatients)
module.exports = router;
