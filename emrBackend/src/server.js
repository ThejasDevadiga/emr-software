const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");



const AccountantRoutes = require("./routes/accountant/AccountantRoutes");
const AdmissionRoutes = require("./routes/AdmissionDesk/AddmissionRoutes");
const AppointmentRoutes = require("./routes/Appointment/AppointmentRoutes");
const ConsultantRoutes = require("./routes/Consultant/ConsultantRoutes");
const HelpDeskRoutes = require("./routes/helpdesk/HelpDeskRoutes");
const LaboratoryRoutes = require("./routes/laboratory/labTechnitianRoutes");
const ManagerRoutes = require("./routes/manager/ManagerRoutes");
const PharmacyRoutes = require("./routes/pharmacy/PharmacyRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();

connectDB();

const app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());


app.use('/',AccountantRoutes)
app.use('/',AdmissionRoutes)
app.use('/',ConsultantRoutes)
app.use('/',HelpDeskRoutes)
app.use('/',ManagerRoutes)
app.use('/',PharmacyRoutes)
app.use('/',AppointmentRoutes)
app.use('/',LaboratoryRoutes)


app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

console.log("http://localhost:5000/");

app.listen(PORT, console.log(`Server port ${PORT}`));
