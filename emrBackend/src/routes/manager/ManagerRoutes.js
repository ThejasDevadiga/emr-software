const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();

const {
    deletePatientDetails,
    deleteTransaction,
    deleteconsultantDetails,
    deleteEmployeeData

} = require('../../controllers/manager/manDelete')

const {
    insertEmployeeData
} = require('../../controllers/manager/manInsert')


const {
    getPatientDetails,
    getEmployeeData,
    getTransaction,
    getConsultReports,
    getEmployeeStatus
} = require('../../controllers/manager/manRead')


const {
    updatePatientDetails,
    updateTransaction,
    
    updateEmployeeData
} = require('../../controllers/manager/manUpdate')


router.get('/api/manager/get-patient-details',auth,getPatientDetails)//None
router.put('/api/manager/update-patient-details',auth,updatePatientDetails)//None  
router.delete('/api/manager/delete-patient-details',auth,deletePatientDetails)//None
router.get('/api/manager/get-transaction',auth,getTransaction)//None
router.put('/api/manager/update-transaction',auth,updateTransaction)//None
router.delete('/api/manager/delete-transaction',auth,deleteTransaction)//None
router.get('/api/manager/get-consult-reports',auth, getConsultReports)//None
router.post('/api/manager/insert-employee-details',auth,insertEmployeeData)//Done
router.put('/api/manager/update-employee-details',auth,updateEmployeeData)//Done
router.delete('/api/manager/delete-employee-details',auth,deleteEmployeeData)//Done
router.get('/api/manager/employee-status',auth,getEmployeeStatus)//None
router.get('/api/manager/get-employee-details',auth,getEmployeeData)//Done
module.exports = router;
