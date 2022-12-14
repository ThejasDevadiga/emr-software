const EmployeeShema = require('../../models/Employee/EmployeeDataScheme')
const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");



const insertEmployeeData = asyncHandler(async (req, res) => {
    const { 
      requestedId,
        EmployeeId,
        Basic,
        Speciality,
    } = req.body;
    const findEmployee = await EmployeeShema.findOne({EmployeeId});

    if (findEmployee) {
      throw new Error("Employee already exists")
    }
    try{
    const result = await EmployeeShema.create({
        EmployeeId: generateId('EMP'),
        Basic:Basic,
        Speciality:Speciality
    });
    if (result) {
      res.status(201).json({
        acknowledged: true,
        EmployeeId: result.EmployeeId,
        message:"Data inserted successfully",
        token:generateToken(requestedId)
      });
    } else {
      throw new Error("Error while inserting data")
    }
    }catch(err){
      res.status(400).json({
        acknowledged : true,
        token:generateToken(requestedId),
        message : err.message
      })
    }
});
module.exports = {insertEmployeeData};
