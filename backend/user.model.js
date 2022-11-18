// DB
const mongoose = require("mongoose");

// 스키마 생성
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  goal: { type: String },
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
