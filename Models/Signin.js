const mongoose = require("mongoose");

const signinSchema = mongoose.Schema({
    name: String,
    fatherName: String,
    dob: Date,
    branch: String,
    rollNo: String,
    section: String,
    address: String,
    mobileNo: String,
    password: String,
  });
  const User = mongoose.model("Signin", signinSchema);