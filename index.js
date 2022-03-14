const express = require('express');

const app = express();


app.get('/',(req,res)=>{
   
    res.send("Hi This is CloudNative App using NodeJs");
});

app.get('/hello',(req,res)=>{
    res.send("Hello, My name is Venkata Lakshmi Hima Bindhu")
})

app.listen(8081,()=>{
    console.log('Server is running in port 8081');
})