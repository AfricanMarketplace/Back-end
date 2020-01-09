
const jwt = require('jsonwebtoken');

module.exports = (req,res, next)=>{

    const auth = req.headers.authorization;

    jwt.verify(auth, process.env.TOKEN_SECRET,(err, decoded)=>{
        if(err){
            res.status(401).json({message:"Token not valid"})
        }else{
            next()
        }
    })

}