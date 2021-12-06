const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  likes: { String }, // ["apple", "banana"]
  createdDate: { type: Date, default: new Date() },
});

module.exports = mongoose.model("user", userSchema);
