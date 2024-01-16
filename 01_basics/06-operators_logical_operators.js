/* eslint eqeqeq: "off" */

console.log('JavaScript Logical Operators');

const x = true;
const y = false;

// || - OR
console.log(x || y); // true || false = true
console.log(x || x); // true || true = true
console.log(y || y); // false || false = false

// && - AND
console.log(x && x); // true &&| true = true
console.log(x && y); // true && false = false
console.log(y && y); // false && false = false

// "! - Negation
console.log(!x == x); // (false) && true = false
console.log(!y == y); // (true) && false = false
console.log(!x == y); // (false) && false = true

// https://www.w3schools.com/js/js_comparisons.asp
