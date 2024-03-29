const express = require("express");
const members = require("./Member");

const app = express();

Port = process.env.Port || 3000;

app.use(express.json({ extended: false }));

// Api For Finding Members
app.get("/:id", (req, res) => {
  // checking if id exists or not it will return true or false
  const found = members.some(member => member.id === parseInt(req.param.id));

  if (found) {
    res.send(members[req.params.id]);
  } else {
    res.json({
      id: req.params.id,
      msg: "Invalid id"
    });
  }
});

app.post("/", (req, res) => {
  res.json({
    success: true,
    msg: "It Works post route"
  });
});

app.put("/", (req, res) => {
  const { username, password } = req.body;
  // console.log(username);
  console.log(req.body);
  if (!username) {
    return res.status(400).json({
      success: false,
      msg: "Please provide username"
    });
  }

  if (username === "rashidbhai" && password === "909090") {
    return res.json({
      success: true,
      msg: "Record updated successfully!"
    });
  }

  return res.status(400).json({
    success: false,
    msg: "Invalid credentials"
  });
});

// app.put("/", (req, res) => {
//   res.json({
//     success: true,
//     msg: "It works put route"
//   });
// });

app.delete("/:id", (req, res) => {
  res.json({
    success: true,
    msg: "It Works delete route"
  });
});

app.listen(Port, () => console.log(`Example Api Runnning on port ${Port}`));
