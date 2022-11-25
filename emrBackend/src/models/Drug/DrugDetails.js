const mongoose = require('mongoose');
const DrugDetailSchema = mongoose.Schema({
    DrugId:
    {
            type:String,
            required:true,
    },
    General:{
        genericName:{
            type:String,
            required:true,
        },
        strength:{
            type:String,
            required:true,
        },
        form:{
            type:String,
            required:true,
        },
        AvailableQuantity:{
            type:Number,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        indication:{
            type:String,
            required:true,
        },
        condition:{
            type:String,
            required:true,
        }
    },
},
{
    timestamps: true,
});


const DrugDetails = mongoose.model('DrugDetails', DrugDetailSchema)

module.exports = DrugDetails;