const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const uploadTransaction  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

const uploadReport  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

module.exports = {
    uploadTransaction,
    uploadReport
}
