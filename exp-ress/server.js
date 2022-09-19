const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/about", function (req, res) {
  res.send("I Shall Take Over The World From Here");
});

app.listen(3000, function () {
  console.log("Port 3000 has started");
});
