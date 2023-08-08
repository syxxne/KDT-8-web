const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.signup = (userid, name, pw, callback) => {
  const sql = `INSERT INTO user(userid, name, pw) VALUES ('${userid}', '${name}', '${pw}');`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};

exports.signin = (userid, pw, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}';`;
  conn.query(sql, (err, result) => {
    var resultString = false;
    console.log(result);

    if (result.length != 0 && result[0].pw == pw) {
      resultString = true;
    }
    callback({ result: result, resultString: resultString });
  });
};

exports.viewProfile = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}';`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};

exports.editProfile = (userid, name, pw, callback) => {
  const sql = `UPDATE user SET name='${name}', pw='${pw}'  WHERE userid='${userid}';`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};

exports.deleteProfile = (userid, callback) => {
  const sql = `DELETE FROM user WHERE userid='${userid}';`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};
