const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
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
  const User = mongoose.model("Signup", signupSchema);