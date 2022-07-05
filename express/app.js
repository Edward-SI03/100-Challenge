const path = require("path");
const fs = require("fs");

const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// html에 css 경로를 정해주어도 서버에서도 경로를 지정해 주어야 그 파일에 대한 경로를 읽어 css를 적용 할 수 있음
// public 폴더에 css, js 를 넣어두면 html에서 public에서 css랑 js를 적용함
app.use(express.static("public"));

app.get("/", function (req, res) {
  // 절대경로를 정하지 않고 바로 sendFile에 파일?을 넘겨줘서 브라우저에 띄움
  //   res.sendFile(__dirname + "/views/index.html");

  // html확장자 사용(ejs 사용전)
  // 절대 경로를 설정
  //   const htmlFilePath = path.join(__dirname, "views", "index.html");
  // sendFile 로 절대경로에서 설정한 파일을 보내주어 바로 브라우저에 띄움
  //   res.sendFile(htmlFilePath);

  // ejs 사용 후(확장자 ejs로 바꿔주고 사용하면 경로를 정하지 않음)
  res.render("index");
});

app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "data", "restaurant.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  // numberOfRestaurants라는 변수에 들어갈 값 지정
  // 변수 지정하면 꼭 같이 보내줘야함
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;

  const filePath = path.join(__dirname, "data", "restaurant.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.listen(3000);
