const PatientShema = require('../../models/PatientDataSchema')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const readPatientData = asyncHandler(async (req, res) => {
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body
    if (!filter && !projection && !filter) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(PatientId),
            message:"Patient not found"})
    }
    try {
        const result = await PatientShema.find({filter},{projection})
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

module.exports = readPatientData;
