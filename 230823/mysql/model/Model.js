const mysql = require("mysql");

// mysql연결
// createConnection은 단일 연결 (query 하나 실행할 때마다 계속해서 새롭게 DB에 접속해서 데이터를 가져오고, 접속 종료)
// query 수가 많아지거나 접속자 수가 많아지면, 부하 발생
// const conn = mysql.createConnection({
// host: "localhost",
// user: "user",
// password: "1234",
// database: "kdt8",
// port: 3306,
// });

const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
  port: 3306,
  connectionLimit: 30, // 최대 연결 수(기본값은 10)
});

// 문자열 보간 방법
// `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}');`
// 단점
// 1. sql injection 공격 취약
// 2. 문자열에 특수문자가 포함될 경우, 오류가 발생할 수 있음
// prepared statement
// INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)

const db_signup = (data, cb) => {
  // 문자열 보간 방법
  //   const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}');`;
  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db signup", rows);
  //     cb();
  //   });

  // prepared statement
  const query = "INSERT INTO user (userid, pw, name) VALUES (?, ?, ?);";
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("db signup", rows);
    cb();
  });
};

const db_signin = (data, cb) => {
  // 문자열 보간 방법
  // const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}';`;
  // conn.query(query, (err, rows) => {
  //  if (err) {
  //  console.log(err);
  // return;
  // }
  // console.log("db signin", rows);
  // cb(rows);
  // });

  // prepared statement
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?;";
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("db signin", rows);
    cb(rows);
  });
};

const db_userinfo = (data, cb) => {
  const query = "UPDATE user SET pw = ?, name = ? WHERE userid = ?;";
  conn.query(query, [data.pw, data.name, data.userid], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("db userinfo", rows);
    console.log(rows.userid);
    cb();
  });
};

module.exports = {
  db_signup,
  db_signin,
  db_userinfo,
};
