const mongoose = require('mongoose');
const PharmacyPatientShema = mongoose.Schema({
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

const PharmPatientList = mongoose.model('PharmacyPatientList', PharmacyPatientShema)

module.exports = PharmPatientList;
