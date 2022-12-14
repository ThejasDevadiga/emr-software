const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const Services = require('../../models/Hospital/servicesDetails')
const Consultants = require('../../models/Consultant/consultantList')
const getBedCount  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

const getAvaililablebed  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})
const availableServices  = asyncHandler(async (req, res, next) => {
    
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await Services.find({filter},{projection})
        if (result.length>0){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        else if (result.length==0){
            throw new Error("No data found in the services list")
        }
        else{
            throw new Error("Error while finding services")
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

const availableDoctor  = asyncHandler(async (req, res, next) => {
    const {requestedId} = req.body.requestedId;
    const {projection} = req.body;
    if ( !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await Consultants.find({Status:"available"},{projection})
        if (result.length>0){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken(requestedId)
            })
        }
        else if (result.length==0){
            throw new Error("No data found in the consultant list")
        }
        else{
            throw new Error("Error while finding consultants")
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
const getAppointmentsList  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})
const getEmployeesData  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})
const schedulePatient  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})
module.exports = {
    getBedCount,
    getAvaililablebed,
    availableServices,
    availableDoctor,
    getAppointmentsList,
    getEmployeesData,
    schedulePatient
}