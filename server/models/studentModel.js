const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("students", studentSchema);
