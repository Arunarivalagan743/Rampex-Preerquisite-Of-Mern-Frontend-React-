const express =  require('express')
const app = express();
const  dotenv =  require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.get('/get',(req,res)=>{
    res.send("huhgfjfgiii");
})
app.post('/post',(req,res)=>
{
    const temp =  req.body;
    res.send(temp);
})
app.listen(5000, ()=>
{
    console.log("server is running on",5000);
})