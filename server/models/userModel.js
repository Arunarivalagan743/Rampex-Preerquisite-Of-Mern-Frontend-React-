const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
email: {
    type: String,
    unique: true,
    required: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email']
},
  password: {
    type: String,
    required: true,
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
    required: true,
  },
});
module.exports = mongoose.model("users", userSchema);
