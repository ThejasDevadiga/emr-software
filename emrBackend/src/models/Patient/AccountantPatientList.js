const mongoose = require('mongoose');
const AccountantPatientShema = mongoose.Schema({
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
    })

const AccountPatientList = mongoose.model('AccountantPatientList', AccountantPatientShema)

module.exports = AccountPatientList;