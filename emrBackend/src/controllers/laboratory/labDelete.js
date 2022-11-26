const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const ConsultPatient = require('../../models/Patient/ConsultPatientList')
const Pharmpatient = require('../../models/Patient/PharmacyPatientList')
const Labpatient = require('../../models/Patient/LabtechnitianPatientList')
const updatePatientStatus = require('../passPatientData/PatientStatus')



const proceedToConsultant  = asyncHandler(async (req, res, next) => {
    const {
        requestedId,
        PatientId,
    } = req.body;
    if (!requestedId && !PatientId){
         throw new Error("Requested id or Patient id doesnt exists")
    }
    try{
    const findPatient = await Labpatient.findOne({PatientID:PatientId},{'_id':0});
    if (!findPatient) { 
      throw new Error("Patient data not found!")
    }  
      const insertedResult = await ConsultPatient.create({PatientID:PatientId,Status:"Consult"}); 
       if (!insertedResult) {
        throw new Error("Error occured while Inserting the data to Consultant list")
      }
         const deletedresult = await Labpatient.deleteOne({PatientID:PatientId})
        if (!deletedresult) {
          throw new Error("Error occured while Deleting the data from Lab test list")
        }
        if (updatePatientStatus(PatientId,"Pharmacy")){ 
          res.status(200).json({
            acknowledged : true,
            message : 'Data Added Successfully',
            token: generateToken(requestedId)
      })
          }
        else{
          throw new Error("Error occured while Updating the data in Patient records")
      }
    }
    catch(err){
      res.status(400).json({
        acknowledged : true,
        token:generateToken("Failed"),
        message : err.message
      })
    }
})
const proceedToPharmacy  = asyncHandler(async (req, res, next) => {
    const {
        requestedId,
        PatientId,
    } = req.body;
    if (!requestedId && !PatientId){
         throw new Error("Requested id or Patient id doesnt exists")

    }
    try{
    const findPatient = await Labpatient.findOne({PatientID:PatientId},{'_id':0});
    if (!findPatient) { 
      throw new Error("Patient data not found!")
    }
    
      const insertedResult = await Pharmpatient.create({PatientID:PatientId,Status:"Pharmacy"}) 
       if (!insertedResult) {
        throw new Error("Error occured while Inserting the data to Parmacy list")
      }
         const deletedresult = await Labpatient.deleteOne({PatientID:PatientId})
        if (!deletedresult) {
          throw new Error("Error occured while Deleting the data from Lab test list")
        }
        if (updatePatientStatus(PatientId,"Pharmacy")){ 
          res.status(200).json({
            acknowledged : true,
            message : 'Data Added Successfully',
            token: generateToken(requestedId)
      })
          }
        else{
          throw new Error("Error occured while Updating the data in Patient records")
      }
    }
    catch(err){
      res.status(400).json({
        acknowledged : true,
        token:generateToken("Failed"),
        message : err.message
      })
    }
})

module.exports = {
    proceedToConsultant,
    proceedToPharmacy
}

