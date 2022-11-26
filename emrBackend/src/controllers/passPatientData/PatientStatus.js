const PatientShema = require('../../models/Patient/PatientDataSchema')

const updateStatus =async(PatientId,status)=>{
    try{
    const UpdateResult = await PatientShema.updateOne({PatientID:PatientId},{$set:{Status:status} })
    if (UpdateResult){
        return true
    }
    return false
}
    catch(err){
        console.log(err)
    }
}
module.exports = updateStatus