const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const auth = require('../../middlewares/authMiddleware')
dotenv.config();

const {
    deletePatientDetails,
    deleteTransaction,
    deleteconsultantDetails,
    deleteEmployeedetails

} = require('../../controllers/manager/manDelete')

const {
    insertEmployeeDetails
} = require('../../controllers/manager/manInsert')


const {
    getPatientDetails,
    getTransaction,
    getConsultDetails,
    getEmployeeStatus
} = require('../../controllers/manager/manRead')


const {
    updatePatientDetails,
    updateTransaction,
    updateconsultantDetails,
    updateEmployeedetails
} = require('../../controllers/manager/manUpdate')


router.post('/api/manager/get-patient-details',auth,getPatientDetails)
router.post('/api/manager/update-patient-details',auth,updatePatientDetails)    
router.post('/api/manager/delete-patient-details',auth,deletePatientDetails)
router.post('/api/manager/get-transaction',auth,getTransaction)
router.post('/api/manager/update-transaction',auth,updateTransaction)
router.post('/api/manager/delete-transaction',auth,deleteTransaction)
router.post('/api/manager/get-consultant-details',auth, getConsultDetails)
router.post('/api/manager/update-consultant-details',auth,updateconsultantDetails)
router.post('/api/manager/delete-consultant-details',auth,deleteconsultantDetails)
router.post('/api/manager/insert-employee-details',auth,insertEmployeeDetails)
router.post('/api/manager/update-employee-details',auth,updateEmployeedetails)
router.post('/api/manager/delete-employee-details',auth,deleteEmployeedetails)
router.post('/api/manager/employee-status',auth,getEmployeeStatus)

module.exports = router;
