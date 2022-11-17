
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const getPatientDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})
})
const getServicesData  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})

})
const labTestList  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})
})

module.exports = {
    getPatientDetails,
    getServicesData,
    labTestList
}
