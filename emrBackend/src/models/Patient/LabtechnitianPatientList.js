const mongoose = require('mongoose');
const LabTechPatientShema = mongoose.Schema({
    PatientID:{
        type:String,
        required:true,
        unique:true
    },
    Status:{
        type:String,
        required:true
    }
},
{
    timestamps: true,
});

const LabTechPatientList = mongoose.model('LabTechPatientList', LabTechPatientShema)

module.exports = LabTechPatientList;