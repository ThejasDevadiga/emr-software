const EmployeeShema = require('../../models/EmployeeDataScheme')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const readEmployeeData = asyncHandler(async (req, res) => {
    const {'TestingRequests'} = req.body.'TestingRequests';
    const {filter,projection} = req.body
    if (!filter && !projection && !filter) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(EmployeeId),
            message:"Employee not found"})
    }
    try {
        const result = await EmployeeShema.find({filter},{projection})
        if (result){
            res.status(200).json({
                acknowledged: true,
                data: result,
                token:generateToken('TestingRequests')
            })
        }
        else{
            res.status(400).json({
                acknowledged: true,
                data: null,
                token:generateToken('TestingRequests')
        })
        }
    }
    catch (error) {
        res.status(500).json({
            acknowledged: true,
            data: null,
            token:generateToken('TestingRequests')
        })
    }
})

module.exports = readEmployeeData;
