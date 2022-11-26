const mongoose = require('mongoose');
const BillingPatientList = mongoose.Schema({
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

const BillingPatientLists = mongoose.model('BillingPatientList', BillingPatientList)

module.exports = BillingPatientLists;