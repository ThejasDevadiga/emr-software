const PatientShema = require('../../models/Patient/PatientDataSchema')
const ConsultPatient = require('../../models/Patient/ConsultPatientList')
const generateId = require('../../utils/GenerateId')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");

const waitingToConsult = asyncHandler(async(req,res) =>{
  res.status(200).json({
                acknowledged : true,
                message : 'Data Added Successfully',
                token: generateToken(requestedId)
  })
  //   const {
  //       requestedId,
  //       PatientId,
  //   } = req.body;
  //   if (!requestedId){
  //       return res.status(400).json({
  //           acknowledged : true,
  //           message : 'Patient already exists',
  //           token : generateToken(requestedId)
  //       })
  //   }
  //   const findPatient = await PatientShema.findOne({PatientId});
  //   if (!findPatient) {
  //     res.status(403).json({
  //       acknowledged : true,
  //       message : 'Patient data not found!',
  //       token : generateToken(requestedId)
  //     })
  //   }
  //   else{
  //     const requestedId = await findPatient.requestedId
  //     const PatientId = await findPatient.PatientId
  //     const basic = await findPatient.Basic;
  //     const Disease = await findPatient.Disease
  //     const insertedResult = await ConsultPatient.insertOne({PatientId: PatientId , Basic:basic,Disease:Disease}) 
  //     if (!insertedResult) {
  //       res.status(403).json({
  //         acknowledged : true,
  //         message : 'Error occured while Inserting the data to Consultantlist',
  //         token : generateToken(requestedId)
  //       })
  //     }
  //     else{
  //       const result = await PatientShema.deleteOne({PatientID:PatientId})
  //       if (!insertedResult) {
  //         res.status(403).json({
  //           acknowledged : true,
  //           message : 'Error occured while Deleting the data from Waiting list',
  //           token : generateToken(requestedId)
  //         })
  //       }
  //       else{
  //           res.status(200).json({
  //             acknowledged : true,
  //             message : 'Data Added Successfully',
  //             token: generateToken(requestedId)
  //       })
  //     }
  //   }
  // }
})