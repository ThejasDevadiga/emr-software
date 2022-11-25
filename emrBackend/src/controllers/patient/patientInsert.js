const PatientShema = require('../../models/Patient/PatientDataSchema')
const WaitingSchema = require('../../models/Patient/waitingPatientList')

const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");


const insertPatientData = asyncHandler(async (req, res) => {
  try{  
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
    const findPatient = await PatientShema.findOne({PatientID:PatientId});
    if (findPatient) {
      res.status(403).json({
        acknowledged : true,
        message : 'Patient already exists',
        token : generateToken(requestedId)
      })
    }
   
    const result = await PatientShema.create({
      PatientID:PatientId,
        Basic:{
            Fname:Fname,
            Mname:Mname,
            Lname:Lname,
            DateOfBirth:DateOfBirth,
            Email:Email,
            phone:Phone,
            Gender:Gender,
            Age:Age,
            Address:Address,
            City:City,
            State:State,
            Country:Country,
            Zip:Zip
        },
        Documents:{
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
    
      const findPatient = await WaitingSchema.findOne({PatientID:PatientId},{'_id':0});
      if (findPatient) { 
        res.status(403).json({
          acknowledged : true,
          message : 'Patient data already exist!',
          token : generateToken(requestedId)
        })
      }
      else{
        const insertedResult = await WaitingSchema.create({PatientID:PatientId, Status:"Waiting"}) 
         if (!insertedResult) {
            res.status(403).json({
            acknowledged : true,
            message : 'Error occured while Inserting the data to Waitinglist',
            token : generateToken(requestedId)
          })
         }
         else{      
            res.status(201).json({
            acknowledged: true,
            PatientId: result.PatientId,
            message:"Data inserted successfully",
            token:generateToken(requestedId)
          });
        }
      }
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
})
module.exports = insertPatientData;
