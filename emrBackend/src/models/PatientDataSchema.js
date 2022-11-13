const mongoose = require('mongoose');
const patientShema = mongoose.Schema({
    PateintID:{
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
        Insurance:{
            type:String,
            required:true,
        },
    },
    Disease:{
        DiseaseName:{
            type:String,
            required:true,
        },
        DiseaseCategoriy:{
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
        }
    },
    other:{
        type:JSON,
    }, 
},
{
    timestamps: true,

});

const Pateint = mongoose.model('Patient', patientShema)

module.exports = Pateint;