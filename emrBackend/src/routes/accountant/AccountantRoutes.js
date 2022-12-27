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
    
    getDrugDetails,
    getTransaction,
    getBillingPatients
} = require("../../controllers/accountant/accRead")
const { getPatientData} = require("../../controllers/patient/patientRead")
const {
    editTransaction
} = require("../../controllers/accountant/accUpdate")

const{
    uploadTransaction,
    uploadReport
} = require("../../controllers/accountant/accInsert")


router.get('/api/accountant/patient-details',auth,getPatientData)//Done//tested
router.get('/api/accountant/drug-details',auth,getDrugDetails) //Done 
router.put('/api/accountant/upload-transaction',auth,uploadTransaction)//Done
router.put('/api/accountant/edit-transaction',auth,editTransaction)
router.get('/api/accountant/get-transaction',auth,getTransaction)//Done
router.delete('/api/accountant/delete-transaction',auth,deleteTransaction)//Done
router.put('/api/accountant/upload-report',auth,uploadReport)
router.get('/api/accountant/get-report',auth,getReport)
router.get('/api/accountant/get-billing-patients',auth,getBillingPatients)

module.exports = router;
