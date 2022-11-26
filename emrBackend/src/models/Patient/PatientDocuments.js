const mongoose = require('mongoose');
const PatientDocumentList = mongoose.Schema({
    PatientID:{
        type:String,
        required:true,
        unique:true
    },
    Adhar:{
        AdharNumber:{
            type:Number,
            required:true,
        },
    },

},
{
    timestamps: true,
});


const PatientDocumentsList = mongoose.model('PatientDocumentList', PatientDocumentList)

module.exports = PatientDocumentsList;