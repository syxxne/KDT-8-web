const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 웹쇼켓 서버 접속 (포트만을 이용)
// const wss = new ws.Server({ port: PORT });
// 웹소켓 서버 접속 (HTTP 서버에 접속)
const wss = new ws.Server({ server });

const sockets = [];

// socket 변수는 접속한 브라우저
wss.on("connection", (socket) => {
  console.log("클라이언트가 연결되었습니다.");

  sockets.push(socket);

  socket.on("message", (message) => {
    message = JSON.parse(message);
    console.log(
      `클라이언트로부터 받은 메시지: ${message.user}, ${message.msg}`
    );

    // 클라이언트로 응답 메시지 전송
    // socket.send(`서버 메시지: ${message}`);
    sockets.forEach((element) => {
      element.send(`${message.user} : ${message.msg}`);
    });
  });

  // 오류
  socket.on("error", (err) => {
    console.log("에러가 발생하였습니다.", err);
  });

  // 접속 종료
  socket.on("close", () => {
    console.log("클라이언트와 연결이 종료되었습니다.");
  });
});
