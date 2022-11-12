const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// const userRoutes = require("./routes/userRoutes");

// const apiRoutes = require("./routes/apiRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();

connectDB();

const app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

// app.use("/", apiRoutes);

// app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

console.log("http://localhost:5000/");

app.listen(PORT, console.log(`Server port ${PORT}`));
