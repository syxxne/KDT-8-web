const express = require("express");
const app = express();
const PORT = 8008;
const ID = "asdf";
const PASSWORD = "1234";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index3");
});

// axios
app.post("/axios", (req, res) => {
  console.log("back", req.body);
  console.log("back", req.body.id);
  console.log("back", req.body.password);

  if (req.body.id === ID && req.body.password === PASSWORD) {
    res.send("success");
  } else {
    res.send("fail");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
