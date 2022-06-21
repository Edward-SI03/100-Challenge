// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let item = "desk";
let prics = 40;
let goal = ["money", "time", "coder"];

// 2) Output ("alert") the three variable values

console.log(item);
console.log(prics);
console.log(goal);

// 3) Try "grouping" the three variables together and still output their values thereafter

let shop = { name: item, prics: prics, goals: goal };
console.log(shop.name);
console.log(shop.prics);
console.log(shop.goals);

// 4) Also output the second element in your "main goals" variable

console.log(shop.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getshop(array, arrayIndex) {
  let getArray = array[arrayIndex];
  return getArray;
}

// 6) Execute your custom command from (5) and output ("alert") the result
let secgoal = getshop(shop.goals, 1);
alert(secgoal);
