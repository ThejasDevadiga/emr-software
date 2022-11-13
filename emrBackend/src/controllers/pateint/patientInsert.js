const PatientShema = require('../../models/PatientDataSchema')
const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const insertPatientData = asyncHandler(async (req, res) => {
    const { 
      requestId,
        PatientId,
        Fname,
        Mname,
        Lname,  
        DateOfBirth,
        Email,
        Phone,
        Gender,
        Age,
        Address,
        City,
        State,
        Country,
        Zip,
        AdharNumber,
        BloodGroup,
        Insurance,
        DiseaseName,
        Category,   
    } = req.body;
    const findPatient = await PatientShema.findOne({PatientId});
    if (findPatient) {
      res.status(403).json({
        acknowledged : true,
        message : 'Patient already exists',
        token : generateToken(requestId)
      })
    }
    const result = await PatientShema.inserOne({
        PatientId: generateId('PAT'),
        Basic:{
            Fname:Fname,
            Mname:Mname,
            Lname:Lname,
            DateOfBirth:DateOfBirth,
            Email:Email,
            Phone:Phone,
            Gender:Gender,
            Age:Age,
            Address:Address,
            City:City,
            State:State,
            Country:Country,
            Zip:Zip
        },
        Document:{
            AdharNumber:AdharNumber,
            BloodGroup:BloodGroup,
            Insurance:Insurance
        },
        Disease:{
            DiseaseName:DiseaseName,
            Category:Category
        }
    });
    if (result) {
      res.status(201).json({
        _id: result._id,
        acknowledged: true,
        PatientId: result.PatientId,
        token:generateToken(requestId)
      });
    } else {
      res.status(400).json({
        acknowledged : true,
        token:generateToken(requestId),
        message : err.message
      })
    }
});
module.exports = insertPatientData;
