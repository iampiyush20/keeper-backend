const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('./Db/Config');
const app=express();
app.use(cors());
app.use(express.json());
// const PORT=process.env.PORT || 5000;
const Task= require('./Db/Task');

app.post('/api/task',async(req,res)=>{
 const tdata=new Task(req.body);
 try{
    tdata.save((e)=>{
        res.json({
            msg:'user created',
            data:req.body
        })
        console.log(tdata);
     })
 }catch(e){
    console.log(e);
 }
})


console.log('data from herr')
Task.find((e,data)=>{
    console.log(data);
})
// get data from body


app.get('/api/gettask',async(req,res)=>{
 const tasks=await Task.find();
 if(tasks!==""){
    res.json({
        msg:"found hureee",
        data:tasks
    });
 }else{
    res.json("no task found!");
 }
})

// delete the task............................

 app.delete('/api/deltask/:id',async(req,res)=>{
   const deltask=await Task.deleteOne({_id:req.params.id});
res.json({
    msg:"deleted",
    data:deltask
}); 
})


//.........................................................

app.get('/',(req,res)=>{
    res.send('backend connected successfully !')
})

app.listen(3002,()=>console.log('server is running'));