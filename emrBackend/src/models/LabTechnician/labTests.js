const mongoose = require('mongoose');
const labTests = mongoose.Schema({
    labtestID:{
        type:String,
        required:true,
        unique:true
    },
    testname:{
        type:String,
        required:true,
    },
    departmentId:{
        type:String,
        required:true,
    },
    technicianId:{
        type:Array,
        required:true
    },
    Desc:{
        type:String,
        required:true,
    },
    cost:{
        type:Number,
        required:true
    }
},
{
    timestamps: true,
});


const LabTests = mongoose.model('LabTests', labTests)

module.exports = LabTests;