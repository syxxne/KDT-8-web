// const mod = require("./module.js");
// console.log(mod);

const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  //   response.writeHead(200);
  //   response.write("<h1>Hello World</h1>");
  //   response.end("<p>End</p>");

  // 파일 전송
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});
server.listen(3333, function () {
  console.log(`localhost:3333포트로 실행`);
});
