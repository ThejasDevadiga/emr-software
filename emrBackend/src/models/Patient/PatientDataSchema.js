const mongoose = require('mongoose');
const patientShema = mongoose.Schema({
    PatientID:{
            type:String,
            required:true,
            unique:true
    },
    Basic:
    {
        Fname: {
            type: String,
            required: true,
        },
        Mname: {
            type: String,
            default: " "
        },
        Lname: {
            type: String,
            required: true,
        },
        DateOfBirth: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
        },
        phone: {
            type: Number,
            required: true,
        },
        Gender:{
            type:String,
            required:true,
        },
        Age:{
            type:Number,
            required:true,
        },
        Address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        }, 
    },
    Documents:{
        AdharNumber:{
            type:Number,
            required:true,
        },
        BloodGroup:{
            type:String,
            required:true,
        },
    },
    Disease:{
        DiseaseName:{
            type:String,
            required:true,
        },
        Category:{
            type:String,
            required:true,
        },
        DiagnosisTime:{
            type:String,
            default: ''
        },
        DiagnosisDate:{
            type:String,
            default: ''
        },
        DiagnosisDesc:{
            type:String,
            default: ''
        }
    },
    ReportDocuments:{
        doc1:{
            DocumentName:{
                type:String,
            },
            DocImage:{
                data:Buffer,
                contentType:String,
            }
        },
        doc2:{
            DocumentName:{
                type:String,
            },
            DocImage:{
                data:Buffer,
                contentType:String,
            }
        },
        doc3:{
            DocumentName:{
                type:String,
            },
            DocImage:{
                data:Buffer,
                contentType:String,
            }
        },
        doc4 :{
            DocumentName:{
                type:String,
            },
            DocImage:{
                data:Buffer,
                contentType:String,
            }
        },
        doc5 :{
            DocumentName:{
                type:String,
            },
            DocImage:{
                data:Buffer,
                contentType:String,
            }
        }
        
    }

},
{
    timestamps: true,

});

const Patient = mongoose.model('Patient', patientShema)

module.exports = Patient;