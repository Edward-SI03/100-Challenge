for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

const users = ["max", "jin", "kim", "yoon", "jo"];

for (let i = 0; i < users.length; i++) {
  //   console.log(users[i]);
}

for (let user of users) {
  //   console.log(user);
}

const loginuser = {
  name: "JIN",
  age: 28,
  isAdmin: true,
};

for (let i in loginuser) {
  //   console.log(i);
  //   console.log(loginuser[i]);
}

let isFinish = false;

// while (!isFinish) {
//   isFinish = confirm("Do you want to quit?");
// }

// console.log("Done!");
