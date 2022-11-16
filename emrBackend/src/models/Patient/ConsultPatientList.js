const mongoose = require('mongoose');
const DoctorPatientShema = mongoose.Schema({
    PatientId:{
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
        Sex:{
            type:String,
            required:true,
        }
    },
    Disease:{
        DiseaseName:{
            type:String,
        },
        Category:{
            type:String,
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
    report:{
        ReportName:{
            type:String,
            
        },
        ReportType:{
            type:String,
         
        },
        ReportDate:{
            type:Date,
          
        },
        ReportTime:{
            type:Date,
            
        },
        ReportDesc:{
            type:String,
         
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

const DoctorPatientList = mongoose.model('DoctorPatientList', DoctorPatientShema)

module.exports = DoctorPatientList;