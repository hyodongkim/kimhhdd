const express = require('express');
const app = express({xPoweredBy:false});
const upload = require('./file');

app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(require('./setting'));

// 미들웨어에서 제어 -> 파일 다운로드 제한

app.post('/upload/single', upload.single("file"), (req,res,next)=>{
    console.log(req.file);
    res.redirect("/");
});
app.post('/upload/array', upload.array("file", 5), (req,res,next)=>{
    console.log(req.files);
    res.redirect("/");
});
app.post('/upload/fields', upload.fields([{name:"file",maxCount:5}]), (req,res,next)=>{
    console.log(req.files);
    res.redirect("/");
});
app.post('/upload/none', upload.none(), (req,res,next)=>{
    res.redirect("/");
});
app.post('/upload/any', upload.any(), (req,res,next)=>{
    console.log(req.files);
    res.redirect("/");
});

app.get('/uploads', (req,res,next)=>{
    res.render('uploads');
})

app.post((req,res,next)=>{
    res.send("test ok");
});

module.exports = app;