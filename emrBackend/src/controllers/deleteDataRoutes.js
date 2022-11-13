// const express = require('express');
// const router = express.Router()
// const dotenv = require('dotenv');
// const InsEvent = require("../models/eventModel");
// const Faculty = require("../models/facultyModel");
// const InsFacility = require("../models/facilityModel")
// const Contact = require("../models/contactModel");
// const User = require("../models/useModel");
// const Enroll = require('../models/enrollModel')
// const Course = require("../models/courseModel");
// dotenv.config();

// router.get('/deleteuser/:id', function(req, res) { 

//     var db = req.db;

//     var uid = req.params.id.toString();
//     var collection = db.get('usercollection');

//     collection.remove({"_id":uid}, function(err, result) { 
//         res.send( (result === 1) ? { msg: 'Deleted' } : { msg: 'error: '+ err } );
//     });

// });



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
