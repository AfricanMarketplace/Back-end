const express = require('express');
const qs = require("./user-Model.js");
const router = express.Router();

const bcrypt = require('bcrypt');


//user CRUD***************************************************
router.get('/', (req,res)=>{
    console.log("Hi there")
    qs.getAllusers()
    .then(users=>{
        res.status(200).json({users})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })

})

router.get("/:id",(req,res)=>{
    const id = req.params.id;
    qs.getUser(id)
    .then(user=>{
        res.status(200).json({user})

    })
    .catch(err=>{
        
        res.status(404).json({err})
    })
})


router.delete('/:id', (req,res)=>{
   const id = req.params.id;
    qs.deleteUser(id)
    .then(status=>{
        if(status ===1){
            status = "true"
        }else{
            status = "false"
        }
        res.status(200).json({status})
    })
    .catch(err=>{
        res.status(500).json({err})
    })

})

router.put("/:id", (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    if(body.password){
        bcrypt.hash(body.password, 8,(err,hash)=>{
            body.password = hash
            
            qs.editUser(id, body)
            .then(id=>{
                res.status(200).json({id})
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({err})
            })
        })
    }else{

        qs.editUser(id, body)
        .then(id=>{
            res.status(200).json({id})
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({err})
        })
    }
    
})



module.exports = router;