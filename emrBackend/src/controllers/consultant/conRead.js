
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const ConsultingPatient = require('../../models/Patient/ConsultPatientList')


const getPatientDetails  = asyncHandler(async (req, res, next) => {

    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})
const getServicesData  = asyncHandler(async (req, res, next) => {



    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})

})
const labTestList  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})
const consultingPatientList = asyncHandler(async (req, res, next)=>{
    const {requestedId} = req.body.requestedId;
    const {filter,projection} = req.body;
    if (!filter && !projection) {
        throw new Error("Filter and projection are required")
    }
    try {
        const result = await ConsultingPatient.find({filter},{projection})
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
module.exports = {
    getPatientDetails,
    getServicesData,
    labTestList,
    consultingPatientList
}
