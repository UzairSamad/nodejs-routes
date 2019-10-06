const express = require("express");
const app = express();

Port = process.env.Port || 3000;

// app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    msg: "It Works get route"
  });
});

app.post("/", (req, res) => {
  res.json({
    success: true,
    msg: "It Works post route"
  });
});

app.put("/", (req, res) => {
  res.json({
    success: true,
    msg: "It works put route"
  });
});

app.delete("/:id", (req, res) => {
  res.json({
    success: true,
    msg: "It Works delete route"
  });
});

app.listen(Port, () => console.log(`Example Api Runnning on port ${Port}`));
