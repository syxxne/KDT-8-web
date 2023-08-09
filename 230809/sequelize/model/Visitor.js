// mysql 미들웨어 가져오기
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Visitor : ", rows);
    callback(rows);
  });
};

exports.writeVisitor = (name, comment, callback) => {
  console.log("name :", name, "comment :", comment);
  const sql = `INSERT INTO visitor(name, comment) VALUES ('${name}', '${comment}');`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};

exports.getVisitor = (id, callback) => {
  console.log("가져올 id : ", id);
  const sql = `SELECT * FROM visitor WHERE id=${Number(id)};`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};

exports.editVisitor = (id, name, comment, callback) => {
  console.log("수정할 id : ", id);
  const sql = `UPDATE visitor SET name='${name}', comment='${comment}'  WHERE id=${Number(
    id
  )};`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};

exports.deleteVisitor = (id, callback) => {
  console.log("삭제할 id : ", id);
  const sql = `DELETE FROM visitor WHERE id=${Number(id)};`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
};
