
const jwt = require('jsonwebtoken');

exports.restricted = (req,res,next)=>{

    const auth = req.headers.authorization;

    jwt.verify(auth, process.env.TOKEN_SECRET,(err, decoded)=>{
        if(err){
            res.status(401).json({message:"Token not valid"})
        }else{
            next()
        }
    })

}

exports.tokenMatchesUserIdProperty = (req,res,next)=>{

    const auth = req.headers.authorization
    const user_id = parseInt(req.body.user_id)

    jwt.verify(auth, process.env.TOKEN_SECRET, (err, validToken)=>{
        if(err){
            res.status(401).json({error:'not able to validate'})
        }else{
            if(user_id == validToken.user_id){
                next()
            }else{
                res.status(403).json({message:'user trying to access anothers info'})
            }
        }
    })
}