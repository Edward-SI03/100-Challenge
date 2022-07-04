// nodejs로 서버 만들어서 서버 돌려보기

// const http = require("http");

// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>time</h1>");
//   } else {
//     response.statusCode = 200;
//     response.end("<h1>Hello</h1>");
//   }
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

// 서버실행 : node app.js
// Ctrl + c

// express 설치 후 서버 실행
// 터미널 npm init
// npn install express

const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

// localhost:3000/currenttime
app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

// localhost:3000/
app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name : </label><input type="text" name="username"><button>Submit</form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  // 절대경로 설정
  const filePath = path.join(__dirname, "data", "users.json");
  // 경로설정한 곳에서 데이터 가져옴
  const fileData = fs.readFileSync(filePath);
  // 데이터를 js코드로 변환
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  // js코드를 경로설정한 곳에 원시코드로 변환해서 저장(작성)
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (let user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);

// 서버를 알아서 재시작 하고 싶으면 nodemon 설치
// npm install nodemon
// package.json 파일에서 "scripts"에 원하는 명령어를 만들고
// "start": "nodemon app.js" 처럼 작성해 놓고
// npm start 를 하면 노드몬으로 app.js를 실행시켜줌(알아서 재시작)
