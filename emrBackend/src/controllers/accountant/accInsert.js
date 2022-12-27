const generateToken = require('../../utils/generateToken')
const asyncHandler = require("express-async-handler");
const Transaction = require('../../models/Hospital/Transactions')


const uploadTransaction  = asyncHandler(async (req, res, next) => {
    const requestedId = req.body
    try{  
    const {
        transaction_id,
        transaction_type,
        account_number,
        amount,
        status,
        created_at,
        updated_at,
        Comment,
        patient_id,
        transaction_holder,  
      } = req.body;
      const findTransaction = await Transaction.findOne({PatientID:PatientId});
      if (findTransaction) {
          throw new Error(  "Transaction  already exists in Transaction details!!"
          )
      }
     
      const result = await Transaction.create({
        transaction_id :transaction_id,
        transaction_type:transaction_type,
        account_number:account_number,
        amount:amount,
        status:status,
        created_at:created_at,
        updated_at:updated_at,
        Comment:Comment,
        patient_id:patient_id,
        transaction_holder:transaction_holder,
      });
      if (result) {
            res.status(200).json({
                acknowledge:true,
                token:generateToken(requestedId),
                message:"Successfully inserted into Transactions!!"
            })
      } else {
        throw new Error("Error occured while Inserting the data to PatientDetails")
      }
      }catch(err){
        console.log(err.message);
        res.status(400).json({
          acknowledged : true,
          token:generateToken(requestedId),
          message : err.message
        })
      }
  
})

const uploadReport  = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        acknowledged : true,
        message : 'Data Added Successfully',
        token: generateToken(requestedId)
})
})

module.exports = {
    uploadTransaction,
    uploadReport
}
