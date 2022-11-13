const mongoose = require('mongoose');
const DrugOrderDetails = mongoose.Schema({
    drugId: {
        type: String,
        required: true,
    },
    OrderDetails:{
        OrderedQuantity: {
            type: Number,
            required: true,
            
        },
        OrderdDate:{
            type: String,
            required: true,
            
        },
        sellerName:{
            type: String,
            required: true,
            
        },
        sellerNumber:{
            type: Number,
            required: true,
          
        },
    },
    ManufactureDetails:{
        InnovatorBrand:{
            type:String,
            required:true,
        },
        MFGDate:{
            type:String,
            required:true,
        },
        EXPDate:{
            type:String,
            required:true,
        }
    }
})
module.exports = DrugOrderDetails