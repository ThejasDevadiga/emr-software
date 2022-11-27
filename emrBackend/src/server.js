const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const auth = require('./middlewares/authMiddleware')



const AccountantRoutes = require("./routes/accountant/AccountantRoutes");
const AdmissionRoutes = require("./routes/AdmissionDesk/AddmissionRoutes");
const AppointmentRoutes = require("./routes/Appointment/AppointmentRoutes");
const ConsultantRoutes = require("./routes/Consultant/ConsultantRoutes");
const HelpDeskRoutes = require("./routes/helpdesk/HelpDeskRoutes");
const LaboratoryRoutes = require("./routes/laboratory/labTechnitianRoutes");
const ManagerRoutes = require("./routes/manager/ManagerRoutes");
const PharmacyRoutes = require("./routes/pharmacy/PharmacyRoutes");
const upload = require("./routes/files/upload")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();

connectDB();

const app = express();

let gfs,gridfsBucket;
const conn = mongoose.connection;
conn.once("open", function () {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'Documents'
      });
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("Documents");
});
 
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use('/file',upload)
app.use('/',AccountantRoutes)
app.use('/',AdmissionRoutes)
app.use('/',ConsultantRoutes)
app.use('/',HelpDeskRoutes)
app.use('/',ManagerRoutes)
app.use('/',PharmacyRoutes)
app.use('/',AppointmentRoutes)
app.use('/',LaboratoryRoutes)

app.get("/file/:filename",auth, async (req, res) => {
    try {
        // console.log(req.params.filename);
        const file = await gfs.files.findOne({ filename: req.params.filename });
        console.log(file);
        const readStream =  gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (error) {
        if (error.isInstanceOf(MongoRuntimeError)){
            res.status(400).send({
                message: "File not found",
            });
        } 
        res.send({error:error.message});
    }
});

app.delete("/file/:filename",auth, async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

console.log("http://localhost:5000/");

app.listen(PORT, console.log(`Server port ${PORT}`));
