const mongoose = require('mongoose');
const employeeShema = mongoose.Schema({
    EmployeeId:{
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
        Phone: {
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
            line1:{
                type:String,
                required:true,
            },
            line2:{
                type:String,
                required:true,
            },
        },
        City: {
            type: String,
            required: true,
        },
        State: {
            type: String,
            required: true,
        },
        Country: {
            type: String,
            required: true,
        },
        Zip: {
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
    Speciality:{
        Education:{
            type:String,
            required:true,
        },
        Section:{
            type:String,
            required:true,
        },
        Department:{
            type:String,
            required:true,
        },
        WorkExperience:{
            type:String,
            required:true,
        },
        Designation:{
            type:Date,
            required:true,
        },
        DateofJoin:{
            type:String,
            required:Date(Date.now()).toString(),
        }
    },
    other:{
        type:Object, 
        
    }, 
},
{
    timestamps: true,

});

const Employee = mongoose.model('Patient', employeeShema)

module.exports = Employee;