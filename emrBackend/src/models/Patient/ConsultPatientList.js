const mongoose = require('mongoose');
const ConsultPatientShema = mongoose.Schema({
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
    timestamps: true
});

const ConsultPatient = mongoose.model('ConsultPatient', ConsultPatientShema)

module.exports = ConsultPatient;