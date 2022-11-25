const mongoose = require('mongoose');
const ChemistList = mongoose.Schema({
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


const ChemistLists = mongoose.model('ChemistList', ChemistList)

module.exports = ChemistLists;