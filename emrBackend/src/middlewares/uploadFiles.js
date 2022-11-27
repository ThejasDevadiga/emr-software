const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();


const {GridFsStorage} = require("multer-gridfs-storage");

const storage =   GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        console.log(file);
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-AYURVAS-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "Documents",
            filename: `${Date.now()}-AYURVAS-${file.originalname}`,
        };
    },
});

 
module.exports = multer({ storage });