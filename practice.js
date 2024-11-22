// || will return the value on the left if it can be converted to true, or else it will return the value to the right
console.log(0 || 32);
// ^^ this will return 32 since 0 can't be converted to true
console.log(1 || 32);
// ^^ this will return 1

//?? resembles || but it only returns the value on the right if the value on the left is null or undefined, not if it is some other value that can be false

console.log(0 ?? 32);
console.log(null ?? 32);
//basically, for ??, it only goes to the right if the left value is null or undefined.
//this will return 0 whereas using || would have returned 32
//“ In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the “result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.”

//variables are called bindings
let caught = 5;

console.log(caught * caught);

//a single let statement can define multiple bindings
let one = 1,
  two = 2;
//imagine bindings as tentacles instead of boxes. they grasp values instead of containing them.
// var, const are other bindings used in javascript. var was used in pre-2015 js era when let didnt exist. it is mostly the same but we avoid it since it can behave oddly in some circumstances.

var a = 2;
const b = 2;
// the value of const cannot be altered since it is, well, constant.
//binding names can inclue alphabets, digits, $ and _ but nothing else
//prompt("Enter password bro");
//showing a dialog box or an input box is a side effect of a function that is desirable. sometimes functions don't create this side effect but simply provide values. for example:
Math.max(2, 3, 5, 6666);
//this does not have a side effect but simply returns the value in the expression.

//Functin for NaN
let theNumber = Number("23");
if (!Number.isNaN(theNumber)) {
  console.log("it is a valid number");
} else {
  console.log("Hey. Why didn't u give me a number bruv?");
}

//multiple if/else pairs
if (theNumber < 10) {
  console.log("small");
} else if (theNumber < 100) {
  console.log("medium");
} else {
  console.log("large");
}
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

//exponentiation
console.log(2 ** 10);
//for construct syntax

for (let num = 0; num <= 12; num += 2) {
  console.log(num);
}
//break and continue statements work like all other languages in the for loop

//switch construct to avoid multiple if else pairs

switch (theNumber) {
  case 2:
    console.log("the value is 2");
    break;
  case 3:
    console.log("the value is 3");
    break;
  case 4:
    console.log("the value is 4");
    break;
  default:
    console.log("unknown");
}

//fizzbuzz code optimised:
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

//functions

const square = function (x) {
  return x * x;
};

console.log(square(12));

let x = 10; //global scope

if (true) {
  const y = 20; //local scope
  var sumedh = 23; //global
}
console.log(sumedh);

//each local scope can see all the local scopes within it, and all scopes can see the global scope. this is called lexical scoping

//functions can be assigned a new value just like other bindings

let launchMissile = function () {
  console.log("shot at you");
};
launchMissile = function () {
  console.log("launch failed successfully");
};

//new syntax for functions

console.log("The cube of 3 is: ", cube(3));
function cube(x) {
  return x * x * x;
}

//the above snippet works even thought the function is declared below the console.log, since functions aren't a part of the regular top to bottom control flow, they're automatically moved to the top to make it available globally, so we can write it in a way that is clearest to the human reader.

const arrowfunc = (n, x) => {
  return n ** x;
};

const arrowfunc2 = (n, x) => n ** x;

//this is arrow functions. they help us write small functions in a way that's less verbose.

//call stack explains the flow of the program. every time a line has been executed, it removes it from the top of the stack and continues from where it left off
//storing this stack information requires space in the computer memory. When this memory is full, the computer throws the message like stack overflowed.

function minus(a, b) {
  if (b == undefined) return -a;
  else return a - b;
}

//javascript is very broad minded in that it does not restrict you from how many parameters you pass to a function.
minus(3, 4, "hedgehog");
//if u pass too many, it won't stop you, if u pass too little, it will assign a value of undefined to the missing parameters
minus(4);
//hence javascript is very broad-minded. the problem with this is that u can not know when you've made a mistake
// you can also manually make a value optional

function multiply(a, b = 1) {
  return a * b;
}
// if a value for b is not passed, it will automatically assign 1 to it

function wrapValue(n) {
  //local binding for the parameter
  let temp = n;
  //returning the local binding value
  return () => temp;
}

const wrap1 = wrapValue(1);
const wrap2 = wrapValue(2);
console.log(wrap1(), wrap2());
//1 2
// this works as expected, both instances can be accessed showing us that local bindings are created anew for every call

//Being able to reference a specific instance of a local binding is called closure
//A function that references bindings from local scopes around it is called a closure

function multiplier(factor) {
  return (num) => num * factor;
}
let firstcall = multiplier(5);
//This creates an environment in which the value of factor is bound to 5
//it returns a function call with num*factor, so when we pass the value of 2 to the firstcall, it multiplies 2*5
console.log(firstcall(2));
//output is 10

function power(number, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return number * power(number, exponent - 1);
  }
}
console.log(power(2, 4));
//although this is elegant, a for loop for this would be a lot quicker computationally. this is because of O(n) vs O(2^n)
/* 
“The dilemma of speed versus elegance is an interesting one. 
You can see it as a kind of continuum between human-friendliness and machine-friendliness. 
Almost any program can be made faster by making it bigger and more convoluted. 
The programmer has to find an appropriate balance.”
*/

//recursive thinking practice

/*puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, 
an infinite set of numbers can be produced.How would you write a function that, given a number,
tries to find a sequence of such additions and multiplications that produces that number ?
For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice,
whereas the number 15 cannot be reached at all. */

function findHistory(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) return null;
    else {
      return (
        find(current + 5, `(${history}+5)`) ??
        find(current * 3, `(${history}*3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findHistory(27));

function printFarmInventory(cows, chickens) {
  let StringCows = String(cows);
  while (StringCows.length < 3) {
    StringCows = "0" + StringCows;
  }
  console.log(`${StringCows} Cows`);

  let StringChickens = String(chickens);
  while (StringChickens.length < 3) {
    StringChickens = "0" + StringChickens;
  }
  console.log(`${StringChickens} Chickens`);
}
printFarmInventory(7, 11);

//Now we have been asked to add pigs to this. But we can do something better than just copy pasting the same code

function PrintZeroWithPaddedLabel(number, label) {
  let numString = String(number);
  while (numString.length < 3) {
    numString = "0" + numString;
  }
  console.log(`${numString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
  PrintZeroWithPaddedLabel(cows, "cows");
  PrintZeroWithPaddedLabel(chickens, "chickens");
  PrintZeroWithPaddedLabel(pigs, "pigs");
}
printFarmInventory2(2, 3, 4);

//We can still decomponse PrintZeroWithPaddedLabel into two functions to make it more clear and simpler

function zeroPad(number, width) {
  let stringvalue = String(number);

  while (stringvalue.length < width) {
    stringvalue = "0" + stringvalue;
    width -= 1;
  }
  return stringvalue;
}
function printFarmInventory3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory3(7, 8, 9);

// const [err, data] ?= await fetch("https://example.org/products.json");
// if (err) return console.log(err)
// const [jsonerror, json] ?= await response.json();
// if (jsonerror) return console.error(parseError);
// return json;
