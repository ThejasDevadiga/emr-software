const mongoose = require('mongoose');

const transactions = mongoose.Schema({
    transaction_id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    transaction_type: {
        type: String,
        required: true,
    },
    account_number:{
        type: String,
        required: true    
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
        max: 100000000
    },
    status: {
        type: String,
        required: true,
        enum: ['pending','success', 'failed'],
        default: 'pending'
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        require: true,
        default: Date.now
    },
    Comment:{
        type:String,
        require: true,
        default: ''
    },
    patient_id: {
        type: String,
        required: true,
    },
    transaction_holder: {
        type: String,
        required: true
    }
})


const Transactions = mongoose.model('Transactions', transactions)

module.exports = Transactions;