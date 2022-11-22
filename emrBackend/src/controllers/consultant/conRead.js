
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const getPatientDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('RequestID')
})
})
const getServicesData  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('RequestID')
})

})
const labTestList  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('RequestID')
})
})

module.exports = {
    getPatientDetails,
    getServicesData,
    labTestList
}
