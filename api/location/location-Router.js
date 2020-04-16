const express = require('express')
const qs = require("./location-Model.js");
const router = express.Router();

const tokenCheck = require("../auth/restricted.js")

router.get('/', (req,res)=>{
    qs.getAll()
    .then(locations=>{
        res.status(200).json({locations})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    qs.getbyId(id)
    .then(location=>{
        res.status(200).json({location})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.post('/', tokenCheck.tokenMatchesUserIdProperty, (req,res)=>{
    const body = req.body;
    qs.addLocation(body)
    .then(id=>{
        res.status(200).json({id})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.put("/:id", (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    qs.editLocation(id,body)
    .then(id=>{
        res.status(200).json({id})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.delete("/:id", (req,res)=>{
    const id = req.params.id;

    qs.deleteLocation(id)
    .then(status=>{
        if(status ===1){
            status = "true"
        }else{
            status = "false"
        }
        res.status(200).json({status})
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})


module.exports = router;