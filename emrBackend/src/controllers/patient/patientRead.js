const waitingPatients = require('../../models/Patient/waitingPatientList')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");


const getWaitingPatientData  = asyncHandler(async (req, res, next) => {
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await waitingPatients.find({filter},{projection})
        if (result.length>0){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        else if (result.length==0){
            throw new Error("No data found in the Labtesting list")
        }
        
        else{
            throw new Error("Error while finding waiting patient ")
        }
    }
    catch (error) {
        res.status(400).json({
            acknowledged: true,
            data:error.message,
            token:generateToken(requestedId)
        })
    }
})

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

module.exports = {getPatientData,
  getPatientCount,
  getWaitingPatientData
}

