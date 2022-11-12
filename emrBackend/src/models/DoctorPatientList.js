const mongoose = require('mongoose');
const DoctorPatientShema = mongoose.Schema({
    Details:
    {
        PatientId:{
            type:String,
            required:true,
            unique:true
        },
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
            required:true,
        },
        DiseaseCategory:{
            type:String,
            required:true,
        },
        AdmittedTime:{
            type:Date,
            required:true,
        },
        AdmittedDate:{
            type:Date,
            required:true,
        },
        DiseaseDesc:{
            type:String,
            required:true,
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
    documents:{
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