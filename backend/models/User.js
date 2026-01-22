const mongoose =  require('mongoose')
const User =  mongoose.Schema({
    name:{
        type: String
    },
    eamil:{
        type : String,
        requird : true,
        unique : true
    },
    password :{
         type : String,
        requird : true,
        
    }
})
module.exports = mongoose.model('users',User);