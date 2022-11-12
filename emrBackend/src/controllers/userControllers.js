// const dotenv = require("dotenv");
// const User = require("../models/useModel");
// const Contact = require("../models/contactModel");
// const InsEvent = require("../models/eventModel");
// const Faculty = require("../models/facultyModel");
// const InsFacility = require("../models/facilityModel");
// const Enroll = require("../models/enrollModel");
// const Course = require("../models/courseModel");
// const asyncHandler = require("express-async-handler");
// const generateToken = require("../utils/generateToken");
// dotenv.config();


// const registerUser = asyncHandler(async (req, res) => {
//     const { adminName, adminEmail, password, adminImage } = req.body;
//     const UserExists = await User.findOne({ adminEmail });
//     if (UserExists) {
//       res.status(400);
//       throw new Error("User already exists");
//     }
//     const user = await User.create({
//       adminName,
//       adminEmail,
//       password,
//       adminImage,
//     });
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
// });

// const addFacility = asyncHandler(async (req, res) => {
//   const { facilityName, facilityContent, facilityImage } = req.body;
//   const FacilityExists = await InsFacility.findOne({ facilityName });
//   if (FacilityExists) {
//     res.status(400);
//     throw new Error("Facility already exists");
//   }
//   const facility = await InsFacility.create({
//     facilityName,
//     facilityContent,
//     facilityImage,
//   });
//   if (facility) {
//     res.status(201).json({
//       _id: facility._id,
//       facilityName: facility.facilityName,
//       facilityContent: facility.facilityContent,
//       facilityImage: facility.facilityImage,
//       token: generateToken(facility._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Error occurred!!!");
//   }
// });

// const addEvents = asyncHandler(async (req, res) => {
     
//   const { eveName, eveContent, eveImage } = req.body;
//   // const EventExists = await InsEvent.findOne({ eveName });
//   // if (EventExists) {
//   //     res.status(400);
//   //     throw new Error("Event already exists");
//   // }
//   const event = await InsEvent.create({
//     eveName,
//     eveContent,
//     eveImage,
//   });
//   if (event) {
//     res.status(201).json({
//       _id: event._id,
//       eveName: event.eveName,
//       eveContent: event.eveContent,
//       eveImage: event.eveImage,
//       token: generateToken(event._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Error occurred!!!");
//   }
// });

// const addCourse = asyncHandler(async (req, res) => {
     
//   const {
//     CourseName,
//     CourseType,
//     courseDuration,
//     CourseDesc,
//     CourseEligibility,
//     CourseImage,
//   } = req.body;

//   const course = await Course.create({
//     CourseName,
//     CourseType,
//     courseDuration,
//     CourseDesc,
//     CourseEligibility,
//     CourseImage,
//   });
//   if (course) {
//     res.status(201).json({
//       _id: course._id,
//       CourseName: course.CourseName,
//       token: generateToken(course._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Error occurred!!!");
//   }
  
// });

// const authUser = asyncHandler(async (req, res) => {
     
//   const { adminEmail, password } = req.body;
//   const user = await User.findOne({ adminEmail });

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       adminEmail: user.adminEmail,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid Email or password");
//   }
  
// });

// const registerContact = asyncHandler(async (req, res) => {
     
//   const {
//     fname,
//     sname,
//     lname,
//     email,
//     country,
//     state,
//     phone,
//     subject,
//     comment,
//   } = req.body;
//   const ContactExist = await Contact.findOne({ email });
//   if (ContactExist) {
//     res.status(400);
//     throw new Error("Contact  already exists");
//   }
//   const contact = await Contact.create({
//     fname,
//     sname,
//     lname,
//     email,
//     country,
//     state,
//     phone,
//     subject,
//     comment,
//   });
//   if (contact) {
//     res.status(201).json({
//       _id: contact._id,
//       fname: contact.fname,
//       sname: contact.sname,
//       lname: contact.lname,
//       email: contact.email,
//       country: contact.country,
//       state: contact.state,
//       phone: contact.phone,
//       subject: contact.subject,
//       comment: contact.comment,
//       token: generateToken(contact._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Error occurred!!!");
//   }
  
// });

// const enrollData = asyncHandler(async (req, res) => {
     

//   const { fname, mname, lname, email, country, state, phone, subject } =
//     req.body;
//   const EnroleExist = await Enroll.findOne({ email });
//   if (EnroleExist) {
//     res.status(400);
//     throw new Error("Contact  already exists");
//   }
//   const enroll = await Enroll.create({
//     fname,
//     mname,
//     lname,
//     email,
//     country,
//     state,
//     phone,
//     subject,
//   });
//   if (enroll) {
//     res.status(201).json({
//       _id: enroll._id,
//       fname: enroll.fname,
//       mname: enroll.mname,
//       lname: enroll.lname,
//       email: enroll.email,
//       country: enroll.country,
//       state: enroll.state,
//       phone: enroll.phone,
//       subject: enroll.subject,
//       token: generateToken(enroll._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Error occurred!!!");
//   }
  
// });  
// const addFaculty = asyncHandler(async (req, res) => {
//   const {
//     fname,
//     mname,
//     lname,
//     email,
//     phone,
//     department,
//     designation,
//     location,
//     facimage,
//   } = req.body;
//   const FacultyExists = await Faculty.findOne({ email });
//   if (FacultyExists) {
//     res.status(400);
//     throw new Error("Faculty  already exists");
//   }
//   const faculty = await Faculty.create({
//     fname,
//     mname,
//     lname,
//     email,
//     phone,
//     department,
//     designation,
//     location,
//     facimage,
//   });
//   if (faculty) {
//     res.status(201).json({
//       _id: faculty._id,
//       fname: faculty.fname,
//       sname: faculty.mname,
//       lname: faculty.lname,
//       email: faculty.email,
//       phone: faculty.phone,
//       designation: faculty.country,
//       department: faculty.department,
//       location: faculty.location,
//       facimage: faculty.facimage,
//       token: generateToken(faculty._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Error occurred!!!");
//   }
  
// });

// module.exports = {
//   registerUser,
//   authUser,
//   registerContact,
//   addEvents,
//   addFaculty,
//   addFacility,
//   enrollData,
//   addCourse,
// };
