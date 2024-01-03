const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  title: String,
  A: String,
  B: String,
  C: String,
  D: String,
  answer: String,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
