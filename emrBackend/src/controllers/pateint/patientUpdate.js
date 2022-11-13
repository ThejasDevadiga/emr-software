const PatientShema = require('../../models/PatientDataSchema')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const updatePatientData = asyncHandler(async (req, res, next) => {
    const {
        requestedId,
        PatientId,
        updatedBasic,
        updatedDocument,
        updatedDisease,
    } = req.body
    try{
        const result = await PatientShema.updateOne(
                                                    {PatientId:PatientId},
                                                    {
                                                        $set:
                                                            {
                                                                basic:{updatedBasic},
                                                                document:{updatedDocument},
                                                                disease:{updatedDisease}
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
            res.status(500).json({
                acknowledged: false,
                message: "Error while updating data",
                token:generateToken(requestedId)
                })
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
