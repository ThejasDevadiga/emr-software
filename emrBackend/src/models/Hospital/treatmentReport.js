const mongoose = require('mongoose');
const treatment = mongoose.Schema({
    treatmentId:{
        type:String,
        required:true,
        unique:true
    },
    treatmentName:{
        type:String,
        required:true,
    },
    consultantName:{
        type:String,
        required:true,
    },
    consultedReportId:{
        type:String,
        required:true
    },
    labtestReportId:{
        type:String,
        required:true
    },
    prescriptionsId:{
        type:String,
        required:True
    },
    date:{
        type:Date,
        default: Date.now()
    }
},
{
    timestamps: true,
});


const Treatment = mongoose.model('TreatmentData', treatment)

module.exports = Treatment;