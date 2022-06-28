const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>time</h1>");
  } else {
    response.statusCode = 200;
    response.end("<h1>Hello</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);

// 서버실행 : node app.js
// Ctrl + c
