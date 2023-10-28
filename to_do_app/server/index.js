const express = require("express");
const db = require("./models");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const PORT = 8000;

// app.use(express.static(__dirname + "../../client/todo-app/build"));
// app.use(express.static(__dirname + "../../client/todo-app/build"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/main");
app.use("/", router);

// app.get("/", (req, res) => {
//   res.sendFile("index.html");
// });

let corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));

db.sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
