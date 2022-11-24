const EmployeeShema = require('../../models/EmployeeDataScheme')
const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");



const insertEmployeeData = asyncHandler(async (req, res) => {
    const { 
      requestedId,
        EmployeeId,
        Fname,
        Mname,
        Lname,  
        DateOfBirth,
        Email,
        Phone,
        Gender,
        Age,
        AddressL1,
        AddressL2,
        City,
        State,
        Country,
        Zip,
        AdharNumber,
        BloodGroup,
        Education,
        Section,
        Department,
        WorkExperience,
        Designation
    } = req.body;
    const findEmployee = await EmployeeShema.findOne({EmployeeId});
    if (findEmployee) {
      res.status(403).json({
        acknowledged : true,
        message : 'Employee already exists',
        token : generateToken(requestedId)
      })
    }
    try{
    const result = await EmployeeShema.inserOne({
        EmployeeId: generateId('PAT'),
        Basic:{
            Fname:Fname,
            Mname:Mname,
            Lname:Lname,
            DateOfBirth:DateOfBirth,
            Email:Email,
            Phone:Phone,
            Gender:Gender,
            Age:Age,
            Address:{
                line1:AddressL1,
                line2:AddressL2
            },
            City:City,
            State:State,
            Country:Country,
            Zip:Zip
        },
        Documents:{
            AdharNumber:AdharNumber,
            BloodGroup:BloodGroup,
        },
        Speciality:{
            Education:Education,
            Section:Section,
            Department:Department,
            WorkExperience:WorkExperience,
            Designation:Designation,
            dateOfJoin:Date(Date.now()).toString()
        }
    });
    if (result) {
      res.status(201).json({
        acknowledged: true,
        EmployeeId: result.EmployeeId,
        message:"Data inserted successfully",
        token:generateToken(requestedId)
      });
    } else {
      res.status(400).json({
        acknowledged : true,
        token:generateToken(requestedId),
        message : "Error while inserting data"
      })
    }
    }catch(err){
      res.status(400).json({
        acknowledged : true,
        token:generateToken(requestedId),
        message : err.message
      })
    }
});
module.exports = insertEmployeeData;
