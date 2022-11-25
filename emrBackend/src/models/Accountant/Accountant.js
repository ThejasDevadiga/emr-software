const mongoose = require('mongoose');
const AccountantList = mongoose.Schema({
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


const AccountantLists = mongoose.model('AccountantList', StaffList)

module.exports = AccountantLists;