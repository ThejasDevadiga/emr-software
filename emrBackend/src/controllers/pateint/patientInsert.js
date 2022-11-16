const PatientShema = require('../../models/Patient/PatientDataSchema')
const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const insertPatientData = asyncHandler(async (req, res) => {
    const { 
      requestedId,
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
        DiseaseName,
        Category,   
    } = req.body;
    const findPatient = await PatientShema.findOne({PatientId});
    if (findPatient) {
      res.status(403).json({
        acknowledged : true,
        message : 'Patient already exists',
        token : generateToken(requestedId)
      })
    }
    try{
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
        },
        Disease:{
            DiseaseName:DiseaseName,
            Category:Category,
            DiagnosisTime:Date(Date.now()).toString().slice(16,24),
            DiagnosisDate:Date(Date.now()).toString().slice(0,15),
        }
    });
    if (result) {
      res.status(201).json({
        acknowledged: true,
        PatientId: result.PatientId,
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
module.exports = insertPatientData;
