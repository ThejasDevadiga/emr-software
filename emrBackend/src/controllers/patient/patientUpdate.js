const PatientShema = require('../../models/Patient/PatientDataSchema')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

// const updatePatientData  = asyncHandler(async (req, res, next) => {
//     res.status(200).json({
//         acknowledged : true,
//         message : 'Data Added Successfully',
//         token: generateToken(requestedId)
//     })
//   })
  
  
const updatePatientData = asyncHandler(async (req, res, next) => {
    const {
        requestedId,
        PatientId,
        updatedBasic,
        updatedDocument,
        updatedDisease,
    } = req.body
    try{
        const result = await PatientShema.findOne({PatientID:PatientId})
    console.log(result);
        if (!result){
        res.status(400).json({
            acknowledged: false,
            data: "Patient not found!",
            token:generateToken(requestedId)
        })
    } 

    else{
        const result = await PatientShema.updateOne(
                                                     {PatientID:PatientId},
                                                    {
                                                        $set:
                                                            {
                                                                Basic:updatedBasic,
                                                                Documents:updatedDocument,
                                                                Disease:updatedDisease
                                                            }
                                                    })
        
                                                    if(result){
            res.status(201).json({
                acknowledged: true,
                PatientId: result.PatientId,
                token:generateToken(requestedId)
                })
            }
        else{
            res.status(400).json({
                acknowledged: false,
                message: "Error while updating data",
                token:generateToken(requestedId)
                })
        }
    }
}
    catch(err){
        res.status(400).json({
          acknowledged : true,
          token:generateToken(requestedId),
          message : err.message
        })
      }
})

module.exports = updatePatientData
