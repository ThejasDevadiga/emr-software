const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");


const deleteDrugDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
    })
  })

  const proceedToBilling  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
    })
  })


module.exports = {
  deleteDrugDetails,
  proceedToBilling
}
  