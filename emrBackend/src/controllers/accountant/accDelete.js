const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler")
const Transaction = require('../../models/Hospital/Transactions')
const PatientShema = require('../../models/Patient/PatientDataSchema')



const deleteTransaction  = asyncHandler(async (req, res, next) => {
    const {transaction_id,requestedId} = req.body
    if (!transaction_id) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(requestedId),
            message:"Patient not found"})
    }
    else{
        try{
          const transactionId = await Transaction.findOne({transaction_id:transaction_id},{'_id':0});
        if (!transactionId) { 
          throw new Error("Transaction data not found!")
        }
            const result = await Transaction.deleteOne({transaction_id: transaction_id})
            if (result){
                res.status(200).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:"Transaction deleted successfully"})
                }
            else{
                res.status(400).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:"Error while deleting transaction"})
            }
        }
        catch(err){
            res.status(400).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:err.message})
        }
    }
})


const deletePatientDetails  = asyncHandler(async (req, res, next) => {
    const {PatientId,requestedId} = req.body
    if (!PatientId) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(requestedId),
            message:"Patient not found"})
    }
    else{
        try{
          const findPatient = await PatientShema.findOne({PatientID:PatientId},{'_id':0});
        if (!findPatient) { 
          throw new Error("Patient data not found!")
        }
            const result = await PatientShema.deleteOne({PatientID: PatientId})
            if (result){
                res.status(200).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:"Patient deleted successfully"})
                }
            else{
                res.status(400).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:"Error while deleting data"})
            }
        }
        catch(err){
            res.status(400).json({
                acknowledged: true,
                token:generateToken(requestedId),
                message:err.message})
        }
    }
})

module.exports = {deletePatientDetails, deleteTransaction}