const express = require('express');
const app = express({xPoweredBy:false});
const upload = require('./image');
const zipupload = require('./zip');

app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(require('./setting'));

// 미들웨어에서 제어 -> 파일 다운로드 제한

app.post('/upload/zip/single', zipupload.single("file"), (req,res,next)=>{
    if(req.file) res.status(200).send("OK");
    else res.status(500).send("FAIL");
});
app.post('/upload/zip/any', zipupload.any(), (req,res,next)=>{
    if(req.file) res.status(200).send("OK");
    else res.status(500).send("FAIL");
});
app.post('/upload/image/single', upload.single("file"), (req,res,next)=>{
    if(req.file) res.status(200).send("OK");
    else res.status(500).send("FAIL");
});
app.post('/upload/image/any', zipupload.any(), (req,res,next)=>{
    if(req.file) res.status(200).send("OK");
    else res.status(500).send("FAIL");
});

app.get('/login', (req,res,next)=>{
    res.render('login');
});

module.exports = app;