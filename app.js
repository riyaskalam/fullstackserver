const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Rimara!");
});

app.get("/home", (req, res) => {
  res.set("X-Full-Stack", "Jem Young is great");
  res.status(418);
  res.send("I prefer coffee");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
