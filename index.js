const express =require('express')
const app =express();
const port = process.env.PoRT || 5000;


app.get('/', (req, res) =>{
    res.send('Course Api Running');
});

app.listen(port, () => {
    console.log('Course server Running on port', port);
}) 