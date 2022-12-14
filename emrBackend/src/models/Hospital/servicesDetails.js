const mongoose = require('mongoose');
const servicesDetails = mongoose.Schema({
    serviceID:{
        type:String,
        required:true,
        unique:true
    },
    serviceName:{
        type:String,
        required:true,
    },
    specialistNames:{
        type:Array,
        required:true,
    },
    serviceDescription:{
        type:String,
        required:true
    }
},
{
    timestamps: true,
});


const ServicesDetails = mongoose.model('servicesDetails', servicesDetails)

module.exports = ServicesDetails;