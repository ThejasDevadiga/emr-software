const mongoose = require('mongoose');
const LabTechPatientShema = mongoose.Schema({
    PatientId:{
        type:String,
        required:true,
        unique:true
    }
},
{
    timestamps: true,
});

const LabTechPatientList = mongoose.model('LabTechPatientList', LabTechPatientShema)

module.exports = LabTechPatientList;