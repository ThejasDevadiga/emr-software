const PatientShema = require('../../models/Patient/PatientDataSchema')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");


// const getPatientData  = asyncHandler(async (req, res, next) => {
//     res.status(200).json({
//         acknowledged : true,
//         message : 'Data Added Successfully',
//         token: generateToken(requestedId)
// })
// })

const getPatientCount  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

const getPatientData = asyncHandler(async (req, res) => {
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(PatientId),
            message:"Patient not found"})
    }
    try {
        const result = await PatientShema.findOne({filter},{projection})
        if (result){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        
        else{
            res.status(400).json({
                acknowledged: true,
                data: null,
                token:generateToken(requestedId)
        })
        }
    }
    catch (error) {
        res.status(500).json({
            acknowledged: true,
            data: null,
            token:generateToken(requestedId)
        })
    }
})

module.exports = {getPatientData,
  getPatientCount}

