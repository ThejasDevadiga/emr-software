const WaitingSchema = require('../../models/Patient/waitingPatientList')
const ConsultPatient = require('../../models/Patient/ConsultPatientList')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const passWaitingToConsult = asyncHandler(async(req,res) =>{  
            const {
        requestedId,
        PatientId,
    } = req.body;
    if (!requestedId){
        return res.status(400).json({
            acknowledged : true,
            message : 'Requested id doesnt exists',
            token : generateToken(requestedId)
        })
    }
    const findPatient = await WaitingSchema.findOne({PatientID:PatientId},{'_id':0});
    if (!findPatient) { 
      res.status(403).json({
        acknowledged : true,
        message : 'Patient data not found!',
        token : generateToken(requestedId)
      })
    }
    else{
      const insertedResult = await ConsultPatient.create({PatientID:PatientId,Status:"Consulting"}) 
       if (!insertedResult) {
         res.status(403).json({
          acknowledged : true,
          message : 'Error occured while Inserting the data to Consultantlist',
          token : generateToken(requestedId)
        })
      }
      else{
         const result = await WaitingSchema.deleteOne({PatientID:PatientId})
        if (!result) {
          res.status(403).json({
            acknowledged : true,
            message : 'Error occured while Deleting the data from Waiting list',
            token : generateToken(requestedId)
          })
        }
        else{
            res.status(200).json({
              acknowledged : true,
              message : 'Data Added Successfully',
              token: generateToken(requestedId)
        })
      }
    }
  }
})
module.exports = {
  passWaitingToConsult
}