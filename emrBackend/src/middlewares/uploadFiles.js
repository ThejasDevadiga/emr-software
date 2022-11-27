const multer = require("multer");
const dotenv = require("dotenv");

const {GridFsStorage} = require("multer-gridfs-storage");
dotenv.config();


const storage =  GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `AYURVAS--${Date.now()}-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: "Documents",
            filename: `AYURVAS--${Date.now()}-${file.originalname}`,
        };
    },
    text:(req,text)=>{
        console.log("TEXT",text);
    }
});


module.exports = multer({ storage });