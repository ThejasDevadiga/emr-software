const EmployeeShema = require('../../models/EmployeeDataScheme')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const updateEmployeeData = asyncHandler(async (req, res, next) => {
    const {
        requestedId,
        EmployeeId,
        updatedBasic,
        updatedDocument,
        updatedSpeciality,
    } = req.body
    try{
        const result = await EmployeeShema.updateOne(
                                                    {EmployeeId:EmployeeId},
                                                    {
                                                        $set:
                                                            {
                                                                basic:{updatedBasic},
                                                                documents:{updatedDocument},
                                                                Speciality:{updatedSpeciality}
                                                            }
                                                    })
        if(result){
            res.status(201).json({
                acknowledged: true,
                EmployeeId: result.EmployeeId,
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
    catch(err){
        res.status(400).json({
          acknowledged : true,
          token:generateToken(requestedId),
          message : err.message
        })
      }
                                

})

module.exports = updateEmployeeData
