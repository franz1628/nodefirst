const {response,request} = require('express');
const jwt = require("jsonwebtoken");


const validToken = (req = request, res = response,next ) => {
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            msg : 'token is required'
        });
    }

    try {
        jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    } catch (error) {
        return res.status(401).json({
            msg : 'token no valid'
        });
    }

    
    next();
}

module.exports = {
    validToken
}

