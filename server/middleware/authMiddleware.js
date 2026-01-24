const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({
                message: "No token provided, authorization denied"
            });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Users.findById(decoded.userId).select('-password');
        
        if (!user) {
            return res.status(401).json({
                message: "authorization denied"
            });
        }
        
        req.user = user; 
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token, authorization denied"
        });
    }
};

module.exports = authMiddleware;
