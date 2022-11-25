const mongoose = require('mongoose');
const LabtechnicianList = mongoose.Schema({
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


const LabtechnicianLists = mongoose.model('LabtechnicianList', LabtechnicianList)

module.exports = LabtechnicianLists;