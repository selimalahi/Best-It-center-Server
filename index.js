const express =require('express')
const app =express();
const port = process.env.PoRT || 5000;


app.get('/', (req, res) =>{
    res.send('Course Api Running');
});

