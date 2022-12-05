const mongoose = require('mongoose');
const bedsDetails = mongoose.Schema(
{
    bedId:{
        type:String,
        required:true,
        unique:true
    },
    wardNumber:{
        type:String,
        required:true,
    },
    roomNumber:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    bedType:{
        type:String,
        required:true,
    },
    patientId:{
        type:String,
        required:true, 
    }
},
{
    timestamps: true,
});

const BedsDetails = mongoose.model('BedsDetails', bedsDetails)

module.exports = BedsDetails;