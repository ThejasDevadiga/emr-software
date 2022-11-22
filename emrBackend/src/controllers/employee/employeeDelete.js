const EmployeeShema = require('../../models/Employee/EmployeeDataScheme')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const deleteEmployeeData = asyncHandler(async (req, res) => {
    const {EmployeeId,RequestID} = req.body
    if (!EmployeeId) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken('RequestID'),
            message:"Employee not found"})
    }
    else{
        try{
            const result = await EmployeeShema.deleteOne({EmployeeId: EmployeeId})
            if (result){
                res.status(200).json({
                acknowledged: true,
                token:generateToken('RequestID'),
                message:"Employee deleted successfully"})
                }
            else{
                res.status(400).json({
                acknowledged: true,
                token:generateToken('RequestID'),
                message:"Error while deleting data"})
            }
        }
        catch(err){
            res.status(500).json({
                acknowledged: true,
                token:generateToken('RequestID'),
                message:err.message})
        }
    }
})
module.exports = deleteEmployeeData;