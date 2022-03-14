const express = require('express');

const app = express();


app.get('/hello',(req,res)=>{
    res.send("Hello, My name is Venkata Lakshmi Hima Bindhu")
})

app.listen(8080,()=>{
    console.log('Server is running in port 8080');
})
