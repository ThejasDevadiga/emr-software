const dotenv = require("dotenv");
const PatientShema = require('../../models/PatientDataSchema')


const insertPatientData = asyncHandler(async (req, res) => {
    const { 
        PateintId,
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
    const findPatient = await PatientShema.findOne({PateintId });
    if (findPatient) {
      res.status(403);
      throw new Error("User already exists");
    }
    const result = await PatientShema.inserOne({
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
        PateintId: result.PateintId,
        token:generateToken(PateintId)
      });
    } else {
      res.status(400);
      throw new Error("Error occurred!!!");
    }
});
module.exports = insertPatientData

 