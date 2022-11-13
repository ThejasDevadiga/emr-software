const PatientShema = require('../../models/PatientDataSchema')

const deletePatientData = asyncHandler(async (req, res) => {
    var patId = req.param.PatientId
    if (!patId) {
        res.status(400).json({
            acknowledged: true,
            token:generateToken(PatientId),
            message:"PatientId does not exist"})
    }
})
