// const InsEvent = require("../models/eventModel");
// const Faculty = require("../models/facultyModel");
// const InsFacility = require("../models/facilityModel");
// const Contact = require("../models/contactModel");
// const User = require("../models/useModel");
// const Enroll = require("../models/enrollModel");
// const Course = require("../models/courseModel");
// const eligibility = require("../models/eligibilityModel");
// const dotenv = require("dotenv");
// dotenv.config();


// const initialRouter = async (req, res, next) => {
//   res.send({
//     ok: true,
//     message: "Login successful",
//   });
// };

// const eventDataRoute = async (req, res, next) => {
//   InsEvent.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// };

// const courseDataRoute = async (req, res, next) => {
//   Course.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// };

// const facultyDataRoute = async (req, res, next) => {
//   Faculty.find({}, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     }
//     console.log(result);
//     res.send(result);
//   });
// };

// const facilityDataRoute = async (req, res, next) => {
//   InsFacility.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// };

// const contactDataRoute = async (req, res, next) => {
//   Contact.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// };

// const userDataRoute = async (req, res, next) => {
//   User.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// };

// const enrollDataRoute = async (req, res, next) => {
//   Enroll.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// };

// const eligibilityDataRoute = (req, res) => {
//   eligibility.find({}, (err, result) => {
//     if (err) {
//       res.send(err);
//     }
//     res.send(result);
//   });
// }

// module.exports = {
//   initialRouter,
//   eventDataRoute,
//   courseDataRoute,
//   facultyDataRoute,
//   facilityDataRoute,
//   contactDataRoute,
//   userDataRoute,
//   enrollDataRoute,
//   eligibilityDataRoute
// };
