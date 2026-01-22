const jwt =  require('jsonwebtoken')
exports.protect =(req,res,next)=>{
// console.log(req.headers);
    let token = req.headers.authorization;
    // console.log(token);
    if(!token || !token.startsWith('Bearer')){
        return res.status(401).json({message :"not authorized"});
    }
    try{
        token = token.split(' ')[1];
        // console.log(token);
const decoded =  jwt.verify(token, process.env.JWT_SECRET);
// console.log(decoded);
req.user = { userid: decoded.id };
next();


    }
    catch(err){
 return res.status(401).json({message :"not authorized", error: err.message});
    }
}