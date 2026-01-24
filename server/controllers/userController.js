const mongoose =  require('mongoose')
const bcrypt =  require('bcryptjs')
const jwt=  require('jsonwebtoken')
const Users =  require('../models/userModel.js');

exports.register = async(req,res)=>{
    try{
    const {name,email,role,isRegistered,password} =  req.body;
    


    const existUser = await Users.findOne({email});
    if(existUser)
    {
      return  res.status(400).json({
            message:"User already exists"
        })
    }
    const hash = await bcrypt.hash(password,10);
    const user =await Users.create({
        name,
        email,
        role,
        isRegistered: true,
        password:hash
    })
    res.status(200).json({message:"User registered successfully"})
}
catch(err)
{
    res.status(500).json({message: err.message})
}
}

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        
          
      
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        
        
        if (!user.isRegistered) {
            return res.status(403).json({
                message: "Account not registered"
            });
        }
        
      
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        
     
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}