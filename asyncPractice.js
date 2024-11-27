//thought experiment

console.log("Hi There");

function print() {
  console.log("hello hello async hello");
}
function print2() {
  console.log("hello hello async loop");
}
setTimeout(print, 1000);
let c = 0;
for (let i = 0; i < 2; i++) {
  setTimeout(print2, 200);
}
console.log("Done");
//order of printing
/*
Option 1:
Hi There
Intense CPU task completed
hello hello async hello
*/

/*
Option 2:
Hi There
hello hello async hello
Intense CPU task completed

*/
