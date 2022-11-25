const mongoose = require('mongoose');
const ConsultantList = mongoose.Schema({
    EmployeeID:{
        type:String,
        required:true,
        unique:true
    },
    Department:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        required:true,
    }
},
{
    timestamps: true,
});


const PatientDocumentsList = mongoose.model('PatientDocumentList', PatientDocumentList)

module.exports = PatientDocumentsList;