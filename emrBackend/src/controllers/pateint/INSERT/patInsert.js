const dotenv = require("dotenv");
const PatientShema = require('../.././.././models/PatientDataSchema')



const insertPatientData = asyncHandler(async (req, res) => {
    const { 
        PateintID,
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
        Insurance
    } = req.body;
    const findPatient = await PatientShema.findOne({ PateintID });
    if (findPatient) {
      res.status(403);
      throw new Error("User already exists");
    }
    const user = await PatientShema.create({
        Basic:{

        }
    });
//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         adminName: user.adminName,
//         adminEmail: user.adminEmail,
//         password: user.password,
//         adminImage: user.adminImage,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400);
//       throw new Error("Error occurred!!!");
//     }
});