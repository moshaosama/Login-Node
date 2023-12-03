const express = require("express");
const { Api } = require("./Api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/todoList", (req, res) => {
  const NewData = Api;
  NewData.push({
    Name: req.body.Name,
  });
});

app.get("/todoList", (req, res) => {
  res.json({ Api });
});

app.listen(5000, () => {
  console.log("listening on Port 5000");
});

/* Vercel 123*/
// MongoUrl = mongodb+srv://MernVercel:Vercel 123@cluster0.35ayfbj.mongodb.net/?retryWrites=true&w=majority
