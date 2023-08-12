"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델
db.Student = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

// 테이블 관계 형성
// 1:1 학생-프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 1:다 학생-강의, 외래키를 별도로 지정하지 않으면 sequelize가 자동으로 만들어줌
db.Student.hasMany(db.Classes);
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
