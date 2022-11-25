const mongoose = require('mongoose');
const ConsultPatientShema = mongoose.Schema({
    PatientId:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        required:true
    } 
},
{
    timestamps: true
});

const ConsultPatient = mongoose.model('ConsultPatient', ConsultPatientShema)

module.exports = ConsultPatient;