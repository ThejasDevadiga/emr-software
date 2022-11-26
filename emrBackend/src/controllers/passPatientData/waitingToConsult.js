const WaitingSchema = require('../../models/Patient/waitingPatientList')
const ConsultPatient = require('../../models/Patient/ConsultPatientList')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const updatePatientStatus = require('../../controllers/passPatientData/PatientStatus')
const passWaitingToConsult = asyncHandler(async(req,res) =>{  
  try{          
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
      const insertedResult = await ConsultPatient.create({PatientID:PatientId,Status:"Consulting"}) 
       if (!insertedResult) {
         res.status(403).json({
          acknowledged : true,
          message : 'Error occured while Inserting the data to Consultantlist',
          token : generateToken(requestedId)
        })
      }
      const Deleteresult = await WaitingSchema.deleteOne({PatientID:PatientId})
        if (!Deleteresult) {
          res.status(403).json({
            acknowledged : true,
            message : 'Error occured while Deleting the data from Waiting list',
            token : generateToken(requestedId)
          })
        }
            if (updatePatientStatus(PatientId,"Consulting")){ 
            res.status(200).json({
              acknowledged : true,
              message : 'Data Added Successfully',
              token: generateToken(requestedId)
        })
            }
            else {
            res.status(403).json({
              acknowledged : true,
              message : 'Error occured while Updating the data in Waiting list',
              token : generateToken(requestedId)
            })
          }

}catch(err){
  res.status(400).json({
    acknowledged : true,
    token:generateToken("Failed"),
    message : err.message
  })
}

})
module.exports = {
  passWaitingToConsult
}