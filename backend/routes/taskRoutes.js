const express=require('express')
const outer=express.Router()
const {createtask,getTask,getTaskOne,updateTask,deleteTask, patchTask}=require('../controllers/taskcontroller')
const {protect} =require('../middleware/authmiddleware.js')
outer.post('/createtask',protect,createtask)
outer.get('/gettask',protect,getTask)
outer.get('/gettaskOne/:id',protect,getTaskOne)
outer.put('/updatetask/:id',protect,updateTask);
outer.delete('/deletetask/:id',protect,deleteTask);
outer.patch('/patch/:id',protect,patchTask)
module.exports= outer