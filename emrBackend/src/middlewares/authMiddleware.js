const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  try {
   // console.log("Request from :", req.headers.authorization);
    if (req.headers.authorization == undefined) {
      throw new Error("Authentication failed!");
    }
    const token = req.headers.authorization.split(" ")[0];
    // console.log("Token :",token);
    const decodedToken = jwt.verify(token, "ACAHS", { algorithms: ["HS256"] });
    // console.log("Decoded token : ",decodedToken);
    const userId = decodedToken.id;
    // console.log("ID : ",req.body.id);
    if (req.body.userId && req.body.id !== id) {
      console.log("ID : ", req.body.id);
      console.log("Authentication Unsuccessfull!");
      throw "Invalid user ID";
    } else {
      //  console.log("Authentication Successfull!");
      next();
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      //   console.log("Expired token used!");
      res.status(400).json({
        error: "Token expired!",
      });
    } else {
      //  console.log("ERROR : ",e);
      res.status(400).json({
        error: "Invalid request!",
      });
    }
  }
};
