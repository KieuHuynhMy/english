const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Question = require("./models/question");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoURL =
  "mongodb+srv://kieu:newpass@cluster0.owdcnyr.mongodb.net/QA?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected "))
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  const questions = await Question.find({});
  res.render("question/index", { questions });
});

app.get("/question/create", (req, res) => {
  res.render("question/create");
});

app.post("/question", async (req, res) => {
  await Question(req.body).save();
  res.redirect("question/create");
  // next();
});

app.listen(3000, () => {
  console.log("Connect to port 3000");
});
