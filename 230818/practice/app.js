const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/practice");
app.use("/", router);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
