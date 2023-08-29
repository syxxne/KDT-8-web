const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const app = express();
const PORT = 8000;

// http 서버
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server);

///// 소켓 /////
io.on("connection", (socket) => {
  socket.on("join", (chatroom) => {
    socket.join(chatroom);
    socket.room = chatroom;
    // broadcast 포함 시, 나를 제외한 전체 사용자에게 메시지 전달
    socket.broadcast.to(chatroom).emit("userjoin", `사용자가 입장하셨습니다.`);
  });

  socket.on("message", (message) => {
    // io.to(특정 방).emit(이벤트) : 특정 방에 있는 전체 사용자에게 메시지 전달
    // to.(특정 방).to(특정 방) 과 같이 to를 여러 번 사용하여 여러 개의 방에 메시지 전달하는 것도 가능
    // io.to(socket.room).emit("chat", `${message}`);
    socket.broadcast.to(socket.room).emit("chat", `${message}`);
  });
  //   socket.on("new_message", (arg, cb) => {
  //     console.log("client:", arg);
  //     if (arg == "hello") {
  //       cb({ type: arg, message: "안녕하세요." });
  //     } else if (arg == "study") {
  //       cb({ type: arg, message: "공부합시다!" });
  //     } else {
  //       cb({ type: arg, message: "잘가~" });
  //     }
  //   });
  // emit으로 값 보내기
  //   socket.on("new_message", (arg) => {
  //     console.log("client:", arg);
  //     if (arg == "hello") {
  //       socket.emit("cb", { type: arg, message: "안녕하세요." });
  //     } else if (arg == "study") {
  //       socket.emit("cb", { type: arg, message: "공부합시다!" });
  //     } else {
  //       socket.emit("cb", { type: arg, message: "잘가~" });
  //     }
  //   });
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("practice");
});

app.get("/chat", (req, res) => {
  res.render("chat");
});

// 서버 open
server.listen(PORT, () => {
  console.log(`http:localhost:${PORT}`);
});
