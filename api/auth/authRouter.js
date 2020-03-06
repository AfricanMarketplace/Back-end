const express = require('express');

const bcrypt = require('bcrypt');
const db = require("./authModel.js");
const jwt = require('jsonwebtoken');

const router = express.Router();



router.post('/register', (req,res)=>{
    const body = req.body;

    bcrypt.hash(body.password, 8, (err, hash)=>{
        body.password = hash;

        db.addUser(body)
        .then((user)=>{
            res.status(200).json({user})
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json({err})
        })
    })
    
})

router.post('/login', (req,res)=>{
    const body = req.body;

    db.Login(body)
    .then((user)=>{
        bcrypt.compare(body.password, user.password,(err,response)=>{
            if(user && response){
                const token = signToken(user)
                res.status(200).json({
                    token,
                    message: `welcome ${user.username}`,
                    id: user.id})
            }else{
                res.status(500).json({message:"invalid credentials"})
            }
        })
    })
})

function signToken(user){

    const payload={
        Fulluser: user.id
    }

    const key = process.env.TOKEN_SECRET;

    const options={
        expiresIn: '1h'
    }

    return jwt.sign(payload, key, options)
}

module.exports = router;