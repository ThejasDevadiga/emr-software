const mongoose = require('mongoose');
const employeeShema = mongoose.Schema({
    Basic:
    {
        EmployeeID:{
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
        Experience:{
            type:String,
            required:true,
        },
        Designation:{
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
        required:true, 
    }, 
},
{
    timestamps: true,

});

const Employee = mongoose.model('Patient', employeeShema)

module.exports = Employee;