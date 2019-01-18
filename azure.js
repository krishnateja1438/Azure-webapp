const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/azure',function (req,res){
    console.log('azure request');
    res.send('this is azure api');
})

app.listen(4000,()=>{
    console.log('azure app running locally');
})