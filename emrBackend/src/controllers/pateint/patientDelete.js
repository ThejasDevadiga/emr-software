const PatientShema = require('../../models/PatientDataSchema')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const deletePatientData = asyncHandler(async (req, res) => {
    const {PatientId,requestId} = req.body
    if (!PatientId) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(requestId),
            message:"Patient not found"})
    }
    else{
        try{
            const result = await PatientShema.deleteOne({PatientId: PatientId})
            if (result){
                res.status(200).json({
                acknowledged: true,
                token:generateToken(requestId),
                message:"Patient deleted successfully"})
                }
            else{
                res.status(400).json({
                acknowledged: true,
                token:generateToken(requestId),
                message:"Patient not found"})
            }
        }
        catch(err){
            res.status(500).json({
                acknowledged: true,
                token:generateToken(requestId),
                message:err.message})
        }
    }
})
module.exports = deletePatientData;