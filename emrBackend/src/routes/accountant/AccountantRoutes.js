const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../middlewares/authMiddleware')
dotenv.config();
// const {
//     delFaculty,
//     delContact,
//     delEnroll,
//     delEvent
// } = require("../controllers/deleteDataRoutes")


router.post('/api/accountant/patient-details',auth,getPatientDetails)
router.post('/api/accountant/drug-details',auth,getDrugDetails)
router.post('/api/accountant/upload-transaction',auth,uploadTransaction)
router.post('/api/accountant/edit-transaction',auth,editTransaction)
router.post('/api/accountant/get-transaction',auth,getTransaction)
router.post('/api/accountant/delete-transaction',auth,deleteTransaction)
router.post('/api/accountant/upload-report',auth,uploadReport)
router.post('/api/accountant/get-report',auth,getReport)

module.exports = router;
