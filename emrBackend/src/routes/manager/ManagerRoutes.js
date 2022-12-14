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
    
    getEmployeeData,
    getTransaction,
    getConsultsReports,
    getEmployeeStatus
} = require('../../controllers/manager/manRead')


const {
     
    updateTransaction,
    updateEmployeeData
} = require('../../controllers/manager/manUpdate')
const {
    getPatientData
} = require('../../controllers/patient/patientRead')
const {
    updatePatientData
}= require('../../controllers/patient/patientUpdate')
const {
    deletePatientData
}= require('../../controllers/patient/patientDelete')

router.get('/api/manager/get-patient-details',auth,getPatientData)//Done//tested
router.put('/api/manager/update-patient-details',auth,updatePatientData)//Done//tested  
router.delete('/api/manager/delete-patient-details',auth,deletePatientData)//Done//tested
router.get('/api/manager/get-transaction',auth,getTransaction)//Done//tested
router.put('/api/manager/update-transaction',auth,updateTransaction)//None
router.delete('/api/manager/delete-transaction',auth,deleteTransaction)//None
router.get('/api/manager/get-consult-reports',auth, getConsultsReports)//None
router.post('/api/manager/insert-employee-details',auth,insertEmployeeData)//Done//tested
router.put('/api/manager/update-employee-details',auth,updateEmployeeData)//Done//tested
router.delete('/api/manager/delete-employee-details',auth,deleteEmployeeData)//Done//tested
router.get('/api/manager/employee-status',auth,getEmployeeStatus)//None
router.get('/api/manager/get-employee-details',auth,getEmployeeData)//Done//tested
module.exports = router;
