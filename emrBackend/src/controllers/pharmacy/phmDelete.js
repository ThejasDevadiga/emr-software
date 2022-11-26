const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const Pharmpatient = require('../../models/Patient/PharmacyPatientList')
const updatePatientStatus = require('../passPatientData/PatientStatus')
const BillingPatient = require('../../models/Patient/BillingPatientList')

const deleteDrugDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
    })
  })

  const proceedToBilling  = asyncHandler(async (req, res, next) => {
    const {
      requestedId,
      PatientId,
  } = req.body;
  if (!requestedId && !PatientId){
       throw new Error("Requested id or Patient id doesnt exists")
  }
  try{
  const findPatient = await Pharmpatient.findOne({PatientID:PatientId},{'_id':0});
  if (!findPatient) { 
    throw new Error("Patient data not found!")
  }  
    const insertedResult = await BillingPatient.create({PatientID:PatientId,Status:"Billing"}); 
     if (!insertedResult) {
      throw new Error("Error occured while Inserting the data to Billing list")
    }
       const deletedresult = await Pharmpatient.deleteOne({PatientID:PatientId})
      if (!deletedresult) {
        throw new Error("Error occured while Deleting the data from  pharmacy list")
      }
      if (updatePatientStatus(PatientId,"Billing")){ 
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
  deleteDrugDetails,
  proceedToBilling
}
  