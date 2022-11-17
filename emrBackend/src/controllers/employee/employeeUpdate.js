const EmployeeShema = require('../../models/EmployeeDataScheme')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const updateEmployeeData = asyncHandler(async (req, res, next) => {
    const {
        'TestingRequests',
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
                token:generateToken('TestingRequests')
                })
            }
        else{
            res.status(500).json({
                acknowledged: false,
                message: "Error while updating data",
                token:generateToken('TestingRequests')
                })
        }
    }
    catch(err){
        res.status(400).json({
          acknowledged : true,
          token:generateToken('TestingRequests'),
          message : err.message
        })
      }
                                

})

module.exports = updateEmployeeData
