const express = require('express');
const router = express.Router();
    router.put('/',(req,res,next)=>{
        res.render('user/page');
    });

    router.put('/profile',(req,res,next)=>{
        res.render('user/profile');

    });

    module.exports = router;