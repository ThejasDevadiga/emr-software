const jwt = require('jsonwebtoken');


const generateToken = (id) =>{
    return jwt.sign({id},"EMRSOFTWARE", {
        expiresIn: 30,
    })
};


module.exports= generateToken;
 