const mongoose = require('mongoose');
const AccountantPatientShema = mongoose.Schema({
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
    })

const AccountPatientList = mongoose.model('AccountantPatientList', AccountantPatientShema)

module.exports = AccountPatientList;