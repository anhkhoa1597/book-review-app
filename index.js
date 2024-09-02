const express = require("express");

const app = new express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.listen(PORT, () => {
  console.log("Listening at http://localhost:" + PORT);
});
