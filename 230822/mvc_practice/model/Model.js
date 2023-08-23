const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

const students = [
  {
    id: 1,
    name: "홍길동",
    gender: "남",
    dept: "컴퓨터공학과",
  },
  {
    id: 2,
    name: "김재현",
    gender: "남",
    dept: "경영학과",
  },
  {
    id: 3,
    name: "박남희",
    gender: "여",
    dept: "심리학과",
  },
  {
    id: 4,
    name: "이영훈",
    gender: "남",
    dept: "기계공학과",
  },
  {
    id: 5,
    name: "정우연",
    gender: "여",
    dept: "화학과",
  },
];
module.exports = students;
