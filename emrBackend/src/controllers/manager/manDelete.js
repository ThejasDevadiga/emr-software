const EmployeeShema = require('../../models/Employee/EmployeeDataScheme')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const deletePatientDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

const deleteTransaction  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

const deleteconsultantDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})


const deleteEmployeeData = asyncHandler(async (req, res) => {
    const {EmployeeId,requestedId} = req.body
    if (!EmployeeId) {
        
        throw new Error("Employee not found")
    }
    else{
        try{
            const result = await EmployeeShema.deleteOne({EmployeeId: EmployeeId})
            if (result){
                res.status(200).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:"Employee deleted successfully"})
                }
            else{
                throw new Error("Error while deleting data")
            }
        }
        catch(err){
            res.status(400).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:err.message})
        }
    }
})

module.exports = {
    deletePatientDetails,
    deleteTransaction,
    deleteconsultantDetails,
    deleteEmployeeData
}

