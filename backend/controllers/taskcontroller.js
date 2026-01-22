const jwt = require("jsonwebtoken");
const Tasks = require("../models/Task");
const { get } = require("../routes/authRoutes");
const Task = require("../models/Task");
exports.createtask = async (req, res) => {
  const { title, description, status } = req.body;
  const newTask = await Tasks.create({
    title,
    description,
    status,
    userid: req.user.userid,
  });

  if (newTask) {
    res.status(201).json({ message: "Task created", task: newTask });
  }
};
exports.getTask = async (req, res) => {
  const getTask = await Tasks.find({ userid: req.user.userid });
  if (getTask) {
    res.status(201).json({ message: "Task Retrived", task: getTask });
  }
};
exports.getTaskOne = async (req, res) => {
  console.log(req.params);
  try {
    const getTaskOne = await Tasks.findOne({
      _id: req.params.id,
      userid: req.user.userid,
    });
    if (!getTaskOne) {
      res.status(400).json({ message: "task is not having" });
    }
    res.json(getTaskOne);
  } catch (err) {
    res.status(400).json({ err });
  }
};
exports.updateTask = async (req, res) => {
  console.log(req.params);
  try {
    const updateTask = await Tasks.findOneAndUpdate(
      {
        _id: req.params.id,
        userid: req.user.userid,
      },
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
      { new: true },
    );
    if (!updateTask) {
      res.status(400).json({ message: "Task is Not Updated" });
    } else {
      res.status(200).json({ message: "task is updated", task: updateTask });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.deleteTask = async(req,res)=>{
    console.log('hello');
    
    try{
 const task =  await Tasks.findOneAndDelete({
         _id : req.params.id,
        userid : req.user.userid,
 });

    if(!task) {
      res.status(400).json({ message: "Task is Not having" });
    } else {
      res.status(200).json({ message: "task is deleted", task: task });
    }
 
    }
    catch(err)
    {
        res.status(400).json({message:err});
    }
};

exports.patchTask = async (req, res) => {
    try {
        const updateFields = {};
        
        if (req.body.title) updateFields.title = req.body.title;
        if (req.body.description) updateFields.description = req.body.description;
        if (req.body.status) updateFields.status = req.body.status;

        const patchedTask = await Tasks.findOneAndUpdate(
            {
                _id: req.params.id,
                userid: req.user.userid,
            },
            updateFields,
            { new: true }
        );

        if (!patchedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        res.status(200).json({ message: "Task partially updated", task: patchedTask });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
