"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델
// DB에 User 생성
// 아래 세 개 line을 축약한 것
db.User = require("./Muser")(sequelize);
// const model = require("./User");
// const temp = model(sequelize);
// db.User = temp;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
