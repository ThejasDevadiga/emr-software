const mongoose = require('mongoose');
const PharmacyPatientShema = mongoose.Schema({
    PatientId:{
        type:String,
        required:true,
        unique:true
    }
    
},
{
    timestamps: true,
});

const PharmPatientList = mongoose.model('PharmacyPatientList', PharmacyPatientShema)

module.exports = PharmPatientList;