const codebreaker=require("./codeBreaker");
var instancia=new codebreaker(1 ,"1234");
const express= require('express');
const app=express();


app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');

   // authorized headers for preflight requests
   // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   next();

   app.options('*', (req, res) => {
       // allowed XHR methods  
       res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
       res.send()
 });
});


app.get("/iniciar",(req,res)=>{
 instancia=new codebreaker(req.query.tipo,req.query.numero);    
res.json({respuesta: instancia.secreto.toString()});
})

app.get("/codebreaker",(req,res)=>{  
   res.json({respuesta: instancia.guess(req.query.numero)});
})



module.exports=app;