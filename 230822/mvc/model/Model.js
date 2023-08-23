const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "kdt",
  password: "",
  database: "kdt",
  port: 3306,
});

const comments = [
  {
    id: 1,
    userid: "hello",
    date: "2023-08-01",
    comment: "안녕하세요",
  },
  {
    id: 2,
    userid: "happy",
    date: "2023-08-05",
    comment: "반갑습니다",
  },
  {
    id: 3,
    userid: "lucky",
    date: "2023-08-17",
    comment: "행복하세요",
  },
  {
    id: 4,
    userid: "good",
    date: "2023-08-20",
    comment: "좋은 저녁 보내세요",
  },
];

module.exports = comments;
