const express = require('express');
const app =express();
const cors =require('cors');
const { MongoClient } = require('mongodb'); 

async function mongoConnect() {
   let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   await client.connect();
   db = client.db('jyothi');
  ;
}

app.use(cors())
app.use(express.json())  //data conversion from binary to normal

app.get('/user', async function(req,res)
{
   let output = await db.collection('user').find({}).toArray();
    res.json(output);
})
app.get('/calculator', function(req , res)
{
   let num1=req.body.num1;
   let num2=req.body.num2;
   let operator=req.body.operator;
   let result=0;
   res.json(result);
})

app.listen(2000, function()
{
    console.log('server listening on port 2000');
    mongoConnect()
})