let favColor = "red";
const height = 180;
var lovePizza = true;
//do not ever use var. it is bad
function total(a, b) {
  return a + b;
}
console.log(total(12, "4"));

function greet(user) {
  canVote = user.age > 18;
  if (canVote) {
    return `Hello ${user.age} year old ${user.fname} and you can vote `;
  } else {
    return `Hello ${user.age} year old ${user.fname} and you can't vote `;
  }
}

console.log(greet({ fname: "Sumedh", age: 17 }));

function newfilter(arr) {
  function checkEven(num) {
    if (num % 2 == 0) {
      return num;
    } else {
      return null;
    }
  }
  return arr.filter(checkEven);
}

console.log(newfilter([1, 2, 3, 4, 5, 6]));

function arrofobjects(newarr) {
  let finalarr = [];
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i].age > 18) {
      finalarr.push(newarr[i]);
    }
  }
  return finalarr;
}
console.log(
  arrofobjects([
    {
      name: "Harkirat",
      age: 21,
    },
    {
      name: "raman",
      age: 17,
    },
  ])
);

const fs = require("fs");
// console.log(fs);
function print(err, data) {
  console.log(data);
}
const content = fs.readFile("a.txt", "utf-8", print);

const content2 = fs.readFile("b.txt", "utf-8", print);

console.log("Hey There!");
setTimeout(() => {
  console.log("Hey from Timeout!");
}, 0);
// The above tasks are I/O bound since we are waiting for data from the source

//other tasks like console log and running loops is only CPU bound

function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function doOperation(a, b, op) {
  return op(a, b);
}

console.log(doOperation(2, 3, subtract));
