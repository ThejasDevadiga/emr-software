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
    getConsultDetails,
    getEmployeeStatus
} = require('../../controllers/manager/manRead')


const {
    updatePatientDetails,
    updateTransaction,
    updateconsultantDetails,
    updateEmployeeData
} = require('../../controllers/manager/manUpdate')


router.get('/api/manager/get-patient-details',auth,getPatientDetails)
router.put('/api/manager/update-patient-details',auth,updatePatientDetails)    
router.delete('/api/manager/delete-patient-details',auth,deletePatientDetails)
router.get('/api/manager/get-transaction',auth,getTransaction)
router.put('/api/manager/update-transaction',auth,updateTransaction)
router.delete('/api/manager/delete-transaction',auth,deleteTransaction)
router.get('/api/manager/get-consultant-details',auth, getConsultDetails)
router.put('/api/manager/update-consultant-details',auth,updateconsultantDetails)
router.delete('/api/manager/delete-consultant-details',auth,deleteconsultantDetails)
router.post('/api/manager/insert-employee-details',auth,insertEmployeeData)
router.put('/api/manager/update-employee-details',auth,updateEmployeeData)
router.delete('/api/manager/delete-employee-details',auth,deleteEmployeeData)
router.get('/api/manager/employee-status',auth,getEmployeeStatus)
router.get('/api/manager/get-employee-details',auth,getEmployeeData)
module.exports = router;
