const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const pharmacyPatients = require('../../models/Patient/PharmacyPatientList')
const patientData = require('../../models/Patient/PatientDataSchema')

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


  const getAvailableDrug  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
    })
  })

  const getDrugDetails  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
    })
  })

const getPharmacyPatientList = asyncHandler(async (req, res, next) => {
  const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await pharmacyPatients.find({filter},{projection})
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
            throw new Error("Error while finding labtesting patient ")
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

module.exports = {
    getAvailableDrug,
    getPatientDetails,
    getDrugDetails,
    getPharmacyPatientList
}
