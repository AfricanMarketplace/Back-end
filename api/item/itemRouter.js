const express = require('express');
const router = express.Router();
const qs = require('./itemModel.js');

const tokenCheck = require("../auth/restricted.js")



router.get('/', (req,res)=>{
    qs.getAll()
    .then(items=>{
        res.status(200).json({items})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.get('/:id', (req,res)=>{
    const id = req.params.id;

    qs.getById(id)
    .then(item=>{
        res.status(200).json({item})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.post('/', tokenCheck.tokenMatchesUserIdProperty, (req,res)=>{
    const body = req.body;
    qs.addItem(body)
    .then(id=>{
        res.status(200).json({id})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.put("/:id", tokenCheck.tokenMatchesUserIdProperty, (req,res)=>{
    const body = req.body;
    const id = req.params.id;

    qs.editItem(id, body)
    .then(id=>{
        res.status(200).json({id})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

router.delete("/:id", (req,res)=>{
    const id = req.params.id;

    qs.deleteItem(id)
    .then(status=>{
        if(status === 1){
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

module.exports = router;