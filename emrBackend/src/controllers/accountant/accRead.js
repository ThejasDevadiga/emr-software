const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const BillingPatientLists = require('../../models/Patient/BillingPatientList')
const drugDetails = require("../../models/Drug/DrugDetails")
const patientData = require('../../models/Patient/PatientDataSchema')
const Transaction = require('../../models/Hospital/Transactions')
const getReport  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

const getPatientDetails  = asyncHandler(async (req, res, next) => {
     
    const {requestedId,filter,projection} = req.body;
    if (!requestedId && !filter && !projection) {
        throw new Error(" Requesting Id, Filter, projections are  required")
    }
    try {
        const result = await patientData.find({filter},{projection})
        if (result ==[]){
            throw   new Error("No data found ")
        }
        else if (result){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        else{
           throw new Error("Error while finding the patientData")
        }
    }
    catch (error) {
        res.status(400).json({
            acknowledged: true,
            message: error.message,
            token:generateToken(requestedId)
        })
    }
})

const getDrugDetails  = asyncHandler(async (req, res, next) => {
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await drugDetails.find({filter},{projection})
        if (result.length>0){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        else if (result.length==0){
            throw new Error("No data found in the Drug details")
        }
        else{
            throw new Error("Error while finding Drug details")
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

const getTransaction  = asyncHandler(async (req, res, next) => {
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await Transaction.find({filter},{projection})
        if (result.length>0){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        else if (result.length==0){
            throw new Error("No data found in the Drug details")
        }
        else{
            throw new Error("Error while finding Drug details")
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

const getBillingPatients = asyncHandler(async (req, res, next) => {

 const {requestedId} = req.body.requestedId;
const {filter,projection} = req.body;
if (!filter && !projection) {
    throw new Error("Filter and projection are required")
}
try {
    const result = await BillingPatientLists.find({filter},{projection})
    if (result.length>0){
        res.status(200).json({
            acknowledged: true,
            data: result,
            token:generateToken(requestedId)
        })
    }
    else if (result.length==0){
        throw new Error("No data found in the Consulting list")
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
module.exports  = {
    getReport,
    getPatientDetails,
    getDrugDetails,
    getTransaction,
    getBillingPatients
}
