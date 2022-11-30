const mongoose = require('mongoose');
const PatientDocumentList = mongoose.Schema({
    DocumentID:{
        type:String,
        required:true,
        unique:true
    },
    PatientId:{
        type:String,
        required:true,
    },
    DocumentName:{
            type:String,
            required:true,
    },
    DocumentUrl:{
        type:String,
        required:true,
    },
    DocumentType:{
        type:String,
        required:true,
        default:"Image",
    }
},
{
    timestamps: true,
});


const PatientDocumentsList = mongoose.model('PatientDocumentList', PatientDocumentList)

module.exports = PatientDocumentsList;