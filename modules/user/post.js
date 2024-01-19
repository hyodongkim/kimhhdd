const express = require('express');
const router = express.Router();
    router.post('/',(req,res,next)=>{
        res.render('user/page');
    });

    router.post('/profile',(req,res,next)=>{
        res.render('user/profile');

    });

    module.exports = router;