const express = require('express');
router = express.Router();

    require('dotenv').config({path:'config/.env'});
    router.use(require('cookie-parser')(process.env.COOKIE_SECRET));
    router.use((req,res,next)=>{
        res.setCookie=(key,value,age)=>{
            res.cookie(key,value,{
                path:'/',
                domain:req.domain,
                secure: false,
                httpOnly: false,
                signed: true,
                maxAge: age
            });
        };

        res.removeCookie = (key) =>{
            res.clearCookie(key, {
                path:'/',
                domain:req.domain,
                secure: false,
                httpOnly: false,
                signed: true
            });
        };

        res.removeAllCookie = () =>{
            for(let key in req.signedCookies){
            res.clearCookie(key, {
                path:'/',
                domain:req.domain,
                secure: false,
                httpOnly: false,
                signed: true
            })};
        };
        res.totalCookies = {...req.cookies, ...req.signedCookies};
        next();
    });
    router.use(require('cors')({
        origin:`http://localhost:${process.env.PORT}`,
        methods:['get','post'],
        allowedHeaders:['content-Type'],
        exposedHeaders:['content-Type'],
        credentials:true,
        maxAge: 1000* 60 *30
    }));
    router.use(express.json());
    router.use(express.raw());
    router.use(express.text());
    router.use(express.urlencoded({extended:true}));
    router.use('/resources', express.static('resources',{
        dotfiles:"ignore",
        extensions:[], // 비포함 확장자
        fallthrough:true,
        immutable:false,
        maxAge:18000000,
        index:false,
        redirect:false
    }));


    module.exports = router;