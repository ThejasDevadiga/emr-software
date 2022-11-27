const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/uploadFiles");
const generateToken = require("../../utils/generateToken");

router.post("/upload", upload.single("file"), async (req, res) => {
    try{
    if (req.file === undefined) {
        throw new Error("No files were uploaded")
    }
    const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
    return res.send({
        acknowledged : true,
        generateToken : "TOken",
        url:imgUrl
    });
    } catch (err) {
        return res.status(400).json({
            message: err.message,
            acknowledged: true
        })
    }
});

module.exports = router;