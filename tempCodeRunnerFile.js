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