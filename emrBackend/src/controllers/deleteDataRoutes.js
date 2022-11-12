const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
const InsEvent = require("../models/eventModel");
const Faculty = require("../models/facultyModel");
const InsFacility = require("../models/facilityModel")
const Contact = require("../models/contactModel");
const User = require("../models/useModel");
const Enroll = require('../models/enrollModel')
const Course = require("../models/courseModel");
dotenv.config();

// const username = process.env.API_USERNAME
// const password = process.env.API_USERPASS

// const delFaculty = async(req, res, next) => {
       
//         const id = req.params.id;
//         await Faculty.findByIdAndRemove(id).exec();
        
//         res.send({
//       ok: true,
//       message: "successfully deleted"
//      })
// }
   
// const delContact = async(req, res, next) => {   
//         const id = req.params.id;
//         await Contact.findByIdAndRemove(id).exec();
//         res.send({
//       ok: true,
//       message: "successfully deleted"
//      })  
//    }

//  const delEnroll =  async(req, res, next) => {
//         const id = req.params.id;
//         await Enroll.findByIdAndRemove(id).exec();
        
//         res.send({
//       ok: true,
//       message: "successfully deleted"
//      }) 
//    }

//  const delEvent = async(req, res, next) => {
//         const id = req.params.id;
//         await InsEvent.findByIdAndRemove(id).exec();
//         res.send({
//       ok: true,
//       message: "successfully deleted"
//      })    
//    }

// module.exports = {
//     delFaculty,
//     delContact,
//     delEnroll,
//     delEvent
// };
