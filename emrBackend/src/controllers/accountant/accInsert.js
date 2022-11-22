const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const uploadTransaction  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('RequestID')
})
})

const uploadReport  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken('RequestID')
})
})

module.exports = {
    uploadTransaction,
    uploadReport
}
