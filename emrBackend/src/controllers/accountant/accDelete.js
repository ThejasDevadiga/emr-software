const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler")



const deleteTransaction  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})
})


const deletePatientDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})
})

module.exports = {deletePatientDetails, deleteTransaction}