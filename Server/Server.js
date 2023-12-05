const express = require("express");
const { Api } = require("./Api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/Login", (req, res) => {
  const NewList = Api;

  NewList.push({
    email: req.body.email,
    password: req.body.password,
  });
  res.json(NewList);
});

app.get("/Login", (req, res) => {
  res.json(Api);
});

app.listen(5000, () => {
  console.log("listening on Port 5000");
});
