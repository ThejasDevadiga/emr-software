const PatientShema = require('../../models/Patient/PatientDataSchema')
const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const PatientDocuments = require('../../models/Patient/PatientDocuments')
const authFileUpload = require('../../middlewares/authMiddlewares')
// const updatePatientData  = asyncHandler(async (req, res, next) => {
//     res.status(200).json({
//         acknowledged : true,
//         message : 'Data Added Successfully',
//         token: generateToken(requestedId)
//     })
//   })
const generateId = require('../../utils/GenerateId')

const updatePatientData = asyncHandler(async (req, res, next) => {
    const {
        requestedId,
        PatientId,
        updateBasic,
        updateDocument,
        updateDisease,
    } = req.body
    try{
        const Findresult = await PatientShema.findOne({PatientID:PatientId})
    console.log(Findresult);
        if (!Findresult){
        res.status(400).json({
            acknowledged: false,
            data: "Patient not found!",
            token:generateToken(requestedId)
        })
    } 
    const updatedBasic = Object.assign(Findresult.Basic,updateBasic)
    const updatedDisease = Object.assign(Findresult.Disease,updateDisease)
    var UpdatedDocs = Object.values(Findresult.Documents)
    UpdatedDocs.push(updateDocument)
        const Updateresult = await PatientShema.updateOne(
                                                     {PatientID:PatientId},
                                                    {
                                                        $set:
                                                            {
                                                                Basic:updatedBasic,
                                                                Disease:updatedDisease,
                                                                Documents:UpdatedDocs
                                                            }
                                                    })
        
                                                    if(Updateresult){
            res.status(201).json({
                acknowledged: true,
                PatientId: result.PatientId,
                token:generateToken(requestedId)
                })
            }
        else{
            res.status(400).json({
                acknowledged: false,
                message: "Error while updating data",
                token:generateToken(requestedId)
                })
        }
}
    catch(err){
        res.status(400).json({
          acknowledged : true,
          token:generateToken(requestedId),
          message : err.message
        })
      }
})

const uploadPatientDocument =  asyncHandler(async(req,res,next)=>{
    try{

      const authresult = authFileUpload(req)
      if(authresult !==true){
       throw new Error(authresult)
      }
    if (req.file === undefined ) {
       throw new Error("No files were uploaded")
   }
   const imgUrl = `http://localhost:5000/api/files/${req.file.filename}`
   const {
    requestedId,
       PatientId,
       DocumentName,
       DocumentType,
       
   } = req.body
   var Findresult = await PatientShema.findOne({PatientID:PatientId})
    // console.log(Findresult);
        if (!Findresult){

            throw new Error("Patient not found!")
    }
   var DocResult = await PatientDocuments.create(
                                                    {
                                                        DocumentID: generateId("DOC"),
                                                        PatientId:PatientId,
                                                        DocumentName:DocumentName,
                                                        DocumentType:DocumentType,
                                                        DocumentUrl:imgUrl,
                                                    })
    if (!DocResult){
        throw new Error("Error while inserting patient document")
    } 
    var UpdatedDocs = Object.values(Findresult.Documents)
    UpdatedDocs.push(DocResult.DocumentID )
    console.log("Updated docs: " , UpdatedDocs);
    const PatientDataresult = await PatientShema.updateOne(
                                                            {PatientID:PatientId},
                                                            {
                                                                $set:{
                                                                    Documents:UpdatedDocs,
                                                                }
                                                            })
    if (!PatientDataresult){
        throw new Error("Error while updating patient document")
    }
    console.log(PatientDataresult);
   return res.send({
       acknowledged : true,
       generateToken : generateToken(requestedId),
       url:PatientDataresult.Documents
   })
   
  } catch (err) {
       return res.status(400).json({
           message: err.message,
           acknowledged: true
       })
   }
  })

module.exports = {updatePatientData,uploadPatientDocument}
