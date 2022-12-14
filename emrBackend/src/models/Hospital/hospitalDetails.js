const mongoose = require('mongoose');
const hospitalDetails = mongoose.Schema({
    EmployeeID:{
        type:String,
        required:true,
        unique:true
    },
    Department:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        required:true,
    }
},
{
    timestamps: true,
});


const HospitalDetails = mongoose.model('hospitalDetails', hospitalDetails)

module.exports = HospitalDetails;