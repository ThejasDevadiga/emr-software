const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const proceedToLabtest  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})
})

const proceedToPharmacy  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('TestingRequests')
})
})

module.exports = {
    proceedToLabtest,
    proceedToPharmacy
}
