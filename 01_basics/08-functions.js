console.log('Functions');

function phoneName() {
  alert('Hello!');
  console.log('Samsung, ');
  console.log('Galaxy s24 Ultra');
}

phoneName();

// ----------------

function getSomeNumber() {
  return 102;
}

console.log(getSomeNumber()); // 102

// ----------------

function returnMultiply(x, y) {
  const result = x * y;
  return result;
}

const values = returnMultiply(2, 5);
console.log(`Multiply result: ${values}`); // Multiply result: 10

// ----------------

function returnAdd(x, y) {
  const result = x + y;
  console.log(result);
}

returnAdd(4, 3); // 7
returnAdd(10, 2); // 12

// ----------------

/*
const variableFunction = function() {
    let subtraction = 8 - 3;
    return subtraction
}

const subtractValue = variableFunction()
console.log(subtractValue);
*/

// https://www.w3schools.com/js/js_functions.asp
